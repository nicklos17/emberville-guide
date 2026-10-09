import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute, routeTitle } from "@/lib/routes";
import { CountdownTimer } from "@/components/CountdownTimer";
import { DataBlock } from "@/components/DataBlock";
import { FaqList, type Faq } from "@/components/FaqList";

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
    a: "A specific price has not been announced on the Steam store page as of 2026-10-09.",
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
    blurb: "A pre-launch orientation to the announced mechanics—not a pretend walkthrough of unplayed content.",
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
    blurb: "A future reference for equipment and skill combinations; no untested build rankings are presented here.",
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
          fill
          priority
          sizes="100vw"
          className="object-cover"
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
            rescuing survivors and rebuilding a town. This guide brings together the store-confirmed premise,
            connected gameplay systems, Early Access scope and what remains unannounced. It is written as a
            reference—not as a report from a preview or a claim that an unplayed system has already been tested.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/wiki" title={routeTitle("/wiki")} className="rounded-md border border-line bg-canvas/80 px-6 py-3 text-sm font-semibold text-ink no-underline transition-colors hover:border-primary hover:text-primary">
              Browse the Wiki ↓
            </Link>
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
              Steam gives a calendar date, not an unlock time; the release overview below separates confirmed details from unknowns.
            </p>
          </div>
          <div>
            <CountdownTimer target="2026-10-27T00:00:00Z" launched={false} />
            <p className="mt-2 text-xs text-ink-dim">Calendar-date start (00:00 UTC display boundary) only; not an unlock-time estimate.</p>
          </div>
        </div>
      </section>

      <article className="article mx-auto w-full max-w-6xl px-4 py-12">
        <p className="answer">
          Emberville is a single-player action RPG from Cygnus Cross, planned to enter Steam Early Access on
          27 October 2026. You wake with no memories in the Vitromotus, a magical underground prison, and
          become involved in rescuing survivors and rebuilding Emberville. Its announced design joins
          exploration and action combat with crafting, farming, cooking and a personal estate. This overview
          separates those confirmed pillars from details the store page has not specified.
        </p>

        <h2>A setting built around imprisonment and renewal</h2>
        <p>
          The opening premise starts below ground. The player character awakens inside the Vitromotus, described
          as a magical prison, without memories. The world is not presented merely as a route from one fight to
          the next: survivors are part of the story, and the objective includes bringing people to safety and
          rebuilding the settlement of Emberville. That creates a clear narrative contrast between the enclosed,
          dangerous depths and a community that can be restored.
        </p>
        <p>
          The store description names <b>kymia</b> as a force that comes from emotions and makes prisoners
          return to life. This gives the setting a supernatural explanation for its repeated struggle with
          death, while leaving many story questions open. The exact history of the prison, the identity of the
          protagonist and the particular stories attached to individual survivors are not established in the
          information summarized here. We do not fill those gaps with invented character names or plot twists.
        </p>

        <h2>One loop connects exploration, combat and rebuilding</h2>
        <p>
          Emberville's disclosed activities fit together rather than sitting in isolated modes. Exploration takes
          the player through tunnels, ruins, survivor settlements, unusual biomes and encounters with monsters.
          Combat is one way to make progress through those spaces; finding survivors links the underground
          journey to the work of rebuilding the town. Gathering and crafting then give the player another reason
          to engage with the world, because materials can be used for equipment, potions, food, tools and
          accessories. Farming and cooking add their own resource activities to that larger cycle.
        </p>
        <p>
          The store page also says that combat, exploration, rebuilding and choices all contribute to growth.
          That is useful context for a new reader: progression is described as broader than defeating enemies
          alone. It does not, however, publish a complete experience-point formula, a list of milestones, or an
          optimal order for all activities. Until such information is disclosed or can be checked in the game,
          this guide explains the relationship between systems without presenting a fabricated route or a
          numerical efficiency ranking.
        </p>

        <h2>Combat emphasizes decisions, not just attack speed</h2>
        <p>
          The announced combat is action-oriented and asks players to pay attention to position, timing and
          knowledge. Each weapon has its own combos, and combination attacks are part of the system. The store
          description identifies melee, magic and ranged combat, so the player is not restricted to a single
          distance or damage style in the game's overall design. These are broad categories, not a verified list
          of individual weapons, attack strings or damage types.
        </p>
        <p>
          Classes interact with weapon and skill choices in a flexible way. Class skills can be inherited as
          active or passive abilities, and the player can change class at any time. Equipment and skills both
          contribute to a loadout. A practical way to understand this description is to treat the class as one
          layer of a build rather than assuming that it permanently locks every learned skill. Exact skill
          requirements, limits on inherited abilities, respec costs and the statistics of equipment are not
          specified on the store page, so this page does not claim to know them.
        </p>

        <h2>Crafting and a home plot give progression another purpose</h2>
        <p>
          Gathering, crafting, farming and cooking are explicitly part of the announced experience. The
          description says players can collect resources and make gear, potions, food, tools and accessories.
          Those categories give the activity list practical meaning: crafting can support combat and exploration,
          while farming and cooking are part of the broader life-simulation side. Recipes, yields, crop seasons,
          station requirements and item values have not been enumerated in the source used here. They should be
          treated as open questions rather than filled with genre conventions.
        </p>
        <p>
          The player also has a personal estate. It can be developed with buildings and customized with furniture,
          plants and other decorations. The store page describes this as a place where collected materials can
          become useful creations as well as a place to arrange a home. This is distinct from the stated goal of
          rebuilding Emberville itself: one is the player's customizable property, while the other is the town at
          the center of the rescue premise. No plot dimensions, building catalogue or placement rules are confirmed
          in the cited material.
        </p>

        <h2>Villager stories are part of the progression picture</h2>
        <p>
          Emberville describes its villagers through stories, diaries, quests, classes, skills and rewards. This
          indicates that the human side of rebuilding is intended to connect narrative material with play systems.
          A villager's story or task may help explain the setting, while classes, abilities or rewards can relate
          to character growth. The store page does not provide an itemized cast list or a full quest catalogue,
          however, and it does not establish named relationship mechanics or outcomes. The useful verified
          takeaway is the presence of villager stories and quest-related progression, not details beyond that.
        </p>
        <p>
          The game also allows customization of the player character's appearance. That is a separate kind of
          personal expression from choosing equipment, skills or an estate layout. The available appearance
          options, whether they can be changed later and how they are unlocked are not detailed in the store
          listing. This site will only describe those specifics when they can be confirmed, rather than treating
          a general customization statement as evidence for a particular wardrobe or character creator.
        </p>

        <h2>What the Early Access label means here</h2>
        <p>
          Cygnus Cross describes the Early Access release as a fully playable experience with substantial
          content and meaningful updates planned during development. Its roadmap estimate is approximately
          eighteen months to reach what the developer calls the complete experience. That is an estimate, not a
          promised 1.0 launch date: the developer says community feedback may extend the period. The page lists
          single-player play and support for keyboard, mouse and controller.
        </p>
        <p>
          The developer says the game will be a one-time purchase without microtransactions, and that its price
          will remain stable while discounts may occur during Early Access. The actual price is not announced.
          Planned 1.0 work includes Workshop modding, optimization, additional difficulty options, balancing,
          creative-area implementation, bosses, biomes and monsters. These are intentions that may change, not a
          dated schedule or a guarantee that every item will arrive in a particular order. For the individual
          date, platform and price status, use the{" "}
          <Link href="/release-date" title={routeTitle("/release-date")}>release-date reference</Link>.
        </p>

        <h2>Verified facts, and details still to come</h2>
        <DataBlock source="Steam store page" url="https://store.steampowered.com/app/2295170/Emberville/" verified="2026-10-09">
          <div className="overflow-x-auto my-4">
            <table>
              <thead><tr><th scope="col">Topic</th><th scope="col">What is confirmed</th></tr></thead>
              <tbody>
                <tr><td>Developer and publisher</td><td>Cygnus Cross</td></tr>
                <tr><td>Early Access date</td><td>27 October 2026; no exact unlock time is listed</td></tr>
                <tr><td>Mode and controls</td><td>Single-player; keyboard, mouse and controller support</td></tr>
                <tr><td>Setting</td><td>An amnesiac wakes in the Vitromotus; kymia is emotion-derived and returns prisoners to life</td></tr>
                <tr><td>Minimum PC requirements</td><td>64-bit; Windows 10 or newer; Intel Core i5 3.2 GHz or equivalent; 4 GB RAM; DirectX 10-compatible graphics; DirectX 11; 4 GB storage</td></tr>
                <tr><td>Not specified</td><td>Exact price, full-release date, unlock time, complete item and character lists, and exact biome count</td></tr>
              </tbody>
            </table>
          </div>
        </DataBlock>
        <p>
          These boundaries matter because game listings often leave details to be revealed later. A planned feature
          is not the same as a delivered feature; a general promise of unusual biomes is not an exact count; and a
          calendar launch date does not reveal the hour at which a store will unlock a product. Our practical
          references follow that distinction. The{" "}
          <Link href="/wiki" title={routeTitle("/wiki")}>wiki overview</Link> organizes the setting and systems,
          while the{" "}
          <Link href="/countdown" title={routeTitle("/countdown")}>calendar countdown</Link> explains exactly
          what the date timer does—and does not—represent.
        </p>

        <h2>Emberville FAQ</h2>
        <FaqList faqs={FAQS} />
        <p className="text-sm text-ink-muted">
          All game facts above were checked against the Steam store page on <b>2026-10-09</b>. Where the listing
          is silent, the page says so instead of substituting press reports, community claims or estimates.
        </p>

        <h2>Explore Emberville by section</h2>
        <div className="my-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SECTIONS.map((s) => (
            <Link key={s.href} href={s.href} title={routeTitle(s.href)} className="group flex flex-col overflow-hidden rounded-lg border border-line bg-surface no-underline transition-all hover:-translate-y-1 hover:border-primary hover:shadow-xl">
              <div className="relative aspect-video overflow-hidden bg-canvas-deep">
                <Image src={s.image} alt={s.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
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
      </article>
    </div>
  );
}