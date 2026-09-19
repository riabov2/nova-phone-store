import Link from "next/link";

export default function Footer() {
  return <footer className="footer" id="support">
    <div className="footer-top">
      <div><Link href="/" className="brand">NOVA<span>.</span></Link><p>Tecnología excepcional.<br/>Elegida para ti.</p></div>
      <div><h3>Comprar</h3><Link href="/phones">iPhone 17</Link><Link href="/product/iphone-17">Configurar</Link><Link href="/cart">Cesta</Link></div>
      <div><h3>Ayuda</h3><a href="mailto:hola@nova.example">Contacto</a><a href="#delivery">Envíos</a><a href="#returns">Devoluciones</a></div>
    </div>
    <div className="footer-bottom"><span>© 2026 NOVA España</span><span>Privacidad · Términos · Cookies</span></div>
  </footer>;
}
