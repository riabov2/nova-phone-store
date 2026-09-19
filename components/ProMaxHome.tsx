"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ProMaxHome.module.css";

gsap.registerPlugin(ScrollTrigger);

const HERO_IMAGE =
  "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-cosmic-orange-250909_inline.jpg.large.jpg";
const CAMERA_IMAGE =
  "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-camera-close-up-250909_big.jpg.large.jpg";

const finishes = [
  { id: "deep-blue", name: "Deep Blue", swatch: "#1d2a3a" },
  { id: "cosmic-orange", name: "Cosmic Orange", swatch: "#c96a30" },
  { id: "silver", name: "Silver", swatch: "#d9d9d2" },
] as const;

const storagePrices = {
  "256 GB": 1469,
  "512 GB": 1719,
  "1 TB": 1969,
  "2 TB": 2469,
} as const;

type Storage = keyof typeof storagePrices;
type Finish = (typeof finishes)[number]["id"];

function formatPrice(value: number) {
  return new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function ProMaxHome() {
  const heroRef = useRef<HTMLElement>(null);
  const heroVisualRef = useRef<HTMLDivElement>(null);
  const teardownRef = useRef<HTMLElement>(null);
  const [storage, setStorage] = useState<Storage>("256 GB");
  const [finish, setFinish] = useState<Finish>("cosmic-orange");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const selectedFinish = useMemo(
    () => finishes.find((item) => item.id === finish) ?? finishes[1],
    [finish],
  );

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const hero = heroRef.current;
    const visual = heroVisualRef.current;
    if (!hero || !visual) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hero-copy]",
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: "power3.out" },
      );
      gsap.fromTo(
        visual,
        { y: 55, scale: 0.92, rotateY: -7, opacity: 0 },
        { y: 0, scale: 1, rotateY: 0, opacity: 1, duration: 1.35, ease: "power3.out" },
      );
      gsap.fromTo(
        "[data-light-sweep]",
        { xPercent: -140, opacity: 0 },
        { xPercent: 145, opacity: 0.7, duration: 1.6, ease: "power2.inOut", delay: 0.25 },
      );
    }, hero);

    const onMove = (event: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      gsap.to(visual, {
        x: x * 18,
        y: y * 12,
        rotateY: x * 3,
        rotateX: y * -2,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    const onLeave = () => {
      gsap.to(visual, {
        x: 0,
        y: 0,
        rotateY: 0,
        rotateX: 0,
        duration: 0.7,
        ease: "power3.out",
      });
    };

    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("mouseleave", onLeave);

    return () => {
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("mouseleave", onLeave);
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const root = teardownRef.current;
    if (!root) return;

    const mm = gsap.matchMedia();
    const layers = Array.from(root.querySelectorAll<HTMLElement>("[data-layer]"));
    const labels = Array.from(root.querySelectorAll<HTMLElement>("[data-layer-label]"));

    mm.add("(min-width: 760px)", () => {
      const spread = [-330, -220, -105, 15, 125, 240, 345];
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "+=1800",
          scrub: 0.75,
          pin: "[data-teardown-pin]",
          anticipatePin: 1,
        },
      });

      timeline
        .to(
          layers,
          {
            x: (index) => spread[index] ?? 0,
            rotateY: (index) => (index - 3) * 2.2,
            scale: (index) => 1 - Math.abs(index - 3) * 0.018,
            duration: 1,
            ease: "power2.inOut",
          },
          0,
        )
        .fromTo(
          labels,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, stagger: 0.07, duration: 0.4 },
          0.42,
        )
        .to(
          "[data-teardown-copy]",
          { opacity: 0.15, y: -16, duration: 0.4 },
          0.5,
        )
        .to(
          layers,
          {
            x: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.9,
            ease: "power2.inOut",
          },
          1.35,
        )
        .to(labels, { opacity: 0, duration: 0.25 }, 1.35);

      return () => timeline.kill();
    });

    mm.add("(max-width: 759px)", () => {
      gsap.fromTo(
        layers,
        { y: 0, opacity: 0.6 },
        {
          y: (index) => (index - 3) * 34,
          opacity: 1,
          stagger: 0.04,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top 70%",
            end: "bottom 35%",
            scrub: 0.6,
          },
        },
      );
    });

    return () => mm.revert();
  }, []);

  const handleAdd = () => {
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroGlow} />
        <div className={styles.heroCopy}>
          <span className={styles.kicker} data-hero-copy>IPHONE 17 PRO MAX</span>
          <h1 data-hero-copy>Pro power.<br />Max canvas.</h1>
          <p className={styles.heroSub} data-hero-copy>
            6.9-inch Super Retina XDR. A19 Pro. Three 48MP Fusion cameras.
          </p>
          <div className={styles.heroPrice} data-hero-copy>From €1,469</div>
          <div className={styles.heroActions} data-hero-copy>
            <a className={styles.primaryButton} href="#configure">Buy now</a>
            <a className={styles.secondaryButton} href="#inside">See inside</a>
          </div>
        </div>

        <div className={styles.heroVisual} ref={heroVisualRef}>
          <div className={styles.lightSweep} data-light-sweep />
          <img src={HERO_IMAGE} alt="iPhone 17 Pro and Pro Max in Cosmic Orange" />
          <span className={styles.imageNote}>Official Apple product imagery</span>
        </div>
      </section>

      <section className={styles.teardown} id="inside" ref={teardownRef}>
        <div className={styles.teardownPin} data-teardown-pin>
          <div className={styles.teardownCopy} data-teardown-copy>
            <span className={styles.kicker}>ENGINEERED INSIDE OUT</span>
            <h2>Scroll through<br />the hardware.</h2>
            <p>A conceptual layered view inspired by the real iPhone 17 Pro Max architecture.</p>
          </div>

          <div className={styles.deviceStage} aria-label="Conceptual exploded view of iPhone 17 Pro Max">
            <div className={[styles.hardwareLayer, styles.frontGlass].join(" ")} data-layer>
              <div className={styles.dynamicIsland} />
              <span data-layer-label>Front glass</span>
            </div>
            <div className={[styles.hardwareLayer, styles.displayLayer].join(" ")} data-layer>
              <div className={styles.displayGlow} />
              <span data-layer-label>Super Retina XDR</span>
            </div>
            <div className={[styles.hardwareLayer, styles.frameLayer].join(" ")} data-layer>
              <span data-layer-label>Aluminium unibody</span>
            </div>
            <div className={[styles.hardwareLayer, styles.batteryLayer].join(" ")} data-layer>
              <div className={styles.batteryCell}>BATTERY</div>
              <span data-layer-label>Battery</span>
            </div>
            <div className={[styles.hardwareLayer, styles.logicLayer].join(" ")} data-layer>
              <div className={styles.a19Chip}>A19 PRO</div>
              <span data-layer-label>A19 Pro + vapor chamber</span>
            </div>
            <div className={[styles.hardwareLayer, styles.cameraLayer].join(" ")} data-layer>
              <div className={styles.cameraCluster}><i /><i /><i /></div>
              <span data-layer-label>48MP Fusion cameras</span>
            </div>
            <div className={[styles.hardwareLayer, styles.rearLayer].join(" ")} data-layer>
              <div className={styles.rearPlate}>PRO MAX</div>
              <span data-layer-label>Rear housing</span>
            </div>
          </div>

          <div className={styles.scrollHint}>SCROLL TO EXPLODE ↓</div>
        </div>
      </section>

      <section className={styles.highlights} id="features">
        <article className={[styles.highlight, styles.cameraHighlight].join(" ")}>
          <div>
            <span className={styles.kicker}>CAMERA</span>
            <h2>Three 48MP Fusion cameras.</h2>
            <p>More room to frame, crop and get closer without cluttering the experience.</p>
          </div>
          <img src={CAMERA_IMAGE} alt="Close-up of the iPhone 17 Pro camera system" />
        </article>

        <article className={[styles.highlight, styles.displayHighlight].join(" ")}>
          <div>
            <span className={styles.kicker}>DISPLAY</span>
            <h2>6.9 inches of ProMotion.</h2>
            <p>Super Retina XDR with adaptive refresh rates up to 120Hz.</p>
          </div>
          <div className={styles.displayPoster}>
            <div className={styles.displayIsland} />
            <div className={styles.displayAura} />
            <strong>6.9″</strong>
            <span>Super Retina XDR</span>
          </div>
        </article>

        <article className={[styles.highlight, styles.performanceHighlight].join(" ")}>
          <div>
            <span className={styles.kicker}>PERFORMANCE</span>
            <h2>A19 Pro, cooled for sustained speed.</h2>
            <p>Built around Apple silicon and a vapor-chamber thermal system.</p>
          </div>
          <div className={styles.chipPoster}>
            <small>APPLE SILICON</small>
            <strong>A19</strong>
            <span>PRO</span>
          </div>
        </article>
      </section>

      <section className={styles.configurator} id="configure">
        <div className={styles.configVisual}>
          <img src={HERO_IMAGE} alt="iPhone 17 Pro Max product view" />
          <span>{selectedFinish.name}</span>
        </div>

        <div className={styles.configPanel}>
          <span className={styles.kicker}>CONFIGURE</span>
          <h2>Choose your iPhone 17 Pro Max.</h2>

          <div className={styles.optionGroup}>
            <div className={styles.optionHead}><span>Finish</span><b>{selectedFinish.name}</b></div>
            <div className={styles.finishRow}>
              {finishes.map((item) => (
                <button
                  key={item.id}
                  className={finish === item.id ? styles.activeSwatch : styles.swatch}
                  onClick={() => setFinish(item.id)}
                  aria-label={item.name}
                  aria-pressed={finish === item.id}
                >
                  <i style={{ background: item.swatch }} />
                </button>
              ))}
            </div>
          </div>

          <div className={styles.optionGroup}>
            <div className={styles.optionHead}><span>Storage</span><b>{storage}</b></div>
            <div className={styles.storageGrid}>
              {(Object.keys(storagePrices) as Storage[]).map((item) => (
                <button
                  key={item}
                  className={storage === item ? styles.activeStorage : styles.storage}
                  onClick={() => setStorage(item)}
                >
                  <b>{item}</b><span>{formatPrice(storagePrices[item])}</span>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.purchaseRow}>
            <div className={styles.quantity}>
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity">−</button>
              <output>{quantity}</output>
              <button onClick={() => setQuantity(Math.min(9, quantity + 1))} aria-label="Increase quantity">+</button>
            </div>
            <div className={styles.total}><span>Total</span><b>{formatPrice(storagePrices[storage] * quantity)}</b></div>
          </div>

          <button className={styles.primaryButton} onClick={handleAdd}>
            {added ? "Configuration saved" : "Add to cart"}
          </button>
          <p className={styles.configNote}>Cart wiring for this new Pro Max SKU can be connected after the page design is approved.</p>
        </div>
      </section>

      <section className={styles.specSection}>
        <div className={styles.specIntro}>
          <span className={styles.kicker}>TECH SPECS</span>
          <h2>Only the details you need.</h2>
        </div>
        <div className={styles.specList}>
          <details><summary>Display <span>+</span></summary><p>6.9-inch Super Retina XDR OLED, ProMotion up to 120Hz, Always-On display.</p></details>
          <details><summary>Performance <span>+</span></summary><p>A19 Pro with a 6-core GPU and vapor-chamber thermal architecture.</p></details>
          <details><summary>Camera <span>+</span></summary><p>Three 48MP Fusion rear cameras plus an 18MP Center Stage front camera.</p></details>
          <details><summary>Storage <span>+</span></summary><p>256GB, 512GB, 1TB or 2TB.</p></details>
          <details><summary>Size <span>+</span></summary><p>163.4 × 78 × 8.75 mm. Weight: 231 g.</p></details>
        </div>
      </section>

      <section className={styles.benefits}>
        <div><strong>Fast delivery</strong><span>Across Spain</span></div>
        <div><strong>Warranty</strong><span>Dedicated support</span></div>
        <div><strong>Secure payment</strong><span>Protected checkout</span></div>
        <div><strong>Easy returns</strong><span>Simple process</span></div>
      </section>
    </div>
  );
}
