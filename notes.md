# Build notes

## 2026-11-05 — First version

Built from the approved plan: 5-page static site (Home, About, Projects, Résumé, Contact),
plain HTML/CSS/minimal JS, no build step, GitHub Pages-ready.

**Design device:** a recurring "memo header" (To/From/Re) on every page, drawn from the idea
that the student already writes briefing-style memos and KPI trackers in her consulting and
TJX work — chosen as the site's one distinctive device instead of a generic hero section.

**Palette:** ground `#FAFAF8`, ink `#1C1E21`, accent `#1F3A5F` (navy), signal `#B08A3E` (muted
gold, used only for the one hover/highlight moment), surface `#F0F0EC`, muted `#6B7280`.

**Type:** Fraunces (headlines) + IBM Plex Sans (body), loaded from Google Fonts.

**Motion:** one page-load moment only — a highlighter stroke under the homepage's placeholder
identity line. CSS-only, disabled under `prefers-reduced-motion`.

**Decisions made for the student (Auto fields):**
- Separate HTML pages rather than single-page sections.
- Site title = her name ("Misa Genest").
- Playfulness level 1–2 (quiet, professional) — no illustration, no color beyond the two-tone
  palette.
- No photo/résumé files existed in `site/` at build time, so both fall back to their
  placeholder states per the brief's explicit rule.

**What's demo vs. real:** nothing fabricated — bio and experience bullets come only from facts
already confirmed in `project/industry_interview.md`. Every blank spot (identity sentence,
project links, contact details, résumé, photo) is marked `[PLACEHOLDER]`.

**What I could not check:** whether the site renders correctly once actually deployed to
GitHub Pages (not yet pushed to a repo) — only checked locally in the Browser pane.

**Next round ideas:**
1. Write the real one-sentence identity line for Home.
2. Add `resume.pdf` and `photo.jpg`/`photo.png`, then wire them in.
3. Fill in the real project links once the report, slides, and chart exist.
