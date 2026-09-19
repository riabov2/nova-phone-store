/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { brandOrder, productsByBrand, type CatalogProduct } from "@/lib/catalog";

function ProductCard({ product }: { product: CatalogProduct }) {
  const detailsHref = `/product/${product.slug}`;
  return <article className="catalog-card">
    <div className="catalog-card-media">
      <img src={product.image} alt={`Official ${product.model} product photography`} />
    </div>
    <div className="catalog-card-body"><div className="catalog-card-meta"><span>{product.brand}</span></div><h3>{product.model}</h3><p>{product.descriptor}</p>{product.storage && <small>{product.storage.join(" · ")}</small>}<Link className="button ghost" href={detailsHref}>View details</Link></div>
  </article>;
}

export default function Catalog() {
  return <div className="catalog-page" id="brands"><header className="catalog-hero"><span>THE NOVA CATALOG</span><h1>Flagships,<br />carefully selected.</h1><p>Official product information and manufacturer photography, organized by brand.</p><nav aria-label="Browse brands">{brandOrder.map(brand => <a key={brand} href={`#${brand.toLowerCase()}`}>{brand}</a>)}</nav></header>{productsByBrand.map(group => <section className="brand-section" id={group.brand.toLowerCase()} key={group.brand}><div className="brand-heading"><span>{String(brandOrder.indexOf(group.brand as typeof brandOrder[number]) + 1).padStart(2, "0")}</span><div><h2>{group.brand}</h2><p>{group.intro}</p></div></div><div className="catalog-grid">{group.products.map(product => <ProductCard product={product} key={product.slug} />)}</div></section>)}</div>;
}
