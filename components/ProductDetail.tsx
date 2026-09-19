"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { CatalogProduct } from "@/lib/catalog";
import { formatPrice, iphone17ProMax, type FinishId, type Storage } from "@/lib/products";
import { useCart } from "./CartProvider";

export default function ProductDetail({ product }: { product: CatalogProduct }) {
  const saleEnabled = product.slug === iphone17ProMax.slug;
  const [color, setColor] = useState(product.colors[0] ?? "Standard");
  const [storage, setStorage] = useState(product.storage[0] ?? "Standard");
  const [quantity, setQuantity] = useState(1);
  const { addItem, openDrawer } = useCart(); const router = useRouter();
  const finish = (iphone17ProMax.finishes.find(value => value.name === color)?.id ?? "cosmic-orange") as FinishId;
  const cartStorage = (iphone17ProMax.storage.includes(storage as Storage) ? storage : "256GB") as Storage;
  const unitPrice = saleEnabled ? iphone17ProMax.prices[cartStorage] : undefined;
  const add = (checkout = false) => { if (!unitPrice) return; addItem({ productSlug: iphone17ProMax.slug, name: iphone17ProMax.name, color: finish, storage: cartStorage, quantity, unitPrice }); if (checkout) router.push("/checkout"); else openDrawer(); };
  const imageStyle = (photo: typeof product.images.hero) => ({ "--fit": photo.fit, "--position": photo.position ?? "center", "--mobile-fit": photo.mobileFit ?? photo.fit, "--mobile-position": photo.mobilePosition ?? photo.position ?? "center", "--scale": photo.scale ?? 1 } as React.CSSProperties);
  const storyImages = { design: product.images.design, display: product.images.display, performance: product.images.performance, camera: product.images.camera, battery: product.images.battery, software: product.images.software };
  return <article className="product-page">
    <section className="product-hero"><div className="product-hero-copy"><span>{product.brand}</span><h1>{product.model}</h1><h2>{product.tagline}</h2><p>{product.description}</p><strong>{unitPrice ? `From ${formatPrice(product.price!)}` : "Price coming soon"}</strong><div className="product-hero-actions"><a className="button primary" href="#configure">Select configuration</a><a className="button ghost" href="#gallery">View gallery</a></div></div><div className="product-hero-media" style={{ background: product.images.hero.background }}><img src={product.images.hero.src} alt={product.images.hero.alt} style={imageStyle(product.images.hero)} /></div></section>
    <section className="product-gallery" id="gallery"><header><span>PRODUCT GALLERY</span><h2>Made to be seen.</h2></header><div>{product.images.gallery.map((photo, index) => <figure key={`${photo.src}-${index}`} style={{ background: photo.background }}><img src={photo.src} alt={photo.alt} style={imageStyle(photo)} /></figure>)}</div></section>
    <section className="product-highlights"><header><span>HIGHLIGHTS</span><h2>The essentials,<br/>at a glance.</h2></header><div>{product.highlights.map((highlight, index) => <article key={highlight.title}><b>0{index + 1}</b><h3>{highlight.title}</h3><p>{highlight.text}</p></article>)}</div></section>
    <section className="product-stories">{(["design","display","performance","camera","battery","software"] as const).map((key, index) => { const storyImage = storyImages[key]; return <article key={key} className={storyImage ? "has-image" : "text-only"}><div><span>{String(index + 1).padStart(2,"0")} / {key.toUpperCase()}</span><h2>{key === "software" ? "Software & connectivity" : key}</h2><p>{product.stories[key]}</p></div>{storyImage && <img src={storyImage.src} alt={storyImage.alt} style={imageStyle(storyImage)} />}</article>; })}</section>
    <section className="product-config" id="configure"><div><span>CONFIGURE</span><h2>Choose yours.</h2><p>{saleEnabled ? "Select a finish, capacity and quantity. Your configuration stays with you through cart and checkout." : "NOVA pricing is not yet available. Explore every specification now and check back for availability."}</p></div><div className="product-config-panel"><fieldset><legend>Finish <b>{color}</b></legend><div className="choice-row">{product.colors.map(value => <button aria-pressed={color === value} className={color === value ? "selected" : ""} onClick={() => setColor(value)} key={value}>{value}</button>)}</div></fieldset><fieldset><legend>Storage</legend><div className="choice-row">{product.storage.map(value => <button aria-pressed={storage === value} className={storage === value ? "selected" : ""} onClick={() => setStorage(value)} key={value}>{value}</button>)}</div></fieldset><div className="config-total"><div className="stepper"><button onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity">−</button><output>{quantity}</output><button onClick={() => setQuantity(Math.min(9, quantity + 1))} aria-label="Increase quantity">+</button></div><div><span>{unitPrice ? "Total" : "Availability"}</span><strong>{unitPrice ? formatPrice(unitPrice * quantity) : "Price coming soon"}</strong></div></div><button className="button primary" disabled={!saleEnabled} onClick={() => add(false)}>{saleEnabled ? "Add to cart" : "Notify me when available"}</button>{saleEnabled && <button className="button ghost" onClick={() => add(true)}>Buy now</button>}</div></section>
    <section className="technical-specs" id="specifications"><header><span>TECHNICAL SPECIFICATIONS</span><h2>Every important detail.</h2></header><div>{product.specs.map(group => <section key={group.title}><h3>{group.title}</h3><dl>{group.items.map(entry => <div key={entry.label}><dt>{entry.label}</dt><dd>{entry.value}</dd></div>)}</dl></section>)}</div><a className="manufacturer-source" href={product.officialProductUrl} target="_blank" rel="noreferrer">Manufacturer source ↗</a></section>
    <section className="product-back"><span>NOVA CATALOG</span><h2>Continue exploring.</h2><Link className="button primary" href="/phones">View all phones</Link></section>
  </article>;
}
