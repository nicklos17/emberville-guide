import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute, routeTitle } from "@/lib/routes";
import { CountdownTimer } from "@/components/CountdownTimer";
import { DataBlock } from "@/components/DataBlock";
import { FaqList, type Faq } from "@/components/FaqList";
import { AdArticle } from "@/components/ads/AdArticle";

const SEO_TITLE = "Emberville Wiki & Guides – Maps, Builds, Release Date";
const route = getRoute("/");

const FAQS: Faq[] = [
  {
    q: "When does Emberville enter Early Access?",
    a: "The Steam store page gives 27 October 2026 as the Early Access date. It does not provide an exact unlock time.",
  },
  {
    q: "What is Emberville about?",
    a: "An amnesiac character wakes in the Vitromotus, a magical underground prison, and sets out to rescue survivors and rebuild Emberville.",
  },
  {
    q: "Can I play Emberville with other people?",
    a: "Steam lists the game as single-player. No co-op or other multiplayer mode is confirmed by the cited store listing.",
  },
  {
    q: "How much will Emberville cost?",
    a: "A specific price has not been announced on the Steam store page as of 2026-10-10.",
  },
];

const SECTIONS = [
  {
    href: "/wiki",
    title: "Emberville Wiki",
    blurb: "A guide to the confirmed setting, combat, crafting and rebuilding systems, with unknowns kept visible.",
    keywords: ["setting", "systems", "facts"],
    image: "/images/program/section-wiki-town.webp",
    alt: "Pixel-art interior of Emberville town showing rooms, workbenches and crafting stations.",
  },
  {
    href: "/guides",
    title: "Emberville Guides",
    blurb: "A pre-launch orientation to the announced mechanics, with any walkthrough left for launch.",
    keywords: ["systems", "orientation"],
    image: "/images/program/section-guides-combat.webp",
    alt: "Pixel-art combat scene with burning braziers, crates and enemies in a fortified camp.",
  },
  {
    href: "/release-date",
    title: "Emberville Release Date & Platforms",
    blurb: "The confirmed Early Access date, disclosed platform details, pricing status and scope in one place.",
    keywords: ["release date", "Early Access"],
    image: "/images/program/section-release-tavern.webp",
    alt: "Pixel-art town tavern interior with characters gathered around tables and a bar.",
  },
  {
    href: "/map",
    title: "Emberville Map & Areas",
    blurb: "A place to organize area information when names, layouts and routes can be checked in the game.",
    keywords: ["exploration", "areas"],
    image: "/images/program/section-map-ruins.webp",
    alt: "Top-down pixel-art view of stone ruins and corridors forming a dungeon layout.",
  },
  {
    href: "/builds",
    title: "Emberville Builds & Items",
    blurb: "A future reference for equipment and skill combinations, with build rankings reserved for tested play.",
    keywords: ["equipment", "skills"],
    image: "/images/program/section-builds-desert.webp",
    alt: "Pixel-art desert region with palm trees and a pond, with the game HUD showing health and skill bars.",
  },
  {
    href: "/characters",
    title: "Emberville Characters",
    blurb: "A reference area for survivor and villager stories once their names and details are verifiable.",
    keywords: ["survivors", "stories"],
    image: "/images/program/section-characters-battle.webp",
    alt: "Pixel-art battle scene in stone halls showing player characters and enemies with the game HUD visible.",
  },
  {
    href: "/news",
    title: "Emberville News",
    blurb: "A section for dated announcements and update information when they can be checked against official sources.",
    keywords: ["announcements", "updates"],
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
      <section className="relative w-full overflow-hidden border-b border-line">
        <Image
          src="/images/program/hero-forest-camp.webp"
          alt="Overhead pixel-art view of the Emberville forest camp: a lantern-lit tent, work benches, a crafting station, a wooden bridge and a winding river."
          width={1600}
          height={900}
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-linear-to-r from-canvas via-canvas/85 to-canvas/35" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-20">
          <p className="mb-4 inline-block rounded-full border border-accent/35 bg-canvas/60 px-3.5 py-1.5 text-xs font-medium tracking-wide text-accent">
            Early Access — 27 October 2026
          </p>
          <h1 className="mb-5 max-w-3xl text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl">
            Emberville Wiki &amp; Guides
          </h1>
          <p className="mb-7 max-w-2xl text-lg leading-relaxed text-ink">
            Emberville is a single-player action RPG about waking inside a magical prison, exploring its depths,
            rescuing survivors and rebuilding a town. This Emberville wiki and guides hub brings together what the
            cited sources actually confirm — the premise, the systems, the Early Access scope — and flags what they
            still withhold. Where a claim needs a source, we point to it; anything unverified stays out.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://store.steampowered.com/app/2295170/Emberville/"
              rel="noopener noreferrer"
              title="Emberville on Steam"
              className="rounded-md border border-line bg-canvas/80 px-6 py-3 text-sm font-semibold text-ink no-underline transition-colors hover:border-primary hover:text-primary"
            >
              View on Steam ↗
            </a>
            <Link href="/guides" title={routeTitle("/guides")} className="rounded-md border border-line bg-canvas/80 px-6 py-3 text-sm font-semibold text-ink no-underline transition-colors hover:border-primary hover:text-primary">
              Read the systems guide
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full border-b border-line bg-canvas" aria-label="Early Access calendar countdown">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-8 px-4 py-8">
          <div className="min-w-56 flex-1">
            <p className="mb-2 text-xs font-medium tracking-wide text-ink-dim">Announced Early Access date</p>
            <p className="text-xl font-semibold text-white">27 October 2026</p>
            <p className="mt-1 text-sm text-ink-muted">
              Steam gives a calendar date; the release overview below separates confirmed details from unknowns, with the unlock time still open.
            </p>
          </div>
          <div>
            <CountdownTimer target="2026-10-27T00:00:00Z" launched={false} />
            <p className="mt-2 text-xs text-ink-dim">Calendar-date start (00:00 UTC display boundary) only; a calendar reference, distinct from an unlock-time estimate.</p>
          </div>
        </div>
      </section>

      <AdArticle className="article mx-auto w-full max-w-6xl px-4 py-12">
        <p className="answer">
          Emberville is a single-player action RPG from Cygnus Cross, planned for Steam Early Access on 27 October
          2026. You wake without memories in the Vitromotus, a magical prison, and set out to rescue survivors and
          rebuild the town. The announced design joins exploration and action combat with crafting, farming,
          cooking and a personal estate. Curious about the streamer connection? The people behind it are covered
          in <Link href="/studio" title={routeTitle("/studio")}>CohhCarnage’s game</Link>, our profile of the
          studio making it.
        </p>

        <h2>Emberville setting: imprisonment and renewal</h2>
        <p>
          The opening premise starts below ground. The player character awakens inside the Vitromotus, described
          as a magical prison, without memories. The world extends beyond a route from one fight to the next:
          survivors are part of the story, and the objective includes bringing people to safety and rebuilding
          the settlement of Emberville. That creates a clear narrative contrast between the enclosed, dangerous
          depths and a community that can be restored.
        </p>
        <p>
          The store description names <b>kymia</b> as a force that comes from emotions and makes prisoners
          return to life. This gives the setting a supernatural explanation for its repeated struggle with
          death, while leaving many story questions open. The exact history of the prison, the identity of the
          protagonist and the particular stories attached to individual survivors stay unestablished in the
          information summarized here. We leave those gaps to the game, without invented character names or plot
          twists.
        </p>

        <h2>Emberville gameplay loop: exploration, combat and rebuilding</h2>
        <p>
          Emberville's disclosed activities fit together rather than sitting in isolated modes. Exploration takes
          the player through tunnels, ruins, survivor settlements, unusual biomes and encounters with monsters.
          Combat is one way to make progress through those spaces; finding survivors links the underground
          journey to the work of rebuilding the town. Gathering and crafting then give the player another reason
          to engage with the world, because materials can be used for equipment, potions, food, tools and
          trinkets. Farming and cooking add their own resource activities to that larger cycle.
        </p>
        <p>
          The store page also says that combat, exploration, rebuilding and choices all contribute to growth.
          That is useful context for a new reader: progression is described as broader than defeating enemies
          alone. The page stops short of a complete experience-point formula, a list of milestones, or an
          optimal order for all activities. Until such information is disclosed or can be checked in the game,
          this guide explains the relationship between systems while keeping any fabricated route or numerical
          efficiency ranking out.
        </p>

        <h2>Emberville combat: decisions over attack speed</h2>
        <p>
          The announced combat is action-oriented and asks players to pay attention to position, timing and
          knowledge. Each weapon has its own combos, and combination attacks are part of the system. The store
          description identifies melee, magic and ranged combat, so the player can work at more than a single
          distance or damage style in the game's overall design. These are broad categories, while a verified list
          of individual weapons, attack strings or damage types stays for later.
        </p>
        <p>
          Classes interact with weapon and skill choices in a flexible way. Class skills can be inherited as
          active or passive abilities, and the player can change class at any time. Equipment and skills both
          contribute to a loadout. A practical way to understand this description is to treat the class as one
          layer of a build instead of a permanent lock on every learned skill. Exact skill requirements, limits
          on inherited abilities, respec costs and the statistics of equipment stay unspecified on the store
          page, so this page reports only what is stated.
        </p>

        <h2>Emberville crafting and the estate</h2>
        <p>
          Gathering, crafting, farming and cooking are explicitly part of the announced experience. The
          description says players can collect resources and make equipment, potions, food, tools and trinkets.
          Those categories give the activity list practical meaning: crafting can support combat and exploration,
          while farming and cooking are part of the broader life-simulation side. Recipes, yields, crop seasons,
          station requirements and item values remain unenumerated in the source used here, so we treat them as
          open questions instead of filling them with genre conventions.
        </p>
        <p>
          The player also has a personal estate. It can be developed with buildings and customized with furniture,
          plants and other decorations. The store page describes this as a place where collected materials can
          become useful creations as well as a place to arrange a home. Rebuilding Emberville itself is the
          separate story goal: one is the player's own property, the other is the town at the center of the rescue
          premise. The cited material leaves plot dimensions, the building catalogue and placement rules
          unconfirmed.
        </p>

        <h2>Emberville villagers and progression</h2>
        <p>
          Emberville describes its villagers through stories, diaries, quests, classes, skills and rewards. This
          indicates that the human side of rebuilding is intended to connect narrative material with play systems.
          A villager's story or task may help explain the setting, while classes, abilities or rewards can relate
          to character growth. The store page stops short of an itemized cast list or a full quest catalogue, and
          named relationship mechanics and outcomes stay unestablished. The useful verified takeaway is the
          presence of villager stories and quest-related progression.
        </p>
        <p>
          The game also allows customization of the player character's appearance. That is a separate kind of
          personal expression from choosing equipment, skills or an estate layout. The available appearance
          options, whether they can be changed later and how they are unlocked stay undetailed in the store
          listing. This site describes those specifics only once they can be confirmed, and treats a general
          customization statement as just that.
        </p>

        <h2>Emberville Early Access scope and release details</h2>
        <p>
          Cygnus Cross describes the Early Access release as a fully playable experience with substantial
          content and meaningful updates planned during development. Its roadmap estimate is approximately
          eighteen months to reach what the developer calls the complete experience. That is an estimate, not a
          promised 1.0 launch date: the developer says community feedback may extend the period. The page lists
          single-player play and support for keyboard, mouse and controller.
        </p>
        <p>
          The developer says the game will be a one-time purchase without microtransactions, and that its price
          will remain stable while discounts may occur during Early Access. The actual price remains unannounced.
          Planned 1.0 work includes Workshop modding, optimization, additional difficulty options, balancing,
          creative-area implementation, bosses, biomes and monsters. These are intentions that may change; the
          roadmap sets no dated schedule and no order of delivery. For the
          individual
          date, platform and price status, use the{" "}
          <Link href="/release-date" title={routeTitle("/release-date")}>release-date reference</Link>. Ahead of
          launch, the free Steam Next Fest demo is covered on the{" "}
          <Link href="/news/emberville-demo" title={routeTitle("/news/emberville-demo")}>Emberville demo page</Link>.
        </p>

        <h2>Emberville confirmed facts and open details</h2>
        <DataBlock source="Steam store page" url="https://store.steampowered.com/app/2295170/Emberville/" verified="2026-10-10">
          <div className="overflow-x-auto my-4">
            <table>
              <thead><tr><th scope="col">Topic</th><th scope="col">What is confirmed</th></tr></thead>
              <tbody>
                <tr><td>Developer and publisher</td><td>Cygnus Cross</td></tr>
                <tr><td>Early Access date</td><td>27 October 2026; the exact unlock time stays unannounced</td></tr>
                <tr><td>Mode and controls</td><td>Single-player; keyboard, mouse and controller support</td></tr>
                <tr><td>Setting</td><td>An amnesiac wakes in the Vitromotus; kymia is emotion-derived and returns prisoners to life</td></tr>
                <tr><td>Minimum PC requirements</td><td>64-bit; Windows 10 or newer; Intel Core i5 3.2 GHz or equivalent; 4 GB RAM; DirectX 10-compatible graphics; DirectX 11; 4 GB storage</td></tr>
                <tr><td>Still open</td><td>Exact price, full-release date, unlock time, complete item and character lists, and exact biome count</td></tr>
              </tbody>
            </table>
          </div>
        </DataBlock>

        <h2>Emberville details beyond the store summary</h2>
        <p>
          The studio’s own site gives one story detail the short Steam capsule leaves out: the amnesiac protagonist
          is accompanied by a strange, luminous entity that calls itself the Memento. Cygnus Cross also maintains
          a dedicated Emberville voice-cast listing. Those are studio-published details; IGN’s editorial shorthand
          about genre mix is a separate kind of claim.
        </p>
        <DataBlock source="Cygnus Cross official website" url="https://www.cygnuscross.com/" verified="2026-10-10">
          <p>The official introduction identifies the Memento as the protagonist’s luminous companion; the studio site also publishes a separate Emberville voice-cast list.</p>
        </DataBlock>
        <p>
          The July 16 developer press release adds production context: it describes an expedition-and-return loop
          connecting the Vitromotus to town restoration, and identifies Jane Perry as the narrator of that trailer
          and Greg Dombrowski of Secession Studios as composer. They come from a dated developer release, not an
          independent review, and they do not guarantee the final soundtrack.
        </p>
        <DataBlock source="Cygnus Cross press release (hosted by GamesPress)" url="https://www.gamespress.com/Emberville-Sets-October-27-Early-Access-Launch-Reveals-Its-Biggest-Loo" verified="2026-10-10">
          <p>The July 16 release describes the expedition / return / town-restoration loop and names Jane Perry for cinematic narration and Greg Dombrowski for the original score.</p>
        </DataBlock>
        <p>
          These boundaries matter because game listings often leave details to be revealed later. A planned feature
          differs from a delivered one; a general promise of unusual biomes stays separate from an exact count; and
          a calendar launch date stops short of the hour at which a store will unlock a product. Our practical
          references follow that distinction. The{" "}
          <Link href="/wiki" title={routeTitle("/wiki")}>Emberville wiki</Link> organizes the setting and systems,
          the{" "}
          <Link href="/platforms" title={routeTitle("/platforms")}>Emberville platforms status page</Link> separates
          the confirmed PC release from the unannounced console versions, and the{" "}
          <Link href="/price" title={routeTitle("/price")}>Emberville price page</Link> records the purchase model
          while the amount is still unannounced.
        </p>

        <h2>Emberville comparison: Stardew Valley vs Diablo</h2>
        <p>
          Press coverage coined “Diablo Lite meets Stardew Valley” as shorthand for Emberville’s action combat and
          gathering-and-rebuilding loop. The comparison is not an official genre label; for the reported combat
          differences and what the shorthand leaves out, read the{" "}
          <Link href="/stardew-valley-diablo" title={routeTitle("/stardew-valley-diablo")}>Emberville vs Stardew Valley and Diablo comparison</Link>.
        </p>

        <h2>Emberville voice cast: the official roster</h2>
        <p>
          Cygnus Cross lists 22 people, with Alex Jordan as Voice Acting Director. Published coverage names Jordan
          as Adeos and Matthew Mercer as Gumu; other performer-to-character pairings are not established in the
          sources cited here. See the{" "}
          <Link href="/voice-cast" title={routeTitle("/voice-cast")}>complete Emberville voice cast and known roles</Link> for the sourced roster.
        </p>

        <h2>Emberville studio: Cygnus Cross and CohhCarnage</h2>
        <p>
          Emberville is the debut title from Cork-based independent studio Cygnus Cross. Coverage identifies
          Brynjar Gigja as founder and lead game director and Ben “CohhCarnage” Cassell as co-founder and co-game
          director. Read the{" "}
          <Link href="/studio" title={routeTitle("/studio")}>Emberville developer and studio profile</Link> for the sourced background.
        </p>

        <h2>Emberville FAQ</h2>
        <FaqList faqs={FAQS} />
        <p className="text-sm text-ink-muted">
        All game facts above were checked on <b>2026-10-10</b> against the Steam store page, the Cygnus Cross
        official website, the developer press release and dated coverage from IGN, GameSpot, GamingTrend and Gamer
        Social Club. Where those sources are silent, the page says so instead of substituting community claims or
        estimates.
        </p>

        <h2>Explore Emberville by section</h2>
        <div className="my-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SECTIONS.map((s) => (
            <Link key={s.href} href={s.href} title={routeTitle(s.href)} className="group flex flex-col overflow-hidden rounded-lg border border-line bg-surface no-underline transition-all hover:-translate-y-1 hover:border-primary hover:shadow-xl">
              <div className="relative aspect-video overflow-hidden bg-canvas-deep">
                <Image src={s.image} alt={s.alt} width={1200} height={675} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-canvas-deep via-canvas-deep/25 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="mb-2 text-base font-semibold text-white">{s.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-ink-muted">{s.blurb}</p>
                <div className="mt-3 flex flex-wrap gap-1.5 border-t border-line-soft pt-3">
                  {s.keywords.map((k) => <span key={k} className="rounded-sm bg-canvas-deep px-2 py-1 text-[11px] text-ink-dim">{k}</span>)}
                </div>
                <span className="mt-3 text-xs font-medium text-link group-hover:text-primary">Open {s.title.replace("Emberville ", "")} →</span>
              </div>
            </Link>
          ))}
        </div>
      </AdArticle>
    </div>
  );
}