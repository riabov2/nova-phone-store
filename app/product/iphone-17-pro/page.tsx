/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { catalogProducts } from "@/lib/catalog";
import { iphone17ProMax } from "@/lib/products";

const product = catalogProducts.find(item => item.slug === "iphone-17-pro")!;
export const metadata: Metadata = { title: product.model, description: product.descriptor };

export default function IPhone17ProPage() {
  return <div className="editorial-product">
    <section className="editorial-hero"><div><span>APPLE</span><h1>iPhone 17 Pro</h1><p>{product.descriptor}</p><a className="button primary" href={product.officialProductUrl} target="_blank" rel="noreferrer">Official product information</a></div><img src={iphone17ProMax.images.finishes} alt="Official iPhone 17 Pro color lineup" /></section>
    <section className="editorial-gallery" aria-label="Official iPhone 17 Pro gallery"><img src={iphone17ProMax.images.hero} alt="Official iPhone 17 Pro front and back view"/><img src={iphone17ProMax.images.camera} alt="Official iPhone 17 Pro camera close-up"/><img src={iphone17ProMax.images.display} alt="Official iPhone 17 Pro display view"/></section>
    <section className="editorial-stories"><article><span>DESIGN</span><h2>Pro, in a more compact size.</h2><p>A 6.3-inch design with an aluminium unibody and Ceramic Shield protection.</p></article><article><span>CAMERA</span><h2>48MP Pro Fusion system.</h2><p>Main, Ultra Wide and Telephoto cameras give creators a versatile focal range.</p></article><article><span>PERFORMANCE</span><h2>A19 Pro.</h2><p>Apple silicon works with an Apple-designed vapor chamber for sustained performance.</p></article></section>
    <section className="editorial-specs"><div><span>OFFICIAL DETAILS</span><h2>iPhone 17 Pro.</h2></div><dl><div><dt>Display</dt><dd>6.3-inch Super Retina XDR with ProMotion up to 120Hz</dd></div><div><dt>Finishes</dt><dd>Cosmic Orange, Deep Blue, Silver</dd></div><div><dt>Storage</dt><dd>256GB, 512GB, 1TB</dd></div><div><dt>Chip</dt><dd>A19 Pro</dd></div></dl></section>
    <section className="related-phone"><span>MORE FROM APPLE</span><h2>Need the biggest Pro display?</h2><Link className="button primary" href="/product/iphone-17-pro-max">View iPhone 17 Pro Max</Link></section>
  </div>;
}
