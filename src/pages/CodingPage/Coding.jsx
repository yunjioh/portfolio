import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Coding.css";
import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import gsap from "gsap";

const codingProjects = [
  { id: "01", name: "Y.Studio Agency", img: "/img/coding1.svg" },
  { id: "02", name: "Daebang Website", img: "/img/coding2.svg" },
  { id: "03", name: "The Dopda Platform", img: "/img/coding3.svg" },
  { id: "04", name: "Musign W. Agency", img: "/img/coding4.svg" },
  { id: "05", name: "Grew a la mode Agency", img: "/img/coding5.svg" },
  { id: "06", name: "Phomein Website", img: "/img/coding6.svg" },
];

const Coding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ 링 레퍼런스
  const ringRef = useRef(null);

  const projects = useMemo(() => codingProjects, []);

  // ✅ 초기 배치 + index 바뀔 때 회전
  useEffect(() => {
    const ring = ringRef.current;
    if (!ring) return;

    const cards = Array.from(ring.querySelectorAll(".ring-card"));
    const n = cards.length;

    // 화면 크기에 따라 radius 조절 (너무 크면 카드가 잘림)
    const radius = Math.min(520, window.innerWidth * 0.38);
    const step = 360 / n;

    // 초기: 카드들을 원으로 배치
    cards.forEach((card, i) => {
      gsap.set(card, {
        rotateY: i * step,
        z: radius,
        transformOrigin: `50% 50% -${radius}px`,
      });
    });

    // ✅ 현재 index가 앞으로 오도록 링 회전
    gsap.to(ring, {
      rotateY: -currentIndex * step,
      duration: 0.8,
      ease: "power3.inOut",
    });

    // ✅ 앞쪽 카드 강조(선택)
    cards.forEach((card, i) => {
      const isFront = i === currentIndex;
      card.classList.toggle("is-front", isFront);
    });
  }, [currentIndex, projects.length]);

  const project = projects[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="coding">
      <div className="coding-container">
        <div className="coding-info">
          <Title subTitle="영양제 복용 관리 어플" mainTitle="CLONE CODING" />
        </div>

        <div className="coding-visual">
          <div className="c-nav-btns">
            <button className="nav-btn" onClick={handlePrev} aria-label="Prev">
              <FaArrowLeft />
            </button>
            {/* <div className="tech-tabs">
            <div className="tech-tab blue">JAVASCRIPT</div>
            <div className="tech-tab orange">HTML</div>
            <div className="tech-tab neon">CSS</div>
          </div> */}

            {/* ✅ 3D 링 캐러셀 */}
            <div className="ring-stage">
              <div className="ring" ref={ringRef}>
                {projects.map((p) => (
                  <div className="ring-card" key={p.id}>
                    <img src={p.img} alt={p.name} />
                  </div>
                ))}
              </div>
            </div>
            <button className="nav-btn" onClick={handleNext} aria-label="Next">
              <FaArrowRight />
            </button>
          </div>

          {/* 선택: 현재 프로젝트명 작은 캡션 */}
          <p className="ring-caption">
            {project.id}. {project.name}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Coding;
