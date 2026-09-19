import { iphone17ProMax } from "./products";

export const catalogAssetPath = (slug: string, file: string) => `/nova-phone-store/products/${slug}/${file}`;

export type CatalogStatus = "Listed";

export type CatalogProduct = {
  slug: string;
  brand: string;
  model: string;
  status: CatalogStatus;
  descriptor: string;
  officialProductUrl: string;
  officialSpecUrl?: string;
  image: string;
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
  { slug: "galaxy-s26-ultra", brand: "Samsung", model: "Galaxy S26 Ultra", status: "Listed", descriptor: "Explore official product information and manufacturer specifications.", officialProductUrl: "https://www.samsung.com/us/smartphones/galaxy-s26-ultra/", image: "https://image-us.samsung.com/us/smartphones/galaxy-s26-ultra/images/galaxy-s26-ultra-features-kv.jpg", featured: true },
  { slug: "galaxy-z-fold7", brand: "Samsung", model: "Galaxy Z Fold7", status: "Listed", descriptor: "Explore official product information and manufacturer specifications.", officialProductUrl: "https://www.samsung.com/us/smartphones/galaxy-z-fold7/", image: "https://image-us.samsung.com/us/smartphones/galaxy-z-fold7/images/galaxy-z-fold7-features-kv.jpg", featured: true },
  { slug: "iphone-17-pro-max", brand: "Apple", model: "iPhone 17 Pro Max", status: "Listed", descriptor: "6.9-inch Super Retina XDR display, A19 Pro and a 48MP Pro Fusion camera system.", officialProductUrl: appleNewsroom, officialSpecUrl: appleNewsroom, image: iphone17ProMax.images.hero, storage: ["256GB", "512GB", "1TB", "2TB"], featured: true },
  { slug: "iphone-17-pro", brand: "Apple", model: "iPhone 17 Pro", status: "Listed", descriptor: "6.3-inch Super Retina XDR display, A19 Pro and a 48MP Pro Fusion camera system.", officialProductUrl: appleNewsroom, officialSpecUrl: appleNewsroom, image: iphone17ProMax.images.finishes, storage: ["256GB", "512GB", "1TB"], featured: true },
  { slug: "vivo-x300-pro", brand: "Vivo", model: "vivo X300 Pro", status: "Listed", descriptor: "Explore official product information and manufacturer specifications.", officialProductUrl: "https://www.vivo.com/en/products/x300-pro", image: "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/product/1770276743814/zip/img/pc/vivo-x300-pro.png.webp" },
  { slug: "honor-x9d", brand: "Honor", model: "HONOR X9d", status: "Listed", descriptor: "Explore official product information and manufacturer specifications.", officialProductUrl: "https://www.honor.com/global/phones/honor-x9d/", image: "https://www.honor.com/content/dam/honor/common/product-list/product-series/honor-x9d/honor-x9d-red-list.png" },
  { slug: "tecno-camon-40-premier-5g", brand: "Tecno", model: "TECNO CAMON 40 Premier 5G", status: "Listed", descriptor: "Explore official product information and manufacturer specifications.", officialProductUrl: "https://www.tecno-mobile.com/phones/product-detail/product/camon-40-premier-5g/", image: "https://d13pvy8xd75yde.cloudfront.net/global/phones/camon40/camon-40-premier-5g/assets/images-perf-game-cm8-white-1.png" },
  { slug: "infinix-note-40-pro-plus-5g", brand: "Infinix", model: "Infinix NOTE 40 Pro+ 5G", status: "Listed", descriptor: "Explore official product information and manufacturer specifications.", officialProductUrl: "https://www.infinixmobility.com/NOTE-40-Pro+-5G", image: "https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/note/note40proplus5g/assets/pc/sec1/kv_pc/kv_1.webp" },
  { slug: "infinix-zero-40-5g", brand: "Infinix", model: "Infinix ZERO 40 5G", status: "Listed", descriptor: "Explore official product information and manufacturer specifications.", officialProductUrl: "https://www.infinixmobility.com/ZERO-40-5G", image: "https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/zero/zero-40-5g/section-1/mb/new-kv-mb-v2.webp" },
  { slug: "infinix-gt-20-pro", brand: "Infinix", model: "Infinix GT 20 Pro", status: "Listed", descriptor: "Explore official product information and manufacturer specifications.", officialProductUrl: "https://www.infinixmobility.com/gt-20-pro", image: "https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/gt/gt20pro_v7/id/images/kv-pc.webp" },
  { slug: "oppo-find-x9-pro", brand: "Oppo", model: "OPPO Find X9 Pro", status: "Listed", descriptor: "Explore official product information and manufacturer specifications.", officialProductUrl: "https://www.oppo.com/en/smartphones/series-find-x/find-x9-pro/", image: "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/find-x9-series-en/listpage/find-x9-pro/480-600-white-v2.png" },
  { slug: "oppo-find-x8-ultra", brand: "Oppo", model: "OPPO Find X8 Ultra", status: "Listed", descriptor: "Explore official product information and manufacturer specifications.", officialProductUrl: "https://www.oppo.com/cn/smartphones/series-find-x/find-x8-ultra/", image: "https://www.oppo.com/content/dam/oppo_com/common/mkt/v2-2/cn-find-x8-series/find-x8-ultra/listpage/427-600-pink.png" },
  { slug: "xiaomi-17-ultra", brand: "Xiaomi", model: "Xiaomi 17 Ultra", status: "Listed", descriptor: "Explore official product information and manufacturer specifications.", officialProductUrl: "https://www.mi.com/prod/xiaomi-17-ultra", image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3f5c0cd26cf1cd44b020005fe94f8dbf.png" },
  { slug: "xiaomi-17-pro-max", brand: "Xiaomi", model: "Xiaomi 17 Pro Max", status: "Listed", descriptor: "Explore official product information and manufacturer specifications.", officialProductUrl: "https://www.mi.com/prod/xiaomi-17-pro-max", image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bb9e4a367f854221b60bb7b3b05e0173.png" },
  { slug: "redmi-k80-pro", brand: "Redmi", model: "Redmi K80 Pro", status: "Listed", descriptor: "Explore official product information and manufacturer specifications.", officialProductUrl: "https://www.mi.com/prod/redmi-k80-pro", image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c06730d1d2b34f09a7ee31c9b7559650.png" },
];

export const productsByBrand = brandOrder.map(brand => ({ brand, intro: brandIntros[brand], products: catalogProducts.filter(product => product.brand === brand) }));
export const getCatalogProduct = (slug: string) => catalogProducts.find(product => product.slug === slug);
