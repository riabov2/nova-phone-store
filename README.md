# NOVA — premium iPhone 17 store

A cinematic, mobile-first storefront for NOVA Spain, built with Next.js App Router, TypeScript, React and GSAP.

## Features

- Five production-ready routes: home, phone listing, product configurator, cart and checkout.
- Scroll-driven exploded phone sequence powered by GSAP ScrollTrigger, with reduced-motion and mobile fallbacks.
- Typed product configuration for five finishes and two storage options.
- Persistent local cart with safe restoration, quantity controls, removal and totals in EUR.
- Accessible navigation, focus states, semantic forms and responsive layouts.
- Local, original SVG product renders—there is no runtime image hotlinking.
- Checkout demonstration with validation and a clear no-payment notice.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev        # local development server
npm run lint       # Next.js ESLint rules
npm run typecheck  # strict TypeScript validation
npm run build      # optimized production build
npm start          # serve the production build
```

## Structure

- `app/` — App Router pages, metadata and global responsive design system.
- `components/` — reusable commerce and storytelling components.
- `lib/` — typed product data and cart models.
- `public/products/iphone-17/` — local, lightweight SVG product artwork.

## Product information

The storefront uses the Spain launch configuration for iPhone 17: five finishes, 256 GB and 512 GB capacities, and a starting price of 959 €. Product highlights and charging claims follow Apple's iPhone 17 product and specification pages for Spain:

- [iPhone 17](https://www.apple.com/es/iphone-17/)
- [iPhone 17 — Technical specifications](https://www.apple.com/es/iphone-17/specs/)
- [Buy iPhone 17](https://www.apple.com/es/shop/buy-iphone/iphone-17)

NOVA is an independent demonstration storefront and is not affiliated with Apple. Product artwork in this repository is original and illustrative rather than official Apple photography.

## Implementation notes

The checkout is intentionally non-transactional: it validates contact and shipping fields, but never collects or processes payment credentials. Cart state is browser-local under the versioned `nova-cart-v1` key. The exploded animation is created only on larger screens when reduced motion is not requested; content remains visible and usable in every fallback mode.
