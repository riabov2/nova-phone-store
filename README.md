# NOVA — iPhone 17 Pro Max

A focused, dark cinematic static storefront for Apple iPhone 17 Pro Max, built with Next.js App Router, React, TypeScript and GSAP.

## Development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run typecheck
npm run lint
npm test
npm run build
```

## Routes

- `/` — flagship product experience and configurator
- `/phones` — focused product overview
- `/product/iphone-17-pro-max` — product experience
- `/cart` — persistent cart
- `/checkout` — static demo checkout

Product data lives in `lib/products.ts`. Official Apple exterior imagery and detailed internal component artwork live in `public/products/iphone-17-pro-max/`. The cart persists in `localStorage`; checkout does not process payments.

## One-time image vendoring

After the asset-vendor change lands on `main`, manually run **Vendor iPhone 17 Pro Max assets** once from GitHub Actions. The dispatch-only workflow verifies and stores the official product photography locally, switches the product model to `/nova-phone-store/products/iphone-17-pro-max/` paths, commits those changes to `main`, and deletes itself in that same commit. Until that import runs, the identical official Apple Newsroom files are used directly as temporary bootstrap sources.

The project uses Next.js static export with the `/nova-phone-store` base path for GitHub Pages.
