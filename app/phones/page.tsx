/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { formatPrice, iphone17ProMax } from "@/lib/products";

export const metadata: Metadata = { title: iphone17ProMax.name, description: iphone17ProMax.description };
export default function PhonesPage() {
  return <div className="focus-page"><div className="focus-copy"><span>{iphone17ProMax.eyebrow}</span><h1>{iphone17ProMax.name}</h1><p>{iphone17ProMax.description}</p><strong>From {formatPrice(iphone17ProMax.prices["256GB"])}</strong><div><Link className="button primary" href="/#configure">Configure</Link><Link className="button ghost" href="/#features">Explore</Link></div></div><div className="focus-product"><img src={iphone17ProMax.images.hero} alt="Front and back of iPhone 17 Pro Max in Cosmic Orange" /></div></div>;
}
