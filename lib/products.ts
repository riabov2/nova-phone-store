export const iphone17ProMax = {
  slug: "iphone-17-pro-max",
  name: "iPhone 17 Pro Max",
  eyebrow: "The ultimate iPhone",
  tagline: "Pro power. Max canvas.",
  description: "A 6.9-inch Super Retina XDR display, A19 Pro performance and a three-camera 48MP Fusion system.",
  image: "/nova-phone-store/products/iphone-17-pro-max/hero.svg",
  cameraImage: "/nova-phone-store/products/iphone-17-pro-max/camera.svg",
  finishes: [{ id: "deep-blue", name: "Deep Blue", hex: "#253244" }, { id: "cosmic-orange", name: "Cosmic Orange", hex: "#c86c38" }, { id: "silver", name: "Silver", hex: "#d8d8d2" }],
  storage: ["256 GB", "512 GB", "1 TB", "2 TB"],
  prices: { "256 GB": 1469, "512 GB": 1719, "1 TB": 1969, "2 TB": 2469 },
  specs: { Display: "6.9-inch Super Retina XDR OLED with ProMotion up to 120Hz.", Performance: "A19 Pro with a 6-core GPU and vapor-chamber cooling.", Camera: "Three 48MP Fusion cameras and an 18MP Center Stage front camera.", Storage: "256GB, 512GB, 1TB or 2TB.", Design: "Precision aluminium unibody with Ceramic Shield protection." },
} as const;
export type FinishId = (typeof iphone17ProMax.finishes)[number]["id"];
export type Storage = (typeof iphone17ProMax.storage)[number];
export const formatPrice = (value: number) => new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);
