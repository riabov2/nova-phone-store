"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "./CartProvider";

const links = [["Phones", "/phones"], ["Brands", "/phones#brands"], ["Samsung", "/phones#samsung"], ["Apple", "/phones#apple"], ["Buy Pro Max", "/#configure"]];
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { count, openDrawer } = useCart();
  useEffect(() => { const update = () => setScrolled(scrollY > 12); update(); addEventListener("scroll", update, { passive: true }); return () => removeEventListener("scroll", update); }, []);
  return <header className={`site-header ${scrolled ? "scrolled" : ""}`}><div className="header-inner"><Link className="brand" href="/" aria-label="NOVA home"><i />NOVA</Link><nav className={open ? "nav open" : "nav"} aria-label="Main navigation">{links.map(([label, href]) => <Link href={href} key={label} onClick={() => setOpen(false)}>{label}</Link>)}</nav><div className="header-actions"><button className="bag" onClick={openDrawer} aria-label={`Open bag, ${count} items`}>Bag <b>{count}</b></button><button className="menu-button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}><i /><i /></button></div></div></header>;
}
