import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ProjectCard from "../../components/ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const projectData = [
  {
    subTitle: "영양제 복용 관리 어플",
    mainTitle: `Medication 
management app`,
    decoTitle: "MANAGEMENT APP",
    duration: "2025.09 - 2025.10",
    role: "“이 프로젝트에서는 서비스의 UX 기획부터 최종 디자인까지 전 과정을 수행하였습니다”",
    // 백틱(`)을 사용하여 줄바꿈을 그대로 유지합니다.
    detail: `더블 다이아몬드 프로세스를 바탕으로 데스크 리서치와 사용자 조사를 통해 문제를 정의하고, 
    페르소나 및 여정 지도를 설계하여 전략적 솔루션을 도출했습니다.
이를 정보 구조(IA)와 와이어프레임으로 구체화한 뒤, 일관된 디자인 시스템을 구축하여 서비스 전반의 UI를 설계했습니다.
총 4차례의 피드백 과정을 거쳐 스토리보드와 인터랙션이 포함된 고도화된 프로토타입을 제작하며, 
기획부터 최종 전달(Deliver)까지의 프로젝트 사이클을 완수했습니다.`,
    images: ["/img/pill1.svg", "/img/pill2.svg"],
  },
  {
    subTitle: "댄서 원밀리언 웹사이트 리뉴얼",
    mainTitle: `1MILLION
website renewal`,
    decoTitle: "WEBSITE RENEWAL",
    duration: "2025.11 - 2025.12",
    role: "“이 프로젝트에서는 서브 디자이너 및 프론트엔드 메인 코더로서 팀을 지원했습니다”",
    detail: `원밀리언 브랜드의 역동성을 시각화한 메인 페이지 디자인을 수행하고, 
카드 UI와 디자인 가이드를 구축하여 프로젝트 전반의 시각적 일관성을 확보했습니다. 
이를 바탕으로 전체 페이지의 반응형 구현을 전담하며 GSAP 애니메이션을 절제 있게 적용해 디자인 의도를 기술적으로 
정교하게 구현했습니다. 최종적으로 인터랙션 안정화와 QA를 거쳐, 설계한 디자인 시스템이 배포 환경까지 완성도 높게 
유지되도록 기여했습니다.`,
    images: ["/img/dance1.svg", "/img/dance2.svg"],
  },
  {
    subTitle: "버츄얼 팬덤 어플",
    mainTitle: `Virtual 
fandom app`,
    decoTitle: "FANDOM APP",
    duration: "2025.12 - 2026.01",
    role: "“이 프로젝트에서는 메인 페이지와 핵심 기능을 디자인하고, 이후 개발에 참여하여 배포하였습니다”",
    detail: `이 프로젝트의 메인 디자이너로서 서비스의 시각 시스템을 총괄하며 메인 페이지와 핵심 기능을 디자인했습니다. 
    직접 설계한 화면을 React 기반의 컴포넌트 단위로 구현하여 디자인 의도가 반영되도록 하였습니다. 
    이후 배너와 포스터 등 제작은 물론, Vercel 배포와 최종 QA를 도맡아 하며 실제 서비스로 완성되는 전 과정을 책임졌습니다.`,
    images: ["/img/nova1.svg", "/img/nova2.svg", "/img/nova3.svg"],
  },
];

const Project = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const pinSets = gsap.utils.toArray(".project");

      gsap.to(pinSets, {
        xPercent: -100 * (pinSets.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          // 가로 스크롤의 총 길이를 프로젝트 개수에 비례하게 설정
          end: () => `+=${sectionRef.current.offsetWidth}`,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} style={{ overflow: "hidden", background: "#fff" }}>
      <div
        ref={sectionRef}
        className="project-wrapper"
        style={{
          display: "flex",
          width: `${projectData.length * 100}vw`, // 데이터 길이에 따라 자동 확장
        }}
      >
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
