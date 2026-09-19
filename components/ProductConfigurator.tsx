"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "./CartProvider";
import PhoneVisual from "./PhoneVisual";
import { colors, formatPrice, iphone17, type ColorId, type Storage } from "@/lib/products";

export default function ProductConfigurator() {
  const [color, setColor] = useState<ColorId>("mist-blue");
  const [storage, setStorage] = useState<Storage>("256 GB");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const router = useRouter();
  const selectedColor = colors.find((item) => item.id === color)!;
  const add = () => {
    addItem({ productSlug: "iphone-17", name: iphone17.name, color, storage, quantity, unitPrice: iphone17.price[storage] });
    setAdded(true); window.setTimeout(() => setAdded(false), 1800);
  };
  return <div className="configurator">
    <div className="config-art"><div className="config-glow" style={{ background: selectedColor.hex }}/><PhoneVisual side="back" priority/><p>Envío gratuito · Devoluciones en 14 días</p></div>
    <div className="config-panel">
      <span className="eyebrow">{iphone17.eyebrow}</span><h1>{iphone17.name}</h1><p className="config-tagline">{iphone17.tagline}</p><p className="config-price">Desde {formatPrice(iphone17.price["256 GB"])}</p>
      <hr/><fieldset><legend>Acabado. <span>{selectedColor.name}</span></legend><div className="color-buttons">{colors.map(c => <button key={c.id} className={color === c.id ? "selected" : ""} onClick={() => setColor(c.id)} type="button" aria-label={c.name} aria-pressed={color === c.id}><i style={{ background: c.hex }}/></button>)}</div></fieldset>
      <fieldset><legend>Capacidad. <span>¿Cuánto espacio necesitas?</span></legend><div className="storage-buttons">{iphone17.storage.map(s => <button type="button" key={s} className={storage === s ? "selected" : ""} onClick={() => setStorage(s)}><b>{s}</b><span>{formatPrice(iphone17.price[s])}</span></button>)}</div></fieldset>
      <fieldset><legend>Cantidad.</legend><div className="stepper"><button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Reducir cantidad">−</button><output>{quantity}</output><button type="button" onClick={() => setQuantity(Math.min(9, quantity + 1))} aria-label="Aumentar cantidad">+</button></div></fieldset>
      <div className="config-total"><span>Total</span><b>{formatPrice(iphone17.price[storage] * quantity)}</b></div>
      <button className="button purchase" type="button" onClick={add}>{added ? "Añadido ✓" : "Añadir a la cesta"}</button>
      <button className="buy-now" type="button" onClick={() => { add(); router.push("/cart"); }}>Comprar ahora</button>
    </div>
  </div>;
}
