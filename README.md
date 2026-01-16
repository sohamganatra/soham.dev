# soham.dev

Personal website for Soham Ganatra — founder of [Composio.dev](https://composio.dev), building the missing link to AGI.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Analytics**: Vercel Analytics
- **Font**: Inter

## Getting Started

```bash
# Install dependencies
npm install
# or
bun install

# Run development server
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Create production build |
| `npm run start` | Run production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
soham.dev/
├── app/
│   ├── layout.tsx      # Root layout with metadata & analytics
│   ├── page.tsx        # Home page component
│   ├── page.module.css # Page styles
│   ├── globals.css     # Global styles & Tailwind
│   └── favicon.ico
├── public/             # Static assets
├── next.config.ts      # Next.js config
├── tsconfig.json       # TypeScript config
└── package.json
```

## Features

- Responsive design (mobile-first)
- Dark mode support
- SEO optimized with Open Graph tags
- Vercel Analytics integration
- Accessible (reduced motion support)

## Deploy

Deploy instantly on [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## License

MIT
