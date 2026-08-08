# Brandigo-Marketing

Official website for Brandigo Marketing Agency — a growth marketing partner for Vidharbha businesses.

## Tech Stack
- React + TypeScript + Vite
- Tailwind CSS (shadcn/ui components)
- Supabase (Auth & Database)
- React Router (SPA routing)
- Framer Motion (animations)
- TanStack React Query

## Local Development
```bash
# Install dependencies
npm install

# Run dev server
npm run dev
# Open http://localhost:8080

# Production build
npm run build

# Preview build
npm run preview
```

## Project Structure
```
src/
├── assets/        # Images & static files
├── components/    # Reusable UI components
│   ├── admin/
│   └── ui/        # shadcn/ui components
├── hooks/         # Custom React hooks
├── integrations/  # Supabase client
├── lib/           # Utilities
└── pages/         # Route pages
```

## Deployment
This project is configured for [Vercel](https://vercel.com) (see `vercel.json`).

**Environment Variables required (add in Vercel dashboard):**
- `VITE_SUPABASE_PROJECT_ID`
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
