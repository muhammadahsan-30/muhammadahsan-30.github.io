# Final live portfolio review

Reviewed the **deployed** site at `muhammadahsan-30.github.io`, not the local repository,
on 4 October 2026. Scope was verification, not redesign: the content architecture and
visual direction are frozen.

Method: HTTP checks on every page and asset; rendered DOM audit of the live pages;
metadata and structured-data extraction; figure-by-figure reconciliation of the live copy
against the live analyzer payload; accessibility structure; mobile and theme rendering.

---

## MUST FIX — all three found, all three fixed

### 1. Social metadata pointed at the wrong page

`projects.html` and `ooh.html` inherited the homepage's Open Graph and Twitter tags:

| Tag | Was | Should be |
|---|---|---|
| `og:title` | "Muhammad Ahsan Sheikh" | the page's own title |
| `og:url` | `…github.io/` | the page's own URL |
| `og:description` | homepage blurb | the page's own description |
| `twitter:title` / `twitter:description` | homepage | the page's own |

**Why it mattered:** the OOH case study is the single most likely thing to be shared into
a hiring conversation. Shared, it displayed the homepage's title and pointed the recipient
at the homepage rather than the case study. A recruiter clicking it would land somewhere
other than the work being discussed.

**Fixed** on all five pages, each with its own title, canonical URL and description.

### 2. Structured data claimed a current employer that had ended

The JSON-LD `Person` block on the homepage carried:

```json
"jobTitle": "Business Advisory Intern",
"worksFor": { "@type": "Organization", "name": "KPMG" }
```

The KPMG internship ran **April–July 2026**. As of October 2026 this asserts current
employment at a Big Four firm, in machine-readable form, to anything that parses the page.

**Fixed:** `worksFor` removed; `jobTitle` is now
*"Honours Mathematics and Business Administration student"*; the description updated to
match the current homepage copy. The Experience page still carries the dated history,
which is where it belongs.

### 3. Share description was two revisions stale

Every page's `og:description` ended *"and AI tools built for both"* — copy the homepage
stopped using two passes ago. **Fixed** to the current positioning.

---

## WORTH POLISHING — considered, not actioned

| Item | Assessment |
|---|---|
| `assets/barakahlink.png` is 310 KB | The largest asset on the site. Lazy-loaded, below the fold, on a page that already loads two larger analyzer screenshots fine. Compressing risks degrading the one real product screenshot for a saving nobody will perceive. **Left alone.** |
| `resume.pdf` predates the analyzer work | Real inconsistency — the site now claims things the resume does not. **Deliberately not touched** per instruction; captured in `docs/resume-update-backlog.md` with verified current figures. |
| `projects.html` and `index.html` share two project entries | Generated from the same source today, but separate files now, so future copy edits must touch both. A build step would fix it and would be the first piece of tooling this static site has needed. Not worth it for two cards. **Left alone, noted.** |
| 404 page has no `aria-current` | Correct — no nav item is active on a 404. **Not a defect.** |

---

## LEAVE ALONE — verified working

**Performance.** Every page and asset returns 200. Slowest page 0.28s, all others under
0.1s. Fifteen assets checked, no 404s, no mixed content.

**Figures.** Every number in the live copy reconciles against the live analyzer payload:
gross shortfall 10.5m, masking 14%, 227 placements behind, 4-day detection against 31-day
reconciliation, CAD 117,058 flagged exposure, CAD 36,255 preventable, 82 flagged, 44
tests. The `data-ooh` bindings resolve from `analyzer/data.js`, so these update themselves
when the analyzer is rebuilt.

**Synthetic-data disclosure.** Present on the homepage, the case study and inside the app.
No synthetic figure appears in the hero credibility row, which carries only KPMG, Kinetic
and the two real employment figures.

**Accessibility.** One `<h1>` per page. Skip link on all five pages. `aria-current` on the
active nav item. Every disclosure is a real `<button>` with `aria-expanded`, a valid
`aria-controls` target and a `role="region"` panel. No unnamed buttons. No image without
`alt`. Every external link carries `rel="noopener"`. Panels are authored open and closed
by script, so a reader without JavaScript gets the content rather than a dead control.

**Keyboard.** Disclosures are native buttons — Enter and Space work without custom
handling, and focus is visible.

**Reduced motion.** `prefers-reduced-motion` guards both the `.rv` reveal and the
disclosure transition.

**Mobile.** 390px: `scrollWidth` equals viewport width, zero overflowing elements. The
credibility row wraps 2×2, entries stack, screenshots stay full-width rather than shrinking
to thumbnails.

**Dark and light.** Both render as designed. The analyzer previews are theme-aware via
`<picture>` and `prefers-color-scheme`, so a light screenshot never sits as a bright
rectangle on the dark page.

**Narrative.** The homepage holds its shape: identity and positioning, a credibility row
pairing employers with figures, then three work entries each opening with
context → gap → response and expanding into Saw / Asked / Built / Learned. No "Flagship"
label, no standalone thread section, no repeated Smog content, no skills wall.

---

## Recruiter-lens summary

| Lens | Verdict |
|---|---|
| **5 seconds** | Name, positioning line, KPMG and Kinetic, two real figures. Identity and credibility land without scrolling. |
| **30 seconds** | The OOH entry's opening sentence carries the whole story — agency reconciliation, found it too late, built the fix — above a real screenshot. |
| **Analytics** | Gross vs net, detection timing, validation counts and the stack are all visible without expanding anything. |
| **Business / marketing** | The Kinetic → analyzer origin is the first thing the flagship entry says, not an inference. |
| **Finance** | KPMG is now in the credibility row rather than a subline clause. The Experience page carries the Nishat Sutas public-context treatment. |
| **Technical** | Live app, two repos, 44 tests, hand-built SVG, no framework — all reachable in one click. |
| **Mobile** | Designed rather than collapsed. |

## One thing the review cannot settle

The site is honest about the analyzer's data being synthetic in every place it appears.
The **resume** is the remaining inconsistency, and only the author can resolve it.
`docs/resume-update-backlog.md` has the verified figures and the safe phrasing ready.
