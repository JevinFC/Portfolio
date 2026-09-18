import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { useLanguage } from "../languageContext";
import "./tarifs.scss";

const PIN_DISTANCE = 800;

const PIN_HEADROOM = 118;

const easeInOutCubic = (x) =>
  x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

function Tarifs() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [spread, setSpread] = useState(false);
  const gridRef = useRef(null);
  const pinRef = useRef(null);
  const pinContentRef = useRef(null);

  useEffect(() => {
    const node = gridRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  
  useLayoutEffect(() => {
    const grid = gridRef.current;
    const pin = pinRef.current;
    const pinContent = pinContentRef.current;
    if (!grid || !pin || !pinContent) return;

    const mq = window.matchMedia(
      "(min-width: 901px) and (prefers-reduced-motion: no-preference)"
    );
    let frame = null;
    let active = false;

    
    const update = () => {
      frame = null;
      const distance = pin.offsetHeight - window.innerHeight;
      if (distance <= 0) return;
      const scrolled = -pin.getBoundingClientRect().top;
      const p = Math.min(1, Math.max(0, scrolled / distance));
      grid.style.setProperty("--p", easeInOutCubic(p).toFixed(4));
    };

    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(update);
    };

    const stop = () => {
      window.removeEventListener("scroll", onScroll);
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
        frame = null;
      }
    };

    
    const fits = () =>
      pinContent.offsetHeight + PIN_HEADROOM <= window.innerHeight;

   
    const sync = () => {
      const next = mq.matches && fits();
      if (next === active) {
        if (next) update();
        return;
      }
      active = next;
      setSpread(next);

      if (next) {
        window.addEventListener("scroll", onScroll, { passive: true });
       
        onScroll();
      } else {
       
        stop();
        grid.style.removeProperty("--p");
      }
    };

    sync();
    mq.addEventListener("change", sync);
    window.addEventListener("resize", sync);

    return () => {
      stop();
      window.removeEventListener("resize", sync);
      mq.removeEventListener("change", sync);
    };
  }, []);

  const packs = [
    {
      key: "basic",
      title: t("basicTitle"),
      price: t("basicPrice"),
      subtitle: t("basicSubtitle"),
      features: t("basicFeatures"),
      delivery: t("basicDelivery"),
    },
    {
      key: "standard",
      featured: true,
      title: t("standardTitle"),
      badge: t("standardBadge"),
      price: t("standardPrice"),
      subtitle: t("standardSubtitle"),
      features: t("standardFeatures"),
      delivery: t("standardDelivery"),
    },
    {
      key: "premium",
      title: t("premiumTitle"),
      price: t("premiumPrice"),
      subtitle: t("premiumSubtitle"),
      features: t("premiumFeatures"),
      delivery: t("premiumDelivery"),
    }
  ];

  
  const notes = t("pricingNotes");
  const marqueeNotes = [...notes, ...notes, ...notes, ...notes];

  return (
    <section className="tarifsSection" id="tarifs">
      <div
        className={spread ? "tarifsPin pinned" : "tarifsPin"}
        ref={pinRef}
        style={{ "--pin-distance": `${PIN_DISTANCE}px` }}
      >
        <div className="tarifsPinInner">
          <div className="tarifsPinContent" ref={pinContentRef}>
            <h2 className="tarifsTitle">{t("pricingTitle")}</h2>
            <p className="tarifsSubtitle">{t("pricingSubtitle")}</p>

            <div
              className={`tarifsGrid${visible ? " visible" : ""}${spread ? " spread" : ""}`}
              ref={gridRef}
            >
              {packs.map((pack) => (
                <article
                  key={pack.key}
                  className={pack.featured ? "tarifCard featured" : "tarifCard"}
                >
                  <div className="tarifHeader">
                    {pack.featured && (
                      <span className="badge">{pack.badge}</span>
                    )}
                    <h3>{pack.title}</h3>
                    <span className="price">{pack.price}</span>
                    <span className="delivery">{pack.delivery}</span>
                  </div>

                  <p className="subtitle">{pack.subtitle}</p>

                  <p className="tarifIncluded">{t("pricingIncluded")}</p>

                  <ul>
                    {pack.features.map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="tarifCta"
                    aria-label={`${t("pricingCta")} — ${pack.title}`}
                  >
                    {t("pricingCta")}
                  </a>
                </article>
              ))}
            </div>

            
            <div className="tarifsBanner">
              <ul className="tarifsBannerTrack">
                {marqueeNotes.map((note, idx) => {
                  const isClone = idx >= notes.length;
                  return (
                    <li
                      key={idx}
                      className={isClone ? "bannerClone" : undefined}
                      aria-hidden={isClone ? "true" : undefined}
                    >
                      {note}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tarifs;
