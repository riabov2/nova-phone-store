# NOVA — premium smartphone store

A production-ready, dark cinematic ecommerce experience for iPhone 17, built with Next.js App Router, React, TypeScript, GSAP and handcrafted responsive CSS.

## Start locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality commands

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Routes

- `/` — immersive storefront, product stories, specifications and service benefits
- `/phones` — catalogue
- `/product/iphone-17` — gallery and product configurator
- `/cart` — persistent cart
- `/checkout` — non-transactional demonstration checkout

## Architecture

- `app/` — routes, SEO metadata and global design system
- `components/` — navigation, commerce, gallery and storytelling sections
- `lib/` — typed product and cart data
- `public/products/iphone-17/` — local, original device illustrations

The cart is stored safely in `localStorage` (`nova-cart-v1`). Checkout does not process payments. Product facts and Spain pricing were based on Apple Spain's iPhone 17 technical specifications and purchase pages when the catalogue was authored; verify commercial details before launch.

## Deployment

Connect the repository to Vercel or run `npx vercel --prod`. No secrets are required for the current frontend-only demo.
