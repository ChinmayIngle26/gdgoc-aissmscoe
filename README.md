# GDG On Campus — AISSMS College of Engineering, Pune

Official website for the **Google Developer Groups On Campus** chapter at AISSMS College of Engineering, Pune. Explore tech events, coding workshops, team members, blogs, and more.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org) (App Router, Turbopack)
- **UI:** React 19, Tailwind CSS 3.4
- **Animations:** Framer Motion 12
- **CMS:** [Contentful](https://www.contentful.com)
- **Icons:** react-icons
- **Deployment:** [Vercel](https://vercel.com) (ISR, Analytics, Speed Insights)

## Pages & Sections

| Page | Sections |
| --- | --- |
| **Home** (`/`) | Hero, About, Events, Team Leads, Blogs, Gallery |
| **Team** (`/team`) | Full team roster organized by year → department → members |

Floating social links (Discord, WhatsApp, LinkedIn) are available site-wide.

## Getting Started

### Prerequisites

- Node.js ≥ 18
- A [Contentful](https://www.contentful.com) space with the required content types (`teamYear`, `department`, `teamMember`, `event`, `blogs`)

### Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=<your-space-id>
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=<your-access-token>
```

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
app/
├── page.jsx              # Homepage (server component)
├── layout.jsx            # Root layout, metadata, fonts, analytics
├── globals.css           # Global styles & Tailwind config
├── lib/
│   └── contentful.js     # Contentful client & data-fetching functions
├── team/
│   ├── page.jsx          # Team page (server component)
│   └── TeamContent.jsx   # Team page animations (client component)
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Member.jsx
│   ├── EventCard.jsx
│   └── pages/            # Homepage section components
│       ├── Home.jsx
│       ├── About.jsx
│       ├── Events.jsx
│       ├── Team.jsx
│       ├── Blogs.jsx
│       └── Gallery.jsx
└── utils/
```

## Contentful Content Model

| Content Type | Description |
| --- | --- |
| `teamYear` | Groups departments by academic year |
| `department` | Department name + list of team members |
| `teamMember` | Name, role, image, GitHub, LinkedIn, Twitter/Instagram |
| `event` | Event title, description, image, date, link |
| `blogs` | Blog title, content/link |

## Theme

Custom color palette defined in `tailwind.config.mjs`:

| Color | Hex |
| --- | --- |
| Dark Purple | `#0A002D` |
| Purple | `#41196F` |
| Light Purple | `#8172E9` |
| Cream | `#FAF2E1` |
| Light Pink | `#FFCFCF` |

Fonts: **Clash Display** (headings) and **Darker Grotesque** (body).

## Deployment

The site is deployed on **Vercel** with:

- **ISR** (Incremental Static Regeneration) — revalidates every 60 seconds
- **Vercel Analytics** & **Speed Insights** for performance monitoring
- Security headers (X-Content-Type-Options, X-Frame-Options, Referrer-Policy)
- Static asset caching for images and fonts

To deploy your own instance, push to a GitHub repo and import it on [Vercel](https://vercel.com/new). Set the environment variables in the Vercel dashboard.
