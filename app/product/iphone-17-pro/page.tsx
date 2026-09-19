import type { Metadata } from "next";
import ProductDetail from "@/components/ProductDetail";
import { getCatalogProduct } from "@/lib/catalog";
export const metadata: Metadata = { title: "iPhone 17 Pro", description: "Explore iPhone 17 Pro photography, features and complete specifications." };
export default function ProductPage() { return <ProductDetail product={getCatalogProduct("iphone-17-pro")!} />; }
