import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useRevealOnScroll({
  selector = ".js-reveal",
  y = 26,
  duration = 0.9,
  stagger = 0.12,
  start = "top 75%",
  once = true,
} = {}) {
  useEffect(() => {
    const els = gsap.utils.toArray(selector);
    if (!els.length) return;

    // 초기값
    gsap.set(els, { y, opacity: 0 });

    // 각 요소별로 트리거(섹션마다 자연스럽게)
    els.forEach((el) => {
      gsap.to(el, {
        y: 0,
        opacity: 1,
        duration,
        ease: "power3.out",
        stagger,
        scrollTrigger: {
          trigger: el,
          start,
          once,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [selector, y, duration, stagger, start, once]);
}
