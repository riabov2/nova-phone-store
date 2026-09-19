import Link from "next/link";
import PhoneVisual from "./PhoneVisual";

export function FeaturesSection() {
  return <section className="features section" id="features">
    <div className="section-heading"><span className="eyebrow">Todo lo esencial. Elevado.</span><h2>Mucho más que<br/><em>un teléfono.</em></h2></div>
    <div className="feature-grid">
      <article className="feature-card blue"><span>01 · Pantalla</span><h3>Brilla incluso<br/>bajo el sol.</h3><p>Hasta 3.000 nits de brillo máximo en exteriores.</p><div className="sun-orbit"><i/></div></article>
      <article className="feature-card dark-card"><span>02 · ProMotion</span><h3>Todo fluye.<br/>Hasta 120 Hz.</h3><p>Movimiento más natural y respuesta inmediata.</p><div className="waves"/></article>
      <article className="feature-card pale"><span>03 · Always-On</span><h3>Tu información.<br/>Siempre a la vista.</h3><div className="mini-lock"><b>09:41</b><small>Madrid · 22°</small></div></article>
    </div>
  </section>;
}

export function CameraSection() {
  return <section className="camera-section section">
    <div className="camera-copy"><span className="eyebrow">Sistema de cámaras Fusion</span><h2>48 Mpx.<br/><em>Dos veces.</em></h2><p>La cámara principal Fusion y el ultra gran angular Fusion capturan más detalle, color y posibilidades en cada encuadre.</p><div className="spec-pair"><div><b>48</b><span>Mpx Principal</span></div><div><b>48</b><span>Mpx Ultra gran angular</span></div></div></div>
    <div className="camera-art"><div className="lens lens-one"><i/></div><div className="lens lens-two"><i/></div><span>FUSION CAMERA SYSTEM</span></div>
  </section>;
}

export function PerformanceSection() {
  return <section className="performance section">
    <div className="chip-art"><div className="chip-grid"/><div className="chip-mark"><small></small><b>A19</b><span>NOVA POWERED</span></div></div>
    <div className="performance-copy"><span className="eyebrow">A19</span><h2>La potencia<br/><em>va por dentro.</em></h2><p>Rendimiento rápido y eficiente para jugar, crear y hacer de todo sin perder el ritmo.</p><ul><li><b>GPU de 5 núcleos</b><span>Gráficos fluidos</span></li><li><b>Neural Accelerators</b><span>IA en el dispositivo</span></li><li><b>Eficiencia avanzada</b><span>Más autonomía</span></li></ul></div>
  </section>;
}

export function BatterySection() {
  return <section className="battery-section section"><span className="eyebrow">Batería</span><h2>Más tiempo.<br/><em>Menos enchufes.</em></h2><div className="battery-number"><b>30</b><span>horas de<br/>reproducción de vídeo</span></div><div className="charge-line"><i/><p><b>Hasta el 50 % en unos 20 minutos</b><br/>con un adaptador de 40 W o superior</p></div></section>;
}

export function ColorsSection() {
  return <section className="colors-section section"><div className="section-heading"><span className="eyebrow">Elige tu acabado</span><h2>Cinco formas<br/><em>de ser tú.</em></h2></div><div className="color-fan"><PhoneVisual side="back"/><PhoneVisual side="back"/><PhoneVisual side="back"/><PhoneVisual side="back"/><PhoneVisual side="back"/></div><p className="color-names">Negro · Blanco · Azul Niebla · Verde Salvia · Lavanda</p></section>;
}

export function StorageSection() {
  return <section className="storage-section section"><div><span className="eyebrow">Capacidad</span><h2>Espacio para<br/><em>lo que importa.</em></h2></div><div className="storage-options"><article><b>256</b><span>GB</span><p>Fotos, vídeos y apps para cada día.</p></article><article><b>512</b><span>GB</span><p>Más espacio para crear sin límites.</p></article></div></section>;
}

export function BuySection() {
  return <section className="buy-section"><div className="buy-glow"/><PhoneVisual/><div className="buy-copy"><span>iPhone 17</span><h2>Tu próximo<br/><em>gran teléfono.</em></h2><p>Desde 959 €</p><Link className="button light" href="/product/iphone-17">Elegir el tuyo</Link></div></section>;
}
