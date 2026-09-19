/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { catalogProducts, getCatalogProduct } from "@/lib/catalog";

const dedicated = new Set(["iphone-17-pro", "iphone-17-pro-max"]);
export function generateStaticParams() { return catalogProducts.filter(product => !dedicated.has(product.slug)).map(product => ({ slug: product.slug })); }
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const product = getCatalogProduct((await params).slug);
  return product ? { title: product.model, description: product.descriptor } : {};
}

export default async function CatalogProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const product = getCatalogProduct((await params).slug);
  if (!product || dedicated.has(product.slug) || !product.image) notFound();
  const related = catalogProducts.filter(item => item.brand === product.brand && item.slug !== product.slug).slice(0, 2);
  return <div className="catalog-detail"><section className="catalog-detail-hero"><div><span>{product.brand}</span><h1>{product.model}</h1><p>{product.descriptor}</p><a className="button primary" href={product.officialProductUrl} target="_blank" rel="noreferrer">Official specifications</a></div><img src={product.image} alt={`Official ${product.model} product photography`} /></section><section className="catalog-detail-info"><div><span>PRODUCT INFORMATION</span><h2>Manufacturer-verified.</h2></div><p>NOVA presents this model using official manufacturer photography and links directly to the manufacturer for current regional specifications, colors, capacities and availability.</p></section><section className="related-phone"><span>{product.brand.toUpperCase()}</span><h2>{related.length ? `More from ${product.brand}.` : "Explore the full catalog."}</h2><Link className="button primary" href={related[0] ? `/product/${related[0].slug}` : "/phones"}>{related[0] ? `View ${related[0].model}` : "Shop phones"}</Link></section></div>;
}
