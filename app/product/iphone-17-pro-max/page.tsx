import type { Metadata } from "next";
import ProductDetail from "@/components/ProductDetail";
import { getCatalogProduct } from "@/lib/catalog";
export const metadata: Metadata = { title: "Buy iPhone 17 Pro Max", description: "Configure iPhone 17 Pro Max and explore its complete specifications." };
export default function ProductPage() { return <ProductDetail product={getCatalogProduct("iphone-17-pro-max")!} />; }
