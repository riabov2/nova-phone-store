export const colors = [
  { id: "black", name: "Black", hex: "#242424" },
  { id: "white", name: "White", hex: "#f4f1ea" },
  { id: "mist-blue", name: "Mist Blue", hex: "#b7c9d6" },
  { id: "sage", name: "Sage", hex: "#b8c4af" },
  { id: "lavender", name: "Lavender", hex: "#cbc2d8" },
] as const;

export type ColorId = (typeof colors)[number]["id"];
export type Storage = "256 GB" | "512 GB";

export const iphone17 = {
  slug: "iphone-17",
  name: "iPhone 17",
  eyebrow: "New",
  tagline: "Designed to go further.",
  description: "A brilliant display, advanced Fusion cameras and A19 performance in a refined everyday design.",
  price: { "256 GB": 959, "512 GB": 1209 } satisfies Record<Storage, number>,
  colors,
  storage: ["256 GB", "512 GB"] as Storage[],
};

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);
