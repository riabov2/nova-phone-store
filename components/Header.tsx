"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "./CartProvider";

const links = [
  ["Teléfonos", "/phones"],
  ["Características", "/#features"],
  ["Comparar", "/phones#compare"],
  ["Soporte", "/#support"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();
  return <header className="site-header">
    <div className="header-inner">
      <Link href="/" className="brand" aria-label="NOVA, inicio">NOVA<span>.</span></Link>
      <nav id="main-nav" className={open ? "nav open" : "nav"} aria-label="Navegación principal">
        {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
      </nav>
      <div className="header-actions">
        <Link href="/cart" className="cart-link" aria-label={`Cesta, ${count} artículos`}>
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6 7h12l-1 13H7L6 7Zm3 0V5a3 3 0 0 1 6 0v2"/></svg>
          {count > 0 && <span>{count}</span>}
        </Link>
        <button className="menu-button" type="button" aria-expanded={open} aria-controls="main-nav" aria-label="Abrir menú" onClick={() => setOpen(!open)}>
          <i/><i/>
        </button>
      </div>
    </div>
  </header>;
}
