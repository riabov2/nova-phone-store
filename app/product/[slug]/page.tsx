import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { catalogProducts, getCatalogProduct } from "@/lib/catalog";
import ProductDetail from "@/components/ProductDetail";

const dedicated = new Set(["iphone-17-pro", "iphone-17-pro-max"]);
export function generateStaticParams() { return catalogProducts.filter(product => !dedicated.has(product.slug)).map(product => ({ slug: product.slug })); }
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const product = getCatalogProduct((await params).slug);
  return product ? { title: product.model, description: product.description } : {};
}

export default async function CatalogProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const product = getCatalogProduct((await params).slug);
  if (!product || dedicated.has(product.slug)) notFound();
  return <ProductDetail product={product} />;
}
