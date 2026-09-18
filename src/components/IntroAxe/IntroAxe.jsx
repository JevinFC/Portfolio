import { useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./IntroAxe.scss";
import AxeIcon from "../AxeIcon/AxeIcon.jsx";

const DURATIONS = {
  full: {
    appear: 280,
    idleMin: 500,
    strike: 620,
    cutDraw: 230,
    nudge: 120,
    pause: 360,
    split: 760,
    cutFade: 180,
  },
  express: {
    appear: 140,
    idleMin: 0,
    strike: 380,
    cutDraw: 150,
    nudge: 80,
    pause: 100,
    split: 500,
    cutFade: 120,
  },
};

const STORAGE_KEY = "intro-axe-seen";
const PENDING_CLASS = "intro-pending";
const SPIN_PERIOD = 1100;
const SAFETY_DELAY = 4000;
const IMPACT_PROGRESS = 0.86;
const REDUCED_FADE = 200;

const readMode = () => {
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === null ? "full" : "express";
  } catch {
    return "full";
  }
};

const markSeen = () => {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, "1");
    return true;
  } catch {
    return false;
  }
};

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const toDegrees = (radians) => (radians * 180) / Math.PI;

const readRotation = (element) => {
  const { transform } = window.getComputedStyle(element);
  if (!transform || transform === "none") return 0;
  const matrix = new DOMMatrix(transform);
  return toDegrees(Math.atan2(matrix.b, matrix.a));
};

function IntroAxe() {
  const [reducedMotion] = useState(prefersReducedMotion);
  const [done, setDone] = useState(false);
  const rootRef = useRef(null);
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const cutRef = useRef(null);
  const axeRef = useRef(null);
  const spinRef = useRef(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const top = topRef.current;
    const bottom = bottomRef.current;
    const cut = cutRef.current;
    const axe = axeRef.current;
    const spin = spinRef.current;
    if (!root) return;

    document.documentElement.classList.remove(PENDING_CLASS);

    const timings = DURATIONS[readMode()];
    const timers = [];
    const listeners = [];
    let cancelled = false;

    const wait = (ms) =>
      new Promise((resolve) => {
        timers.push(window.setTimeout(resolve, ms));
      });

    const loaded = new Promise((resolve) => {
      if (document.readyState === "complete") {
        resolve();
        return;
      }
      window.addEventListener("load", resolve, { once: true });
      listeners.push(() => window.removeEventListener("load", resolve));
    });

    let isReady = false;
    const ready = loaded
      .then(() => document.fonts?.ready)
      .then(() => {
        isReady = true;
      });

    const safety = wait(SAFETY_DELAY);

    const release = () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      listeners.forEach((remove) => remove());
    };

    const finish = () => {
      release();
      setDone(true);
    };

    const fadeOut = async () => {
      await Promise.race([ready, safety]);
      if (cancelled) return;

      await root.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: REDUCED_FADE,
        fill: "forwards",
      }).finished;
      if (!cancelled) finish();
    };

    const play = async () => {
      const gate = Promise.race([
        Promise.all([ready, wait(timings.idleMin)]),
        safety,
      ]);

      await axe.animate(
        [
          { opacity: 0, transform: "scale(.6)" },
          { opacity: 1, transform: "scale(1)" },
        ],
        {
          duration: timings.appear,
          easing: "cubic-bezier(.2, .8, .2, 1.2)",
          fill: "forwards",
        }
      ).finished;
      if (cancelled) return;

      let idle = null;
      if (!(isReady && timings.idleMin === 0)) {
        idle = spin.animate(
          [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
          { duration: SPIN_PERIOD, iterations: Infinity, easing: "linear" }
        );
        await gate;
        if (cancelled) return;
      }

      markSeen();

      const from = readRotation(spin);
      idle?.cancel();

      const width = window.innerWidth;
      const height = window.innerHeight;
      const cutAngle = toDegrees(Math.atan2(-0.12 * height, width));
      const norm = ((from % 360) + 360) % 360;
      const to = from + (360 - norm) + 360 + cutAngle;

      spin.animate(
        [{ transform: `rotate(${from}deg)` }, { transform: `rotate(${to}deg)` }],
        {
          duration: timings.strike,
          easing: "cubic-bezier(.55, 0, .25, 1.15)",
          fill: "forwards",
        }
      );

      axe.animate(
        [
          { transform: "scale(1)" },
          { transform: "scale(1.28)", offset: 0.62 },
          { transform: "scale(.9)", offset: 0.9 },
          { transform: "scale(1)" },
        ],
        { duration: timings.strike, easing: "ease-in-out", fill: "forwards" }
      );

      const impactDelay = timings.strike * IMPACT_PROGRESS;
      const cutLength = Math.hypot(0.52 * width, 0.0624 * height);

      cut.querySelectorAll("path").forEach((path) => {
        path.animate(
          [
            { strokeDasharray: cutLength, strokeDashoffset: cutLength },
            { strokeDasharray: cutLength, strokeDashoffset: 0 },
          ],
          {
            duration: timings.cutDraw,
            delay: impactDelay,
            easing: "cubic-bezier(.2, .9, .3, 1)",
            fill: "forwards",
          }
        );
      });

      top.animate(
        [{ transform: "translateY(0)" }, { transform: "translateY(-5px)" }],
        { duration: timings.nudge, delay: impactDelay, fill: "forwards" }
      );
      bottom.animate(
        [{ transform: "translateY(0)" }, { transform: "translateY(5px)" }],
        { duration: timings.nudge, delay: impactDelay, fill: "forwards" }
      );

      const split = {
        duration: timings.split,
        delay: timings.strike + timings.pause,
        easing: "cubic-bezier(.7, 0, .2, 1)",
        fill: "forwards",
      };

      const exits = [
        top.animate(
          [
            { transform: "translateY(-5px) rotate(0deg)" },
            { transform: "translateY(-108%) rotate(-3deg)" },
          ],
          split
        ),
        bottom.animate(
          [
            { transform: "translateY(5px) rotate(0deg)" },
            { transform: "translateY(108%) rotate(3deg)" },
          ],
          split
        ),
        cut.animate([{ opacity: 1 }, { opacity: 0 }], {
          ...split,
          duration: timings.cutFade,
        }),
        spin.animate(
          [
            { transform: `rotate(${to}deg)` },
            { transform: `rotate(${to + 420}deg)` },
          ],
          { ...split, easing: "cubic-bezier(.5, 0, .7, .4)" }
        ),
        axe.animate(
          [
            { transform: "translate(0, 0) scale(1)", opacity: 1 },
            { transform: "translate(30vw, -85vh) scale(.7)", opacity: 0 },
          ],
          split
        ),
      ];

      await Promise.all(exits.map((animation) => animation.finished));
      if (!cancelled) finish();
    };

    const sequence = reducedMotion ? fadeOut() : play();
    sequence.catch(() => {
      if (!cancelled) finish();
    });

    return () => {
      cancelled = true;
      release();
      root.getAnimations({ subtree: true }).forEach((animation) => animation.cancel());
    };
  }, [reducedMotion]);

  if (done) return null;

  return createPortal(
    <div className="introAxe" ref={rootRef} aria-hidden="true">
      <div className="introAxe__half introAxe__half--top" ref={topRef} />
      <div className="introAxe__half introAxe__half--bottom" ref={bottomRef} />

      {!reducedMotion && (
        <>
          <svg
            className="introAxe__cut"
            ref={cutRef}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path d="M50 50 L-2 56.24" vectorEffect="non-scaling-stroke" />
            <path d="M50 50 L102 43.76" vectorEffect="non-scaling-stroke" />
          </svg>

          <div className="introAxe__axe" ref={axeRef}>
            <div className="introAxe__spin" ref={spinRef}>
              <AxeIcon />
            </div>
          </div>
        </>
      )}
    </div>,
    document.body
  );
}

export default IntroAxe;
