/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "./CartProvider";
import { formatPrice, iphone17ProMax } from "@/lib/products";

export default function CartDrawer() {
  const { drawerOpen, closeDrawer, items, subtotal, updateQuantity, removeItem } = useCart();
  useEffect(() => { document.body.style.overflow = drawerOpen ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [drawerOpen]);
  return <div className={`drawer-shell ${drawerOpen ? "open" : ""}`} aria-hidden={!drawerOpen}><button className="drawer-scrim" onClick={closeDrawer} aria-label="Close bag" /><aside className="cart-drawer" role="dialog" aria-modal="true" aria-label="Shopping bag"><header><div><span>YOUR BAG</span><h2>{items.length ? `${items.reduce((sum, item) => sum + item.quantity, 0)} selected` : "Quietly empty."}</h2></div><button onClick={closeDrawer} aria-label="Close bag">×</button></header><div className="drawer-items">{!items.length ? <div className="drawer-empty"><h3>Make it yours.</h3><p>Configure iPhone 17 Pro Max to begin.</p><Link href="/#configure" onClick={closeDrawer} className="button primary">Configure</Link></div> : items.map(item => { const finish = iphone17ProMax.finishes.find(value => value.id === item.color)!; return <article className="drawer-item" key={item.id}><div className="drawer-image"><img src={iphone17ProMax.images.finishes} alt={`iPhone 17 Pro Max in ${finish.name}`} /></div><div><h3>{item.name}</h3><p>{finish.name} · {item.storage}</p><div className="mini-step"><button aria-label="Decrease quantity" onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button><span>{item.quantity}</span><button aria-label="Increase quantity" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button></div><button className="remove" onClick={() => removeItem(item.id)}>Remove</button></div><strong>{formatPrice(item.unitPrice * item.quantity)}</strong></article>; })}</div>{items.length > 0 && <footer><div><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div><p>Taxes and delivery calculated at checkout.</p><Link href="/checkout" className="button primary" onClick={closeDrawer}>Checkout</Link><Link href="/cart" className="continue" onClick={closeDrawer}>View full bag</Link></footer>}</aside></div>;
}
