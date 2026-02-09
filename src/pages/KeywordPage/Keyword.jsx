import React, { useRef, useEffect, useState, useMemo } from "react";
import "./Keyword.css";
import Badge from "../../components/Badge";

const Keyword = () => {
  // 키워드/이미지 매칭 인덱스
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef(null);
  const itemsRef = useRef([]); // kw-item refs

  const photos = [
    {
      id: 1,
      src: "img/key1.svg",
      alt: "Collaboration",
      badge: {
        text: "협업",
        color: "--blue",
        rotate: -15,
        position: { top: "40px", left: "-30px" },
      },
    },
    {
      id: 2,
      src: "img/key2.svg",
      alt: "Discussion",
      badge: {
        text: "열정",
        color: "--orange",
        rotate: 10,
        position: { top: "-14px", right: "-14px" },
      },
    },
    {
      id: 3,
      src: "img/key3.svg",
      alt: "Presentation",
      badge: {
        text: "아이디어",
        color: "--orange",
        rotate: -8,
        position: { top: "40px", left: "-30px" },
      },
    },
    {
      id: 4,
      src: "img/key4.svg",
      alt: "Ideation",
      badge: {
        text: "책임감",
        color: "--purple",
        rotate: -12,
        position: { top: "-14px", right: "-14px" },
      },
    },
    {
      id: 5,
      src: "img/key5.svg",
      alt: "Certificate",
      badge: {
        text: "끈기",
        color: "--purple",
        rotate: -15,
        position: { top: "40px", left: "-30px" },
      },
    },
    {
      id: 6,
      src: "img/key6.svg",
      alt: "Working",
      badge: {
        text: "꼼꼼함",
        color: "--blue",
        rotate: 12,
        position: { top: "-14px", right: "-14px" },
      },
    },
  ];

  const keywords = [
    "COLLABORATION",
    "ENTHUSIASM",
    "IDEATION",
    "PERSISTENCE",
    "RESPONSIBILITY",
    "METICULOUSNESS",
  ];

  // ✅ 섹션이 중앙에 있을 때만 “등장(in-view)” 트리거
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      {
        threshold: 0,
        // viewport 중앙 1px 라인을 관측영역으로 만들어 "중앙에 왔을 때"만 true
        rootMargin: "-50% 0px -50% 0px",
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const randomDelays = useMemo(
    () => photos.map(() => Math.random() * 0.7),
    [photos],
  );

  // ✅ 중앙에 가장 가까운 kw-item을 active로 (전문/부드럽게: rAF)
  useEffect(() => {
    let ticking = false;

    const updateActive = () => {
      const centerY = window.innerHeight / 2;
      let bestIdx = 0;
      let bestDist = Infinity;

      itemsRef.current.forEach((node, idx) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const midY = rect.top + rect.height / 2;
        const dist = Math.abs(midY - centerY);

        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = idx;
        }
      });

      setActiveIndex(bestIdx);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActive);
        ticking = true;
      }
    };

    // 초기 1회
    updateActive();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  return (
    <section
      className={`keyword ${isInView ? "in-view" : ""}`}
      ref={containerRef}
    >
      <p className="section-label">Keyword</p>

      <div className="keyword-container">
        <div className="keyword-text-group">
          {keywords.map((txt, idx) => (
            <h2
              key={txt}
              ref={(el) => (itemsRef.current[idx] = el)}
              className={`kw-item ${activeIndex === idx ? "active" : ""}`}
            >
              {txt}
            </h2>
          ))}
        </div>

        {photos.map((photo, index) => {
          const isActive = activeIndex === index;
          const delay = isInView ? randomDelays[index] : 0;

          return (
            <div
              key={photo.id}
              className={`photo-box photo-${index + 1} ${
                isActive ? "is-active" : ""
              }`}
              style={{
                transitionDelay: isActive ? "0s" : `${delay}s`,
              }}
            >
              <Badge
                text={photo.badge.text}
                color={photo.badge.color}
                rotate={photo.badge.rotate}
                position={photo.badge.position}
                style={{
                  transitionDelay: isActive ? "0s" : `${delay + 0.08}s`,
                }}
              />
              <img src={photo.src} alt={photo.alt} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Keyword;
