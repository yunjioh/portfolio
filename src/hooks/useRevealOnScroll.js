import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useRevealOnScroll({
  selector = ".js-reveal",
  y = 44,
  duration = 0.9,
  start = "top 80%",
  end = "bottom 20%",
} = {}) {
  useEffect(() => {
    const els = gsap.utils.toArray(selector);
    if (!els.length) return;

    const triggers = [];

    els.forEach((el) => {
      gsap.set(el, { y, opacity: 0 });

      const tween = gsap.to(el, {
        y: 0,
        opacity: 1,
        duration,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start,
          end,
          toggleActions: "play none none reverse", // ✅ 계속
        },
      });

      triggers.push(tween.scrollTrigger);
    });

    return () => {
      triggers.forEach((t) => t && t.kill());
    };
  }, [selector, y, duration, start, end]);
}
