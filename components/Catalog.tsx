/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { brandOrder, productsByBrand, type CatalogProduct } from "@/lib/catalog";

function ProductCard({ product }: { product: CatalogProduct }) {
  return <Link className="catalog-card" href={`/product/${product.slug}`} aria-label={`View ${product.model}`}>
    <div className="catalog-card-media" style={{ background: product.images.card.background }}>
      <img src={product.images.card.src} alt={product.images.card.alt} style={{ "--fit": product.images.card.fit, "--position": product.images.card.position ?? "center", "--mobile-fit": product.images.card.mobileFit ?? product.images.card.fit, "--mobile-position": product.images.card.mobilePosition ?? product.images.card.position ?? "center", "--scale": product.images.card.scale ?? 1 } as React.CSSProperties} />
    </div>
    <div className="catalog-card-body"><div className="catalog-card-meta"><span>{product.brand}</span></div><h3>{product.model}</h3><p>{product.description}</p><small>{product.storage.join(" · ")}</small><span className="button ghost">View details</span></div>
  </Link>;
}

export default function Catalog() {
  return <div className="catalog-page" id="brands"><header className="catalog-hero"><span>THE NOVA CATALOG</span><h1>Flagships,<br />carefully selected.</h1><p>Official product information and manufacturer photography, organized by brand.</p><nav aria-label="Browse brands">{brandOrder.map(brand => <a key={brand} href={`#${brand.toLowerCase()}`}>{brand}</a>)}</nav></header>{productsByBrand.map(group => <section className="brand-section" id={group.brand.toLowerCase()} key={group.brand}><div className="brand-heading"><span>{String(brandOrder.indexOf(group.brand as typeof brandOrder[number]) + 1).padStart(2, "0")}</span><div><h2>{group.brand}</h2><p>{group.intro}</p></div></div><div className="catalog-grid">{group.products.map(product => <ProductCard product={product} key={product.slug} />)}</div></section>)}</div>;
}
