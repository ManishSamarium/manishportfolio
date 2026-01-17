# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Deploy to Vercel

- **Build command:** `npm run build`
- **Output directory:** `dist`

Steps:

1. Push your repository to GitHub:

```bash
git add -A
git commit -m "Prepare for deployment"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Deploy with the Vercel web UI:

- Go to https://vercel.com and sign in.
- Click **New Project** → Import Git Repository → select your repo.
- For Framework Preset choose **Vite** (or leave autodetect).
- Set **Build Command** to `npm run build` and **Output Directory** to `dist` if prompted.
- Click **Deploy**.

3. (Optional) Deploy via Vercel CLI:

```bash
npm i -g vercel
vercel login
vercel --prod
```

Vercel will serve the `dist` folder. The included `vercel.json` ensures SPA routing to `index.html`.
