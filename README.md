# Portfolio — Nguyễn Đức Luận

Premium personal portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS 3**
- **Framer Motion 11**

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm run start
```

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel --prod
```

### Netlify

1. Push to GitHub
2. Connect repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`

## Customization

All content is in `lib/data.ts` — edit this file to update:
- Personal information (name, bio, email, links)
- Skills and proficiency levels
- Experience entries
- Project details
- Timeline events
- Contact links

## Sections

1. **Hero** — Name, role, CTA buttons
2. **About** — Bio, quick stats
3. **Skills** — Tech stack with proficiency bars
4. **Experience** — Work history with achievements
5. **Projects** — Featured project case studies
6. **Achievements** — Engineering accomplishments
7. **AI Workflow** — AI-augmented development tools
8. **Timeline** — Career path
9. **Contact** — Email CTA + social links

## To Fill In

- `lib/data.ts` → `personalInfo.linkedin` — Add your LinkedIn URL
- `lib/data.ts` → `timeline[2].description` — Add your university details
- Add a profile photo to `public/` and update `components/sections/About.tsx`
