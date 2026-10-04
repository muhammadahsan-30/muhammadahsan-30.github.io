# Portfolio design specification — v2

Supersedes v1. Phase 2 of the portfolio redesign, revised after the decision to make
**progressive disclosure the site's core interaction model**.

**Nothing here is implemented yet.** Companion to `docs/portfolio-audit.md`.

**This remains a structural redesign, not a visual rebrand.** The colour system, type
pairing, dot grid, dark mode and editorial tone are kept. What changes is hierarchy, what
is said, in what order, and how much of it is visible at rest.

---

## 0. The governing principle

> **Show the strongest evidence immediately. Hide complexity until the user asks for it.**

Everything below follows from that. The site has three depths and a reader chooses how
far to go:

| Depth | What it is | Where |
|---|---|---|
| **1 — Skim** | One sentence, one image, one number | Homepage, always visible |
| **2 — Expand** | Problem → what I built → why it matters → technical depth | In-place accordion, one click |
| **3 — Study** | Full narrative, architecture, methodology | `ooh.html` only |

Depth 3 exists for exactly one project. That asymmetry is deliberate and is itself a
hierarchy signal — see §3.

---

## 1. Positioning

Tested against the brief's direction and sharpened. **Primary line:**

> **I learn how a business works, then build what it's missing.**

**Supporting line:**

> Honours Mathematics and Business Administration at Waterloo. Valuation models at KPMG,
> media campaigns at a WPP/GroupM agency, and the tools that measure them.

Changed from v1's *"…then build the thing that measures it"* to *"…build what it's
missing"*. The v1 line was narrower than the evidence: BarakahLink and the Smog
feasibility model are not measurement tools. "What it's missing" covers all of it and is
still a specific, falsifiable claim rather than a category description.

The brief's longer formulation — *"I combine business understanding, analytics and
technology to turn operational problems into practical tools, models and decisions"* — is
accurate but is a second-paragraph sentence, not a hero line. It is used verbatim in the
**How I work** section (§8), where its length is an asset.

---

## 2. Homepage flow

The page is one argument, not eight sections:

**claim → proof it is true → the thing it produced → other evidence → outside validation
→ how I work → talk to me**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ Muhammad Ahsan Sheikh            About  Projects  Experience  [Contact]         │
├────────────────────────────────────────────────────────────────────────────────┤
│  WATERLOO, ONTARIO  (AVAILABLE JAN–APR 2027)                                   │
│                                                      ┌────────────┐            │
│  Muhammad                                            │            │            │
│  Ahsan Sheikh                                        │  portrait  │            │
│                                                      │            │            │
│  I learn how a business works,                       └────────────┘            │
│  then build what it's missing.          ← Newsreader, display size             │
│                                                                                │
│  Honours Mathematics and Business Administration at Waterloo. Valuation        │
│  models at KPMG, media campaigns at a WPP/GroupM agency, and the tools         │
│  that measure them.                                                           │
│                                                                                │
│  ┌──────────────┬──────────────┬──────────────┐                               │
│  │ CAD 19.5M    │ CAD 1M+      │ 1 of 2       │   ← REAL ONLY, three          │
│  │ Capital in   │ Media spend  │ Interns      │                               │
│  │ venture      │ reconciled   │ selected     │                               │
│  │ valued       │              │              │                               │
│  └──────────────┴──────────────┴──────────────┘                               │
│  From paid work. Project figures appear with the project.                      │
│                                                                                │
│  [Resume] [Projects] [Email] [LinkedIn] [GitHub]                               │
├────────────────────────────────────────────────────────────────────────────────┤
│  01  ONE THREAD                                            ← THE WOW MOMENT    │
│                                                                                │
│   ①──────────────────── ②──────────────────── ③                               │
│   Inside the agency     The problem was        So I built it                   │
│                         structural                                             │
│   Kinetic, WPP/GroupM.  Reconciliation could   A placement-level analyzer      │
│   Five months, CAD 1m+  only run at the end.   that finds under-delivery       │
│   of media spend        Nobody was slow —      while the campaign is still     │
│   reconciled by hand.   the process was.       running.                        │
│                                                                                │
│   KATALYST · EXCEL      WEEKS LATE             PYTHON · SQL · LIVE             │
├────────────────────────────────────────────────────────────────────────────────┤
│  02  FLAGSHIP                                                                  │
│  ┌──────────────────────────────┐                                             │
│  │                              │  OOH Campaign Performance Analyzer  [Live]  │
│  │   Overview screenshot        │                                              │
│  │   (waterfall visible)        │  Campaign reporting showed −2.1%. Underneath │
│  │                              │  it, 10.5m impressions were short across     │
│  └──────────────────────────────┘  227 placements — 14% of the gap cancelled   │
│                                    out on paper by other sites running ahead.  │
│                                                                                │
│  ┌───────────────┬───────────────┬───────────────┐                            │
│  │ 4 days        │ 98.1%         │ 44            │  ← project figures, inside  │
│  │ to flag, vs   │ of faults     │ unit tests    │    the project block        │
│  │ 31 to recon.  │ found         │               │                            │
│  └───────────────┴───────────────┴───────────────┘                            │
│  Synthetic dataset · Python · SQL · SQLite · pytest                            │
│  [Explore the case study →]   [Open live ↗]   [Source ↗]                       │
├────────────────────────────────────────────────────────────────────────────────┤
│  03  SELECTED WORK                                                             │
│  ┌──────────────────────────────────────────────────────────────────────────┐ │
│  │  [mockup]   Smog-Eating Billboard                           [Published]  │ │
│  │             Lahore has 1,150+ hoardings and some of the worst air on      │ │
│  │             earth. I modelled whether coating them would pay for itself.  │ │
│  │             DAILY PAKISTAN · OCT 2024                                     │ │
│  │             [View details ↓]    [Read the article ↗]                      │ │
│  └──────────────────────────────────────────────────────────────────────────┘ │
│  ┌──────────────────────────────────────────────────────────────────────────┐ │
│  │  BarakahLink                                   [Live]      [screenshot]  │ │
│  │  Giving platforms assume a smartphone and a stable connection.           │ │
│  │  Many who need them have neither.                                        │ │
│  │  TYPESCRIPT · GEMINI · LEAFLET                                            │ │
│  │  [View details ↓]    [Open live ↗]                                        │ │
│  └──────────────────────────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────────────┤
│  04  PUBLISHED      (Daily Pakistan article block — kept, it is validation)    │
├────────────────────────────────────────────────────────────────────────────────┤
│  05  HOW I WORK                                                                │
│  I combine business understanding, analytics and technology to turn            │
│  operational problems into practical tools, models and decisions.              │
│                                                                                │
│  Analytics & data    Python · pandas · SQL · SQLite · pytest · Excel           │
│                      → OOH Analyzer · KPMG                                     │
│  Business & finance  Valuation · DCF · three-statement · sensitivity           │
│                      → KPMG · Smog feasibility                                 │
│  Media & campaigns   Planning · spend reconciliation · Katalyst · Odoo         │
│                      → Kinetic · OOH Analyzer                                  │
│  Building            Vanilla JS · data visualisation · LLM APIs · testing      │
│                      → OOH Analyzer · BarakahLink                              │
├────────────────────────────────────────────────────────────────────────────────┤
│  Looking for my next role in consulting, analytics or marketing.               │
│  [Get in touch]  [Resume]                                                      │
└────────────────────────────────────────────────────────────────────────────────┘
```

### What changed from v1 and why

| Change | Reason |
|---|---|
| **"One thread" section added** at 01 | v1 proved the positioning line only implicitly, inside the flagship copy. A reader who never scrolls to the flagship never sees the proof. This makes the claim and its evidence adjacent. |
| Flagship moved to 02, keeps its image and gains **three project figures** | v1 had the figures only on the case-study page. Three is enough to be compelling without becoming the case study. |
| Selected work cards become **expandable** | The brief's core change. See §4. |
| Experience rows **removed from the homepage** | v1 kept the `.status` dl. With "One thread" telling the Kinetic story and a dedicated Experience page, the status rows became a third telling of the same facts. Cut. |
| **"How I work" added** at 05 | The audit found skills scattered across per-project chips with nowhere to see them whole. Recruiters frequently never leave the homepage. |
| Published kept | Third-party validation is the rarest asset on the site. |

**Net section count is unchanged** (five numbered sections before the closing). One was
removed, one added, one promoted.

---

## 3. The interaction model, and one deliberate asymmetry

Two different affordances, and the difference *is* the hierarchy signal:

| Affordance | Meaning | Used by |
|---|---|---|
| **View details ↓** | Expands in place. Everything there is to say fits here. | Smog, BarakahLink, every Experience role |
| **Explore the case study →** | Navigates. There is more here than a panel should hold. | OOH only |

A visitor learns in one glance that the flagship is a different size of thing, without
being told. It also resolves a problem v1 created: with an accordion *and* a case-study
page, OOH would have had three depth levels and two competing "more" affordances. It now
has two.

**On `projects.html`, the OOH card uses the same navigate-to-case-study affordance.** It
never expands anywhere.

---

## 4. The disclosure component

One component, three uses: project detail, experience detail, and (if ever needed)
methodology notes. Built once in `assets/style.css` and `assets/site.js`.

### Markup contract

```html
<div class="disc">
  <button class="disc-t" type="button" aria-expanded="false" aria-controls="d-smog">
    View details <span class="chev" aria-hidden="true">↓</span>
  </button>
  <div class="disc-p" id="d-smog" role="region" aria-label="Smog-Eating Billboard details">
    <div class="disc-in"> … </div>
  </div>
</div>
```

### Behaviour

| Requirement | Implementation |
|---|---|
| Click / tap | `<button>`, full-width hit area on mobile, 44px min height |
| Keyboard | It is a real button. Enter/Space work for free. Focus ring is the site's existing one. |
| Open/closed state | `aria-expanded` + chevron rotates 180° + label changes to "Hide details" |
| Smooth but fast | `grid-template-rows: 0fr → 1fr` on `.disc-p`, **260ms**, `cubic-bezier(.4,0,.2,1)` |
| No hover-only | Nothing opens on hover. Hover only lifts the card. |
| No nested scrolling | The panel grows the page. It never gets its own scrollbar. |
| Doesn't break flow | Page reflows naturally; no absolute positioning, no overlay |
| Reduced motion | `@media (prefers-reduced-motion:reduce)` → `transition:none` |
| No-JS | Panel defaults to open if JS never runs; `site.js` closes panels on load. Content is never trapped. |

**Why `grid-template-rows` and not `max-height`:** a `max-height` guess either clips long
content or makes short content animate slowly from a wrong value. `0fr → 1fr` animates to
the content's real height. Supported everywhere current; where it is not, the panel simply
appears without a transition — which is an acceptable degradation, not a break.

### Content order inside an expanded panel

Fixed, so the reader learns the shape once:

```
  The problem        one short paragraph
  What I built       2–3 bullets, the concrete work
  Why it matters     the insight or outcome — the memorable part
  Depth              technical / analytical specifics, stack chips
  →                  the action row (live, source, article)
```

Nothing else. If a project needs more than this, it earns a case-study page.

---

## 5. Project card compositions

A consistent system, deliberately not identical weights. Each composition reflects what
the project *is*.

### Flagship — OOH (editorial, dominant)

Two columns at ≥900px: screenshot left (5fr), copy right (7fr). Large image in the
existing `.shot` frame. Three project figures in a mono-faced band *inside* the block, so
they are unmistakably project figures and never confused with the hero's real metrics.
Accent detail: a sienna hairline on the left edge of the copy column.

### Smog — research / editorial

Image left (the mockup), copy right. A **pull-quote** set in Newsreader italic from the
article, which no other card gets — this is the one piece of published writing on the
site and it should look like writing. Masthead line (`DAILY PAKISTAN · OCT 2024`) in mono
small-caps. Accent: teal.

### BarakahLink — product / software

Copy left, screenshot right (alternating from Smog). The screenshot sits in a **narrower,
taller frame** suggesting an application view rather than a document. Feature list rather
than prose. Accent: teal.

**Alternating image sides** (left, left, right) gives the page rhythm without a grid.
**No project gets a hover transform** — only the existing `--shadow-lift`.

---

## 6. `ooh.html` — the case study

Unchanged from v1 in substance. Structure, with the disclosure model applied so even the
case study is skimmable:

```
  OOH CAMPAIGN PERFORMANCE ANALYZER            [Open live ↗]  [Source ↗]
  One sentence: what it does and who it is for.

  01  WHERE IT CAME FROM     Kinetic → reconciliation by hand → structural problem
  02  THE PROBLEM            three reasons under-delivery hides   [compact diagram]
  03  WHAT IT DOES           four capabilities    [screenshot: Overview + waterfall]
  04  EVIDENCE               table, synthetic dataset framing above it
  05  HOW IT IS BUILT        pipeline diagram · Python computes, browser renders
                             [screenshot: Attention Centre] [screenshot: timeline]
  06  [reserved — §9]
  07  WHAT IT DOES NOT DO    limitations, stated plainly
```

Sections 02, 05 and 07 carry **View details ↓** panels for their deeper content, so the
page skims in under a minute and rewards reading.

---

## 7. Experience page

Each role collapses to a four-line summary and expands:

```
  ┌──────────────────────────────────────────────────────────────────────┐
  │  KPMG                                                Apr – Jul 2026  │
  │  Business Advisory Intern, Deal Advisory                             │
  │  Valuation and three-statement modelling in the Deal Advisory        │
  │  practice — including an independent valuation supporting a stake    │
  │  transfer between joint-venture partners.                            │
  │  VALUATION · DCF · THREE-STATEMENT · EXCEL                           │
  │  [View details ↓]                                                    │
  └──────────────────────────────────────────────────────────────────────┘
      ↓ expanded adds: the four detailed bullets, and the Nishat Sutas
        public-context block with its sources note
```

Same for Kinetic (expanded adds the five-department rotation detail) and Waterloo
(expanded adds coursework and awards).

**Justdiggit moves here** as a fourth entry, collapsed by default — real work, no artifact,
correctly weighted.

**Each role's summary carries a "→ led to" line where one genuinely exists.** Kinetic's
reads *→ led to the OOH Campaign Performance Analyzer* and links to the case study. This
is the connective tissue the brief asks for, and it only appears where it is true.

---

## 8. Skills — "How I work"

Four rows, grouped by *what the skill is for*, each with the evidence beneath it. Evidence
items are links.

**Deliberately not expandable.** The brief suggested category → expand → evidence, but the
evidence is one short line per row; hiding four short lines behind four clicks adds
friction and returns nothing. Progressive disclosure is a tool for depth, not a style to
apply uniformly. Flagged here because it is a conscious departure from the brief.

**No icon wall, no proficiency bars, no percentages.** Credibility comes from the "→ used
in" line, not from a self-assessed rating.

Power BI is added to **Analytics & data** only when the artifact exists.

---

## 9. Where Power BI will go

Unchanged from v1 and still correct: **section 06 of the case study**, between "How it is
built" and the limitations.

The layout accommodates it because every case-study section is the same component — adding
one more requires no restructuring. **No placeholder, no logo, no "coming soon", no dead
link.** Section 06 simply does not exist until the `.pbix` does.

When it ships: screenshots plus a short interaction GIF; a live link only if publish-to-web
is genuinely available; one stack chip added to the flagship block; Power BI added to the
skills row. The decomposition tree is the visual to lead with, because it is the one thing
the web app cannot do.

---

## 10. Motion and interaction rules

| Element | Motion | Duration |
|---|---|---|
| Disclosure panel | `grid-template-rows` 0fr↔1fr | 260ms |
| Chevron | `rotate(180deg)` | 200ms |
| Card hover | existing `--shadow-lift` | 200ms |
| Section reveal | existing `.rv` opacity + 14px rise | 650ms (unchanged) |
| Nav / buttons | existing | unchanged |

**That is the complete list.** No new motion type is introduced.

Explicitly excluded: counters that tick up, typed text, parallax, scroll-jacking, cursor
effects, particles, 3D, gradient animation, loading screens, page transitions.

All of it inside the existing `prefers-reduced-motion` guard.

---

## 11. Responsive and mobile behaviour

Mobile is designed, not collapsed.

| Width | Behaviour |
|---|---|
| ≥ 1100 | Hero two-column; thread three-column; flagship and cards two-column |
| 900–1099 | Same, tighter gutters |
| 640–899 | Hero stacks; **thread becomes three stacked steps with a vertical connector**; cards stack image-above-copy |
| < 640 | Single column; stat band 3-up becomes 1-up stacked; disclosure buttons full-width, 44px tall |

**Specific mobile requirements from the brief:**

- Screenshots never shrink below readable: at < 640 they go **full card width**, not
  thumbnail. Better to show one legible region than a whole illegible page.
- Expanded panels stack cleanly — the panel is a single column at all widths below 640.
- No horizontal page scroll at any width. Currently true at 390px and must stay true.
- The only element permitted horizontal scroll is the case-study evidence table, in its
  own `overflow-x:auto` container.
- Tap targets ≥ 44px on all disclosure buttons and action links.

---

## 12. Accessibility

The two gaps from the audit, plus the new component's requirements.

1. **Skip link** on every page — `<a class="skip" href="#main">` as first focusable
   element, visually hidden until focused. Copy the analyzer's existing pattern.
2. **`aria-current="page"`** on the active nav link, alongside `class="on"`.
3. **Disclosure**: real `<button>`, `aria-expanded`, `aria-controls`, panel has
   `role="region"` and an `aria-label`. State is conveyed by the label text changing, not
   by the chevron alone.
4. **Images**: the flagship `alt` describes what the dashboard shows, not "screenshot".
5. **Evidence table**: a `<caption>` or adjacent heading carrying the synthetic framing.

Preserved from the current build: alt on all images, explicit dimensions, `rel="noopener"`,
reduced-motion handling, one `<h1>` per page, landmarks, no overflow at 390px.

---

## 13. Synthetic vs real — unchanged rule

> A number from the synthetic dataset never appears in the same visual group as a number
> from paid work, and never without "synthetic" within one line of it.

| Where | Treatment |
|---|---|
| Hero stat band | **Real only.** Three figures + "From paid work. Project figures appear with the project." |
| Flagship block | Project figures allowed, in their own band, with `Synthetic dataset` as the first chip |
| `ooh.html` evidence | Project figures under a heading naming the synthetic dataset and the fixed seed |
| Experience | Real only, always |

`data-ooh="spend_m"` is removed from `index.html`. The binding code in `site.js` stays —
it is defensive and other keys still use it.

---

## 14. What is removed

The site should feel edited.

| Removed | Reason |
|---|---|
| Homepage `.status` rows (Latest / Before / Built / Outside) | Third telling of the same facts, after "One thread" and the Experience page |
| Justdiggit as a numbered project | No artifact, no link, no figures. Becomes an Experience entry. |
| `data-ooh="spend_m"` from the hero band | Synthetic figure in a real-metrics group |
| "The analyzer is live. More on the way." closing on Projects | Says nothing; the cards already say it |
| Duplicate CTA rows | Hero, each card, and the closing had overlapping actions. One action row per block. |
| "Building" status | The project is frozen and live |

---

## 15. Wow factor — where it actually comes from

Ranked by how much each contributes, so effort goes to the right places.

1. **The "One thread" section.** A claim followed immediately by its proof, in three
   editorial steps. Nothing else on the site makes a recruiter think "that's a person who
   can connect things".
2. **Real screenshots of a real product**, large, in the flagship and the case study. Most
   student portfolios show mockups or nothing.
3. **The disclosure interaction.** Fast, quiet, obviously considered. The site feels
   responsive to the reader rather than at them.
4. **Three editorial compositions instead of a card grid.** Alternating sides, a pull-quote
   for the published piece, an app-shaped frame for the software one.
5. **Typography.** The positioning line in Newsreader at display size, mono figures, the
   existing hairline rules and numbered section heads.
6. **Restraint.** No gradients, no particles, no counters. On a page this carefully set,
   their absence reads as confidence.

---

## 16. Unchanged from the existing visual identity

Listed explicitly so implementation does not drift:

- **Typefaces**: Newsreader (display/headings) + Inter (body/UI) + mono stack (eyebrows,
  stamps, figures)
- **Palette**: `--paper` `#faf7f2`, `--card` `#fffdfa`, `--ink` `#17150f`,
  `--accent` sienna `#8a3f2b`, `--accent-2` teal `#2f5d62`, and the full dark-mode
  re-selection including the `--accent-ink` flip and the deliberately *lower*-contrast dot
  grid
- **Dot grid**: 22px pitch, 1px dot, derived from `--rule`
- **Surfaces**: cards on `--card`, hairline `--rule` borders, the two-layer shadow
- **Section heads**: `.shead` with `.snum` numbering and the trailing rule
- **Reveal**: `.rv` on scroll, 650ms, `IntersectionObserver`, reduced-motion guarded
- **Editorial tone** in the writing, including the Nishat Sutas public-context treatment
  and its sources note
- **Buttons, nav, topbar sticky behaviour, footer**

Every new component is assembled from these. **No new colour, no new typeface, no new
shadow, no new motion type.**

---

## 17. Implementation order

1. Disclosure component — CSS + JS, built and tested in isolation first
2. Accessibility gaps — skip link, `aria-current` (independent, no design risk)
3. Homepage — hero positioning, stat-band fix, "One thread", flagship block
4. Selected-work cards with disclosure; remove `.status` rows
5. "How I work" section
6. `projects.html` — same card system, OOH links to case study
7. `experience.html` — disclosure per role, Justdiggit added, "→ led to" links
8. `ooh.html` case study
9. Imagery — copy analyzer screenshots, BarakahLink static fallback
10. QA: keyboard, screen-reader labels, 390px, dark mode, reduced motion, no-JS
11. **Pause** for the Power BI build
12. Case-study section 06, flagship chip, skills row — only then
