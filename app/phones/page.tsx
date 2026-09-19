import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = { title: "Teléfonos", description: "Descubre la selección de smartphones NOVA." };
export default function PhonesPage() {
  return <div className="listing-page"><header><span className="eyebrow">La colección NOVA</span><h1>Encuentra el tuyo.</h1><p>Diseño, potencia y cámara. Sin concesiones.</p></header><div className="product-grid"><ProductCard/></div><section className="compare-strip" id="compare"><span>¿Necesitas ayuda para elegir?</span><h2>Un modelo.<br/>Cinco acabados. Dos capacidades.</h2><a href="mailto:hola@nova.example" className="text-link">Hablar con un especialista →</a></section></div>;
}
