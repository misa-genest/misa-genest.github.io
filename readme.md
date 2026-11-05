# Misa Genest — personal site

A static site for RESECON 490AI (UMass Amherst): Home, About, Projects, Résumé, Contact.
Audience: recruiters in corporate strategy and consulting.

## Run it locally

Double-click `index.html`, or from this folder:

```
python3 -m http.server 8000
```

then open `http://localhost:8000`.

## Deploy (GitHub Pages)

This folder (`site/`) is a static site with no build step: `index.html` is at the top level,
all links are relative, and all file/folder names are lowercase with no spaces. Point GitHub
Pages at this folder (or push its contents to the repo root / a `gh-pages` branch) and it will
work as-is. See the course's `anti-slop-web` skill, section 11, for the step-by-step.

## What's placeholder vs. real

Every placeholder is prefixed `[PLACEHOLDER]` so it's easy to find and replace:

- **Home** — the one-sentence "Re:" line, and the photo square.
- **Projects** — the project summary (needs to be rewritten to 150–250 words once the report
  is final) and the report/slides/chart links.
- **Résumé** — shows "coming soon." Add a file named `resume.pdf` to this folder and update
  `resume.html` to link it (`<a href="resume.pdf">`) instead of showing the notice.
- **Contact** — email, GitHub, and LinkedIn are all placeholders; no real values were supplied.
- **Home photo** — if you add `photo.jpg` or `photo.png` to this folder, swap the placeholder
  square in `index.html` for an `<img>` tag pointing to it.

Everything else (bio, experience, project description) is drawn only from facts already
confirmed in `project/industry_interview.md` and this session — nothing was invented. GPA,
transcript, student ID, phone, and home address were deliberately left off per the brief.
