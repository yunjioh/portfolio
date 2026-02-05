import React from "react";
import "./Coding.css";
import Title from "../../components/Title";

const codingProjects = [
  {
    id: 1,
    title: "Phomein\nWebsite",
    image: "/img/coding1.svg",
  },
  {
    id: 2,
    title: "Y.Studio\nAgency",
    image: "/img/coding2.svg",
  },
  {
    id: 3,
    title: "Musign W.\nAgency",
    image: "/img/coding3.svg",
  },
  {
    id: 4,
    title: "The Dopda\nPlatform",
    image: "/img/coding4.svg",
  },
  {
    id: 5,
    title: "Daebang\nWebsite",
    image: "/img/coding5.svg",
  },
  {
    id: 6,
    title: "Crew a la\nmode Agency",
    image: "/img/coding6.svg",
  },
];

const Coding = () => {
  return (
    <section className="coding">
      <div className="coding-header">
        <Title subTitle="DO THIS TOO" mainTitle="CLONE CODING" />

        <p className="coding-desc">
          <span>HTML, CSS, JavaScript</span>에 대한 이해를 바탕으로 6개의
          클론코딩 프로젝트를 완성하였습니다. 실제 웹사이트를 분석하여 구조를
          이해하고, 반복적인 실습을 통해 코드 작성 역량과 문제 해결 능력을
          키웠습니다.
        </p>
      </div>

      <div className="coding-list">
        <div className="coding-line" />

        {codingProjects.map((item, index) => (
          <div className="coding-item" key={item.id}>
            <div className="coding-text">
              <span className="coding-label">Website</span>
              <p>{item.title}</p>
            </div>

            <div className="coding-thumb">
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>

      <button className="coding-btn">GO TO SITE</button>
    </section>
  );
};

export default Coding;
