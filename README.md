# CodeFlick

A modern, elegant digital portfolio and landing page built with cutting-edge technologies.

## 🚀 Tech Stack

This is a [Next.js](https://nextjs.org) project built with:

- **Next.js 15.4.5** with App Router and Turbopack
- **Tailwind CSS 4** (alpha) with CSS-first configuration
- **TypeScript** for type safety
- **Framer Motion** for UI animations
- **GSAP** for scroll-triggered effects
- **ESLint + Prettier** for code quality

## 🎯 Features

- Modern responsive design with CodeFlick branding
- Accessibility-first approach (WCAG 2.1 AA)
- Performance optimized with Google Fonts
- Animation architecture ready for implementation
- Data-driven content management
- Comprehensive TypeScript types

## 🛠️ Getting Started

First, install dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run type-check   # TypeScript validation
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
├── components/             # React components
│   ├── ui/                # Base UI components
│   ├── sections/          # Page sections
│   └── animations/        # Animation components
├── data/                  # Content management
├── hooks/                 # Custom React hooks
└── lib/                   # Utilities and types
```

## 🎨 Design System

- **Primary Color**: #38D6C4 (Teal Blue)
- **Secondary Color**: #1F2A37 (Midnight Navy)
- **Accent Color**: #D5F6F2 (Soft Aqua Tint)
- **Typography**: Poppins (primary), Playfair Display (headings)

## 📚 Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - Next.js features and API
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [GSAP](https://greensock.com/gsap/) - Professional animation library

## 🚀 Deploy

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
