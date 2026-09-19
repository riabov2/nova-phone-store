export const productAssetPath = (name: string) => `/nova-phone-store/products/iphone-17-pro-max/${name}`;

// Temporary bootstrap sources. The one-time vendor workflow downloads these
// official Apple images and replaces the URLs with basePath-safe local paths.
const officialProductImages = {
  hero: "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-cosmic-orange-250909_inline.jpg.large_2x.jpg",
  camera: "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-camera-close-up-250909_big.jpg.large_2x.jpg",
  finishes: "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-color-lineup-250909_inline.jpg.large_2x.jpg",
  design: "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-TechWoven-Case-250909_inline.jpg.large_2x.jpg",
  display: "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-iOS-26-Liquid-Glass-Lock-Screen-250909_inline.jpg.large_2x.jpg",
  performance: "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-Clear-Case-250909_inline.jpg.large_2x.jpg",
} as const;

export const iphone17ProMax = {
  slug: "iphone-17-pro-max",
  name: "iPhone 17 Pro Max",
  eyebrow: "The ultimate iPhone",
  tagline: "Pro power. Max canvas.",
  description: "A 6.9-inch Super Retina XDR display, A19 Pro performance and a 48MP Pro Fusion camera system.",
  currency: "USD",
  finishes: [
    { id: "cosmic-orange", name: "Cosmic Orange", hex: "#d86f36", imagePosition: "50%" },
    { id: "deep-blue", name: "Deep Blue", hex: "#26334e", imagePosition: "0%" },
    { id: "silver", name: "Silver", hex: "#d9d9d6", imagePosition: "100%" },
  ],
  storage: ["256GB", "512GB", "1TB", "2TB"],
  prices: { "256GB": 1199, "512GB": 1399, "1TB": 1599, "2TB": 1999 },
  images: {
    hero: officialProductImages.hero,
    camera: officialProductImages.camera,
    finishes: officialProductImages.finishes,
    design: officialProductImages.design,
    display: officialProductImages.display,
    performance: officialProductImages.performance,
  },
  specs: {
    Display: "6.9-inch Super Retina XDR display with ProMotion up to 120Hz, Always-On and 3000 nits peak outdoor brightness.",
    Performance: "A19 Pro chip with an Apple-designed vapor chamber for sustained performance.",
    Camera: "48MP Pro Fusion camera system with Main, Ultra Wide and Telephoto cameras.",
    Storage: "256GB, 512GB, 1TB or 2TB.",
    Finish: "Cosmic Orange, Deep Blue or Silver aluminium unibody.",
  },
  source: "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
} as const;

export type FinishId = (typeof iphone17ProMax.finishes)[number]["id"];
export type Storage = (typeof iphone17ProMax.storage)[number];
export const formatPrice = (value: number) => new Intl.NumberFormat("en-US", {
  style: "currency", currency: iphone17ProMax.currency, maximumFractionDigits: 0,
}).format(value);
