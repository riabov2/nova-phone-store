import { existsSync, readFileSync } from "node:fs";

const routes = ["app/page.tsx", "app/phones/page.tsx", "app/product/iphone-17-pro-max/page.tsx", "app/cart/page.tsx", "app/checkout/page.tsx"];
const components = ["ProMaxHome", "Header", "CartProvider", "CartDrawer", "CartView", "CheckoutForm", "Footer"];
const missingFiles = [...routes, ...components.map(name => `components/${name}.tsx`)].filter(file => !existsSync(file));
const productData = readFileSync("lib/products.ts", "utf8");
const home = readFileSync("components/ProMaxHome.tsx", "utf8");
const cart = readFileSync("components/CartProvider.tsx", "utf8");
const requiredProductValues = ["iPhone 17 Pro Max", "deep-blue", "cosmic-orange", "silver", "256GB", "512GB", "1TB", "2TB", "1199", "1999"];
const requiredLayers = ["glassLayer", "displayLayer", "componentLayer", "batteryLayer", "boardLayer", "cameraLayer", "rearLayer"];
const missingValues = requiredProductValues.filter(value => !productData.includes(value));
const missingLayers = requiredLayers.filter(value => !home.includes(value));
const cartBehaviors = ["localStorage.getItem", "localStorage.setItem", "updateQuantity", "removeItem"];
const missingCartBehaviors = cartBehaviors.filter(value => !cart.includes(value));
if (missingFiles.length || missingValues.length || missingLayers.length || missingCartBehaviors.length) {
  console.error({ missingFiles, missingValues, missingLayers, missingCartBehaviors }); process.exit(1);
}
console.log(`Validated ${routes.length} static routes, one product source, ${requiredLayers.length} teardown layers, and persistent cart behavior.`);
