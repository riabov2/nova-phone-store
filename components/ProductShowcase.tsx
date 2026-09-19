import PhoneVisual from "./PhoneVisual";

export default function ProductShowcase() {
  return <section className="showcase section" id="showcase">
    <div className="section-heading"><span className="eyebrow">Un nuevo comienzo</span><h2>Se siente nuevo.<br/><em>Porque lo es.</em></h2></div>
    <div className="showcase-stage">
      <PhoneVisual side="back" className="showcase-back"/><PhoneVisual className="showcase-front"/>
      <div className="floating-note note-display"><b>6,3 pulgadas</b><span>Super Retina XDR</span></div>
      <div className="floating-note note-thin"><b>Elegante y resistente</b><span>Cinco acabados</span></div>
    </div>
  </section>;
}
