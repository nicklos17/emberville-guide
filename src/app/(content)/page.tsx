import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { routeTitle } from "@/lib/routes";
import { CountdownTimer } from "@/components/CountdownTimer";
import { SITE } from "@/config/site";

const SEO_TITLE = "Emberville Wiki & Guides – Maps, Builds, Release Date";
const route = getRoute("/");

// 7 个栏目入口（docs/SITE.md）。首页按「分门别类罗列」把权重分给每个栏目，
// 每张卡片是真<a> 且带 title 属性（ONPAGE.md §5.3/§5.4）。
const SECTIONS = [
  {
    href: "/wiki",
    title: "Emberville Wiki",
    blurb: "The total index: weapons, items, characters and bosses in one place.",
    keywords: ["items", "weapons", "bosses"],
    image: "/images/program/section-wiki-town.webp",
    alt: "Pixel-art interior of Emberville town showing rooms, workbenches and crafting stations.",
  },
  {
    href: "/guides",
    title: "Emberville Guides",
    blurb: "Start here if the game is new: first steps, early choices and the progression route.",
    keywords: ["beginner", "walkthrough"],
    image: "/images/program/section-guides-combat.webp",
    alt: "Pixel-art combat scene with burning braziers, crates and enemies in a fortified camp.",
  },
  {
    href: "/release-date",
    title: "Emberville Release Date & Platforms",
    blurb: "Early Access date, platforms and pricing in one dated table.",
    keywords: ["release date", "platforms"],
    image: "/images/program/section-release-tavern.webp",
    alt: "Pixel-art town tavern interior with characters gathered around tables and a bar.",
  },
  {
    href: "/map",
    title: "Emberville Map & Areas",
    blurb: "Region by region: where each entrance is, what lives there, what it drops.",
    keywords: ["regions", "dungeons", "loot"],
    image: "/images/program/section-map-ruins.webp",
    alt: "Top-down pixel-art view of stone ruins and corridors forming a dungeon layout.",
  },
  {
    href: "/builds",
    title: "Emberville Builds & Items",
    blurb: "Loadouts you can copy directly — skills, gear affixes and when each one applies.",
    keywords: ["best build", "weapons"],
    image: "/images/program/section-builds-desert.webp",
    alt: "Pixel-art desert region with palm trees and a pond, with the game HUD showing health and skill bars.",
  },
  {
    href: "/characters",
    title: "Emberville Characters",
    blurb: "Survivors and companions: who they are, where you meet them, how affinity works.",
    keywords: ["survivors", "companions"],
    image: "/images/program/section-characters-battle.webp",
    alt: "Pixel-art battle scene in stone halls showing player characters and enemies with the game HUD visible.",
  },
  {
    href: "/news",
    title: "Emberville News",
    blurb: "Official announcements and Early Access patch notes, newest first, each dated.",
    keywords: ["updates", "patch notes"],
    image: "/images/program/section-news-boss.webp",
    alt: "Pixel-art boss battle with a glowing cyan beam striking a large enemy in a dark stone arena.",
  },
] as const;

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: "/" });
}

export default function HomePage() {
  return (
    <div className="w-full">
      {/* ============ Hero：官方截图作背景 ============ */}
      {/* 官方美术作底时须有 © 署名（AGENT.md §0.1），见页脚 */}
      <section className="relative w-full overflow-hidden border-b border-line">
        <Image
          src="/images/program/hero-forest-camp.webp"
          alt="Overhead pixel-art view of the Emberville forest camp: a lantern-lit tent, work benches, a crafting station, a wooden bridge and a winding river."
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* 压暗层：左侧保持不透明护文字对比度，右侧减轻让背景图透出（DESIGN.md a11y） */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-r from-canvas via-canvas/85 to-canvas/35"
        />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-20">
          <p className="mb-4 inline-block rounded-full border border-accent/35 bg-canvas/60 px-3.5 py-1.5 text-xs font-medium tracking-wide text-accent">
            Early Access — 27 October 2026, 15:00 UTC
          </p>
          <h1 className="mb-5 max-w-3xl text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl">
            Emberville Wiki &amp; Guides for the whole dungeon
          </h1>
          <p className="mb-7 max-w-2xl text-lg leading-relaxed text-ink">
            Maps and region guides, item and boss databases, build breakdowns and character notes —
            built for players who want to look things up fast. Every entry carries its source and the
            date it was verified.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/wiki"
              title={routeTitle("/wiki")}
              className="rounded-md border border-line bg-canvas/80 px-6 py-3 text-sm font-semibold text-ink no-underline transition-colors hover:border-primary hover:text-primary"
            >
              Browse the Wiki ↓
            </Link>
            <Link
              href="/guides"
              title={routeTitle("/guides")}
              className="rounded-md border border-line bg-canvas/80 px-6 py-3 text-sm font-semibold text-ink no-underline transition-colors hover:border-primary hover:text-primary"
            >
              Start the beginner guide
            </Link>
          </div>
        </div>
      </section>

      {/* ============ 倒计时 ============ */}
      <section className="w-full border-b border-line bg-canvas" aria-label="Early Access countdown">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-8 px-4 py-8">
          <div className="min-w-56 flex-1">
            <p className="mb-2 text-xs font-medium tracking-wide text-ink-dim">
              Early Access launch
            </p>
            <p className="text-xl font-semibold text-white">27 October 2026 · 15:00 UTC</p>
            <p className="mt-1 text-sm text-ink-muted">
              Recorded from the Steam store page. Full-release date not yet announced.{" "}
              <Link
                href="/release-date"
                title={routeTitle("/release-date")}
                className="text-link no-underline hover:text-primary"
              >
                Emberville release date &amp; platforms →
              </Link>
            </p>
          </div>
          <div>
            <CountdownTimer target="2026-10-27T15:00:00Z" launched={false} />
            <p className="mt-2 text-xs text-ink-dim">
              Source: Steam store page · Verified: 2026-10-09
            </p>
          </div>
        </div>
      </section>

      <article className="article mx-auto w-full max-w-6xl px-4 py-12">
        <h2 className="mt-0">Explore Emberville by section</h2>
        <p className="answer">
          {SITE.name} is an unofficial Emberville hub covering the Early Access date, the wiki index,
          guides, the map, builds, characters and news. Every date and number is sourced and dated —
          rumors do not get published here.
        </p>

        <div className="my-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SECTIONS.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              title={routeTitle(s.href)}
              className="group flex flex-col overflow-hidden rounded-lg border border-line bg-surface no-underline transition-all hover:-translate-y-1 hover:border-primary hover:shadow-xl"
            >
              <div className="relative aspect-video overflow-hidden bg-canvas-deep">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-canvas-deep via-canvas-deep/25 to-transparent"
                />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="mb-2 text-base font-semibold text-white">{s.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-ink-muted">{s.blurb}</p>
                <div className="mt-3 flex flex-wrap gap-1.5 border-t border-line-soft pt-3">
                  {s.keywords.map((k) => (
                    <span
                      key={k}
                      className="rounded-sm bg-canvas-deep px-2 py-1 text-[11px] text-ink-dim"
                    >
                      {k}
                    </span>
                  ))}
                </div>
                <span className="mt-3 text-xs font-medium text-link group-hover:text-primary">
                  Open {s.title.replace("Emberville ", "")} →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <section>
          <h2>Emberville Early Access date and platforms</h2>
          <p>
            Track the confirmed platform list and every official announcement on the{" "}
            <Link href="/release-date" title={routeTitle("/release-date")}>Emberville Early Access date page</Link>,
            with the{" "}
            <Link href="/countdown" title={routeTitle("/countdown")}>Emberville Early Access countdown</Link>{" "}
            running to launch day. Platform lists and dates are corrected the same day they change.
          </p>
        </section>

        <section>
          <h2>Emberville item database</h2>
          <p>
            The <Link href="/item-database" title={routeTitle("/item-database")}>Emberville item database</Link>{" "}
            starts empty by design: entries appear with official names, acquisition sources and verified
            stats once the game is live. The{" "}
            <Link href="/builds" title={routeTitle("/builds")}>Emberville builds</Link> list their patch,
            mode and test conditions — no ratings without playtime.
          </p>
        </section>

        <section>
          <h2>About Emberville Guide</h2>
          <p>
            Independent and unofficial, and honest about what is not known yet — read{" "}
            <Link href="/about" title={routeTitle("/about")}>about Emberville Guide</Link> for the
            editorial rules, or <Link href="/contact" title={routeTitle("/contact")}>contact</Link>{" "}
            the team with corrections.
          </p>
        </section>
      </article>
    </div>
  );
}