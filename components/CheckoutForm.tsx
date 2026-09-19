"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useCart } from "./CartProvider";
import { formatPrice } from "@/lib/products";

export default function CheckoutForm() {
  const { items, ready, subtotal } = useCart();
  const [notice, setNotice] = useState("");
  const [delivery, setDelivery] = useState("standard");
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setNotice("Esta es una demostración: no se ha procesado ningún pago."); };
  if (!ready) return <div className="cart-loading"><i/><p>Cargando checkout…</p></div>;
  if (!items.length) return <div className="empty-cart"><h1>No hay nada que tramitar.</h1><p>Añade un producto antes de continuar.</p><Link href="/phones" className="button dark">Ver teléfonos</Link></div>;
  return <div className="checkout-page"><div className="checkout-head"><Link href="/cart">← Volver a la cesta</Link><span>Checkout seguro</span></div><div className="checkout-layout"><form onSubmit={submit}>
    <section className="form-section"><span>01</span><div><h2>Contacto</h2><label>Email<input required type="email" autoComplete="email" placeholder="tu@email.com"/></label><label className="check"><input type="checkbox"/> Quiero recibir novedades de NOVA</label></div></section>
    <section className="form-section"><span>02</span><div><h2>Envío</h2><div className="fields"><label>Nombre<input required autoComplete="given-name"/></label><label>Apellidos<input required autoComplete="family-name"/></label><label className="wide">Dirección<input required autoComplete="street-address"/></label><label>Código postal<input required inputMode="numeric" pattern="[0-9]{5}" autoComplete="postal-code"/></label><label>Ciudad<input required autoComplete="address-level2"/></label></div></div></section>
    <section className="form-section" id="delivery"><span>03</span><div><h2>Entrega</h2><label className={delivery === "standard" ? "delivery selected" : "delivery"}><input type="radio" name="delivery" value="standard" checked={delivery === "standard"} onChange={() => setDelivery("standard")}/><b>Estándar</b><small>2–4 días laborables</small><strong>Gratis</strong></label><label className={delivery === "express" ? "delivery selected" : "delivery"}><input type="radio" name="delivery" value="express" checked={delivery === "express"} onChange={() => setDelivery("express")}/><b>Exprés</b><small>1–2 días laborables</small><strong>9 €</strong></label></div></section>
    <section className="form-section disabled-payment"><span>04</span><div><h2>Pago</h2><p>El pago no está habilitado en esta demostración. No introduzcas datos bancarios reales.</p><div className="fake-card"><span>•••• •••• •••• ••••</span><span>MM / AA&nbsp;&nbsp; CVC</span></div></div></section>
    {notice && <p className="checkout-notice" role="status">{notice}</p>}<button className="button purchase" type="submit">Revisar pedido de demostración</button>
  </form><aside className="checkout-summary"><h2>Tu pedido</h2>{items.map(item => <div className="checkout-item" key={item.id}><span>{item.quantity}</span><p><b>{item.name}</b><small>{item.storage}</small></p><strong>{formatPrice(item.unitPrice * item.quantity)}</strong></div>)}<dl><div><dt>Subtotal</dt><dd>{formatPrice(subtotal)}</dd></div><div><dt>Envío</dt><dd>{delivery === "express" ? "9 €" : "Gratis"}</dd></div></dl><div className="summary-total"><span>Total</span><b>{formatPrice(subtotal + (delivery === "express" ? 9 : 0))}</b></div></aside></div></div>;
}
