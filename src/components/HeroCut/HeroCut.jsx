import { useEffect, useRef, useState } from "react";
import "./HeroCut.scss";
import shops, { JUNK } from "./shops.js";

const SLICE_AT = 1500;
const CUT_AT = 2300;
const RESET_AT = 6200;
const GAP = 400;
const MAX_CYCLES = 3;

const INTRO_EVENT = "intro-axe:done";
const SMALL_QUERY = "(max-width: 767px)";
const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";

const matches = (query) => window.matchMedia(query).matches;

function HeroCut({ onShopChange }) {
  const [reduced] = useState(() => matches(REDUCED_QUERY));
  const [small, setSmall] = useState(() => matches(SMALL_QUERY));
  const [index, setIndex] = useState(0);
  const [slice, setSlice] = useState(false);
  const [cut, setCut] = useState(false);

  const rootRef = useRef(null);
  const timersRef = useRef([]);
  const indexRef = useRef(0);
  const cyclesRef = useRef(0);
  const finishedRef = useRef(false);
  const runningRef = useRef(false);
  const shopChangeRef = useRef(onShopChange);

  shopChangeRef.current = onShopChange;

  useEffect(() => {
    const media = window.matchMedia(SMALL_QUERY);
    const onChange = (event) => setSmall(event.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    shopChangeRef.current?.(shops[index]);
  }, [index]);

  useEffect(() => {
    if (reduced) return;

    const node = rootRef.current;
    if (!node) return;

    indexRef.current = 0;
    cyclesRef.current = 0;
    finishedRef.current = false;
    runningRef.current = false;

    const clearTimers = () => {
      timersRef.current.forEach((timer) => window.clearTimeout(timer));
      timersRef.current = [];
    };

    const after = (delay, run) => {
      timersRef.current.push(window.setTimeout(run, delay));
    };

    const runCycle = () => {
      if (finishedRef.current) return;
      runningRef.current = true;

      setIndex(indexRef.current);
      setSlice(false);
      setCut(false);

      after(SLICE_AT, () => setSlice(true));
      after(CUT_AT, () => setCut(true));
      after(RESET_AT, () => {
        cyclesRef.current += 1;

        if (cyclesRef.current >= MAX_CYCLES) {
          finishedRef.current = true;
          runningRef.current = false;
          return;
        }

        setSlice(false);
        setCut(false);
        after(GAP, () => {
          indexRef.current = (indexRef.current + 1) % shops.length;
          runCycle();
        });
      });
    };

    const stop = () => {
      clearTimers();
      runningRef.current = false;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (finishedRef.current) return;
        if (entry.isIntersecting) {
          if (!runningRef.current) runCycle();
        } else {
          stop();
        }
      },
      { threshold: 0.25 }
    );

    let armed = false;
    const arm = () => {
      if (armed) return;
      armed = true;
      observer.observe(node);
    };

    if (window.__introAxeDone) arm();
    else window.addEventListener(INTRO_EVENT, arm, { once: true });

    return () => {
      clearTimers();
      observer.disconnect();
      window.removeEventListener(INTRO_EVENT, arm);
    };
  }, [reduced]);

  const shop = shops[index];
  const showHeavy = !small;
  const classes = ["hero-cut", slice && "slice", (cut || reduced) && "cut"]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} ref={rootRef} aria-hidden="true">
      <div className="hc-head">
        <span className="hc-name" data-t={shop.name} />
        <span className="hc-menu">
          {shop.nav.map((item) => (
            <span key={item} data-t={item} />
          ))}
          {JUNK.extraNav.map((item) => (
            <span key={item} className="extra" data-t={item} />
          ))}
        </span>
      </div>

      <div className="hc-marquee junk flow">
        <span data-t={JUNK.marquee} />
      </div>

      <div className="hc-promo junk flow blink" data-t={shop.promo} />

      {showHeavy && (
        <div className="hc-carousel junk flow">
          <span className="hc-arrow" data-t="◄" />
          <span className="hc-carousel-label" data-t={JUNK.carousel} />
          <span className="hc-arrow" data-t="►" />
        </div>
      )}

      <p className="hc-title" data-t={shop.title} />
      <p className="hc-lead" data-t={shop.lead} />

      <div className="hc-cards reveal">
        {shop.cards.map((label) => (
          <div className="hc-card" key={label}>
            <span className="hc-thumb" />
            <span className="hc-card-label" data-t={label} />
          </div>
        ))}
      </div>

      <div className="hc-cols reveal">
        <div className="hc-col">
          <span className="hc-col-label" data-t={JUNK.hoursLabel} />
          {shop.hours.map(([day, time]) => (
            <span className="hc-row" key={day}>
              <span data-t={day} />
              <span data-t={time} />
            </span>
          ))}
        </div>
        <div className="hc-col">
          <span className="hc-col-label" data-t={JUNK.addrLabel} />
          {shop.addr.map((line) => (
            <span className="hc-addr" key={line} data-t={line} />
          ))}
        </div>
      </div>

      <div className="hc-actions">
        <span className="hc-call" data-t={shop.call} />
        <span className="hc-phone" data-t={shop.phone} />
        <span className="hc-itinerary" data-t={JUNK.itinerary} />
      </div>

      <div className="hc-ad junk flow blink" data-t={JUNK.ad} />

      {showHeavy && <div className="hc-counter junk flow" data-t={JUNK.counter} />}

      <div className="hc-foot">
        <span data-t={shop.avis} />
        <span data-t={shop.type} />
      </div>

      {showHeavy && <div className="hc-works junk" data-t={JUNK.works} />}

      <div className="hc-chat junk" data-t={JUNK.chat} />

      <div className="hc-popup junk">
        <span className="hc-popup-close" data-t="✕" />
        <span className="hc-popup-text" data-t={JUNK.popup} />
        <span className="hc-popup-button" data-t={JUNK.popupButton} />
      </div>

      <div className="hc-cookie junk">
        <span data-t={JUNK.cookie} />
        <span className="hc-cookie-button" data-t={JUNK.cookieButton} />
      </div>

      <span className="blade" />
    </div>
  );
}

export default HeroCut;
