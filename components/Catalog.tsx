/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { brandOrder, productsByBrand, type CatalogProduct } from "@/lib/catalog";

function ProductCard({ product }: { product: CatalogProduct }) {
  const detailsHref = product.status === "Available" ? `/product/${product.slug}` : product.officialProductUrl;
  return <article className="catalog-card">
    <div className="catalog-card-media">
      {product.image ? <img src={product.image} alt={`Official ${product.model} product photography`} /> : <div className="catalog-pending"><span>{product.brand}</span><b>Official imagery pending</b></div>}
    </div>
    <div className="catalog-card-body"><div className="catalog-card-meta"><span>{product.brand}</span><b className={product.status === "Available" ? "available" : "coming"}>{product.status}</b></div><h3>{product.model}</h3><p>{product.descriptor}</p>{product.storage && <small>{product.storage.join(" · ")}</small>}<Link className="button ghost" href={detailsHref} target={product.status === "Available" ? undefined : "_blank"} rel={product.status === "Available" ? undefined : "noreferrer"}>{product.status === "Available" ? "View details" : "Official source"}</Link></div>
  </article>;
}

export default function Catalog() {
  return <div className="catalog-page" id="brands"><header className="catalog-hero"><span>THE NOVA CATALOG</span><h1>Flagships,<br />carefully selected.</h1><p>Official product information and manufacturer photography, organized by brand.</p><nav aria-label="Browse brands">{brandOrder.map(brand => <a key={brand} href={`#${brand.toLowerCase()}`}>{brand}</a>)}</nav></header>{productsByBrand.map(group => <section className="brand-section" id={group.brand.toLowerCase()} key={group.brand}><div className="brand-heading"><span>{String(brandOrder.indexOf(group.brand as typeof brandOrder[number]) + 1).padStart(2, "0")}</span><div><h2>{group.brand}</h2><p>{group.intro}</p></div></div><div className="catalog-grid">{group.products.map(product => <ProductCard product={product} key={product.slug} />)}</div></section>)}</div>;
}
