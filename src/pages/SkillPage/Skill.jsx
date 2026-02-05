import React from "react";
import "./Skill.css";
import Title from "../../components/Title";

const Skill = () => {
  const skills = [
    { id: "figma", name: "Figma", icon: "/img/Figma.svg" },
    { id: "illustrator", name: "Illustrator", icon: "/img/Illustrator.svg" },
    { id: "photoshop", name: "Photoshop", icon: "/img/Photoshop.svg" },
    {
      id: "html",
      name: "HTML5",
      icon: "/img/html.svg",
      desc: "다양한 사이트의 클론 코딩을 통해 Box 구조의 원리를 이해하고 header, section, footer 등 다양한 태그를 기반으로 HTML5 구조 작성이 가능합니다.",
    },
    { id: "css", name: "CSS", icon: "/img/CSS.svg" },
    { id: "javascript", name: "JavaScript", icon: "/img/javascript.svg" },
    { id: "react", name: "React", icon: "/img/React.svg" },
    { id: "jquery", name: "JQuery", icon: "/img/Jquery.svg" },
    { id: "gsap", name: "GSAP", icon: "/img/Gsap.svg" },
  ];

  return (
    <section className="skill">
      <div className="skill-header">
        <div className="header-left">
          <Title subTitle="I CAN DO" mainTitle="DE-CODER’S TOOLKIT" />
        </div>
        <div className="header-right">
          <h3 className="sub-phrase">
            Possesses solid coding skills
            <br />
            and is proficient in design tools.
          </h3>
          <p className="sub-desc">
            탄탄한 <span className="highlight purple">코딩 스킬</span>을
            겸비하고 있으며,
            <span className="highlight yellow"> 디자인 툴</span>을 능숙하게
            다룹니다.
          </p>
        </div>
      </div>

      <div className="skill-container">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className={`skill-card ${skill.isMain ? "main-card" : "sub-card"}`}
          >
            <div className="icon-box">
              <img src={skill.icon} alt={skill.name} />
            </div>
            {skill.isMain ? (
              <p className="main-desc">{skill.desc}</p>
            ) : (
              <span className="skill-name">{skill.name}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
