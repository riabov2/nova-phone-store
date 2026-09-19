import { iphone17ProMax } from "./products";

export type CatalogStatus = "Available" | "Coming Soon";

export type CatalogProduct = {
  slug: string;
  brand: string;
  model: string;
  status: CatalogStatus;
  descriptor: string;
  officialProductUrl: string;
  officialSpecUrl?: string;
  image?: string;
  storage?: readonly string[];
  featured?: boolean;
};

const appleNewsroom = "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/";

export const brandOrder = ["Samsung", "Apple", "Vivo", "Honor", "Tecno", "Infinix", "Oppo", "Xiaomi", "Redmi"] as const;

export const brandIntros: Record<(typeof brandOrder)[number], string> = {
  Samsung: "Galaxy innovation across flagship and foldable form factors.",
  Apple: "The iPhone Pro family, built around Apple silicon and Pro camera systems.",
  Vivo: "Imaging-led flagship smartphones from vivo.",
  Honor: "Distinctive smartphones designed around durability and display technology.",
  Tecno: "Camera-focused mobile technology from TECNO.",
  Infinix: "Performance and imaging devices from Infinix.",
  Oppo: "Find-series flagship imaging and design from OPPO.",
  Xiaomi: "Xiaomi flagship phones and imaging technology.",
  Redmi: "Performance-focused Redmi smartphones.",
};

export const catalogProducts: readonly CatalogProduct[] = [
  { slug: "galaxy-s26-ultra", brand: "Samsung", model: "Galaxy S26 Ultra", status: "Coming Soon", descriptor: "Official regional details and imagery pending.", officialProductUrl: "https://www.samsung.com/", featured: true },
  { slug: "galaxy-z-fold7", brand: "Samsung", model: "Galaxy Z Fold7", status: "Coming Soon", descriptor: "Official catalog package pending.", officialProductUrl: "https://www.samsung.com/global/galaxy/galaxy-z-fold7/", featured: true },
  { slug: "iphone-17-pro-max", brand: "Apple", model: "iPhone 17 Pro Max", status: "Available", descriptor: "6.9-inch Super Retina XDR display, A19 Pro and a 48MP Pro Fusion camera system.", officialProductUrl: appleNewsroom, officialSpecUrl: appleNewsroom, image: iphone17ProMax.images.hero, storage: ["256GB", "512GB", "1TB", "2TB"], featured: true },
  { slug: "iphone-17-pro", brand: "Apple", model: "iPhone 17 Pro", status: "Available", descriptor: "6.3-inch Super Retina XDR display, A19 Pro and a 48MP Pro Fusion camera system.", officialProductUrl: appleNewsroom, officialSpecUrl: appleNewsroom, image: iphone17ProMax.images.finishes, storage: ["256GB", "512GB", "1TB"], featured: true },
  { slug: "vivo-x300-pro", brand: "Vivo", model: "vivo X300 Pro", status: "Coming Soon", descriptor: "Official regional details and imagery pending.", officialProductUrl: "https://www.vivo.com/" },
  { slug: "honor-x9d", brand: "Honor", model: "HONOR X9d", status: "Coming Soon", descriptor: "Official regional details and imagery pending.", officialProductUrl: "https://www.honor.com/" },
  { slug: "tecno-camon-40-premier-5g", brand: "Tecno", model: "TECNO CAMON 40 Premier 5G", status: "Coming Soon", descriptor: "Official catalog package pending.", officialProductUrl: "https://www.tecno-mobile.com/" },
  { slug: "infinix-note-40-pro-plus-5g", brand: "Infinix", model: "Infinix NOTE 40 Pro+ 5G", status: "Coming Soon", descriptor: "Official catalog package pending.", officialProductUrl: "https://www.infinixmobility.com/" },
  { slug: "infinix-zero-40-5g", brand: "Infinix", model: "Infinix ZERO 40 5G", status: "Coming Soon", descriptor: "Official catalog package pending.", officialProductUrl: "https://www.infinixmobility.com/" },
  { slug: "infinix-gt-20-pro", brand: "Infinix", model: "Infinix GT 20 Pro", status: "Coming Soon", descriptor: "Official catalog package pending.", officialProductUrl: "https://www.infinixmobility.com/" },
  { slug: "oppo-find-x9-pro", brand: "Oppo", model: "OPPO Find X9 Pro", status: "Coming Soon", descriptor: "Official regional details and imagery pending.", officialProductUrl: "https://www.oppo.com/" },
  { slug: "oppo-find-x8-ultra", brand: "Oppo", model: "OPPO Find X8 Ultra", status: "Coming Soon", descriptor: "Official regional details and imagery pending.", officialProductUrl: "https://www.oppo.com/" },
  { slug: "xiaomi-17-ultra", brand: "Xiaomi", model: "Xiaomi 17 Ultra", status: "Coming Soon", descriptor: "Official regional details and imagery pending.", officialProductUrl: "https://www.mi.com/global/" },
  { slug: "xiaomi-17-pro-max", brand: "Xiaomi", model: "Xiaomi 17 Pro Max", status: "Coming Soon", descriptor: "Official regional details and imagery pending.", officialProductUrl: "https://www.mi.com/global/" },
  { slug: "redmi-k80-pro", brand: "Redmi", model: "Redmi K80 Pro", status: "Coming Soon", descriptor: "Official regional details and imagery pending.", officialProductUrl: "https://www.mi.com/global/" },
];

export const productsByBrand = brandOrder.map(brand => ({ brand, intro: brandIntros[brand], products: catalogProducts.filter(product => product.brand === brand) }));
export const getCatalogProduct = (slug: string) => catalogProducts.find(product => product.slug === slug);
