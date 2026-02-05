import React from "react";
import "./About.css";
import Title from "../../components/Title";

const About = () => {
  return (
    <section className="about">
      <Title
        subTitle="THIS IS ME"
        mainTitle="UX/UI DESIGNER"
        decoTitle="YUNJI OH"
      />

      <div className="content-section">
        <div className="text-content">
          <div className="quote-mark">“</div>
          <h3 className="intro-phrase">
            [ I am a <span className="highlight">De-Coder:</span> ] <br />
            디자인으로 해석하고 코드로 해독하는 사람
          </h3>
          <p className="description">
            컴퓨터공학을 전공하며 쌓은 개발 구조와 구현 흐름에 대한 깊은 이해로
            <br />
            사용자의 니즈를 감각적으로 해석하고, 이를 실제 구현 가능한
            솔루션으로 해독하는 것을 지향합니다.
            <br />
            이제 단순히 보기 좋은 화면을 넘어 사용자와 브랜드 모두에게
            <br />
            의미 있는 경험을 설계하는 DE-CODER가 되고자 합니다.
          </p>
        </div>

        <div className="image-content">
          <div className="profile-wrapper">
            <img src="/img/comment1.svg" className="comment1" />
            <img
              src="/img/profile.svg"
              alt="Yunji Oh"
              className="profile-img"
            />
            <img src="/img/comment2.svg" className="comment2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
