# Nur Munirah — Portfolio Website (October 2026)

React 19 + Vite 8 + Tailwind CSS 4. Designed for Nur Munirah's latest uploaded resume.

## Quick start (Windows PowerShell)

From the directory containing `package.json`:

```powershell
npm.cmd install
npm.cmd run dev
```

Visit the localhost address printed in the terminal, usually http://localhost:5173/.

Build for deployment:

```powershell
npm.cmd run build
```

The built site is written to `dist/`.

## Edit your content

- `src/data/portfolioData.js` — all biography, skills, projects, experience, education, awards, languages and contact content.
- `src/components/` — website sections/components.
- `src/index.css` — shared style, animation and colour tokens.
- `public/profile.jpg` and other images — site imagery.
- `index.html` — title and SEO description.

## Update your existing VS Code checkout (`portfolio-1`)

1. Keep a backup of `portfolio-1`.
2. Use the companion `Portfolio_Update_Files_Only.zip` to overwrite the matching files in `portfolio-1`, retaining your `.git` directory and any local changes you want to keep.
3. Run `npm.cmd install`, `npm.cmd run dev` and `npm.cmd run build`.
4. Review website details and media before committing/pushing.

## Privacy / public portfolio check

The site intentionally excludes full home address, phone number, personal referee details, client system addresses, internal technical data and the PDF resume. The healthcare client engagement is described generically; only publish a client/project name after checking your employer's confidentiality rules. The SAP CPI monitoring graphic is illustrative; it is not an actual client dashboard screenshot.

## Notes

- Availability is March 2027; bachelor's degree is expected November 2027. These dates describe different milestones.
- This source is not automatically deployed or pushed to GitHub/Vercel.
