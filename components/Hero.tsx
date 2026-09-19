import Link from "next/link";
import PhoneVisual from "./PhoneVisual";

export default function Hero() {
  return <section className="hero">
    <div className="hero-glow"/>
    <div className="hero-copy">
      <p className="hero-kicker">NOVA presenta</p>
      <h1>iPhone 17</h1>
      <p className="hero-line">Brillante en todos<br/>los sentidos.</p>
      <div className="button-row"><Link href="/product/iphone-17" className="button light">Comprar</Link><a href="#showcase" className="text-link">Descubrir <span>↓</span></a></div>
    </div>
    <PhoneVisual priority className="hero-phone" />
    <div className="hero-reflection"/>
    <p className="hero-note">Diseñado para destacar.<br/>Preparado para todo.</p>
  </section>;
}
