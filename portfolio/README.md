# Elias — Portfolio

A static React portfolio built with **Vite + React** and plain **CSS** (no Tailwind, no backend, no database). The contact form sends emails straight to your inbox using **EmailJS**.

## 1. Install & run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## 2. Add your content

- **Projects** — edit `src/data/projects.js`. Add an `image` (import from `src/assets` or a URL) to each project to replace the placeholder tile.
- **Skills** — edit `src/data/skills.js`.
- **Quick facts** (About page) — edit `src/data/facts.js`.
- **Your photo** — pass an `imageSrc` prop to `<Hero />` (in `src/pages/Home.jsx`) and `<AboutSection />` (in `src/pages/Home.jsx` and `src/pages/About.jsx`). Example:

  ```jsx
  import portrait from '../assets/portrait.jpg';
  <Hero imageSrc={portrait} />
  ```

- **Social links / email** — update the links in `src/components/Header.jsx`, `src/components/Footer.jsx`, and `src/components/ContactSection.jsx`.
- **Colors** — all design tokens live at the top of `src/index.css` (`--color-bg`, `--color-primary`, etc.), so you can re-theme the whole site from one place.

## 3. Set up the contact form (EmailJS)

No backend is needed — EmailJS sends the form submission straight to your email from the browser.

1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. **Email Services** → Add a new service (e.g. connect your Gmail) → copy the **Service ID**.
3. **Email Templates** → Create a template using the variables `{{from_name}}`, `{{from_email}}`, `{{message}}` → copy the **Template ID**.
4. **Account → General** → copy your **Public Key**.
5. Copy `.env.example` to `.env` and fill in the three values:

   ```bash
   cp .env.example .env
   ```

   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
   ```

6. Restart `npm run dev` after editing `.env`.

Test the form locally before deploying — you should receive an email a few seconds after submitting.

## 4. Deploy to Vercel

This project is already configured for Vercel (see `vercel.json`, which handles client-side routing for `/works`, `/about-me`, `/contacts`).

1. Push this project to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo. Vercel auto-detects the Vite framework — no build settings need to change.
3. **Before deploying**, add your three EmailJS env variables in the Vercel project settings (**Settings → Environment Variables**):
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. Deploy. That's it — no server, no database.

If you ever update the env variables after the first deploy, trigger a redeploy so the new values are baked into the build.

## Project structure

```
src/
  components/   Header, Footer, Hero, ProjectCard, sections, icons...
  pages/        Home, Projects (/works), About (/about-me), Contacts (/contacts)
  data/         projects.js, skills.js, facts.js — your editable content
  index.css     design tokens + global styles
```

## Tech

- React 18 + React Router 6
- Vite
- Plain CSS (CSS variables, no framework)
- EmailJS for the contact form (no backend/DB)
