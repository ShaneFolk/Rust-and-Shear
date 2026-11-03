# Build Log

## Entry 1

**Date:** 2026-10-16

**Phase:** Project setup / starter template

**What I built:**

- Removed the Create Next App boilerplate (starter home page, default SVGs in `/public`, and default styles in `globals.css`).
- Set up Google Fonts with `next/font`: Oswald for headings, Roboto for body text.
- Added the theme colors to Tailwind: concrete (#3A3A3A), steel (#6B7280), rust (#B7410E), off-white (#F5F2EB), and near-black (#1C1C1C).
- Created a shared layout with a header (logo + Home, Services, Barbers, Book links) and a footer.
- Added placeholder pages for `/`, `/services`, `/barbers`, `/book`, `/book/confirmed`, `/manage`, `/admin`, and `/under-the-hood`.
- Created `/public/images` for future photos.
- Installed `@neondatabase/serverless` and created `src/lib/db.js`, which exports a `sql` client that reads `DATABASE_URL`.
- Confirmed `.env.local` is ignored by git.

**Why I chose this approach:**
I used Next.js instead of plain React because it has server-side code built in, so the booking backend can live in the same project without a separate server. I started from a fresh template instead of my old one so there was no unused code I couldn’t explain. I defined the theme colors as Tailwind tokens so the palette is set in one place and used through class names like `bg-rust`. I chose raw SQL instead of an ORM because writing the queries myself is the skill this project is meant to show.

**Problems and fixes:**
None. Setup went smoothly.

**What I learned:**

The root layout wraps every page. It renders the header and footer once, and Next.js swaps the page content in through the children prop.

Secrets like the database connection string live in environment variables. The local file is git-ignored so credentials never hit the repo, and Vercel injects the production value at runtime.

Theme colors live in `globals.css`. This project uses Tailwind v4, which has no `tailwind.config.js`; colors and fonts are set in a `@theme` block in the CSS file. So `globals.css` has the Tailwind import plus that block, and none of the old default styles.
