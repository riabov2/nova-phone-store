export type ImageFit = "contain" | "cover";
export type ProductImage = {
  src: string;
  alt: string;
  fit?: ImageFit;
  position?: string;
  scale?: number;
  background?: string;
  mobileFit?: ImageFit;
  mobilePosition?: string;
};

export type ProductImages = {
  card: ProductImage;
  hero: ProductImage;
  front?: ProductImage;
  back?: ProductImage;
  colors?: ProductImage;
  design?: ProductImage;
  camera?: ProductImage;
  display?: ProductImage;
  performance?: ProductImage;
  battery?: ProductImage;
  software?: ProductImage;
  gallery: readonly ProductImage[];
  sourcePage: string;
};

const photo = (src: string, alt: string, options: Partial<ProductImage> = {}): ProductImage => ({ fit: "cover", background: "#0c0c0e", ...options, src, alt });
const render = (src: string, alt: string, options: Partial<ProductImage> = {}): ProductImage => ({ fit: "contain", background: "#eeece8", scale: 1, ...options, src, alt });
const samsung = (path: string) => `https://image-us.samsung.com/us/smartphones/${path}`;
const samsungAsset = (path: string) => `https://images.samsung.com/is/image/samsung/assets/us/smartphones/${path}`;
const vivo = (file: string) => `https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/product/1770276743814/zip/img/pc/${file}`;
const honor = (path: string) => `https://www-file.honor.com/content/dam/honor/common/products/smartphone/honor-x9d/product/imgs/${path}`;
const note = (path: string) => `https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/note/note40proplus5g/assets/${path}`;
const oppo9 = (file: string) => `https://www.oppo.com/content/dam/oppo/product-asset-library/find/find-x9-series/find-x9-pro/en/assets/${file}`;
const oppo8 = (file: string) => `https://www.oppo.com/content/dam/oppo_com/oppo/product-asset-library/find-x/cn-find-x8-series/find-x8-ultra/assets/${file}`;

const appleHero = "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-cosmic-orange-250909_inline.jpg.large_2x.jpg";
const appleCamera = "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-camera-close-up-250909_big.jpg.large_2x.jpg";
const appleColors = "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-color-lineup-250909_inline.jpg.large_2x.jpg";
const appleDisplay = "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-iOS-26-Liquid-Glass-Lock-Screen-250909_inline.jpg.large_2x.jpg";
const appleDesign = "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-Clear-Case-250909_inline.jpg.large_2x.jpg";

export const productImages: Record<string, ProductImages> = {
  "galaxy-s26-ultra": (() => {
    const card = render(samsung("galaxy-s26-ultra/images/galaxy-s26-ultra-features-colors-viewer-initial-cobalt-violet.jpg"), "Galaxy S26 Ultra in Cobalt Violet", { background: "#d9d9e2", scale: 1.38 });
    const hero = photo(samsung("galaxy-s26-ultra/images/galaxy-s26-ultra-features-kv.jpg"), "Galaxy S26 Ultra official launch composition", { position: "67% center", mobilePosition: "72% center" });
    const design = photo(samsung("galaxy-s26-ultra/images/galaxy-s26-ultra-features-highlights-refined-design-start.jpg"), "Galaxy S26 Ultra refined design");
    const display = photo(samsung("galaxy-s26-ultra/images/galaxy-s26-ultra-features-highlights-privacy-display-start.jpg"), "Galaxy S26 Ultra display");
    const performance = photo(samsung("galaxy-s26-ultra/images/galaxy-s26-ultra-features-highlights-performance-a-start.jpg"), "Galaxy S26 Ultra performance");
    const camera = photo(samsung("galaxy-s26-ultra/images/galaxy-s26-ultra-features-camera-spec-start.jpg"), "Galaxy S26 Ultra camera system");
    const colors = photo(samsungAsset("galaxy-s26-ultra/images/galaxy-s26-ultra-features-colors-durability-b.jpg"), "Galaxy S26 Ultra finish selection");
    return { card, hero, design, display, performance, camera, colors, gallery: [hero, design, camera, colors], sourcePage: "https://www.samsung.com/us/smartphones/galaxy-s26-ultra/" };
  })(),
  "galaxy-z-fold7": (() => {
    const card = render(samsung("galaxy-z-fold7/images/galaxy-z-fold7-features-colors-viewer-initial-blue-shadow.jpg"), "Galaxy Z Fold7 unfolded in Blue Shadow", { background: "#dfe6ec", scale: 1.38 });
    const hero = photo(samsung("galaxy-z-fold7/images/galaxy-z-fold7-features-kv.jpg"), "Galaxy Z Fold7 official hero composition", { position: "center" });
    const design = photo(samsung("galaxy-z-fold7/images/galaxy-z-fold7-features-highlights-design-start.jpg"), "Galaxy Z Fold7 thin folding design");
    const camera = photo(samsung("galaxy-z-fold7/images/galaxy-z-fold7-features-highlights-camera-start.jpg"), "Galaxy Z Fold7 camera system");
    const display = photo(samsungAsset("galaxy-z-fold7/images/galaxy-z-fold7-features-durability-1.jpg"), "Galaxy Z Fold7 main display and hinge");
    const performance = photo(samsung("galaxy-z-fold7/images/galaxy-z-fold7-features-gaming-performance-a-start.jpg"), "Galaxy Z Fold7 gaming performance");
    return { card, hero, design, camera, display, performance, gallery: [hero, design, camera, display], sourcePage: "https://www.samsung.com/us/smartphones/galaxy-z-fold7/" };
  })(),
  "iphone-17-pro-max": (() => {
    const card = photo(appleHero, "iPhone 17 Pro Max in Cosmic Orange", { position: "62% center", mobilePosition: "64% center" });
    const hero = photo(appleHero, "iPhone 17 Pro Max official launch photography", { position: "center" });
    const camera = photo(appleCamera, "iPhone 17 Pro Max Pro Fusion camera system");
    const colors = photo(appleColors, "iPhone 17 Pro Max finish lineup");
    const display = photo(appleDisplay, "iPhone 17 Pro Max Super Retina XDR display");
    const design = photo(appleDesign, "iPhone 17 Pro Max aluminium design");
    return { card, hero, camera, colors, display, design, gallery: [hero, colors, camera, display], sourcePage: "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/" };
  })(),
  "iphone-17-pro": (() => {
    const card = photo(appleColors, "iPhone 17 Pro in its three official finishes", { position: "34% center", mobilePosition: "30% center" });
    const hero = photo(appleColors, "iPhone 17 Pro official finish composition", { position: "32% center", mobilePosition: "30% center" });
    const camera = photo(appleCamera, "iPhone 17 Pro camera close-up");
    const display = photo(appleDisplay, "iPhone 17 Pro Super Retina XDR display", { position: "35% center" });
    const design = photo(appleDesign, "iPhone 17 Pro aluminium design");
    return { card, hero, camera, display, design, colors: hero, gallery: [hero, camera, design, display], sourcePage: "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/" };
  })(),
  "vivo-x300-pro": (() => {
    const card = render(vivo("vivo-x300-pro-in-phantom-black-color.png"), "vivo X300 Pro in Phantom Black", { background: "#dedfe1", scale: 1.12 });
    const hero = photo(vivo("vivo-x300-pro-featuring-zeiss-cameras-and-pro-imaging-chip-vs1.png"), "vivo X300 Pro ZEISS imaging hero");
    const design = photo(vivo("vivo-x300-pro-with-elegant-industrial-design.png"), "vivo X300 Pro industrial design");
    const camera = photo(vivo("vivo-x300-pro-with-zeiss-apo-telephoto-camera.png"), "vivo X300 Pro ZEISS APO telephoto camera");
    const performance = photo(vivo("vivo-x300-pro-with-top-tier-flagship-performance.png"), "vivo X300 Pro flagship performance");
    const colors = render(vivo("vivo-x300-pro-in-phantom-black-color.png"), "vivo X300 Pro in Phantom Black");
    return { card, hero, design, camera, performance, colors, gallery: [hero, design, camera, colors], sourcePage: "https://www.vivo.com/en/products/x300-pro" };
  })(),
  "honor-x9d": (() => {
    const card = render("https://www-file.honor.com/content/dam/honor/common/product-list/product-series/honor-x9d/honor-x9d-red-list.png", "HONOR X9d in Reddish Brown", { background: "#eee9e6", scale: 1.12 });
    const hero = photo(honor("section-kv/honorx9d-kv-bg@2x.webp"), "HONOR X9d official hero");
    const design = photo(honor("section-highlights/honorx9d-highlights-item-1@2x.webp"), "HONOR X9d durable design");
    const camera = photo(honor("section-camera/honorx9d-camera-item-1@2x.webp"), "HONOR X9d camera feature");
    const battery = photo(honor("section-battery/honorx9d-battery-shadow@2x.webp"), "HONOR X9d battery design");
    return { card, hero, design, camera, battery, gallery: [hero, design, camera, card], sourcePage: "https://www.honor.com/global/phones/honor-x9d/" };
  })(),
  "tecno-camon-40-premier-5g": (() => {
    const base = "https://d13pvy8xd75yde.cloudfront.net/global/phones/camon40/camon-40-premier-5g/assets/";
    const card = render(`${base}images-design-phone-pc-8-1.png`, "TECNO CAMON 40 Premier 5G isolated product render", { background: "#e6e2dc", scale: 1.08 });
    const hero = photo(`${base}images-color-8-l-0-pc-1.jpg`, "TECNO CAMON 40 Premier 5G official finish photography");
    const design = { ...card, scale: 1, alt: "TECNO CAMON 40 Premier 5G design" };
    const camera = photo(`${base}images-ksp-8-4-pc-1.jpg`, "TECNO CAMON 40 Premier 5G underwater camera feature");
    const display = photo(`${base}images-ksp-8-5-pc-1.jpg`, "TECNO CAMON 40 Premier 5G 144Hz display");
    const performance = photo(`${base}images-ksp-8-3-pc-1.jpg`, "TECNO CAMON 40 Premier 5G Dimensity performance");
    return { card, hero, performance, design, camera, display, gallery: [hero, card, design, camera], sourcePage: "https://www.tecno-mobile.com/phones/product-detail/product/camon-40-premier-5g/" };
  })(),
  "infinix-note-40-pro-plus-5g": (() => {
    const card = render(note("pc/sec38/phone-1.webp"), "Infinix NOTE 40 Pro+ 5G", { background: "#18171a", scale: 1.12 });
    const hero = photo(note("pc/sec1/kv_pc/kv_1.webp"), "Infinix NOTE 40 Pro+ 5G official hero");
    const camera = photo(note("pc/sec2/bg-camera.webp"), "Infinix NOTE 40 Pro+ camera feature");
    const display = photo(note("pc/sec2/bg-display.webp"), "Infinix NOTE 40 Pro+ curved display");
    const battery = photo(note("pc/sec2/bg-fastcharge.webp"), "Infinix NOTE 40 Pro+ fast charging");
    const colors = render(note("pc/sec38/phone-2.webp"), "Infinix NOTE 40 Pro+ finish");
    return { card, hero, camera, display, battery, colors, gallery: [hero, camera, display, colors], sourcePage: "https://www.infinixmobility.com/NOTE-40-Pro+-5G" };
  })(),
  "infinix-zero-40-5g": (() => { const card = photo("https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/zero/zero-40-5g/section-1/mb/new-kv-mb-v2.webp", "Infinix ZERO 40 5G official product composition"); const hero = photo("https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/zero/zero-40-5g/section-1/pc/section-1-pc.webp", "Infinix ZERO 40 5G desktop launch hero"); return { card, hero, design: card, gallery: [hero, card], sourcePage: "https://www.infinixmobility.com/ZERO-40-5G" }; })(),
  "infinix-gt-20-pro": (() => { const hero = photo("https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/gt/gt20pro_v7/id/images/kv-pc.webp", "Infinix GT 20 Pro official gaming hero"); return { card: { ...hero, position: "center" }, hero, performance: hero, gallery: [hero], sourcePage: "https://www.infinixmobility.com/gt-20-pro" }; })(),
  "oppo-find-x9-pro": (() => {
    const card = render("https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/find-x9-series-en/listpage/find-x9-pro/480-600-white-v2.png", "OPPO Find X9 Pro", { background: "#e8e8e6", scale: 1.12 });
    const hero = photo(oppo9("images-kv-kv-static-1-e86adc.jpg.webp"), "OPPO Find X9 Pro official hero");
    const design = photo(oppo9("images-design-phone-25-1-95-86f6ff.jpg.webp"), "OPPO Find X9 Pro design");
    const display = photo(oppo9("images-display-phone-0b240d.jpg"), "OPPO Find X9 Pro display");
    const camera = render(oppo9("images-camera-phone-1-95-4a2e43.png"), "OPPO Find X9 Pro Hasselblad camera system", { background: "#111" });
    const performance = render(oppo9("images-performance-chip-1-big-1-264977.png"), "OPPO Find X9 Pro Dimensity performance", { background: "#111" });
    return { card, hero, design, display, camera, performance, gallery: [hero, design, camera, display], sourcePage: "https://www.oppo.com/en/smartphones/series-find-x/find-x9-pro/" };
  })(),
  "oppo-find-x8-ultra": (() => {
    const card = render("https://www.oppo.com/content/dam/oppo_com/common/mkt/v2-2/cn-find-x8-series/find-x8-ultra/listpage/427-600-pink.png", "OPPO Find X8 Ultra", { background: "#eee8e7", scale: 1.12 });
    const hero = photo(oppo8("images-feng-kv-hand-1-95.jpg.webp"), "OPPO Find X8 Ultra official hero");
    const design = photo(oppo8("images-feng-design-phone-1.jpg.webp"), "OPPO Find X8 Ultra design");
    const camera = photo(oppo8("images-feng-camera-bg-1.jpg.webp"), "OPPO Find X8 Ultra camera system");
    return { card, hero, design, camera, gallery: [hero, design, camera, card], sourcePage: "https://www.oppo.com/cn/smartphones/series-find-x/find-x8-ultra/" };
  })(),
  "xiaomi-17-ultra": (() => { const card = render("https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3f5c0cd26cf1cd44b020005fe94f8dbf.png", "Xiaomi 17 Ultra official render", { scale: 1.12 }); const hero = photo("https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8baabd4fc4255a2cf81636335b4cf0c1.png", "Xiaomi 17 Ultra official hero"); return { card, hero, design: hero, gallery: [hero, card], sourcePage: "https://www.mi.com/prod/xiaomi-17-ultra" }; })(),
  "xiaomi-17-pro-max": (() => { const card = render("https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bb9e4a367f854221b60bb7b3b05e0173.png", "Xiaomi 17 Pro Max official render", { scale: 1.12 }); const hero = photo("https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5f56e61ddfba022886999937ff48e7fa.png", "Xiaomi 17 Pro Max official hero"); return { card, hero, design: hero, gallery: [hero, card], sourcePage: "https://www.mi.com/prod/xiaomi-17-pro-max" }; })(),
  "redmi-k80-pro": (() => { const card = render("https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c06730d1d2b34f09a7ee31c9b7559650.png", "Redmi K80 Pro official render", { scale: 1.12 }); const hero = photo("https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/86eb53bd70dbe20d9d4e8ec187a92dcc.png", "Redmi K80 Pro official hero"); return { card, hero, performance: hero, gallery: [hero, card], sourcePage: "https://www.mi.com/prod/redmi-k80-pro" }; })(),
};
