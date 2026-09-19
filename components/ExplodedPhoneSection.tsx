"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const layers = [
  { className: "glass", label: "Ceramic Shield 2", detail: "Más resistente a los arañazos", n: "01" },
  { className: "display", label: "Super Retina XDR", detail: "ProMotion hasta 120 Hz", n: "02" },
  { className: "frame", label: "Marco de aluminio", detail: "Ligero y preciso", n: "03" },
  { className: "battery", label: "Batería para todo el día", detail: "Hasta 30 h de vídeo", n: "04" },
  { className: "chip", label: "Chip A19", detail: "Potencia de nueva generación", n: "05" },
  { className: "camera", label: "Cámaras Fusion", detail: "Sistema dual de 48 Mpx", n: "06" },
];

export default function ExplodedPhoneSection() {
  const root = useRef<HTMLElement>(null);
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.innerWidth < 700) return;
    const parts = gsap.utils.toArray<HTMLElement>(".exploded-layer");
    const spread = [-280, -178, -68, 58, 168, 280];
    const timeline = gsap.timeline({ scrollTrigger: { trigger: root.current, start: "top top", end: "+=2200", scrub: 0.8, pin: ".exploded-pin", anticipatePin: 1 } });
    timeline.to(parts, { x: (i) => spread[i], rotateY: (i) => (i - 2.5) * 2, duration: 1, ease: "power2.inOut", stagger: 0.025 })
      .fromTo(".layer-label", { opacity: 0, y: 14 }, { opacity: 1, y: 0, stagger: 0.07, duration: .35 }, .45)
      .to(".exploded-core", { rotateY: -8, rotateX: 4, duration: 1 }, 0);
    return () => timeline.kill();
  }, { scope: root });

  return <section className="exploded" ref={root} aria-labelledby="inside-title">
    <div className="exploded-pin">
      <div className="exploded-copy"><span className="eyebrow">Diseñado desde dentro</span><h2 id="inside-title">Cada capa.<br/><em>Una razón.</em></h2><p>Desliza para descubrir cómo cada componente trabaja en perfecta sintonía.</p></div>
      <div className="exploded-core" aria-label="Vista ilustrada por capas del iPhone 17">
        {layers.map((layer, i) => <div className={`exploded-layer ${layer.className}`} key={layer.className} style={{ zIndex: 20 - i, "--i": i } as React.CSSProperties}>
          <span className="layer-shape">{layer.className === "chip" && <b>A19</b>}{layer.className === "camera" && <><i/><i/></>}</span>
          <span className={`layer-label ${i % 2 ? "label-bottom" : "label-top"}`}><small>{layer.n}</small><b>{layer.label}</b><em>{layer.detail}</em></span>
        </div>)}
      </div>
      <div className="scroll-cue">SCROLL <span>↓</span></div>
    </div>
  </section>;
}
