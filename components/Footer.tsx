import Link from "next/link";
import { brandOrder } from "@/lib/catalog";

export default function Footer() {
  return <footer className="footer" id="support"><div className="footer-sitemap"><div className="footer-lead"><Link href="/" className="brand"><i />NOVA</Link><h2>Flagship phones.<br />Officially sourced.</h2></div><div><h3>Shop</h3><Link href="/phones">All phones</Link><Link href="/phones#apple">Featured phones</Link></div><div><h3>Brands</h3>{brandOrder.map(brand => <Link href={`/phones#${brand.toLowerCase()}`} key={brand}>{brand}</Link>)}</div><div><h3>Support</h3><Link href="/#support">Delivery</Link><Link href="/#support">Returns</Link><Link href="/#support">Warranty</Link><a href="mailto:hola@nova.example">Contact</a></div><div><h3>Company</h3><Link href="/#support">About</Link><Link href="/#support">Privacy</Link><Link href="/#support">Terms</Link></div></div><div className="footer-bottom"><span>© 2026 NOVA Technology</span><span>Madrid · Spain / EU</span><span>Product names belong to their respective owners.</span></div></footer>;
}
