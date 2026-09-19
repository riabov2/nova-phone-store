import Link from "next/link";
import PhoneVisual from "./PhoneVisual";
import { formatPrice, iphone17 } from "@/lib/products";

export default function ProductCard() {
  return <article className="product-card">
    <div className="product-card-art"><PhoneVisual side="back" /></div>
    <span className="eyebrow">{iphone17.eyebrow}</span>
    <h2>{iphone17.name}</h2>
    <p>{iphone17.tagline}</p>
    <div className="swatches" aria-label="Cinco acabados disponibles">{iphone17.colors.map(c => <i key={c.id} style={{ background: c.hex }} title={c.name}/>)}</div>
    <div className="product-card-bottom"><strong>Desde {formatPrice(iphone17.price["256 GB"])}</strong><Link className="button dark" href="/product/iphone-17">Comprar</Link></div>
  </article>;
}
