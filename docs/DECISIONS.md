# Decisions

One entry per significant choice: what I picked, what else I could have used, why, and what I gave up.

---

## 1. Next.js instead of plain React

**Date:** 2026-10-16

**Choice:** Next.js (App Router)

**Alternatives:** Vite + React with a separate Express API

**Why:** One codebase, one deploy, and no CORS setup.

**Tradeoff:** The frontend and backend are no longer separate. In my MySQL class we used Vite + React with a separate Express API, so this approach required additional research and learning.

---

## 2. Fresh template instead of my old starter

**Date:** 2026-10-16

**Choice:** A new Create Next App project, with the boilerplate removed

**Alternatives:** Reusing my existing starter template

**Why:** The template I was originally given had a lot of extra features built in, and for this project I wanted a clean slate. My old project template was also dated and missing updates.

**Tradeoff:** The time I spent building my original template didn't carry over, and starting from scratch means I have to redo the same setup for every new project.

---

## 3. Tailwind CSS with a custom theme

**Date:** 2026-10-16

**Choice:** Tailwind CSS v4, with colors and fonts defined once in the `@theme` block in `globals.css` and used as classes like `bg-rust`

**Alternatives:** CSS Modules, shadcn/ui, MUI

**Why:** I wanted a more custom look, and I find Tailwind classes easier to read and follow.

**Tradeoff:** I have to spend more time building custom buttons, forms and modals that a component library would provide for me.

---

## 4. Raw SQL instead of an ORM

**Date:** 2026-10-16

**Choice:** `@neondatabase/serverless` with hand-written queries

**Alternatives:** Prisma, Drizzle

**Why:** I wanted to showcase my SQL knowledge, and an ORM would hide it.

**Tradeoff:** I have to write more code, and there is no automatic type checking on queries. I also have to protect against SQL injection myself by always using parameters.
