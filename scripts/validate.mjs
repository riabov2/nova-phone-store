import { existsSync, readFileSync } from "node:fs";

const routes = [
  "app/page.tsx",
  "app/phones/page.tsx",
  "app/product/iphone-17/page.tsx",
  "app/cart/page.tsx",
  "app/checkout/page.tsx",
];
const components = [
  "Header", "Hero", "ProductShowcase", "ExplodedPhoneSection", "FeaturesSection",
  "CameraSection", "PerformanceSection", "BatterySection", "ColorsSection",
  "StorageSection", "BuySection", "ProductCard", "Footer",
];

const missingRoutes = routes.filter((route) => !existsSync(route));
const source = ["components/FeatureSections.tsx", ...components.map((name) => `components/${name}.tsx`)]
  .filter(existsSync)
  .map((file) => readFileSync(file, "utf8"))
  .join("\n");
const missingComponents = components.filter((name) => !source.includes(name));
const productData = readFileSync("lib/products.ts", "utf8");
const requiredProductValues = ["black", "white", "mist-blue", "sage", "lavender", "256 GB", "512 GB", "959", "1209"];
const missingProductValues = requiredProductValues.filter((value) => !productData.includes(value));

if (missingRoutes.length || missingComponents.length || missingProductValues.length) {
  console.error({ missingRoutes, missingComponents, missingProductValues });
  process.exit(1);
}

console.log(`Validated ${routes.length} routes, ${components.length} components, and the complete product matrix.`);
