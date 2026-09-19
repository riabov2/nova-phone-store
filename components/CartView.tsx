"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "./CartProvider";
import { colors, formatPrice } from "@/lib/products";

export default function CartView() {
  const { items, ready, subtotal, updateQuantity, removeItem } = useCart();
  if (!ready) return <div className="cart-loading"><i/><p>Preparando tu cesta…</p></div>;
  if (!items.length) return <div className="empty-cart"><span>○</span><h1>Tu cesta te espera.</h1><p>Descubre el iPhone 17 y elige el acabado que más va contigo.</p><Link href="/phones" className="button dark">Ver teléfonos</Link></div>;
  return <div className="cart-page"><div className="cart-title"><span className="eyebrow">Tu selección</span><h1>Tu cesta.</h1><p>{items.reduce((s, i) => s + i.quantity, 0)} {items.length === 1 ? "producto" : "productos"}</p></div>
    <div className="cart-layout"><div className="cart-items">{items.map(item => { const color = colors.find(c => c.id === item.color)!; return <article className="cart-item" key={item.id}>
      <div className="cart-image"><Image src="/products/iphone-17/iphone-17-back.svg" width={140} height={280} alt={`${item.name} en ${color.name}`}/></div>
      <div className="cart-details"><h2>{item.name}</h2><p>{color.name} · {item.storage}</p><div className="stepper"><button onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label="Reducir cantidad">−</button><output>{item.quantity}</output><button onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label="Aumentar cantidad">+</button></div><button className="remove" onClick={() => removeItem(item.id)}>Eliminar</button></div><strong>{formatPrice(item.unitPrice * item.quantity)}</strong>
    </article>})}</div><aside className="order-summary"><h2>Resumen</h2><dl><div><dt>Subtotal</dt><dd>{formatPrice(subtotal)}</dd></div><div><dt>Envío</dt><dd>Gratis</dd></div></dl><div className="summary-total"><span>Total <small>IVA incluido</small></span><b>{formatPrice(subtotal)}</b></div><Link className="button purchase" href="/checkout">Continuar al pago</Link><p>Pago seguro · Entrega con seguimiento</p></aside></div>
  </div>;
}
