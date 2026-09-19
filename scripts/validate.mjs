import { existsSync, readFileSync } from "node:fs";

const routes = ["app/page.tsx", "app/phones/page.tsx", "app/product/iphone-17-pro-max/page.tsx", "app/product/iphone-17-pro/page.tsx", "app/product/[slug]/page.tsx", "app/cart/page.tsx", "app/checkout/page.tsx"];
const components = ["StoreHome", "ProductDetail", "Catalog", "Header", "CartProvider", "CartDrawer", "CartView", "CheckoutForm", "Footer"];
const files = [...routes, ...components.map(name => `components/${name}.tsx`)];
const missingFiles = files.filter(file => !existsSync(file));
const source = [...files, "app/globals.css", "lib/products.ts", "lib/product-images.ts"].filter(existsSync).map(file => readFileSync(file, "utf8")).join("\n");
const productData = readFileSync("lib/products.ts", "utf8");
const catalogData = readFileSync("lib/catalog.ts", "utf8");
const imageData = readFileSync("lib/product-images.ts", "utf8");
const productPage = readFileSync("components/ProductDetail.tsx", "utf8");
const cart = readFileSync("components/CartProvider.tsx", "utf8");
const requiredProductValues = ["iPhone 17 Pro Max", "deep-blue", "cosmic-orange", "silver", "256GB", "512GB", "1TB", "2TB", "1199", "1999"];
const requiredCatalogModels = ["Galaxy S26 Ultra", "Galaxy Z Fold7", "iPhone 17 Pro Max", "iPhone 17 Pro", "vivo X300 Pro", "HONOR X9d", "TECNO CAMON 40 Premier 5G", "Infinix NOTE 40 Pro+ 5G", "Infinix ZERO 40 5G", "Infinix GT 20 Pro", "OPPO Find X9 Pro", "OPPO Find X8 Ultra", "Xiaomi 17 Ultra", "Xiaomi 17 Pro Max", "Redmi K80 Pro"];
const missingCatalogModels = requiredCatalogModels.filter(value => !catalogData.includes(value));
const catalogImageCount = (catalogData.match(/image:/g) ?? []).length;
const imageProfileCount = (imageData.match(/sourcePage:/g) ?? []).length;
const forbiddenPlaceholders = ["Official imagery pending", "Official catalog package pending", "Official regional details and imagery pending"];
const foundPlaceholders = forbiddenPlaceholders.filter(value => source.includes(value) || catalogData.includes(value));
const requiredStories = ["design", "display", "performance", "camera", "battery", "software"];
const missingValues = requiredProductValues.filter(value => !productData.includes(value));
const missingStories = requiredStories.filter(value => !catalogData.includes(value));
const requiredProductSections = ["PRODUCT GALLERY", "HIGHLIGHTS", "TECHNICAL SPECIFICATIONS", "Select configuration", "Add to cart", "Buy now"];
const missingProductSections = requiredProductSections.filter(value => !productPage.includes(value));
const forbiddenConceptCode = ["data-layer", "batteryLayer", "logic-board.svg", "camera-module.svg", "chassis.svg", "cart-phone", "device-back", "focus-device"];
const foundConceptCode = forbiddenConceptCode.filter(value => source.includes(value));
const removedConceptAssets = ["battery.svg", "camera-module.svg", "chassis.svg", "logic-board.svg"]
  .filter(name => existsSync(`public/products/iphone-17-pro-max/${name}`));
const cartBehaviors = ["localStorage.getItem", "localStorage.setItem", "updateQuantity", "removeItem"];
const missingCartBehaviors = cartBehaviors.filter(value => !cart.includes(value));

if (missingFiles.length || missingValues.length || missingCatalogModels.length || catalogImageCount < requiredCatalogModels.length || imageProfileCount < requiredCatalogModels.length || foundPlaceholders.length || missingStories.length || missingProductSections.length || foundConceptCode.length || removedConceptAssets.length || missingCartBehaviors.length) {
  console.error({ missingFiles, missingValues, missingCatalogModels, catalogImageCount, imageProfileCount, foundPlaceholders, missingStories, missingProductSections, foundConceptCode, removedConceptAssets, missingCartBehaviors });
  process.exit(1);
}

console.log(`Validated ${routes.length} static routes, ${requiredCatalogModels.length} rich catalog products, reusable product storytelling and specifications, no conceptual device artwork, and persistent cart behavior.`);
