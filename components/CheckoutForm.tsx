"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useCart } from "./CartProvider";
import { formatPrice } from "@/lib/products";

export default function CheckoutForm() {
  const { items, ready, subtotal } = useCart();
  const [notice, setNotice] = useState("");
  const [delivery, setDelivery] = useState("standard");
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setNotice("Demo checkout only — no payment has been processed."); };
  if (!ready) return <div className="cart-loading"><i/><p>Loading checkout…</p></div>;
  if (!items.length) return <div className="empty-cart"><h1>Your bag is empty.</h1><p>Add a product before continuing.</p><Link href="/phones" className="button dark">Shop phones</Link></div>;
  return <div className="checkout-page"><div className="checkout-head"><Link href="/cart">← Back to cart</Link><span>Secure checkout</span></div><div className="checkout-layout"><form onSubmit={submit}>
    <section className="form-section"><span>01</span><div><h2>Contact</h2><label>Email<input required type="email" autoComplete="email" placeholder="name@example.com"/></label><label className="check"><input type="checkbox"/> Send me NOVA updates</label></div></section>
    <section className="form-section"><span>02</span><div><h2>Shipping</h2><div className="fields"><label>First name<input required autoComplete="given-name"/></label><label>Last name<input required autoComplete="family-name"/></label><label className="wide">Address<input required autoComplete="street-address"/></label><label>Postal code<input required inputMode="numeric" pattern="[0-9]{5}" autoComplete="postal-code"/></label><label>City<input required autoComplete="address-level2"/></label></div></div></section>
    <section className="form-section" id="delivery"><span>03</span><div><h2>Delivery</h2><label className={delivery === "standard" ? "delivery selected" : "delivery"}><input type="radio" name="delivery" value="standard" checked={delivery === "standard"} onChange={() => setDelivery("standard")}/><b>Standard</b><small>2–4 business days</small><strong>Free</strong></label><label className={delivery === "express" ? "delivery selected" : "delivery"}><input type="radio" name="delivery" value="express" checked={delivery === "express"} onChange={() => setDelivery("express")}/><b>Express</b><small>1–2 business days</small><strong>9 €</strong></label></div></section>
    <section className="form-section disabled-payment"><span>04</span><div><h2>Payment</h2><p>Payment is disabled in this demo. Please do not enter real card details.</p><div className="fake-card"><span>•••• •••• •••• ••••</span><span>MM / AA&nbsp;&nbsp; CVC</span></div></div></section>
    {notice && <p className="checkout-notice" role="status">{notice}</p>}<button className="button purchase" type="submit">Review demo order</button>
  </form><aside className="checkout-summary"><h2>Your order</h2>{items.map(item => <div className="checkout-item" key={item.id}><span>{item.quantity}</span><p><b>{item.name}</b><small>{item.storage}</small></p><strong>{formatPrice(item.unitPrice * item.quantity)}</strong></div>)}<dl><div><dt>Subtotal</dt><dd>{formatPrice(subtotal)}</dd></div><div><dt>Shipping</dt><dd>{delivery === "express" ? "9 €" : "Free"}</dd></div></dl><div className="summary-total"><span>Total</span><b>{formatPrice(subtotal + (delivery === "express" ? 9 : 0))}</b></div></aside></div></div>;
}
