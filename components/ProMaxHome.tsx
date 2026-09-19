"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCart } from "./CartProvider";
import { formatPrice, iphone17ProMax, type FinishId, type Storage } from "@/lib/products";
import styles from "./ProMaxHome.module.css";

gsap.registerPlugin(ScrollTrigger);

const layerLabels = ["Front Glass", "Super Retina XDR Display", "Frame", "Battery", "A19 Pro", "48MP Camera System", "Rear Housing"];

function ExteriorCrop({ side }: { side: "front" | "rear" }) {
  return <div className={`${styles.exteriorCrop} ${side === "front" ? styles.frontCrop : styles.rearCrop}`}><img src={side === "front" ? iphone17ProMax.images.hero : iphone17ProMax.images.finishes} alt="" /></div>;
}

export default function ProMaxHome() {
  const heroRef = useRef<HTMLElement>(null);
  const heroVisualRef = useRef<HTMLDivElement>(null);
  const teardownRef = useRef<HTMLElement>(null);
  const [storage, setStorage] = useState<Storage>("256GB");
  const [finish, setFinish] = useState<FinishId>("cosmic-orange");
  const [quantity, setQuantity] = useState(1);
  const { addItem, openDrawer } = useCart();
  const router = useRouter();
  const selectedFinish = useMemo(() => iphone17ProMax.finishes.find(item => item.id === finish)!, [finish]);
  const unitPrice = iphone17ProMax.prices[storage];

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !heroRef.current || !heroVisualRef.current) return;
    const hero = heroRef.current;
    const visual = heroVisualRef.current;
    const ctx = gsap.context(() => {
      gsap.from("[data-hero-copy]", { y: 28, opacity: 0, duration: .9, stagger: .1, ease: "power3.out" });
      gsap.from(visual, { y: 45, scale: .93, rotateY: -5, opacity: 0, duration: 1.3, ease: "power3.out" });
      gsap.fromTo("[data-light-sweep]", { xPercent: -150, opacity: 0 }, { xPercent: 160, opacity: .65, duration: 1.6, delay: .35 });
    }, hero);
    const move = (event: PointerEvent) => {
      if (matchMedia("(max-width: 800px)").matches) return;
      const rect = hero.getBoundingClientRect();
      gsap.to(visual, { x: ((event.clientX - rect.left) / rect.width - .5) * 16, y: ((event.clientY - rect.top) / rect.height - .5) * 10, duration: .7 });
    };
    hero.addEventListener("pointermove", move);
    return () => { hero.removeEventListener("pointermove", move); ctx.revert(); };
  }, []);

  useEffect(() => {
    if (!teardownRef.current || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = teardownRef.current;
    const layers = gsap.utils.toArray<HTMLElement>("[data-layer]", root);
    const labels = gsap.utils.toArray<HTMLElement>("[data-layer-label]", root);
    const mm = gsap.matchMedia();
    mm.add("(min-width: 760px)", () => {
      const x = [-420, -285, -150, -18, 125, 265, 405];
      const y = [-34, 28, -20, 42, -45, 28, -12];
      const z = [180, 120, 50, 0, -50, -100, -160];
      const tl = gsap.timeline({ scrollTrigger: { trigger: root, start: "top top", end: "+=3000", scrub: .7, pin: "[data-teardown-pin]", anticipatePin: 1 } });
      layers.slice(2, 6).forEach(layer => gsap.set(layer, { opacity: 0 }));
      layers.forEach((layer, index) => tl.to(layer, { x: x[index], y: y[index], z: z[index], rotateY: (index - 3) * 3.5, rotateX: index % 2 ? 2 : -2, opacity: 1, duration: .72, ease: "power2.inOut" }, index * .34));
      tl.to(labels, { opacity: 1, y: 0, stagger: .05, duration: .4 }, 1.45)
        .to({}, { duration: 1.2 })
        .to(labels, { opacity: 0, duration: .25 })
        .to(layers, { x: 0, y: 0, z: 0, rotateX: 0, rotateY: 0, opacity: (index) => index > 1 && index < 6 ? 0 : 1, stagger: .04, duration: 1.15, ease: "power3.inOut" });
      return () => tl.kill();
    });
    mm.add("(max-width: 759px)", () => {
      const x = [-84, -56, -28, 0, 28, 56, 84];
      const y = [-126, -84, -42, 0, 42, 84, 126];
      layers.slice(2, 6).forEach(layer => gsap.set(layer, { opacity: 0 }));
      const tl = gsap.timeline({ scrollTrigger: { trigger: root, start: "top top", end: "+=2200", scrub: .6, pin: "[data-teardown-pin]", anticipatePin: 1 } });
      layers.forEach((layer, index) => tl.to(layer, { x: x[index], y: y[index], z: (3 - index) * 18, rotateZ: (index - 3) * 1.5, scale: .72, opacity: 1, duration: .7 }, index * .3));
      tl.to(labels, { opacity: 1, stagger: .05, duration: .35 }, 1.2).to({}, { duration: 1 }).to(labels, { opacity: 0 }).to(layers, { x: 0, y: 0, z: 0, rotateZ: 0, scale: 1, opacity: (index) => index > 1 && index < 6 ? 0 : 1, duration: 1 });
      return () => tl.kill();
    });
    return () => mm.revert();
  }, []);

  const add = (open: boolean) => {
    addItem({ productSlug: iphone17ProMax.slug, name: iphone17ProMax.name, color: finish, storage, quantity, unitPrice });
    if (open) openDrawer();
  };

  return <div className={styles.page}>
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.heroCopy}>
        <span className={styles.kicker} data-hero-copy>{iphone17ProMax.name}</span>
        <h1 data-hero-copy>{iphone17ProMax.tagline}</h1>
        <p data-hero-copy>{iphone17ProMax.description}</p>
        <strong data-hero-copy>From {formatPrice(iphone17ProMax.prices["256GB"])}</strong>
        <div className={styles.actions} data-hero-copy><a className={styles.primary} href="#configure">Buy now</a><a className={styles.secondary} href="#inside">Explore</a></div>
      </div>
      <div className={styles.heroVisual} ref={heroVisualRef}><div className={styles.lightSweep} data-light-sweep /><img src={iphone17ProMax.images.hero} alt="Front and back of iPhone 17 Pro Max in Cosmic Orange" /></div>
    </section>

    <section className={styles.teardown} id="inside" ref={teardownRef}>
      <div className={styles.teardownPin} data-teardown-pin>
        <div className={styles.teardownHeading}><span className={styles.kicker}>ENGINEERED INSIDE OUT</span><h2>Precision,<br />layer by layer.</h2><p>Scroll to separate the display, chassis and internal architecture.</p></div>
        <div className={styles.deviceStage} aria-label="Exploded iPhone 17 Pro Max with seven component layers">
          <div className={`${styles.phoneLayer} ${styles.glassLayer}`} data-layer><div className={styles.glassRim} /><span data-layer-label>{layerLabels[0]}</span></div>
          <div className={`${styles.phoneLayer} ${styles.displayLayer}`} data-layer><ExteriorCrop side="front" /><span data-layer-label>{layerLabels[1]}</span></div>
          <div className={`${styles.phoneLayer} ${styles.componentLayer}`} data-layer><img src={iphone17ProMax.images.chassis} alt="Detailed internal aluminium chassis" /><span data-layer-label>{layerLabels[2]}</span></div>
          <div className={`${styles.phoneLayer} ${styles.componentLayer} ${styles.batteryLayer}`} data-layer><img src={iphone17ProMax.images.battery} alt="Phone-shaped lithium-ion battery component" /><span data-layer-label>{layerLabels[3]}</span></div>
          <div className={`${styles.phoneLayer} ${styles.componentLayer} ${styles.boardLayer}`} data-layer><img src={iphone17ProMax.images.logicBoard} alt="Detailed logic board with A19 Pro chip" /><span data-layer-label>{layerLabels[4]}</span></div>
          <div className={`${styles.phoneLayer} ${styles.componentLayer} ${styles.cameraLayer}`} data-layer><img src={iphone17ProMax.images.cameraModule} alt="Triple 48MP camera module" /><span data-layer-label>{layerLabels[5]}</span></div>
          <div className={`${styles.phoneLayer} ${styles.rearLayer}`} data-layer><ExteriorCrop side="rear" /><span data-layer-label>{layerLabels[6]}</span></div>
        </div>
        <div className={styles.progress}>SCROLL TO DISASSEMBLE</div>
      </div>
    </section>

    <section className={styles.highlights} id="features">
      <article className={styles.highlight}><div><span className={styles.kicker}>CAMERA</span><h2>Three Fusion cameras. Every angle, Pro.</h2><p>A 48MP Pro Fusion system designed for extraordinary detail from macro to telephoto.</p></div><img src={iphone17ProMax.images.camera} alt="Official close-up of the iPhone 17 Pro Max camera system" /></article>
      <article className={`${styles.highlight} ${styles.displayHighlight}`}><div><span className={styles.kicker}>DISPLAY</span><h2>6.9 inches of immersive ProMotion.</h2><p>Super Retina XDR with up to 120Hz and outstanding outdoor brightness.</p></div><div className={styles.realDisplay}><ExteriorCrop side="front" /></div></article>
      <article className={`${styles.highlight} ${styles.performanceHighlight}`}><div><span className={styles.kicker}>PERFORMANCE</span><h2>A19 Pro. Built to sustain speed.</h2><p>Apple silicon and vapor-chamber cooling deliver powerful, consistent performance.</p></div><img src={iphone17ProMax.images.logicBoard} alt="A19 Pro chip on a detailed logic board" /></article>
    </section>

    <section className={styles.configurator} id="configure">
      <div className={styles.configVisual} style={{ "--finish": selectedFinish.hex } as React.CSSProperties}><img src={iphone17ProMax.images.finishes} alt={`Official iPhone 17 Pro Max finish lineup, ${selectedFinish.name} selected`} /><span>{selectedFinish.name}</span></div>
      <div className={styles.configPanel}><span className={styles.kicker}>CONFIGURE</span><h2>Make it yours.</h2>
        <fieldset><legend>Finish <b>{selectedFinish.name}</b></legend><div className={styles.finishRow}>{iphone17ProMax.finishes.map(item => <button key={item.id} className={finish === item.id ? styles.selectedSwatch : ""} onClick={() => setFinish(item.id)} aria-label={item.name} aria-pressed={finish === item.id}><i style={{ background: item.hex }} /></button>)}</div></fieldset>
        <fieldset><legend>Storage</legend><div className={styles.storageGrid}>{iphone17ProMax.storage.map(item => <button key={item} className={storage === item ? styles.selectedStorage : ""} onClick={() => setStorage(item)}><b>{item}</b><span>{formatPrice(iphone17ProMax.prices[item])}</span></button>)}</div></fieldset>
        <div className={styles.purchase}><div className={styles.quantity}><button onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity">−</button><output>{quantity}</output><button onClick={() => setQuantity(Math.min(9, quantity + 1))} aria-label="Increase quantity">+</button></div><div><span>Total</span><strong>{formatPrice(unitPrice * quantity)}</strong></div></div>
        <button className={styles.primary} onClick={() => add(true)}>Add to cart</button><button className={styles.buyNow} onClick={() => { add(false); router.push("/checkout"); }}>Buy now</button>
      </div>
    </section>

    <section className={styles.specs}><div><span className={styles.kicker}>TECH SPECS</span><h2>Essential details.</h2></div><div>{Object.entries(iphone17ProMax.specs).map(([label, text]) => <details key={label}><summary>{label}<span>+</span></summary><p>{text}</p></details>)}</div></section>
    <section className={styles.benefits}><div><b>Complimentary delivery</b><span>Tracked to your door</span></div><div><b>Apple warranty</b><span>One year limited warranty</span></div><div><b>Secure payment</b><span>Protected checkout</span></div><div><b>Easy returns</b><span>Clear, simple process</span></div></section>
  </div>;
}
