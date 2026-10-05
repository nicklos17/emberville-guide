#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""init_site.py — 按 site-template 规范一键生成新站初始工程（Next.js + TS + Tailwind + OpenNext/Cloudflare）。

用法：
  python3 scripts/init_site.py --domain aion2codex.wiki --game "Aion 2" \
      --color "#0EA5E9" --platforms "PC,PlayStation 5,Xbox Series X|S" \
      [--site-name "Aion2 Codex"] [--release-date 2026-12-31] \
      [--sections release-date,codes,item-database,guides,builds,countdown] \
      [--publisher ...] [--developer ...] [--genre ...] [--official-site https://...] \
      [--out DIR] [--force]

原则（AGENT.md §1 内容真实性）：
  - 数据不编造：无日期 → TBA；无兑换码 → 诚实空态；倒计时只在有真实未来发布日时生成。
  - 页面按实际情况取舍：--sections 里没有的栏目不建页；countdown 无日期自动跳过并告警。
  - 生成内容含：内容页、/about /contact /privacy /terms、sitemap/robots/RSS/llms.txt、
    routes.json / navigation.json / KEYWORDS.md / CHANGELOG.md 初始化、设计 token、og 占位图。
"""

from __future__ import annotations

import argparse
import json
import re
import shutil
import struct
import sys
import zlib
from dataclasses import dataclass, field
from datetime import date
from pathlib import Path

TEMPLATE_ROOT = Path(__file__).resolve().parent.parent

MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
]

SECTION_ORDER = ["release-date", "countdown", "codes", "item-database", "guides", "builds"]
SECTION_LABELS = {
    "release-date": "Release Date",
    "countdown": "Countdown",
    "codes": "Codes",
    "item-database": "Item Database",
    "guides": "Guides",
    "builds": "Builds",
}
DEFAULT_SECTIONS = ["release-date", "codes", "item-database", "guides", "builds"]


def fill(tpl: str, **kw) -> str:
    """@@name@@ 占位替换（避免与 TSX/JSX 的花括号冲突）。缺失变量直接报错。"""
    def repl(m: re.Match) -> str:
        key = m.group(1)
        if key not in kw:
            raise KeyError(f"模板变量缺失: @@{key}@@")
        return str(kw[key])
    return re.sub(r"@@(\w+)@@", repl, tpl)


# ---------------------------------------------------------------- 颜色工具

def _hex_to_rgb(c: str) -> tuple[int, int, int]:
    c = c.strip().lstrip("#")
    if len(c) == 3:
        c = "".join(ch * 2 for ch in c)
    if len(c) != 6 or not re.fullmatch(r"[0-9a-fA-F]{6}", c):
        raise ValueError(f"无效颜色: {c!r}（需 #RRGGBB）")
    return int(c[0:2], 16), int(c[2:4], 16), int(c[4:6], 16)


def _rgb_to_hls(r: int, g: int, b: int) -> tuple[float, float, float]:
    r_, g_, b_ = r / 255, g / 255, b / 255
    mx, mn = max(r_, g_, b_), min(r_, g_, b_)
    l = (mx + mn) / 2
    if mx == mn:
        return 0.0, l, 0.0
    d = mx - mn
    s = d / (2 - mx - mn) if l > 0.5 else d / (mx + mn)
    if mx == r_:
        h = ((g_ - b_) / d + (6 if g_ < b_ else 0)) / 6
    elif mx == g_:
        h = ((b_ - r_) / d + 2) / 6
    else:
        h = ((r_ - g_) / d + 4) / 6
    return h, l, s


def _hls_to_rgb(h: float, l: float, s: float) -> tuple[int, int, int]:
    def hue(p, q, t):
        t = t % 1
        if t < 1 / 6:
            return p + (q - p) * 6 * t
        if t < 1 / 2:
            return q
        if t < 2 / 3:
            return p + (q - p) * (2 / 3 - t) * 6
        return p

    if s == 0:
        return round(l * 255), round(l * 255), round(l * 255)
    q = l * (1 + s) if l < 0.5 else l + s - l * s
    p = 2 * l - q
    return (round(hue(p, q, h + 1 / 3) * 255),
            round(hue(p, q, h) * 255),
            round(hue(p, q, h - 1 / 3) * 255))


def hsl_hex(h: float, l: float, s: float) -> str:
    r, g, b = _hls_to_rgb(h, min(max(l, 0), 1), min(max(s, 0), 1))
    return f"#{r:02X}{g:02X}{b:02X}"


def hex_hls(c: str) -> tuple[float, float, float]:
    return _rgb_to_hls(*_hex_to_rgb(c))


def _rel_lum(rgb: tuple[int, int, int]) -> float:
    def ch(v):
        v /= 255
        return v / 12.92 if v <= 0.03928 else ((v + 0.055) / 1.055) ** 2.4
    r, g, b = rgb
    return 0.2126 * ch(r) + 0.7152 * ch(g) + 0.0722 * ch(b)


def contrast(a: tuple[int, int, int], b: tuple[int, int, int]) -> float:
    la, lb = sorted((_rel_lum(a), _rel_lum(b)), reverse=True)
    return (la + 0.05) / (lb + 0.05)


def derive_tokens(primary: str) -> dict[str, str]:
    """由主题色推导 DESIGN.md 的 token 表（色值按主题色相派生，结构不变）。"""
    h, l, s = hex_hls(primary)
    tokens = {
        "primary": hsl_hex(h, l, s),
        "night": hsl_hex(h, 0.28, min(s * 1.0, 1.0)),
        "night2": hsl_hex(h, 0.42, min(s * 1.05, 1.0)),
        "ink": hsl_hex(h, 0.15, min(s * 0.7, 0.6)),
        "inkmuted": hsl_hex(h, 0.36, min(s * 0.6, 0.5)),
        "line": hsl_hex(h, 0.88, min(s * 0.55, 0.5)),
        "canvas": hsl_hex(h, 0.945, min(s * 0.65, 0.6)),
        "canvasmuted": hsl_hex(h, 0.965, min(s * 0.6, 0.55)),
    }
    # 链接色：白底对比 ≥ 4.5:1（DESIGN.md a11y 硬性要求），从 L=0.42 往下压
    link_l = 0.42
    while link_l > 0.1:
        cand = _hls_to_rgb(h, link_l, min(s * 0.85, 0.95))
        if contrast(cand, (255, 255, 255)) >= 4.5:
            break
        link_l -= 0.02
    tokens["link"] = hsl_hex(h, link_l, min(s * 0.85, 0.95))
    tokens["linkhover"] = hsl_hex(h, max(link_l - 0.07, 0.05), min(s * 0.85, 0.95))
    return tokens


# ---------------------------------------------------------------- OG 占位图（纯 Python PNG，1200×630）

def write_og_png(path: Path, tokens: dict[str, str]) -> None:
    w, h = 1200, 630
    prim = _hex_to_rgb(tokens["primary"])
    canvas = _hex_to_rgb(tokens["canvas"])
    ink = _hex_to_rgb(tokens["ink"])
    grad_start = int(h * 0.55)

    rows: list[bytes] = []
    for y in range(h):
        row = bytearray(b"\x00")  # filter type 0
        for x in range(w):
            if y < 8:  # 顶部 8px 主色条（DESIGN.md og 版式）
                r, g, b = prim
            else:
                r, g, b = canvas
                if y > grad_start:  # 底部 ink 渐变压暗（0 → 0.85）
                    t = (y - grad_start) / (h - grad_start) * 0.85
                    r = round(r + (ink[0] - r) * t)
                    g = round(g + (ink[1] - g) * t)
                    b = round(b + (ink[2] - b) * t)
            row += bytes((r, g, b))
        rows.append(bytes(row))

    raw = zlib.compress(b"".join(rows), 9)

    def chunk(tag: bytes, data: bytes) -> bytes:
        return struct.pack(">I", len(data)) + tag + data + struct.pack(">I", zlib.crc32(tag + data) & 0xFFFFFFFF)

    png = (b"\x89PNG\r\n\x1a\n"
           + chunk(b"IHDR", struct.pack(">IIBBBBB", w, h, 8, 2, 0, 0, 0))
           + chunk(b"IDAT", raw)
           + chunk(b"IEND", b""))
    path.write_bytes(png)


# ---------------------------------------------------------------- 数据结构

@dataclass
class PageSpec:
    path: str
    comp: str
    title: str                 # 不含品牌后缀；routes.json 存完整 title
    description: str
    h1: str
    answer: str                # 可含 [text](/path) / [text](mailto:...) 内链标记
    blocks: list = field(default_factory=list)
    faqs: list = field(default_factory=list)   # [{q, a}]
    faq_h2: str = ""
    bc_label: str = ""
    priority: float = 0.9
    chf: str = "daily"
    plain: bool = False
    home: bool = False

    @property
    def full_title(self) -> str:
        return self.title if self.home else f"{self.title} | {SITE['site_name']}"

    @property
    def uses_faq(self) -> bool:
        return bool(self.faqs)

    @property
    def uses_datablock(self) -> bool:
        return any(b[0] == "datablock" for b in self.blocks)

    @property
    def uses_countdown(self) -> bool:
        return any(b[0] == "countdown" for b in self.blocks)

    @property
    def uses_link(self) -> bool:
        if re.search(r"\[[^\]]+\]\((/|mailto:|https?)", self.answer):
            return True
        return any(b[0] in ("related",) or (isinstance(b, tuple) and any("](" in str(x) for x in b)) for b in self.blocks)


SITE: dict = {}
WARNINGS: list[str] = []


def warn(msg: str) -> None:
    WARNINGS.append(msg)
    print(f"  ⚠️  {msg}")


def join_and(parts: list[str]) -> str:
    if len(parts) <= 1:
        return "".join(parts)
    if len(parts) == 2:
        return f"{parts[0]} and {parts[1]}"
    return ", ".join(parts[:-1]) + f" and {parts[-1]}"


def pick_title(candidates: list[str], inner: bool = True, loose: bool = False) -> str:
    """自适应选 Title：全文（含品牌后缀）落在 45–60 字符优先；否则取 ≤60 的最丰富候选。"""
    suffix = f" | {SITE['site_name']}" if inner else ""
    scored = [(len(c + suffix), c) for c in candidates]
    for ln, c in scored:
        if 45 <= ln <= 60:
            return c
    for ln, c in scored:
        if ln <= 60:
            if not loose and ln < 45:
                warn(f"Title 偏短（{ln} 字符）: {c!r} — 可补真实可搜的修饰词（ONPAGE.md §1.2）")
            return c
    warn(f"Title 超过 60 字符（{scored[0][0]}）: {scored[0][1]!r} — 请缩短游戏名或改写（ONPAGE.md §1.2）")
    return candidates[0]


def check_description(desc: str, what: str) -> str:
    ln = len(desc)
    if not 120 <= ln <= 155:
        warn(f"Description {ln} 字符（要求 120–155）[{what}]: {desc!r}")
    return desc


# ---------------------------------------------------------------- 命令行

def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser(
        description="按 site-template 规范生成新站初始工程（内容真实，不编造）",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=(
            "示例：\n"
            "  python3 scripts/init_site.py --domain aion2codex.wiki --game \"Aion 2\" \\\n"
            "      --color \"#0EA5E9\" --platforms \"PC,PlayStation 5\" \\\n"
            "      --release-date 2026-12-31 --site-name \"Aion2 Codex\"\n\n"
            "栏目取舍：--sections 未指定时默认 release-date,codes,item-database,guides,builds；\n"
            "countdown 仅在提供未来 --release-date 时才会生成（无日期不建倒计时页）。"
        ),
    )
    p.add_argument("--domain", required=True, help="站点域名（如 aion2codex.wiki）")
    p.add_argument("--game", required=True, help="游戏名（主题实体，站点围绕它展开）")
    p.add_argument("--color", required=True, help="主题色 #RRGGBB（推导设计 token）")
    p.add_argument("--platforms", required=True, help="发行平台，逗号分隔（如 PC,PS5,Xbox）")
    p.add_argument("--site-name", default=None, help="站名（品牌唯一写法，默认「游戏名+Wiki」，建议显式指定）")
    p.add_argument("--release-date", default=None, help="发布日 YYYY-MM-DD；未公布就别填（页面显示 TBA）")
    p.add_argument("--sections", default=None,
                   help="启用的内容栏目，逗号分隔（release-date,countdown,codes,item-database,guides,builds）")
    p.add_argument("--publisher", default=None, help="发行商（用于免责声明/terms；不填用中性表述）")
    p.add_argument("--developer", default=None, help="开发商")
    p.add_argument("--genre", default=None, help="品类（如 ARPG）")
    p.add_argument("--official-site", default=None, help="官方站 URL（数据源白名单第 1 条）")
    p.add_argument("--tagline", default=None, help="一句话定位（默认按栏目组合生成）")
    p.add_argument("--out", default=None, help="输出目录（默认 ./<域名首段>）")
    p.add_argument("--force", action="store_true", help="目标目录非空时覆盖写入")
    return p.parse_args()


def build_site(args: argparse.Namespace) -> None:
    domain = args.domain.strip().lower()
    domain = re.sub(r"^https?://", "", domain).strip("/")
    if "." not in domain:
        sys.exit(f"❌ 域名不合法: {args.domain!r}")
    today = date.today()
    release_date = None
    release_status = "tba"
    if args.release_date:
        try:
            release_date = date.fromisoformat(args.release_date)
        except ValueError:
            sys.exit(f"❌ --release-date 需 YYYY-MM-DD，收到: {args.release_date!r}")
        release_status = "upcoming" if release_date >= today else "launched"

    game = args.game.strip()
    site_name = (args.site_name or f"{re.sub(r'\\s+', '', game)} Wiki").strip()
    platforms = [x.strip() for x in args.platforms.split(",") if x.strip()]
    if not platforms:
        sys.exit("❌ --platforms 至少填一个平台")
    official_site = (args.official_site or "").strip().rstrip("/")

    # 栏目取舍：countdown 只有真实未来日期才存在
    if args.sections is None:
        sections = list(DEFAULT_SECTIONS)
        if release_status == "upcoming":
            sections.append("countdown")
    else:
        sections = [s.strip() for s in args.sections.split(",") if s.strip()]
        unknown = [s for s in sections if s not in SECTION_ORDER]
        if unknown:
            sys.exit(f"❌ 未知栏目: {unknown}（可选: {SECTION_ORDER}）")
        if "countdown" in sections and release_status != "upcoming":
            if not args.release_date:
                warn("countdown 已跳过：未提供 --release-date，无日期就不建倒计时页（不编造）")
            else:
                warn("countdown 已跳过：发布日已过，倒计时页无意义（发布状态在 release-date 页展示）")
            sections.remove("countdown")
    sections = [s for s in SECTION_ORDER if s in sections]

    tagline = args.tagline or (
        f"Unofficial {game} hub: "
        + join_and([SECTION_LABELS[s].lower() for s in sections])
        + " — sourced, dated, no rumors."
    )

    disclaimer = (
        f"{site_name} is an unofficial fan site. {game} is a trademark of {args.publisher}. "
        f"We are not affiliated with or endorsed by {args.publisher}."
        if args.publisher else
        f"{site_name} is an unofficial fan site. {game} and all related names are trademarks of "
        f"their respective owners. We are not affiliated with or endorsed by the rights holders."
    )

    SITE.update({
        "domain": domain,
        "url": f"https://{domain}",
        "site_name": site_name,
        "game": game,
        "game_initial": (game[:1] or "G").upper(),
        "color": args.color.strip(),
        "platforms": platforms,
        "platforms_str": join_and(platforms),
        "sections": sections,
        "release_date": release_date.isoformat() if release_date else "",
        "release_long": release_date.strftime(f"%B {release_date.day}, %Y") if release_date else "",
        "release_status": release_status,
        "launch_iso": f"{release_date.isoformat()}T00:00:00Z" if release_date else "",
        "publisher": args.publisher or "",
        "developer": args.developer or "",
        "genre": args.genre or "",
        "official_site": official_site,
        "tagline": tagline,
        "disclaimer": disclaimer,
        "email": f"support@{domain}",
        "today": today.isoformat(),
        "today_long": today.strftime(f"%B {today.day}, %Y"),
        "year": today.year,
        "month": MONTHS[today.month - 1],
        "slug": domain.replace(".", "-"),
        "out": Path(args.out or f"./{domain.split('.')[0]}").expanduser().resolve(),
        "force": args.force,
        "rights": args.publisher or "their respective owners",
    })


# ---------------------------------------------------------------- 内链渲染（CONTENT.md「内链建设」基线）

LINK_RE = re.compile(r"\[([^\]]+)\]\((mailto:[^)]+|https?://[^)]+|/[^)]+)\)")


def esc_jsx(t: str) -> str:
    return t.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def esc_attr(t: str) -> str:
    return esc_jsx(t).replace('"', "&quot;")


def route_titles_map() -> dict[str, str]:
    return {spec.path: spec.full_title for spec in PAGES}


def linkify(text: str, titles: dict[str, str]) -> str:
    def repl(m: re.Match) -> str:
        label, href = m.group(1), m.group(2)
        title_attr = esc_attr(titles.get(href, label))
        if href.startswith("http"):
            return f'<a href="{href}" rel="noopener noreferrer">{esc_jsx(label)}</a>'
        if href.startswith("mailto:"):
            return f'<a href="{href}">{esc_jsx(label)}</a>'
        return f'<Link href="{href}" title="{title_attr}">{esc_jsx(label)}</Link>'
    return LINK_RE.sub(repl, esc_jsx(text))


def render_blocks(blocks: list, titles: dict[str, str], ind: str = "      ") -> str:
    out: list[str] = []

    def render(inner: list, depth: str) -> None:
        for b in inner:
            kind = b[0]
            if kind == "h2":
                out.append(f"{depth}<h2>{esc_jsx(b[1])}</h2>")
            elif kind == "p":
                out.append(f"{depth}<p>{linkify(b[1], titles)}</p>")
            elif kind == "box":
                out.append(f'{depth}<p className="empty-state">{esc_jsx(b[1])}</p>')
            elif kind == "table":
                headers, rows = b[1], b[2]
                out.append(f'{depth}<div className="overflow-x-auto my-4">')
                out.append(f"{depth}  <table>")
                out.append(f"{depth}    <thead>")
                out.append(f"{depth}      <tr>{''.join(f'<th>{esc_jsx(hh)}</th>' for hh in headers)}</tr>")
                out.append(f"{depth}    </thead>")
                out.append(f"{depth}    <tbody>")
                for row in rows:
                    cells = "".join(f"<td>{esc_jsx(str(c))}</td>" for c in row)
                    out.append(f"{depth}      <tr>{cells}</tr>")
                out.append(f"{depth}    </tbody>")
                out.append(f"{depth}  </table>")
                out.append(f"{depth}</div>")
            elif kind == "datablock":
                props = b[1]
                url_attr = f' url="{esc_attr(props["url"])}"' if props.get("url") else ""
                out.append(f'{depth}<DataBlock source="{esc_attr(props["source"])}"{url_attr} verified="{props["verified"]}">')
                render(b[2], depth + "  ")
                out.append(f"{depth}</DataBlock>")
            elif kind == "countdown":
                out.append(f'{depth}<CountdownTimer target="{SITE["launch_iso"]}" launched={{false}} />')
            elif kind == "related":
                links = ", ".join(
                    f'<Link href="{p}" title="{esc_attr(titles[p])}">{esc_jsx(label)}</Link>'
                    for label, p in b[1]
                )
                out.append(f"{depth}<p>More on {esc_jsx(SITE['site_name'])}: {links}.</p>")
            else:
                raise ValueError(f"未知块类型: {kind}")

    render(blocks, ind)
    return "\n".join(out)


# ---------------------------------------------------------------- 页面文案（全部诚实内容，AGENT.md §1：不编造）

def related_for(path: str, cap: int = 4, exclude: list[str] | None = None) -> list[tuple[str, str]]:
    skip = {path, *(exclude or [])}
    others = [s for s in SECTION_ORDER if s in SITE["sections"] and f"/{s}" not in skip]
    return [(f"{SITE['game']} {SECTION_LABELS[s].lower()}", f"/{s}") for s in others[:cap]]


def platform_datablock() -> tuple:
    source = (
        f"Official — {SITE['official_site']}" if SITE["official_site"]
        else "Site setup — re-verify against official channels before launch"
    )
    return ("datablock", {"source": source, "url": SITE["official_site"] or None, "verified": SITE["today"]},
            [("table", ["Platform", "Status"], [[p, "Confirmed"] for p in SITE["platforms"]])])


def official_channels_phrase() -> str:
    return f"the official site ({SITE['official_site']})" if SITE["official_site"] else "the developer's official site and social accounts"


def build_release_date() -> PageSpec:
    game = SITE["game"]
    status = SITE["release_status"]
    if status == "upcoming":
        status_p = (
            f"{game} launches on {SITE['release_long']}. The date and platform list were recorded at site setup and "
            f"carry the verification date below; if anything moves, this page"
            + (" and the launch countdown" if "countdown" in SITE["sections"] else "")
            + " are corrected the same day."
        )
    elif status == "launched":
        status_p = (
            f"{game} launched on {SITE['release_long']} on {SITE['platforms_str']}. Post-launch this page keeps the "
            f"launch record: the confirmed platform list, where the date was announced, and any platform-specific "
            f"changes verified after release."
        )
    else:
        status_p = (
            f"As of {SITE['today_long']}, no official {game} release date has been announced. No launch window, early "
            f"access period or beta schedule has been confirmed either. This page records only what the developer and "
            f"publisher state publicly — when a date is announced, it appears here first, with the source and the day "
            f"it was verified."
        )

    blocks: list = [
        ("h2", f"{game} release date status"),
        ("p", status_p),
        ("h2", f"{game} platforms"),
        platform_datablock(),
    ]
    if SITE["official_site"]:
        blocks.append((
            "p",
            f"Re-check the list against [the official site]({SITE['official_site']}) before launch — platform "
            f"exclusivity and regional differences are corrected here with a source.",
        ))
    else:
        blocks.append((
            "p",
            "Re-check this list against the developer's official channels before launch; any change is corrected here with a source.",
        ))
    if "countdown" in SITE["sections"]:
        blocks += [
            ("h2", f"{game} countdown"),
            ("p", f"The [{game} launch countdown](/countdown) runs to launch day and flips to a launch-day state at zero — it never counts into negatives."),
        ]
    related_exclude = ["/countdown"] if "countdown" in SITE["sections"] else []
    blocks.append(("related", related_for("/release-date", exclude=related_exclude)))

    if status == "upcoming":
        faqs = [
            {"q": "When exactly does " + game + " unlock?",
             "a": "The exact launch hour is often announced closer to the day. The countdown page runs to "
                  + SITE["release_date"] + " 00:00 UTC and is corrected the moment an exact hour is confirmed."},
            {"q": "Will " + game + " be on last-generation consoles?",
             "a": "Nothing beyond the platforms listed above has been announced. This page updates if a "
                  "last-generation version is confirmed."},
            {"q": "Can the " + game + " release date change?",
             "a": "Yes. If the date moves, this page is corrected the same day with the new source; the old date "
                  "is not silently left behind."},
        ]
    elif status == "launched":
        faqs = [
            {"q": "Is " + game + " out on all platforms?",
             "a": "The platform table above is the confirmed list. Platform-by-platform unlock differences are "
                  "listed there as they are verified."},
            {"q": "Where was the " + game + " release date announced?",
             "a": "On " + official_channels_phrase() + ". This page summarizes the announcement with a source and "
                  "verification date."},
        ]
    else:
        faqs = [
            {"q": "Where will the " + game + " release date be announced first?",
             "a": "On " + official_channels_phrase() + ". This page summarizes the announcement with a source and "
                  "verification date, usually the same day."},
            {"q": "Is " + game + " free to play?",
             "a": "No pricing model has been announced yet. When the publisher confirms one — free-to-play, premium "
                  "or subscription — it will be stated here with the source."},
            {"q": "Will there be a " + game + " beta or early access?",
             "a": "Nothing has been announced. Beta and early access periods are tracked on this page once "
                  "officially confirmed."},
        ]

    year = SITE["release_date"][:4] if SITE["release_date"] else str(SITE["year"])
    if status == "upcoming":
        cands = [
            f"{game} Release Date {year}: Platforms & Countdown",
            f"{game} Release Date {year}: Platforms & News",
            f"{game} Release Date {year}: Platforms",
            f"{game} Release Date {year}",
        ]
    elif status == "launched":
        cands = [
            f"{game} Release Date {year}: Platforms & Launch Recap",
            f"{game} Release Date {year}: Platforms",
            f"{game} Release Date {year}",
        ]
    else:
        cands = [
            f"{game} Release Date {year}: Platforms & Launch Info",
            f"{game} Release Date {year}: Platforms & News",
            f"{game} Release Date {year}: Platforms",
            f"{game} Release Date {year}",
        ]
    if status == "upcoming":
        desc = (f"{game} launches on {SITE['release_long']}. See the confirmed platform list, the launch countdown "
                f"and where the announcement came from — sourced and dated.")
    elif status == "launched":
        desc = (f"{game} launched on {SITE['release_long']} on {SITE['platforms_str']}. Launch record: confirmed "
                f"platforms, where the date was announced, and verified post-launch changes.")
    else:
        desc = (f"Track the confirmed {game} release date: platform list, launch status and every official "
                f"announcement, updated the moment the date is confirmed.")
    return PageSpec(
        path="/release-date", comp="ReleaseDatePage",
        title=pick_title(cands),
        description=check_description(desc, "/release-date"),
        h1=f"{game} Release Date and Launch Status",
        answer=(f"No official {game} release date has been announced yet." if status == "tba" else
                f"{game} {'launches' if status == 'upcoming' else 'launched'} on {SITE['release_long']}.")
               + f" This page tracks the confirmed platforms and every official announcement — sourced and dated.",
        blocks=blocks, faqs=faqs, faq_h2=f"{game} release date FAQ",
        bc_label="Release Date", priority=0.9,
    )


def build_codes() -> PageSpec:
    game = SITE["game"]
    blocks: list = [
        ("h2", f"{game} codes list"),
        ("box", "No codes confirmed yet — this list stays empty until a code is verified on an official channel."),
        ("p", "An empty list is deliberate: a codes page full of expired or invented codes is worse than none. "
              "Every code that appears here will list its reward, the source it was confirmed on and the day it "
              "was verified; expired codes move out of the active list."),
        ("h2", f"How to redeem {game} codes"),
        ("p", "Redemption steps differ by game and platform, so nothing is documented in advance. Once the first "
              "working code is confirmed, this section lists the exact redemption path with its official source."),
        ("h2", f"Why {game} codes expire"),
        ("p", "Publisher promo codes usually carry an expiry date or a redemption cap set by the publisher. Codes "
              "here are dated with the day they were verified, so an old code failing is never a surprise — "
              "expired codes are removed from the active list."),
        ("related", related_for("/codes")),
    ]
    faqs = [
        {"q": f"Are there any working {game} codes right now?",
         "a": "No. Codes are listed only after they are confirmed on an official channel, and none have been "
              "published yet."},
        {"q": f"Are {game} codes region-locked?",
         "a": "Region restrictions are set by the publisher per code. When the first code is confirmed, its region "
              "terms are listed with it."},
        {"q": "How do I report a broken code?",
         "a": "Email " + SITE["email"] + " with the code and where you saw it. Reports are checked against the "
              "original source before the list changes."},
    ]
    return PageSpec(
        path="/codes", comp="CodesPage",
        title=pick_title([
            f"{game} Codes ({SITE['month']} {SITE['year']}): Active & Verified",
            f"{game} Codes {SITE['month']} {SITE['year']}: Active Codes",
            f"{game} Codes {SITE['month']} {SITE['year']}",
            f"{game} Codes",
        ]),
        description=check_description(
            f"All working {game} codes with rewards, sources and expiry notes. Empty by design: codes appear here "
            f"the moment they are confirmed.", "/codes"),
        h1=f"{game} Codes — Active List and Rewards",
        answer="No active " + game + " codes have been confirmed yet. Codes appear here the moment one is published "
               "on an official channel — with its reward, source and the day it was verified.",
        blocks=blocks, faqs=faqs, faq_h2=f"{game} codes FAQ",
        bc_label="Codes", priority=0.9,
    )


def build_item_database() -> PageSpec:
    game = SITE["game"]
    blocks: list = [
        ("h2", f"{game} item database"),
        ("p", "This database is built on confirmed data only. Each entry names the item exactly as the game writes "
              "it — no shorthand or guessed naming — and lists its category, acquisition source and the patch its "
              "stats were verified on. Entries appear as items can be observed in the live game."),
        ("h2", f"{game} items list"),
        ("box", "The list starts empty by design — entries appear once item data can be verified in the live game."),
        ("p", "An entry is added when its data can be verified against a live observation or an official source; "
              "until then it stays out, and the empty state stays honest."),
        ("h2", "Submitting item corrections"),
        ("p", "After launch, email " + SITE["email"] + " with the item name and the source to report a missing or "
              "wrong entry. Community findings are labeled Community-reported until an official source confirms them."),
        ("related", related_for("/item-database")),
    ]
    faqs = [
        {"q": f"When will the {game} item database be filled?",
         "a": "During launch week and the weeks after, as items can be verified in the live game. The page updates "
              "continuously once the game is out."},
        {"q": f"Are datamined {game} items included?",
         "a": "No. Datamined names and stats are treated as unconfirmed until they appear in the live game; nothing "
              "is published from leaks or placeholder files."},
        {"q": "What does each item entry include?",
         "a": "The official name, category, acquisition source and verified stats — each with its source and "
              "verification date."},
    ]
    return PageSpec(
        path="/item-database", comp="ItemDatabasePage",
        title=pick_title([
            f"{game} Items: Full Database & Stats",
            f"{game} Items & Database",
            f"{game} Item Database",
            f"{game} Items",
        ]),
        description=check_description(
            f"The {game} item database: confirmed items with official names, sources and verified stats. No datamined "
            f"placeholders — every entry has a source.", "/item-database"),
        h1=f"{game} Item Database",
        answer="The " + game + " item database fills after launch: every entry lists the official name, acquisition "
               "source and verified stats. Datamined placeholders are not published.",
        blocks=blocks, faqs=faqs, faq_h2=f"{game} item database FAQ",
        bc_label="Item Database", priority=0.9,
    )


def build_guides() -> PageSpec:
    game = SITE["game"]
    blocks: list = [
        ("h2", f"{game} guides"),
        ("p", "Guides are written when claims can be tested instead of guessed, so this hub fills during launch "
              "week. Each guide lists the patch or build it was verified on, so advice does not silently go stale."),
        ("h2", f"What {game} guides are planned"),
        ("p", "First, launch-week basics: starting progression, early mistakes to avoid, and how the core systems "
              "fit together. Then system-by-system explainers as they stabilize, and endgame preparation once the "
              "meta can be tested firsthand. Titles are added here as each guide is published."),
        ("h2", "How guides are sourced"),
        ("p", "Firsthand testing and official sources only. Datamined numbers are not treated as confirmed; "
              "community tips are labeled Community-reported until an official source backs them."),
        ("related", related_for("/guides")),
    ]
    faqs = [
        {"q": f"When do the first {game} guides arrive?",
         "a": "During launch week, starting with the basics most players need on day one. New guides are added as "
              "systems can be verified firsthand."},
        {"q": "Can I suggest a guide topic?",
         "a": "Yes — email " + SITE["email"] + " with the topic and what you would want covered. Requests that "
              "match real search demand get built first."},
        {"q": "Are datamined numbers used in guides?",
         "a": "No. Guides use firsthand results and official sources; unconfirmed data is never presented as fact."},
    ]
    return PageSpec(
        path="/guides", comp="GuidesPage",
        title=pick_title([
            f"{game} Guides: Launch Basics, Systems & Tips",
            f"{game} Guides: Basics, Systems & Tips",
            f"{game} Guides: Basics & Tips",
            f"{game} Guides Hub",
        ]),
        description=check_description(
            f"{game} guides in one hub: launch-week basics, system explainers and tested tips. Published only after "
            f"firsthand verification — no datamined guesses.", "/guides"),
        h1=f"{game} Guide Hub",
        answer=game + " guides land in this hub once the game can be played — each guide states the patch it was "
               "verified on. Pre-launch, the hub holds the plan, not guesses.",
        blocks=blocks, faqs=faqs, faq_h2=f"{game} guides FAQ",
        bc_label="Guides", priority=0.9,
    )


def build_builds() -> PageSpec:
    game = SITE["game"]
    blocks: list = [
        ("h2", f"{game} builds"),
        ("box", "This hub is empty before launch on purpose — builds appear once they can be tested on the live game."),
        ("p", "Rankings without playtime are the content this site refuses to publish. Entries appear as soon as "
              "the game is out and setups can be verified firsthand."),
        ("h2", f"How {game} builds are tested"),
        ("p", "Every build lists the patch it was tested on, the mode, the content it was played in and what it is "
              "good at. What was verified firsthand and what is Community-reported are stated separately. Builds "
              "are re-tested after major patches and re-dated when conclusions change."),
        ("h2", f"Submitting a {game} build"),
        ("p", "Email " + SITE["email"] + " with the build, the patch and mode it was played on, and your results. "
              "Community builds are labeled Community-reported and re-tested before they join the main list."),
        ("related", related_for("/builds")),
    ]
    faqs = [
        {"q": f"Is there a {game} tier list?",
         "a": "Not yet. Tier rankings require hands-on testing, which is impossible before launch. Once live, "
              "rankings are split by role and mode, with a reason for every rating."},
        {"q": f"What counts as a tested {game} build?",
         "a": "A build is tested when it has been played on the live game on its stated patch, with results "
              "recorded — not simulated and not imported from another region's meta."},
        {"q": "Can I submit a build?",
         "a": "Yes — see the submission section above, or email " + SITE["email"] + " directly with the build and "
              "its test conditions."},
    ]
    return PageSpec(
        path="/builds", comp="BuildsPage",
        title=pick_title([
            f"{game} Builds: Tested Setups by Patch & Mode",
            f"{game} Builds: Tested by Patch & Mode",
            f"{game} Builds Hub",
        ]),
        description=check_description(
            f"Tested {game} builds with patch, mode and test conditions listed for every entry. No pre-launch "
            f"ratings — builds appear once they can be played.", "/builds"),
        h1=f"{game} Build Hub — Tested Setups",
        answer=game + " builds appear here only after hands-on testing, each listing its patch, mode and test "
               "conditions. No ratings before launch — an empty hub beats an invented one.",
        blocks=blocks, faqs=faqs, faq_h2=f"{game} builds FAQ",
        bc_label="Builds", priority=0.9,
    )


def build_countdown() -> PageSpec:
    game = SITE["game"]
    filling = [SECTION_LABELS[s].lower() for s in ("codes", "item-database", "guides", "builds") if s in SITE["sections"]]
    launch_p = (
        "On launch day, the [" + game + " release date page](/release-date) switches to live launch status"
        + (", and the " + join_and(filling) + " begin filling" if filling else ", and this site's sections update as verified data lands")
        + ". If a platform's unlock differs by region, the difference is listed there with sources."
    )
    blocks: list = [
        ("countdown",),
        ("h2", f"{game} countdown"),
        ("p", "The timer counts to " + SITE["release_date"] + " 00:00 UTC in your device's timezone and flips to a "
              "launch-day state at zero — it never counts into negatives or shows a fake live state. The exact "
              "hour is often announced closer to the day; the countdown is corrected the moment it is."),
        ("h2", "What happens at launch"),
        ("p", launch_p),
        ("related", related_for("/countdown", exclude=["/release-date"])),
    ]
    faqs = [
        {"q": f"What timezone does the {game} countdown use?",
         "a": "It counts to " + SITE["release_date"] + " 00:00 UTC. The displayed time is converted to your "
              "device's timezone."},
        {"q": "When will the exact launch hour be known?",
         "a": "When the developer announces it. The countdown is corrected the same day an exact hour is confirmed, "
              "with the source on the release date page."},
        {"q": "What happens when the countdown reaches zero?",
         "a": "It switches to a launch-day state; the release date page carries the live launch status from then on."},
    ]
    return PageSpec(
        path="/countdown", comp="CountdownPage",
        title=pick_title([
            f"{game} Countdown {SITE['year']}: Time Until Launch",
            f"{game} Countdown {SITE['year']}: Time to Launch",
            f"{game} Countdown {SITE['year']}",
            f"{game} Launch Countdown",
        ]),
        description=check_description(
            f"Live {game} launch countdown to {SITE['release_long']} (00:00 UTC), with what happens at launch and "
            f"where exact launch-hour news will land first.", "/countdown"),
        h1=f"{game} Launch Countdown",
        answer="This countdown tracks the time until " + game + " launches on " + SITE["release_long"] + ". It runs "
               "to " + SITE["release_date"] + " 00:00 UTC until an exact launch hour is confirmed, then it is corrected.",
        blocks=blocks, faqs=faqs, faq_h2=f"{game} countdown FAQ",
        bc_label="Countdown", priority=0.8,
    )


def section_specs() -> list[PageSpec]:
    builders = {
        "release-date": build_release_date,
        "countdown": build_countdown,
        "codes": build_codes,
        "item-database": build_item_database,
        "guides": build_guides,
        "builds": build_builds,
    }
    return [builders[s]() for s in SITE["sections"]]


def build_home() -> PageSpec:
    game, site = SITE["game"], SITE["site_name"]
    answer = (
        f"{site} is an unofficial {game} hub: "
        + ", ".join(f"[{SECTION_LABELS[s].lower()}](/{s})" for s in SITE["sections"][:-1])
        + (f" and [{SECTION_LABELS[SITE['sections'][-1]].lower()}](/{SITE['sections'][-1]})" if len(SITE["sections"]) > 1 else "")
        + ". Every date, code and number is sourced and dated — rumors do not get published here."
    )

    home_title = pick_title(home_title_candidates(), inner=False)
    return PageSpec(
        path="/", comp="HomePage",
        title=home_title,
        description=check_description(
            f"{site} is an unofficial {game} hub: "
            + join_and([SECTION_LABELS[s].lower() for s in SITE["sections"]])
            + ". Sourced and dated, no rumors.",
            "/"),
        h1=game,
        answer=answer,
        blocks=[], home=True,
    )


def home_title_candidates() -> list[str]:
    game = SITE["game"]
    extras = [SECTION_LABELS[s] for s in SITE["sections"] if s != "release-date"]
    cands: list[str] = []
    if "release-date" in SITE["sections"]:
        if extras:
            tail = ", ".join(extras[:-1]) + " & " + extras[-1] if len(extras) > 1 else extras[0]
            cands += [f"{game} Release Date {SITE['year']}: {tail}", f"{game} Release Date {SITE['year']} & {tail}"]
        cands += [f"{game} Release Date {SITE['year']}", f"{game} Release Date"]
    if extras:
        tail = ", ".join(extras[:-1]) + " & " + extras[-1] if len(extras) > 1 else extras[0]
        cands += [f"{game}: {tail}", f"{game} — {tail}"]
    cands += [f"{game} Unofficial Fan Hub", game]
    return cands


def build_policy() -> list[PageSpec]:
    game, site = SITE["game"], SITE["site_name"]
    email = SITE["email"]
    rights = SITE["rights"]
    section_links = ", ".join(f"[{SECTION_LABELS[s].lower()}](/{s})" for s in SITE["sections"])

    about = PageSpec(
        path="/about", comp="AboutPage",
        title=pick_title([f"About the Unofficial {game} Fan Hub", f"About {site}", "About Us"], loose=True),
        description=check_description(
            f"What {site} covers, how it sources {game} information, and why every date, code and build on the site "
            f"carries a source and verification date.", "/about"),
        h1=f"About {site}",
        answer=f"{site} is an independent fan project covering {game} — what is confirmed, what is not, and where "
               f"every claim comes from.",
        blocks=[
            ("h2", f"What {site} covers"),
            ("p", f"The site tracks {game} across {section_links}. There are no user accounts, comments or "
                  f"newsletters — the site is informational only."),
            ("h2", "Editorial standards"),
            ("p", "Every number, date and code carries a source and the day it was verified. Rumors are not "
                  "published. Community reports are labeled Community-reported until an official source confirms "
                  "them, and rankings appear only after hands-on testing with the test conditions listed."),
            ("h2", "Independence"),
            ("p", f"{site} is not affiliated with {rights}. No official logo is used, and official artwork appears "
                  f"only as officially released press material with attribution. Trademark ownership stays with the "
                  f"rights holders."),
            ("h2", "Contact"),
            ("p", f"Corrections, tips and business questions go to {email} — see the [contact page](/contact)."),
        ],
        bc_label="About", priority=0.3, chf="monthly", plain=True,
    )

    contact = PageSpec(
        path="/contact", comp="ContactPage",
        title=pick_title(["Contact: Support & Corrections", "Contact", f"Contact {site}"], loose=True),
        description=check_description(
            f"Email the {site} team at {email}: corrections, code submissions, build write-ups and copyright "
            f"questions all reach the same inbox.", "/contact"),
        h1=f"Contact {site}",
        answer=f"The fastest way to reach {site} is email: [support@{SITE['domain']}](mailto:{email}).",
        blocks=[
            ("h2", "Corrections and content issues"),
            ("p", f"Found an outdated date, a broken code or a wrong number? Email {email} with the page URL and, "
                  f"if possible, the official source. Verified corrections go live with an Updated stamp the same "
                  f"day they are confirmed."),
            ("h2", "Codes, builds and guide submissions"),
            ("p", f"Submissions are welcome: send the code or build, the patch or day it was verified on, and where "
                  f"it came from. Community submissions are labeled as such until an official source confirms them."),
            ("h2", "Copyright and trademark concerns"),
            ("p", f"{site} is an unofficial fan site. {game} and all related names and assets belong to their "
                  f"respective owners. Rights holders can reach the same address for corrections, credits or "
                  f"takedowns; valid requests are handled promptly."),
            ("h2", "Before you write"),
            ("p", "Please do not send account credentials, personal data or purchase information — the site has no "
                  "accounts and never needs them. One email per topic keeps the inbox workable."),
        ],
        bc_label="Contact", priority=0.3, chf="monthly", plain=True,
    )

    privacy = PageSpec(
        path="/privacy", comp="PrivacyPage",
        title=pick_title(["Privacy Policy — Data, Cookies & Ads", "Privacy Policy"], loose=True),
        description=check_description(
            f"How {site} handles analytics, ad cookies and the data you email us — what is collected on content "
            f"pages and what never leaves your browser.", "/privacy"),
        h1=f"{site} Privacy Policy",
        answer=f"{site} collects as little as a fan site can: server logs, optional analytics on content pages, and "
               f"whatever you choose to email us.",
        blocks=[
            ("h2", "What this site collects"),
            ("p", "Standard server logs (pages served, timestamps, approximate region) plus Google Analytics 4 on "
                  "content pages once a measurement ID is configured — it is empty at setup, so measurement is off. "
                  "Policy pages are excluded from measurement. There are no accounts, comments or newsletters, so "
                  "no names or emails are stored unless you write to us."),
            ("h2", "Cookies and advertising"),
            ("p", f"Content pages may display advertising once ad slots are configured; ad partners may then set "
                  f"cookies for measurement and frequency capping. Advertising is disabled at setup. No cookie is "
                  f"set by {site} itself beyond what the infrastructure requires."),
            ("h2", "Your choices"),
            ("p", f"Analytics and ad scripts can be blocked with browser settings or extensions. To ask about data "
                  f"you have emailed, write to {email} and it will be deleted on request."),
            ("h2", "Children"),
            ("p", "The site is not directed at children under 13 and does not knowingly collect their data."),
            ("h2", "Changes"),
            ("p", f"Material changes to this policy are posted on this page, with the Updated date at the top "
                  f"reflecting the last revision."),
        ],
        bc_label="Privacy Policy", priority=0.2, chf="yearly", plain=True,
    )

    terms = PageSpec(
        path="/terms", comp="TermsPage",
        title=pick_title(["Terms of Service — Use, IP & Liability", "Terms of Service"], loose=True),
        description=check_description(
            f"The rules for using {site}: unofficial fan-site status, trademark acknowledgment, content licensing "
            f"and liability limits.", "/terms"),
        h1=f"{site} Terms of Service",
        answer=f"By using {site} you accept these terms: an unofficial fan project, best-effort accuracy, and "
               f"content licensed for personal, non-commercial use.",
        blocks=[
            ("h2", "Unofficial fan project"),
            ("p", f"{site} is an independent fan site. {game} is a trademark of {rights}. We are not affiliated "
                  f"with, endorsed by or sponsored by the rights holders."),
            ("h2", "Using the site"),
            ("p", "Content is provided for personal, non-commercial use. Automated scraping, wholesale "
                  "republishing, or presenting the site's material as your own is not permitted."),
            ("h2", "Accuracy and availability"),
            ("p", "Information is provided as-is. Game data changes with patches and publisher decisions; pages "
                  "carry their last-verified date, but no warranty is given that content is complete or current."),
            ("h2", "Submissions"),
            ("p", f"By emailing a correction, code or build, you grant {site} permission to publish it with "
                  f"attribution to the source you provide."),
            ("h2", "Liability"),
            ("p", f"To the extent permitted by law, {site} is not liable for decisions made or losses incurred on "
                  f"the basis of the site's content."),
            ("h2", "Changes to these terms"),
            ("p", "Terms are updated on this page; continued use after a change means acceptance."),
        ],
        bc_label="Terms", priority=0.2, chf="yearly", plain=True,
    )
    return [about, contact, privacy, terms]


# ---------------------------------------------------------------- 页面 TSX 生成

def page_imports(spec: PageSpec) -> str:
    lines = ['import type { Metadata } from "next";']
    if spec.uses_link:
        lines.append('import Link from "next/link";')
    lines.append('import { pageMetadata } from "@/lib/seo";')
    lines.append('import { getRoute } from "@/lib/routes";')
    if not spec.home:
        lines.append('import { Breadcrumbs } from "@/components/Breadcrumbs";')
    lines.append('import { UpdatedStamp } from "@/components/UpdatedStamp";')
    if spec.uses_faq:
        lines.append('import { FaqList, type Faq } from "@/components/FaqList";')
    if spec.uses_datablock:
        lines.append('import { DataBlock } from "@/components/DataBlock";')
    if spec.uses_countdown:
        lines.append('import { CountdownTimer } from "@/components/CountdownTimer";')
    return "\n".join(lines)


def render_page(spec: PageSpec) -> str:
    if spec.home:
        return render_home()
    titles = route_titles_map()
    body = render_blocks(spec.blocks, titles) or "      {/* TODO: 正文（AGENT.md §5：≥1200 字符可读正文） */}"
    faq_const = ""
    faq_jsx = ""
    if spec.uses_faq:
        faq_const = f"\nconst FAQS: Faq[] = {json.dumps(spec.faqs, ensure_ascii=False, indent=2)};\n"
        faq_jsx = '\n      <h2>' + esc_jsx(spec.faq_h2) + '</h2>\n      <FaqList faqs={FAQS} />\n'
    bc = (
        '<Breadcrumbs items={[{ name: "Home", href: "/" }, '
        '{ name: ' + json.dumps(spec.bc_label) + ', href: route.path }]} />'
    )
    article_class = "article" if spec.plain else "article mx-auto w-full max-w-3xl px-4 py-10"
    return fill(TPL_PAGE,
                IMPORTS=page_imports(spec),
                TITLE_JSON=json.dumps(spec.title),
                PATH_JSON=json.dumps(spec.path),
                COMP=spec.comp,
                ARTICLE_CLASS=article_class,
                BC=bc,
                H1=esc_jsx(spec.h1),
                ANSWER=linkify(spec.answer, titles),
                BODY=body,
                FAQ_CONST=faq_const,
                FAQ=faq_jsx,
                )


def render_home() -> str:
    spec = next(p for p in PAGES if p.home)
    titles = route_titles_map()
    sections_jsx = []
    intros = home_intros()
    for s in SITE["sections"]:
        heading = esc_jsx(f"{SITE['game']} {SECTION_LABELS[s]}")
        path = f"/{s}"
        sections_jsx.append(
            "      <section>\n"
            f'        <h2><Link href="{path}" title="{esc_attr(titles[path])}">{heading}</Link></h2>\n'
            f"        <p>{linkify(intros[s], titles)}</p>\n"
            "      </section>"
        )
    about_blurb = (
        f"Independent and unofficial, and honest about what is not known yet — read "
        f"[about {SITE['site_name']}](/about) for the editorial rules, or [contact](/contact) the team with "
        f"corrections."
    )
    return fill(TPL_HOME,
                IMPORTS=page_imports(spec),
                TITLE_JSON=json.dumps(spec.title),
                GAME=esc_jsx(SITE["game"]),
                ANSWER=linkify(spec.answer, titles),
                SECTIONS="\n".join(sections_jsx),
                SITE_NAME=esc_jsx(SITE["site_name"]),
                ABOUT_BLURB=linkify(about_blurb, titles),
                )


def home_intros() -> dict[str, str]:
    game = SITE["game"]
    return {
        "release-date": (
            f"Track the confirmed platform list, launch status and every official announcement on the "
            f"[{game} release date tracker](/release-date)"
            + (" — plus a live countdown once the date is set." if "countdown" in SITE["sections"] else ".")
        ),
        "countdown": f"The [{game} launch countdown](/countdown) runs to launch day in your timezone and flips to a "
                     f"launch-day state at zero.",
        "codes": f"The [{game} codes list](/codes) stays honest: codes appear only after they are confirmed on an "
                 f"official channel, with the reward, source and verification date.",
        "item-database": f"The [{game} item database](/item-database) starts empty by design: entries appear with "
                         f"official names, acquisition sources and verified stats once the game is live.",
        "guides": f"[{game} guides](/guides) are published after firsthand testing, each listing the patch it was "
                  f"verified on.",
        "builds": f"[{game} builds](/builds) list their patch, mode and test conditions — no ratings without playtime.",
    }


# ---------------------------------------------------------------- 文件模板

TPL_PAGE = '''@@IMPORTS@@

const SEO_TITLE = @@TITLE_JSON@@;
const route = getRoute(@@PATH_JSON@@);
@@FAQ_CONST@@
export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function @@COMP@@() {
  return (
    <article className="@@ARTICLE_CLASS@@">
      @@BC@@
      <UpdatedStamp lastModified={route.lastModified} />
      <h1>@@H1@@</h1>
      <p className="answer">@@ANSWER@@</p>
@@BODY@@
@@FAQ@@    </article>
  );
}
'''

TPL_HOME = '''@@IMPORTS@@

const SEO_TITLE = @@TITLE_JSON@@;
const route = getRoute("/");

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: "/" });
}

export default function HomePage() {
  return (
    <article className="article mx-auto w-full max-w-3xl px-4 py-10">
      <UpdatedStamp lastModified={route.lastModified} />
      <h1>@@GAME@@</h1>
      <p className="answer">@@ANSWER@@</p>
@@SECTIONS@@
      <section>
        <h2>About @@SITE_NAME@@</h2>
        <p>@@ABOUT_BLURB@@</p>
      </section>
    </article>
  );
}
'''

TPL_LAYOUT = '''import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import { DISCLAIMER, SITE } from "@/config/site";
import { routeTitle } from "@/lib/routes";
import { webSiteSchema } from "@/lib/schema";
import navJson from "@/content/navigation.json";
import "./globals.css";

// 自托管字体，最多 2 个字重（DESIGN.md 性能预算）；禁外链 Google Fonts CDN
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = { metadataBase: new URL(SITE.url) };

export const viewport: Viewport = { themeColor: SITE.primaryColor };

type NavLink = { label: string; href: string };
type NavGroup = { label: string; links: NavLink[] };
const NAV_GROUPS = navJson.navGroups as NavGroup[];
const FOOTER_LINKS = navJson.footerLinks as NavLink[];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {/* 全站 WebSite + SearchAction（SEO.md；JSON-LD 必须在初始 HTML） */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema()) }} />
        <header className="bg-linear-to-r from-night to-night-2 text-white">
          <div className="mx-auto flex max-w-6xl flex-wrap items-baseline gap-x-6 gap-y-2 px-4 py-3">
            <Link href="/" title={SITE.name} className="text-lg font-bold text-white no-underline hover:text-white">
              {SITE.name}
            </Link>
            {/* 导航按用户任务分组，与页脚全集分工（栏目.md §9） */}
            <nav aria-label="Primary" className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
              {NAV_GROUPS.map((group) => (
                <div key={group.label} className="flex items-baseline gap-3">
                  <span className="text-white/60">{group.label}</span>
                  {group.links.map((link) => (
                    <Link key={link.href} href={link.href} title={routeTitle(link.href)}
                      className="text-white/90 no-underline hover:text-white">
                      {link.label}
                    </Link>
                  ))}
                </div>
              ))}
            </nav>
          </div>
        </header>
        {children}
        <footer className="mt-16 border-t border-line bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm">
            <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
              {FOOTER_LINKS.map((link) => (
                <Link key={link.href} href={link.href} title={routeTitle(link.href)}>
                  {link.label}
                </Link>
              ))}
            </nav>
            {/* 页脚常驻免责声明（AGENT.md §0.1，不可省略） */}
            <p className="mt-5 text-ink-muted">{DISCLAIMER}</p>
            <p className="mt-1 text-ink-muted">
              Contact: <a href={"mailto:" + SITE.contactEmail}>{SITE.contactEmail}</a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
'''

TPL_CONTENT_LAYOUT = '''import type { ReactNode } from "react";
import { AdSlot } from "@/components/ads/AdSlot";
import { Ga4Script } from "@/components/Ga4Script";

// 内容页布局：左/右对联位仅 ≥1280px 渲染，bottom-banner 仅 <1280px（ADS.md）。
// 广告与 GA4 只在此分组渲染——白名单制，非内容页不引入组件（AGENT.md §4）。
export default function ContentLayout({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto flex w-full max-w-[1600px] justify-center gap-6 px-4">
      <aside className="hidden shrink-0 py-10 xl:block" aria-hidden="true">
        <AdSlot position="left-skyscraper" />
      </aside>
      <div className="flex min-w-0 flex-1 flex-col items-center">
        {children}
        <div className="flex w-full justify-center py-6 xl:hidden">
          <AdSlot position="bottom-banner" />
        </div>
      </div>
      <aside className="hidden shrink-0 py-10 xl:block" aria-hidden="true">
        <AdSlot position="right-skyscraper" />
      </aside>
      <Ga4Script />
    </main>
  );
}
'''

TPL_PLAIN_LAYOUT = '''import type { ReactNode } from "react";

// 政策/合规页布局：无广告、无 GA4（ADS.md 白名单 + AGENT.md §4.5）
export default function PlainLayout({ children }: { children: ReactNode }) {
  return <main className="mx-auto w-full max-w-3xl px-4 py-10">{children}</main>;
}
'''

TPL_BREADCRUMBS = '''import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";

export type Crumb = { name: string; href: string };

// 面包屑与 BreadcrumbList JSON-LD 同源（DESIGN.md）；首页不出面包屑（栏目.md §6）
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(items)) }} />
      <nav aria-label="Breadcrumb" className="mb-4 text-sm">
        <ol className="flex flex-wrap items-center gap-1">
          {items.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1">
              {i > 0 && (
                <span aria-hidden="true" className="text-ink-muted">/</span>
              )}
              {i === items.length - 1 ? (
                <span aria-current="page" className="text-ink-muted">{item.name}</span>
              ) : (
                <Link href={item.href} title={item.name}>{item.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
'''

TPL_UPDATED_STAMP = '''// 全站统一的 Updated: 戳（DESIGN.md）；日期来自 routes.json（SITEMAP.md 单一来源）
export function UpdatedStamp({ lastModified }: { lastModified: string }) {
  return <p className="text-xs tracking-wide text-ink-muted">Updated: {lastModified}</p>;
}
'''

TPL_FAQ = '''import { faqSchema } from "@/lib/schema";

export type Faq = { q: string; a: string };

// FAQ + FAQPage JSON-LD（SEO.md）；FAQ 不重复正文已答的问题（ONPAGE.md §4.1）
export function FaqList({ faqs }: { faqs: Faq[] }) {
  if (faqs.length === 0) return null;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <div className="mt-2">
        {faqs.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </div>
    </>
  );
}
'''

TPL_DATABLOCK = '''import type { ReactNode } from "react";

type Props = {
  source: string;
  url?: string;
  verified: string;
  children: ReactNode;
};

// 数据块 + 来源 + 核验日（CONTENT.md 强制；AGENT.md §1.3 数据必须带出处）
export function DataBlock({ source, url, verified, children }: Props) {
  return (
    <figure className="my-4">
      {children}
      <figcaption className="mt-2 text-xs text-ink-muted">
        Source: {url ? <a href={url} rel="noopener noreferrer">{source}</a> : source} · Verified: {verified}
      </figcaption>
    </figure>
  );
}
'''

TPL_COUNTDOWN = '''"use client";

import { useEffect, useState } from "react";

type Props = { target: string; launched: boolean };

// 倒计时（DESIGN.md CountdownTimer）：
// - SSR/首帧渲染占位，防 hydration mismatch
// - 到点翻终止态：无负数、无 00:00:00 假活状态
// - launched 为构建时判定常量，rebuild 后 SSR 直接烘焙终止态
export function CountdownTimer({ target, launched }: Props) {
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    if (launched) return;
    const targetMs = Date.parse(target);
    const tick = () => {
      const left = targetMs - Date.now();
      setRemaining(left <= 0 ? 0 : left);
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [target, launched]);

  if (launched) {
    return <p className="empty-state">Launched — the release date page carries the live launch status.</p>;
  }
  if (remaining === null) {
    return <p className="empty-state">Countdown loading…</p>;
  }
  if (remaining === 0) {
    return <p className="empty-state">Launch window reached — see the release date page for live status.</p>;
  }
  const d = Math.floor(remaining / 86_400_000);
  const h = Math.floor((remaining % 86_400_000) / 3_600_000);
  const m = Math.floor((remaining % 3_600_000) / 60_000);
  const s = Math.floor((remaining % 60_000) / 1000);
  return (
    <div className="countdown" role="timer" aria-label="Time until launch">
      <div><span>{d}</span><small>days</small></div>
      <div><span>{h}</span><small>hours</small></div>
      <div><span>{m}</span><small>minutes</small></div>
      <div><span>{s}</span><small>seconds</small></div>
    </div>
  );
}
'''

TPL_ADS_LIB = '''// 广告供应商配置（ADS.md）：invoke key 属公开页面值，配置在此，不走构建环境变量。
// 总开关在 .env.production 的 NEXT_PUBLIC_ADS_ENABLED（默认 false）。

export type AdSlotPosition = "in-article" | "bottom-banner" | "left-skyscraper" | "right-skyscraper";

declare global {
  interface Window {
    __adQueue?: Promise<void>;
    atOptions?: Record<string, unknown>;
  }
}

/** 每个 slot 的 invoke.js 地址；未配置的位不渲染容器（ADS.md：关闭即无容器残留） */
export const AD_SLOTS: Partial<Record<AdSlotPosition, string>> = {
  // "in-article": "https://...", // 按 ADS.md 接入供应商后填写
};
'''

TPL_ADSLOT = '''"use client";

import { useEffect, useRef } from "react";
import { AD_SLOTS, type AdSlotPosition } from "@/lib/ads";

const ADS_ENABLED = process.env.NEXT_PUBLIC_ADS_ENABLED === "true";

// 固定尺寸容器是硬性要求：banner 等比（aspect 728:90），对联 160×600 —— CLS=0（ADS.md）
const SIZE_CLASS: Record<AdSlotPosition, string> = {
  "in-article": "mx-auto aspect-[728/90] w-full max-w-[728px]",
  "bottom-banner": "mx-auto aspect-[728/90] w-full max-w-[728px]",
  "left-skyscraper": "h-[600px] w-[160px]",
  "right-skyscraper": "h-[600px] w-[160px]",
};

export function AdSlot({ position, className = "" }: { position: AdSlotPosition; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    const invokeKey = AD_SLOTS[position];
    if (!el || !invokeKey) return;

    let settled = false;
    const timer = window.setTimeout(() => {
      if (!settled) el.style.display = "none"; // 10s 无创意自动收起，不留空白块
    }, 10000);

    // 串行队列注入：atOptions 全局唯一，多 slot 依次注入，避免配置互相覆盖（ADS.md §4）
    window.__adQueue = (window.__adQueue ?? Promise.resolve()).then(async () => {
      if (!el.isConnected) return;
      const w = window as Window & { requestIdleCallback?: (cb: () => void) => number };
      await new Promise<void>((resolve) => {
        const ric = w.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1));
        ric(() => resolve()); // 懒加载：requestIdleCallback 后注入
      });
      if (!el.isConnected) return;
      const script = document.createElement("script");
      script.src = invokeKey;
      script.async = true;
      script.onload = () => {
        settled = true;
        window.clearTimeout(timer);
      };
      script.onerror = () => {
        el.style.display = "none";
      };
      el.appendChild(script);
    });

    return () => window.clearTimeout(timer);
  }, [position]);

  if (!ADS_ENABLED || !AD_SLOTS[position]) return null;
  return (
    <div
      ref={ref}
      data-ad-position={position}
      className={`${SIZE_CLASS[position]} overflow-hidden ${className}`}
      aria-hidden="true"
    />
  );
}
'''

TPL_GA4 = '''"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { SITE } from "@/config/site";

// GA4 只在内容页统计（本组件仅在 (content) layout 引入）；仅生产域名生效（AGENT.md §4.5）
export function Ga4Script() {
  const id = SITE.ga4MeasurementId;
  const [onProd, setOnProd] = useState(false);

  useEffect(() => {
    setOnProd(window.location.hostname === SITE.domain);
  }, []);

  if (!id || process.env.NODE_ENV !== "production" || !onProd) return null;
  return (
    <>
      <Script src={"https://www.googletagmanager.com/gtag/js?id=" + id} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${id}');`}
      </Script>
    </>
  );
}
'''

TPL_SEO = '''import type { Metadata } from "next";
import { SITE } from "@/config/site";

export const DEFAULT_OG_IMAGE = "/images/og-default.png";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

/**
 * 页面元数据单点产出（SEO.md）。
 * - title 传「不带品牌后缀」的主标题；内页在这里统一追加 ` | ${SITE.name}`，首页不加
 * - canonical 绝对路径、无尾斜杠（ONPAGE.md §6，开站即定，不许改）
 * - og:image / twitter:image 每页必带，缺省回退 DEFAULT_OG_IMAGE（1200×630）
 */
export function pageMetadata({ title, description, path, image }: PageMetaInput): Metadata {
  const canonical = path === "/" ? SITE.url : `${SITE.url}${path}`;
  const fullTitle = path === "/" ? title : `${title} | ${SITE.name}`;
  const og = image ?? DEFAULT_OG_IMAGE;
  return {
    title: fullTitle,
    description,
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: SITE.name,
      type: "website",
      images: [{ url: og, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [og] },
  };
}
'''

TPL_SCHEMA = '''import { SITE } from "@/config/site";

// 结构化数据统一产出（SEO.md）：全站 WebSite + SearchAction；非首页 BreadcrumbList；含 FAQ 页 FAQPage
export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.tagline,
    inLanguage: SITE.locale,
    // TODO: /search 搜索页上线后此 SearchAction 才完整；先按 AGENT.md §3 规范占位
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: SITE.url + "/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.href === "/" ? SITE.url : SITE.url + item.href,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
'''

TPL_ROUTES_LIB = '''import routesJson from "@/content/routes.json";

export interface RouteEntry {
  path: string;
  title: string;
  description: string;
  lastModified: string;
  priority: number;
  changeFrequency: string;
  pageLive: boolean;
}

// routes.json 是 lastModified / priority / changeFrequency 的唯一登记处（SITEMAP.md）
export const ROUTES = routesJson as RouteEntry[];

export function getRoute(path: string): RouteEntry {
  const route = ROUTES.find((r) => r.path === path);
  if (!route) {
    throw new Error(`Route ${path} is not registered in src/content/routes.json（见 docs/SITEMAP.md）`);
  }
  return route;
}

/** 内链 title 属性镜像目标页完整 SEO title（SEO.md 同步面④） */
export function routeTitle(path: string): string {
  return getRoute(path).title;
}
'''

TPL_SITEMAP = '''import type { MetadataRoute } from "next";
import { ROUTES } from "@/lib/routes";
import { SITE } from "@/config/site";

// sitemap 规范见 docs/SITEMAP.md：routes.json 是唯一来源，这里不写死路由；>5000 条自动分片
const CHUNK_SIZE = 5000;

export default function sitemap(): MetadataRoute.Sitemap | MetadataRoute.Sitemap[] {
  const live = ROUTES.filter((r) => r.pageLive !== false).map((r) => ({
    url: r.path === "/" ? SITE.url : `${SITE.url}${r.path}`,
    lastModified: r.lastModified,
    changeFrequency: r.changeFrequency as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: r.priority,
  }));
  if (live.length <= CHUNK_SIZE) return live;
  const shards: MetadataRoute.Sitemap[] = [];
  for (let i = 0; i < live.length; i += CHUNK_SIZE) {
    shards.push(live.slice(i, i + CHUNK_SIZE));
  }
  return shards;
}
'''

TPL_ROBOTS = '''import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";

// robots 只屏蔽后台与预览路径，不屏蔽任何内容页（AGENT.md §3）；当前无后台路径
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
'''

TPL_RSS = '''import { ROUTES } from "@/lib/routes";
import { SITE } from "@/config/site";

// 内容页 RSS；政策页不入 feed。pubDate 取 routes.json lastModified（SITEMAP.md 单一来源）
export const dynamic = "force-static";

const POLICY_PATHS = ["/about", "/contact", "/privacy", "/terms"];

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export function GET(): Response {
  const items = ROUTES.filter((r) => r.pageLive !== false && !POLICY_PATHS.includes(r.path) && r.path !== "/");
  const lastBuild = ROUTES.reduce(
    (max, r) => (r.lastModified > max ? r.lastModified : max),
    ROUTES[0]?.lastModified ?? "1970-01-01",
  );
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0">',
    "<channel>",
    `<title>${esc(SITE.name)}</title>`,
    `<link>${SITE.url}</link>`,
    `<description>${esc(SITE.tagline)}</description>`,
    `<lastBuildDate>${new Date(lastBuild).toUTCString()}</lastBuildDate>`,
    ...items.flatMap((r) => [
      "<item>",
      `<title>${esc(r.title)}</title>`,
      `<link>${SITE.url}${r.path === "/" ? "" : r.path}</link>`,
      `<description>${esc(r.description)}</description>`,
      `<pubDate>${new Date(r.lastModified).toUTCString()}</pubDate>`,
      "</item>",
    ]),
    "</channel>",
    "</rss>",
  ].join("\\n");
  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
'''

TPL_LLMS = '''import { ROUTES } from "@/lib/routes";
import { SITE } from "@/config/site";

// llms.txt（llmstxt.org 规范）：站点名 + 一句话 + 分节链接清单，链接与描述取 routes.json
export const dynamic = "force-static";

const POLICY_PATHS = ["/about", "/contact", "/privacy", "/terms"];

export function GET(): Response {
  const content = ROUTES.filter((r) => !POLICY_PATHS.includes(r.path));
  const policy = ROUTES.filter((r) => POLICY_PATHS.includes(r.path));
  const line = (r: (typeof ROUTES)[number]) =>
    `- [${r.title}](${SITE.url}${r.path === "/" ? "" : r.path}): ${r.description}`;
  const lines = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.tagline}`,
    "",
    `${SITE.name} is an unofficial fan site about ${SITE.game}. Facts are sourced and dated; nothing is published without a verifiable source.`,
    "",
    "## Pages",
    ...content.map(line),
    "",
    "## Policies",
    ...policy.map(line),
    "",
  ];
  return new Response(lines.join("\\n"), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
'''

TPL_SITE_TS = '''// 站点常量（AGENT.md §0.2）：全站引用，禁止散落硬编码
export const SITE = {
  name: @@NAME@@,
  domain: @@DOMAIN@@,
  url: @@URL@@,
  tagline: @@TAGLINE@@,
  game: @@GAME@@,
  locale: "en" as const,
  launchDate: @@LAUNCH@@, // 空 = 未公布（不编造，AGENT.md §1.1）
  earlyAccessDate: "",
  developer: @@DEVELOPER@@,
  publisher: @@PUBLISHER@@,
  platform: @@PLATFORM@@,
  genre: @@GENRE@@,
  contactEmail: @@EMAIL@@,
  ga4MeasurementId: "", // 填 ID 后内容页启用 GA4（AGENT.md §4.5）；空 = 不统计
  primaryColor: @@COLOR@@,
} as const;

// 页脚常驻免责声明（AGENT.md §0.1）
export const DISCLAIMER = @@DISCLAIMER@@;
'''

TPL_GLOBALS = '''@import "tailwindcss";

/* 设计 token（DESIGN.md）：全部集中在此，色值由 init_site.py 按主题色派生，不得页面内散落硬编码 */
@theme {
  --color-primary: @@C_PRIMARY@@;
  --color-night: @@C_NIGHT@@;
  --color-night-2: @@C_NIGHT2@@;
  --color-ink: @@C_INK@@;
  --color-ink-muted: @@C_INKMUTED@@;
  --color-line: @@C_LINE@@;
  --color-canvas: @@C_CANVAS@@;
  --color-canvas-muted: @@C_CANVASMUTED@@;
  --color-surface: #ffffff;
  --color-link: @@C_LINK@@;
  --color-link-hover: @@C_LINKHOVER@@;
}

html {
  font-size: 16px;
}

body {
  background-color: var(--color-canvas);
  color: var(--color-ink);
  font-family: var(--font-inter), ui-sans-serif, system-ui, -apple-system, sans-serif;
  font-size: 17px;
  line-height: 1.75;
}

a {
  color: var(--color-link);
  text-decoration: underline;
  text-underline-offset: 2px;
}

a:hover {
  color: var(--color-link-hover);
}

/* 键盘可达，焦点样式不得移除（DESIGN.md a11y） */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* 正文排版（DESIGN.md：行高 1.75、H1 唯一、H2 分节不跳级） */
.article h1 {
  font-size: 1.9rem;
  line-height: 1.25;
  margin: 0.25rem 0 0.5rem;
}

.article h2 {
  font-size: 1.4rem;
  line-height: 1.3;
  font-weight: 700;
  margin: 2.25rem 0 0.6rem;
}

.article h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 1.4rem 0 0.4rem;
}

.article p {
  margin: 0.6rem 0;
}

/* 表格：表头深主色白字，斑马纹 canvas-muted（DESIGN.md） */
.article table {
  width: 100%;
  border-collapse: collapse;
  background: var(--color-surface);
  font-size: 0.95rem;
}

.article th {
  background: var(--color-night);
  color: #ffffff;
  text-align: left;
  padding: 0.5rem 0.75rem;
}

.article td {
  border-bottom: 1px solid var(--color-line);
  padding: 0.5rem 0.75rem;
  vertical-align: top;
}

.article tbody tr:nth-child(even) {
  background: var(--color-canvas-muted);
}

/* 一句话答案块（AGENT.md §5.4） */
.answer {
  background: var(--color-surface);
  border-left: 4px solid var(--color-primary);
  padding: 0.9rem 1.1rem;
  margin: 1rem 0 1.5rem;
}

/* 空态/终止态盒子：诚实占位，不放假数据（CONTENT.md 来源三档） */
.empty-state {
  background: var(--color-surface);
  border: 1px dashed var(--color-line);
  padding: 1.25rem;
  margin: 1rem 0;
  text-align: center;
  color: var(--color-ink-muted);
}

/* 倒计时（DESIGN.md CountdownTimer；tabular-nums 防数字跳动） */
.countdown {
  display: flex;
  gap: 0.75rem;
  margin: 1.25rem 0;
}

.countdown > div {
  flex: 1;
  background: var(--color-surface);
  border: 1px solid var(--color-line);
  text-align: center;
  padding: 0.75rem 0;
}

.countdown span {
  display: block;
  font-size: 1.9rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

.countdown small {
  color: var(--color-ink-muted);
}
'''

TPL_ICON = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="12" fill="@@C_PRIMARY@@"/>
  <text x="32" y="43" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="700" fill="#ffffff" text-anchor="middle">@@INITIAL@@</text>
</svg>
'''

TPL_PACKAGE = '''{
  "name": "@@SLUG@@",
  "private": true,
  "engines": {
    "node": ">=22"
  },
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "deploy": "opennextjs-cloudflare build && opennextjs-cloudflare deploy",
    "preview": "opennextjs-cloudflare build && opennextjs-cloudflare preview",
    "cf-typegen": "wrangler types --env-interface CloudflareEnv cloudflare-env.d.ts"
  },
  "dependencies": {
    "next": "^15.5.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@opennextjs/cloudflare": "^1.0.0",
    "@tailwindcss/postcss": "^4.0.0",
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.5.0",
    "wrangler": "^4.0.0"
  }
}
'''

TPL_TSCONFIG = '''{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
'''

TPL_NEXT_CONFIG = '''import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // trailingSlash 保持默认 false —— canonical 统一无尾斜杠（ONPAGE.md §6，定了不许改）
  // 禁止 output: 'export'（AGENT.md §2：会丧失 SSR）
};

export default nextConfig;
'''

TPL_POSTCSS = '''const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
'''

TPL_OPENNEXT = '''import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// 部署到 Cloudflare Workers（AGENT.md §2，必须用 @opennextjs/cloudflare）
export default defineCloudflareConfig();
'''

TPL_WRANGLER = '''{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "@@SLUG@@",
  "main": ".open-next/worker.js",
  "compatibility_date": "2025-03-01",
  "compatibility_flags": ["nodejs_compat"],
  "assets": {
    "directory": ".open-next/assets",
    "binding": "ASSETS"
  }
}
'''

TPL_GITIGNORE = '''node_modules/
.next/
.open-next/
.wrangler/
next-env.d.ts
*.tsbuildinfo

# 环境变量：.env.production 按规范随仓库走（ADS.md），其余不入库
.env*
!.env.production
'''

TPL_ENV = '''# 广告总开关（ADS.md）：true 重新构建即开启；开发环境 next dev 强制关闭
NEXT_PUBLIC_ADS_ENABLED=false
'''

def make_routes_json() -> str:
    entries = []
    for spec in PAGES:
        entries.append({
            "path": spec.path,
            "title": spec.full_title,
            "description": spec.description,
            "lastModified": SITE["today"],
            "priority": spec.priority,
            "changeFrequency": spec.chf,
            "pageLive": True,
        })
    return json.dumps(entries, ensure_ascii=False, indent=2) + "\n"


def make_navigation_json() -> str:
    def link(s: str) -> dict:
        return {"label": SECTION_LABELS[s], "href": f"/{s}"}

    nav: list[dict] = []
    launch = [link(s) for s in ("release-date", "countdown") if s in SITE["sections"]]
    database = [link(s) for s in ("codes", "item-database") if s in SITE["sections"]]
    guides = [link(s) for s in ("guides", "builds") if s in SITE["sections"]]
    if launch:
        nav.append({"label": "Launch", "links": launch})
    if database:
        nav.append({"label": "Database", "links": database})
    if guides:
        nav.append({"label": "Guides", "links": guides})

    footer = [link(s) for s in SECTION_ORDER if s in SITE["sections"]]
    footer += [
        {"label": "About", "href": "/about"},
        {"label": "Contact", "href": "/contact"},
        {"label": "Privacy Policy", "href": "/privacy"},
        {"label": "Terms", "href": "/terms"},
    ]  # RSS 是 feed 不是页面，不进 routes.json/页脚（routeTitle 严格校验登记路由）
    return json.dumps({"navGroups": nav, "footerLinks": footer}, ensure_ascii=False, indent=2) + "\n"


# ---------------------------------------------------------------- docs 复制与占位符填充

DOC_REPLACEMENTS = [
    ("{{站名}}", "site_name"),
    ("{{站点URL}}", "url"),
    ("{{域名}}", "domain"),
    ("{{主题}}", "game"),
    ("{{平台}}", "platforms_str"),
    ("{{免责声明}}", "disclaimer"),
    ("{{官方域名}}", "official_site"),
    ("{{发布日 YYYY-MM-DD}}", "release_date"),
    ("{{开发商/作者}}", "developer"),
    ("{{品类}}", "genre"),
    ("{{一句话定位}}", "tagline"),
    ("{{发行商}}", "rights"),
]


def copy_docs(out: Path) -> None:
    shutil.copytree(TEMPLATE_ROOT / "docs", out / "docs")
    shutil.copy2(TEMPLATE_ROOT / "AGENT.md", out / "AGENT.md")

    repl = {}
    for placeholder, key in DOC_REPLACEMENTS:
        value = SITE.get(key)
        if isinstance(value, str) and value:
            repl[placeholder] = value
        elif key == "official_site" and SITE["official_site"]:
            repl[placeholder] = SITE["official_site"]

    for md in [out / "AGENT.md", *(out / "docs").glob("*.md")]:
        text = md.read_text(encoding="utf-8")
        for placeholder, value in repl.items():
            text = text.replace(placeholder, value)
        md.write_text(text, encoding="utf-8")


def make_keywords_md() -> str:
    game = SITE["game"]
    l2_rows = {
        "release-date": f"| /release-date | {game} release date |  |  | 时效页，Title 带年份；变体 launch date 落正文 |",
        "countdown": f"| /countdown | {game} countdown |  |  | 仅当有真实发布日（本站已启用） |",
        "codes": f"| /codes | {game} codes |  |  | 时效页，Title 带月份 |",
        "item-database": f"| /item-database | {game} item database |  |  | 变体词 {game} items 落正文一句话 |",
        "guides": f"| /guides | {game} guides |  |  | 枢纽页，详情页上线后注意让位（SEO.md） |",
        "builds": f"| /builds | {game} builds |  |  | 深度页 Title 模板见 CONTENT.md |",
    }
    rows = "\\n".join(l2_rows[s] for s in SECTION_ORDER if s in SITE["sections"])
    return f"""# 关键词地图（唯一真源）

规则：**一个词只属于一个页面**。新页面开发前先在此登记，冲突则不得开发。
数据口径：Google Ads 规划师，美国（us），登记时标注月份；「未收录」≠ 没需求，
是真空期，标注复核时间（上月数据次月上旬放出）。

## L1 首页
| 页面 | 主词 | 月搜 | KD | 备注 |
| --- | --- | ---: | ---: | --- |
| / | {game} |  |  | {SITE['today']} 开站登记；上线前主推 release date 词，事件后切品牌词 |

> 首页主词切换机制（时效站参考）：上线前主推 release date 类词；事件发生后 2–3 天内
> 切到品牌主词。被让出的词移交对应承接页，首页不再叠加，只挂内链。

## L2 栏目页
| 页面 | 主词 | 月搜 | KD | 优先级 |
| --- | --- | ---: | ---: | --- |
{rows}

### 登记备注的固定写法（每页登记时补充）
- **词形分工**：Title/H1/主词承接哪个词形；首段补哪些变体词形（单数/复数/省略形），
  变体只落正文一句话内，不进 Title 重复
- **邻居词叠加**：本页叠加哪些相邻词（每词注明月搜量）
- **边界备注**：与哪个姊妹页划界——本页管什么、不管什么，互挂区分句
- **口径标注**：哪些信息无官方来源，页面必须显式标注 community-reported（这是差异化）
- **叠加词不开专页时**：BREAKOUT 词可从 FAQ 尾条提为现有页的独立 H2 节承接，不新建页

## L3 详情页
| slug | 主词 | 备注 |
| --- | --- | --- |
| /{{hub}}/{{slug}} | {game} {{slug}} | 来源、上线日、Title 模板、互证关系 |

> 详情页登记备注固定项：①内容出自什么来源，转写歧义名是否内联标注；
> ②与父页/姊妹页的主词边界与互链关系；③Title 模板（一词一页让位见 SEO.md）；
> ④赞助段（推广码内容）按惯例排除。

## 政策页（合规页，不参与关键词竞争）
| 页面 | 主词 | 备注 |
| --- | --- | --- |
| /about /contact /privacy /terms | — | 站内合规页，不打搜索词（/contact 是 AdSense 信任页要求） |

## 禁建清单（不得开发）
| 禁止项 | 原因 |
| --- | --- |
| 无数据的词条页 | 无数据不建页（薄内容） |
| 与既有页同位置的异写词页 | 一词只能一页；若官方最终用异写名，301 过去 |
| 任何 `/{{lang}}/` 多语言目录 | 本项目只做 en |

> 不建页但页面要提的真实相关搜索：在对应父页写一小段说明即可——写了吃词、不写漏词。
"""


def make_changelog_md() -> str:
    paths = ", ".join(spec.path for spec in PAGES)
    return f"""# 站点更新日志

用途：**这是页面日期戳的源头**。每次内容更新在此写一行，页面 `Updated:` 与 `dateModified`
必须与之一致（routes.json bump 后全链路联动，见 `SITEMAP.md`）。

格式：

```
YYYY-MM-DD
[页面路径] 更新内容摘要（数据来源）
```

约定：

- 同日同页多次改动并入当日同一条目补记
- 同日改动日期戳不变（当日已是 lastModified）
- 补录滞后时，条目日期写内容实际改动日对应的 lastModified 值口径（不伪造新鲜度）
- 规则成文时注明触发背景（源站惯例：同类毛病第三次出现后立规）

## {SITE['today']}

- [全站] 开站初始化：`scripts/init_site.py` 生成 {len(PAGES)} 个页面（{paths}）、
  sitemap/robots/RSS/llms.txt、设计 token 与 og 占位图（来源：site-template 模板）
"""


def make_readme_md() -> str:
    sections = ", ".join(f"`/{s}`" for s in SITE["sections"])
    return f"""# {SITE['site_name']} — {SITE['game']} 非官方资料站

由 site-template 的 `scripts/init_site.py` 生成（{SITE['today']}）。开发约束见 `AGENT.md`
（最高优先级），页面细则见 `docs/ONPAGE.md`。

## 快速开始

```bash
npm install          # Node >= 22（.nvmrc）
npm run dev          # http://localhost:3000
npm run build && npm run start
npm run deploy       # Cloudflare Workers（需 wrangler 登录）
```

## 已生成内容

- 内容页：{sections}
- 政策页：`/about` `/contact` `/privacy` `/terms`（联系邮箱 {SITE['email']}）
- 基础设施：`/sitemap.xml`、`/robots.txt`、`/rss.xml`、`/llms.txt`、og 占位图、favicon
- 数据登记：`src/content/routes.json`（sitemap/日期戳单一来源）、`src/content/navigation.json`
- 规范文档：`AGENT.md` + `docs/*`（占位符已按本站填充）

## 开站待办（人工）

1. `docs/KEYWORDS.md`：补月搜量/KD，确认一词一页无冲突
2. `public/images/og-default.png`：当前是纯色占位图，换成正式 1200×630 分享图
   （视觉规范与 sharp 工艺见 `docs/DESIGN.md`）
3. `AGENT.md` §1.2 数据源白名单按主题重写；§0.2 SITE 常量核对（开发商/品类等留空项）
4. GA4：`src/config/site.ts` 填 `ga4MeasurementId`（仅内容页统计，政策页不统计）
5. 广告：默认关闭；开启改 `.env.production` + 在 `src/lib/ads.ts` 配 invoke key（`docs/ADS.md`）
6. `docs/CHANGELOG.md` 逐日记录——它是所有页面日期戳的源头

## 内容红线（AGENT.md §1，最高优先级）

不编造名称/数值/日期/兑换码；未确认就写 Not yet available；数据必须带来源与核验日。
生成的页面已按此执行：无日期显示 TBA、codes/item-database 为诚实空态、倒计时只在有真实
发布日时存在。
"""


# ---------------------------------------------------------------- 写出工程

PAGES: list[PageSpec] = []
route_titles_map_placeholder: dict[str, str] = {}


def write_all() -> None:
    out: Path = SITE["out"]
    if out.exists() and any(out.iterdir()) and not SITE["force"]:
        sys.exit(f"❌ 目标目录非空: {out}（确认覆盖用 --force）")
    out.mkdir(parents=True, exist_ok=True)

    tokens = derive_tokens(SITE["color"])

    # —— 根配置
    (out / "package.json").write_text(fill(TPL_PACKAGE, SLUG=SITE["slug"]))
    (out / "tsconfig.json").write_text(TPL_TSCONFIG)
    (out / "next.config.ts").write_text(TPL_NEXT_CONFIG)
    (out / "postcss.config.mjs").write_text(TPL_POSTCSS)
    (out / "open-next.config.ts").write_text(TPL_OPENNEXT)
    (out / "wrangler.jsonc").write_text(fill(TPL_WRANGLER, SLUG=SITE["slug"]))
    (out / ".gitignore").write_text(TPL_GITIGNORE)
    (out / ".env.production").write_text(TPL_ENV)
    (out / ".nvmrc").write_text("22\n")
    (out / "README.md").write_text(make_readme_md())

    # —— src/config 与 lib
    cfg = out / "src" / "config"
    cfg.mkdir(parents=True, exist_ok=True)
    (cfg / "site.ts").write_text(fill(
        TPL_SITE_TS,
        NAME=json.dumps(SITE["site_name"], ensure_ascii=False),
        DOMAIN=json.dumps(SITE["domain"]),
        URL=json.dumps(SITE["url"]),
        TAGLINE=json.dumps(SITE["tagline"], ensure_ascii=False),
        GAME=json.dumps(SITE["game"]),
        LAUNCH=json.dumps(SITE["release_date"]),
        DEVELOPER=json.dumps(SITE["developer"]),
        PUBLISHER=json.dumps(SITE["publisher"]),
        PLATFORM=json.dumps(", ".join(SITE["platforms"])),
        GENRE=json.dumps(SITE["genre"]),
        EMAIL=json.dumps(SITE["email"]),
        COLOR=json.dumps(tokens["primary"]),
        DISCLAIMER=json.dumps(SITE["disclaimer"], ensure_ascii=False),
    ))

    lib = out / "src" / "lib"
    lib.mkdir(parents=True, exist_ok=True)
    (lib / "seo.ts").write_text(TPL_SEO)
    (lib / "schema.ts").write_text(TPL_SCHEMA)
    (lib / "routes.ts").write_text(TPL_ROUTES_LIB)
    (lib / "ads.ts").write_text(TPL_ADS_LIB)

    # —— src/content（单一来源）
    content = out / "src" / "content"
    content.mkdir(parents=True, exist_ok=True)
    (content / "routes.json").write_text(make_routes_json())
    (content / "navigation.json").write_text(make_navigation_json())

    # —— src/app
    app = out / "src" / "app"
    app.mkdir(parents=True, exist_ok=True)
    (app / "layout.tsx").write_text(TPL_LAYOUT)
    (app / "globals.css").write_text(fill(
        TPL_GLOBALS,
        C_PRIMARY=tokens["primary"], C_NIGHT=tokens["night"], C_NIGHT2=tokens["night2"],
        C_INK=tokens["ink"], C_INKMUTED=tokens["inkmuted"], C_LINE=tokens["line"],
        C_CANVAS=tokens["canvas"], C_CANVASMUTED=tokens["canvasmuted"],
        C_LINK=tokens["link"], C_LINKHOVER=tokens["linkhover"],
    ))
    (app / "sitemap.ts").write_text(TPL_SITEMAP)
    (app / "robots.ts").write_text(TPL_ROBOTS)
    (app / "rss.xml").mkdir(exist_ok=True)
    (app / "rss.xml" / "route.ts").write_text(TPL_RSS)
    (app / "llms.txt").mkdir(exist_ok=True)
    (app / "llms.txt" / "route.ts").write_text(TPL_LLMS)
    (app / "icon.svg").write_text(fill(TPL_ICON, C_PRIMARY=tokens["primary"], INITIAL=SITE["game_initial"]))

    # —— 路由分组
    (app / "(content)").mkdir(exist_ok=True)
    (app / "(content)" / "layout.tsx").write_text(TPL_CONTENT_LAYOUT)
    (app / "(plain)").mkdir(exist_ok=True)
    (app / "(plain)" / "layout.tsx").write_text(TPL_PLAIN_LAYOUT)

    for spec in PAGES:
        page_dir = app / ("(plain)" if spec.plain else "(content)")
        if not spec.home:
            page_dir = page_dir / spec.path.lstrip("/")
        page_dir.mkdir(parents=True, exist_ok=True)
        (page_dir / "page.tsx").write_text(render_page(spec))

    # —— 组件
    comps = out / "src" / "components"
    (comps / "ads").mkdir(parents=True, exist_ok=True)
    (comps / "Breadcrumbs.tsx").write_text(TPL_BREADCRUMBS)
    (comps / "UpdatedStamp.tsx").write_text(TPL_UPDATED_STAMP)
    (comps / "FaqList.tsx").write_text(TPL_FAQ)
    (comps / "DataBlock.tsx").write_text(TPL_DATABLOCK)
    (comps / "CountdownTimer.tsx").write_text(TPL_COUNTDOWN)
    (comps / "Ga4Script.tsx").write_text(TPL_GA4)
    (comps / "ads" / "AdSlot.tsx").write_text(TPL_ADSLOT)

    # —— public / og 占位图
    images = out / "public" / "images"
    images.mkdir(parents=True, exist_ok=True)
    write_og_png(images / "og-default.png", tokens)

    # —— docs（复制 + 填充 + KEYWORDS/CHANGELOG 重建）
    copy_docs(out)
    (out / "docs" / "KEYWORDS.md").write_text(make_keywords_md())
    (out / "docs" / "CHANGELOG.md").write_text(make_changelog_md())


def report_leftovers(out: Path) -> None:
    pattern = re.compile(r"\{\{[^}]+\}\}")
    leftovers: list[str] = []
    for md in [out / "AGENT.md", *(out / "docs").glob("*.md")]:
        found = sorted(set(pattern.findall(md.read_text(encoding="utf-8"))))
        if found:
            leftovers.append(f"{md.relative_to(out)}: {', '.join(found)}")
    if leftovers:
        warn("以下占位符需人工补齐（不阻塞建站）:")
        for item in leftovers:
            print(f"      - {item}")


def main() -> None:
    args = parse_args()
    build_site(args)

    global PAGES
    PAGES = [build_home()] + section_specs() + build_policy()

    print(f"→ 生成到 {SITE['out']}")
    write_all()
    report_leftovers(SITE["out"])

    skip = {"node_modules", ".next", ".open-next", ".wrangler"}
    n_files = sum(1 for p in SITE["out"].rglob("*") if p.is_file() and not (set(p.parts) & skip))
    content_paths = ", ".join(f"/{s}" for s in SITE["sections"]) or "（无）"
    print()
    print(f"✅ 完成：{n_files} 个文件 → {SITE['out']}")
    print(f"   内容页: {content_paths}")
    print("   政策页: /about /contact /privacy /terms（联系邮箱 " + SITE["email"] + "）")
    print("   基础设施: sitemap.xml · robots.txt · rss.xml · llms.txt · og-default.png · favicon")
    if WARNINGS:
        print(f"\n   ⚠️  警告 {len(WARNINGS)} 条（见上方），多为 TDK 长度建议，可改 game/site-name 后重跑")
    print()
    print("下一步：")
    print(f"  cd {SITE['out']} && npm install && npm run dev")
    print("  1. docs/KEYWORDS.md 补月搜量/KD（建页前登记的唯一真源）")
    print("  2. public/images/og-default.png 换成正式 1200×630 分享图（docs/DESIGN.md 工艺）")
    print("  3. AGENT.md §1.2 数据源白名单按主题重写；SITE 常量留空项补齐")
    print("  4. GA4/广告默认关闭，配置方法见 README「开站待办」")


if __name__ == "__main__":
    main()
