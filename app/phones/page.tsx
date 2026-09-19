import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = { title: "Phones", description: "Discover NOVA’s premium smartphone collection." };
export default function PhonesPage() {
  return <div className="listing-page"><header><span className="eyebrow">THE NOVA COLLECTION</span><h1>Find your next phone.</h1><p>Exceptional design, performance and imaging.</p></header><div className="product-grid"><ProductCard/></div><section className="compare-strip" id="compare"><span>NEED HELP CHOOSING?</span><h2>One model.<br/>Five finishes. Two capacities.</h2><a href="mailto:hola@nova.example" className="text-link">Talk to a specialist →</a></section></div>;
}
