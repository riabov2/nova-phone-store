"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "./CartProvider";
import { colors, formatPrice } from "@/lib/products";

export default function CartView() {
  const { items, ready, subtotal, updateQuantity, removeItem } = useCart();
  if (!ready) return <div className="cart-loading"><i/><p>Preparing your cart…</p></div>;
  if (!items.length) return <div className="empty-cart"><span>○</span><h1>Your bag is waiting.</h1><p>Discover iPhone 17 and choose your perfect finish.</p><Link href="/phones" className="button dark">Shop phones</Link></div>;
  return <div className="cart-page"><div className="cart-title"><span className="eyebrow">YOUR SELECTION</span><h1>Your bag.</h1><p>{items.reduce((s, i) => s + i.quantity, 0)} {items.length === 1 ? "item" : "items"}</p></div>
    <div className="cart-layout"><div className="cart-items">{items.map(item => { const color = colors.find(c => c.id === item.color)!; return <article className="cart-item" key={item.id}>
      <div className="cart-image"><Image src="/products/iphone-17/iphone-17-back.svg" width={140} height={280} alt={`${item.name} en ${color.name}`}/></div>
      <div className="cart-details"><h2>{item.name}</h2><p>{color.name} · {item.storage}</p><div className="stepper"><button onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label="Decrease quantity">−</button><output>{item.quantity}</output><button onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label="Increase quantity">+</button></div><button className="remove" onClick={() => removeItem(item.id)}>Remove</button></div><strong>{formatPrice(item.unitPrice * item.quantity)}</strong>
    </article>})}</div><aside className="order-summary"><h2>Summary</h2><dl><div><dt>Subtotal</dt><dd>{formatPrice(subtotal)}</dd></div><div><dt>Delivery</dt><dd>Free</dd></div></dl><div className="summary-total"><span>Total <small>VAT included</small></span><b>{formatPrice(subtotal)}</b></div><Link className="button purchase" href="/checkout">Continue to checkout</Link><p>Secure checkout · Tracked delivery</p></aside></div>
  </div>;
}
