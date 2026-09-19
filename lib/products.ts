export const colors = [
  { id: "black", name: "Negro", hex: "#242424" },
  { id: "white", name: "Blanco", hex: "#f4f1ea" },
  { id: "mist-blue", name: "Azul Niebla", hex: "#b7c9d6" },
  { id: "sage", name: "Verde Salvia", hex: "#b8c4af" },
  { id: "lavender", name: "Lavanda", hex: "#cbc2d8" },
] as const;

export type ColorId = (typeof colors)[number]["id"];
export type Storage = "256 GB" | "512 GB";

export const iphone17 = {
  slug: "iphone-17",
  name: "iPhone 17",
  eyebrow: "Nuevo",
  tagline: "Más Pro. Más tú.",
  description: "Una pantalla extraordinaria, cámaras Fusion de 48 Mpx y la potencia del chip A19 en un diseño hecho para acompañarte cada día.",
  price: { "256 GB": 959, "512 GB": 1209 } satisfies Record<Storage, number>,
  colors,
  storage: ["256 GB", "512 GB"] as Storage[],
};

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);
