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
- `/phones` — multi-brand catalog grouped by manufacturer
- `/product/iphone-17-pro` — official iPhone 17 Pro editorial page
- `/product/iphone-17-pro-max` — product experience
- `/cart` — persistent cart
- `/checkout` — static demo checkout

Commerce data for iPhone 17 Pro Max lives in `lib/products.ts`; the wider verified catalog and official-source links live in `lib/catalog.ts`. Products without a complete official regional information package remain explicitly marked “Coming Soon.” Official Apple product photography is vendored into `public/products/iphone-17-pro-max/`. The cart persists in `localStorage`; checkout does not process payments.

## One-time image vendoring

After the asset-vendor change lands on `main`, manually run **Vendor iPhone 17 Pro Max assets** once from GitHub Actions. The dispatch-only workflow verifies and stores the official product photography locally, switches the product model to `/nova-phone-store/products/iphone-17-pro-max/` paths, commits those changes to `main`, and deletes itself in that same commit. Until that import runs, the identical official Apple Newsroom files are used directly as temporary bootstrap sources.

The project uses Next.js static export with the `/nova-phone-store` base path for GitHub Pages.
