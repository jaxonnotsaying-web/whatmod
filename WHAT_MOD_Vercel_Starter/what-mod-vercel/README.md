# WHAT MOD — Version 0.1 prototype

A beginner-friendly static website prototype for a mod-sharing community. It is ready to deploy to Vercel as a static site.

## Included
- Responsive homepage and mod cards
- Search and game-category filters
- Login/sign-up modal UI (demo only)
- Upload modal UI (demo only)
- Planned safety-review process section

## Important: what is not connected yet
This is a front-end prototype, not a production mod platform. It does **not** create real accounts, upload files, store mods, download files, or run AI scans/simulations. The sample mod cards are not real mods.

Before accepting public uploads, add:
1. Real authentication and a database (for example, Supabase Auth + Postgres).
2. Private object storage for uploaded files.
3. Server-side file size/type limits, archive extraction limits, malware scanning, and moderation.
4. A separate isolated sandbox/VM service for testing supported mod formats. Never execute uploaded files on the website server.
5. A review queue. AI findings should be one signal, not a guarantee that a file is safe.
6. Rate limits, abuse reporting, privacy policy, terms, and backups.

## Deploy to Vercel
1. Extract the ZIP.
2. Create a GitHub repository and upload the files (`index.html`, `style.css`, `app.js`, `vercel.json`, `README.md`) to the repository root.
3. Sign in to Vercel and choose **Add New → Project**.
4. Import the repository.
5. Framework preset: **Other**. Leave build command and output directory empty/default for this static site.
6. Click **Deploy**.
7. Open the generated `.vercel.app` address to view the site.

You can also deploy with the Vercel CLI, but GitHub import is the easier first route.

## Customize
Edit `index.html` for page text and sample listings, `style.css` for design, and `app.js` for front-end interactions.
