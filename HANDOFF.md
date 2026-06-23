# Handoff — exley.info redesign

Personal site **exley.info** (`te5msride.github.io`), Jekyll/al-folio.
Run locally: `bundle exec jekyll serve --livereload` → http://localhost:4000
(or `docker compose up`). Clean a stale build with `bundle exec jekyll clean`.

---

## Done so far

### Pixel animation — `_includes/inchworm_anim.html`
Two-act loop (inchworm + gripper) on one canvas. Embed with `{% include inchworm_anim.html %}`. Click to pause.
- **Frame-rate independent** — advances 60 ticks/sec on any display refresh rate (was running ~2.4× fast on 144Hz).
- **Theme-aware** — reads `data-theme` + `--global-bg-color`; white robot on dark, black robot on paper; re-renders live on toggle (MutationObserver).
- Oscilloscope sine slowed via `SCYCLE = CYCLE * 1.35` (calmer ~3 humps).
- Render split into `frame(lt)` (pure render) + `draw(ts)` (wall-clock timing) so the GIF builder can reuse the render.
- Key constants: `P=8, W=84, H=30, CX=11, CB=25`, act durations `DUR1=580` (inchworm), `DUR2=640` (gripper).

### GIF fallbacks (no-JS only; live site uses the canvas)
- `assets/img/inchworm.gif` — dark palette (white robot), ~98KB
- `assets/img/inchworm-light.gif` — light palette (black robot), ~98KB
- Built at P=5, 20fps, frame-differenced + `convert -layers optimize`.

### Design language — warm-minimal (replaces al-folio purple/cyan)
Applied **site-wide** in `_sass/_themes.scss` (`:root` + `html[data-theme="dark"]`):
- Light: paper `#f3efe6`, ink `#2c281f`, muted `#7a7264`, accent burnt-orange `#b4541f`, card `#faf7f0`
- Dark: bg `#14110d`, text `#d9d2c4`, muted `#9a9385`, accent `#e0915a`, card `#1f1b15`
- Added `$font-mono` and `$font-serif` in `_sass/_variables.scss`.

### Landing — `_pages/home.md`, `_layouts/home.html`, `_includes/hero.html`, `_sass/_hero.scss`
- Animation hero (no kicker; name leads; subhead carries the keywords).
- Italic-serif tagline: *"monolithic systems: immediate functionality, off the print bed."*
- **Highlights strip** under the bio: cover + latest paper + award (data-driven, see below).
- Then selected work + news columns (unchanged structure).

### About — `_pages/about.md`, `_layouts/about_wide.html`, `_sass/_about_wide.scss`
- Headshot (`prof_pic.jpg`) left, animation right, same italic-serif tagline.

### Work — `_pages/work.md`, `_sass/_work.scss`
- MELEGROS video hero band (`assets/video/hero.mp4`) with a "Work" title overlay above the searchable project grid.

### MELEGROS project — `_projects/melegros.md`, `_layouts/project.html`, `_sass/_project.scss`
- Advanced Science cover rendered as a floated figure (`cover_image` / `cover_caption` front matter).

---

## How content is wired (for adding papers)

- **Publications list** — `_bibliography/papers.bib`, rendered on `_pages/publications.md` via the bibliography tag. Add a BibTeX entry to list a paper.
- **Project pages + work grid** — `_projects/<slug>.md`. Front matter fields:
  `layout: project`, `title`, `permalink`, `featured`, `order`, `year`, `tags`,
  `thumbnail`, `hover_video`, `hero_video` / `hero_poster`,
  optional `cover_image` / `cover_caption`, `summary`, `paper: {title, url}`, `citation`.
- **Home highlights** — edit the `highlights:` list in `_pages/home.md`:
  ```yaml
  - kind: cover|paper|award
    image: /assets/img/...        # optional thumbnail (cover cards)
    label: "On the cover"
    text: "Advanced Science"
    meta: "2026"
    href: /projects/melegros/
  ```
- **Selected work on home** — projects with `featured: true` feed the home selected-work section.
- Journal cover image lives at `assets/img/news/advanced-science-cover-2026.jpg`.

---

## Open follow-ups
- **Add a C.7 project page** — BOAT: Bidirectional Optical Sensors for Actuation Tracking in Soft Lattice Systems (Trunin, Gay, Nardin, Exley, Cafiso, Beccai; IEEE/ASME AIM 2026, accepted). Bib entry already added; project page TODO (Trevor to add).
- Restyle the **publications page** to match the warm theme (still a plain bibliography) + per-paper PDF / DOI / cite buttons.
- **Journal Covers** gallery page once there are ~3–4 covers (one isn't worth a page).
- Deferred earlier: navbar logo mark, Videos/Press page.
- The `hero.webm` / `hero-poster.jpg` fields in `home.md` are now unused (hero is the animation, not a video).
- Verify locally — Jekyll wasn't runnable in the build environment used. Check: both videos, the floated cover wrap, and the dark/light toggle (animation inversion + footer).
