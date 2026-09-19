"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const layers = [
  { className: "glass", label: "Ceramic Shield 2", detail: "Enhanced scratch resistance", n: "01" },
  { className: "display", label: "Super Retina XDR", detail: "ProMotion up to 120 Hz", n: "02" },
  { className: "frame", label: "Aluminium frame", detail: "Light and precise", n: "03" },
  { className: "battery", label: "All-day battery", detail: "Up to 30h video", n: "04" },
  { className: "chip", label: "Chip A19", detail: "Next-generation performance", n: "05" },
  { className: "camera", label: "Fusion cameras", detail: "Dual 48MP system", n: "06" },
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
      <div className="exploded-copy"><span className="eyebrow">ENGINEERED INSIDE OUT</span><h2 id="inside-title">Every layer.<br/><em>One purpose.</em></h2><p>Scroll to see precision components separate in perfect harmony.</p></div>
      <div className="exploded-core" aria-label="Illustrated layered view of iPhone 17">
        {layers.map((layer, i) => <div className={`exploded-layer ${layer.className}`} key={layer.className} style={{ zIndex: 20 - i, "--i": i } as React.CSSProperties}>
          <span className="layer-shape">{layer.className === "chip" && <b>A19</b>}{layer.className === "camera" && <><i/><i/></>}</span>
          <span className={`layer-label ${i % 2 ? "label-bottom" : "label-top"}`}><small>{layer.n}</small><b>{layer.label}</b><em>{layer.detail}</em></span>
        </div>)}
      </div>
      <div className="scroll-cue">SCROLL <span>↓</span></div>
    </div>
  </section>;
}
