# animation1

Next.js (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui project with a
scroll-driven `ContainerScroll` hero (`components/ui/container-scroll-animation.tsx`).

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Go to https://vercel.com/new and import the `paololache/animation1` GitHub repo.
2. Leave the defaults — Vercel detects Next.js automatically
   (build command `next build`, no environment variables needed).
3. Click **Deploy**. Every push to the repo triggers a new deployment.

Remote images are served through `next/image`; allowed hosts are listed in
`images.remotePatterns` in `next.config.ts`.
