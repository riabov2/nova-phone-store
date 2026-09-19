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

export default function ProMaxHome() {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const heroVisualRef = useRef<HTMLDivElement>(null);
  const [storage, setStorage] = useState<Storage>("256GB");
  const [finish, setFinish] = useState<FinishId>("cosmic-orange");
  const [quantity, setQuantity] = useState(1);
  const { addItem, openDrawer } = useCart();
  const router = useRouter();
  const selectedFinish = useMemo(() => iphone17ProMax.finishes.find(item => item.id === finish)!, [finish]);
  const unitPrice = iphone17ProMax.prices[storage];

  useEffect(() => {
    if (!pageRef.current || !heroRef.current || !heroVisualRef.current || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const hero = heroRef.current;
    const visual = heroVisualRef.current;
    const ctx = gsap.context(() => {
      gsap.from("[data-hero-copy]", { y: 26, opacity: 0, duration: .9, stagger: .1, ease: "power3.out" });
      gsap.from(visual, { y: 40, scale: .95, opacity: 0, duration: 1.25, ease: "power3.out" });
      gsap.fromTo("[data-light-sweep]", { xPercent: -150, opacity: 0 }, { xPercent: 160, opacity: .55, duration: 1.6, delay: .3 });
      gsap.utils.toArray<HTMLElement>("[data-story]").forEach(section => {
        const image = section.querySelector("img");
        const copy = section.querySelector("[data-story-copy]");
        gsap.from(copy, { y: 35, duration: .85, ease: "power3.out", scrollTrigger: { trigger: section, start: "top 72%", once: true } });
        if (image) gsap.from(image, { scale: 1.045, duration: 1.2, ease: "power2.out", scrollTrigger: { trigger: section, start: "top 75%", once: true } });
      });
    }, pageRef);
    const move = (event: PointerEvent) => {
      if (matchMedia("(max-width: 800px)").matches) return;
      const rect = hero.getBoundingClientRect();
      gsap.to(visual, { x: ((event.clientX - rect.left) / rect.width - .5) * 14, y: ((event.clientY - rect.top) / rect.height - .5) * 8, duration: .7 });
    };
    hero.addEventListener("pointermove", move);
    return () => { hero.removeEventListener("pointermove", move); ctx.revert(); };
  }, []);

  const add = (open: boolean) => {
    addItem({ productSlug: iphone17ProMax.slug, name: iphone17ProMax.name, color: finish, storage, quantity, unitPrice });
    if (open) openDrawer();
  };

  return <div className={styles.page} ref={pageRef}>
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.heroCopy}>
        <span className={styles.kicker} data-hero-copy>{iphone17ProMax.name}</span>
        <h1 data-hero-copy>{iphone17ProMax.tagline}</h1>
        <p data-hero-copy>{iphone17ProMax.description}</p>
        <strong data-hero-copy>From {formatPrice(iphone17ProMax.prices["256GB"])}</strong>
        <div className={styles.actions} data-hero-copy><a className={styles.primary} href="#configure">Buy now</a><a className={styles.secondary} href="#design">Explore</a></div>
      </div>
      <div className={styles.heroVisual} ref={heroVisualRef}><div className={styles.lightSweep} data-light-sweep /><img src={iphone17ProMax.images.hero} alt="Front and back of iPhone 17 Pro Max in Cosmic Orange" /></div>
    </section>

    <section className={`${styles.story} ${styles.designStory}`} id="design" data-story>
      <div data-story-copy><span className={styles.kicker}>DESIGN</span><h2>Forged for Pro.</h2><p>A strong, light aluminium unibody pairs with Ceramic Shield 2 on the front and Ceramic Shield on the back.</p></div>
      <img src={iphone17ProMax.images.design} alt="Official iPhone 17 Pro Max TechWoven case and product photography" />
    </section>

    <section className={styles.highlights} id="features">
      <article className={styles.highlight} data-story><div data-story-copy><span className={styles.kicker}>CAMERA</span><h2>Three Fusion cameras. Every angle, Pro.</h2><p>A 48MP Pro Fusion camera system brings extraordinary detail from macro to telephoto.</p></div><img src={iphone17ProMax.images.camera} alt="Official close-up of the iPhone 17 Pro Max camera system" /></article>
      <article className={`${styles.highlight} ${styles.displayHighlight}`} data-story><div data-story-copy><span className={styles.kicker}>DISPLAY</span><h2>6.9 inches of immersive ProMotion.</h2><p>Super Retina XDR with ProMotion up to 120Hz, Always-On and 3000 nits peak outdoor brightness.</p></div><img src={iphone17ProMax.images.display} alt="Official iPhone 17 Pro Max display showing the iOS 26 Lock Screen" /></article>
      <article className={`${styles.highlight} ${styles.performanceHighlight}`} data-story><div data-story-copy><span className={styles.kicker}>PERFORMANCE</span><h2>A19 Pro. Powerful by design.</h2><p>A19 Pro and an Apple-designed vapor chamber deliver exceptional sustained performance.</p></div><img src={iphone17ProMax.images.performance} alt="Official iPhone 17 Pro Max product photography with Clear Case" /></article>
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
