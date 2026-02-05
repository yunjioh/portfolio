import React, { useState } from "react";
import "./Think.css";
import Title from "../../components/Title";

const questions = [
  {
    id: 1,
    q: "왜 개발이 아닌 UI/UX 디자인을 선택하게 되었나요?",
    a: "기능을 구현하는 것보다 사용자의 경험을 설계하는 과정에 더 큰 흥미를 느꼈습니다.",
  },
  {
    id: 2,
    q: "디자인할 때 가장 중요하게 생각하는 것은 무엇인가요?",
    a: "사용자의 입장에서 불편함 없이 자연스럽게 흐르는 경험을 만드는 것입니다.",
  },
  {
    id: 3,
    q: "문제를 해결하는 과정에서 가장 중요하게 여기는 단계는?",
    a: "문제를 정확히 정의하고 본질을 파악하는 단계라고 생각합니다.",
  },
  {
    id: 4,
    q: "지금까지 진행한 프로젝트 중 가장 기억에 남는 것은?",
    a: "기획부터 디자인, 구현까지 전 과정에 참여했던 프로젝트가 가장 기억에 남습니다.",
  },
  {
    id: 5,
    q: "앞으로 어떤 디자이너가 되고 싶나요?",
    a: "논리적인 근거를 바탕으로 설득력 있는 디자인을 만드는 디자이너가 되고 싶습니다.",
  },
  {
    id: 6,
    q: "디자인과 개발의 협업에서 본인만의 강점은 무엇인가요?",
    a: "개발 구조를 이해하고 있어 현실적인 디자인을 제안할 수 있다는 점입니다.",
  },
];

const Think = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="think">
      <div className="think-header">
        <Title
          subTitle="I THINK"
          mainTitle={
            <>
              MY THOUGHTS <br />
              ON DESIGN
            </>
          }
        />
      </div>

      <div className="think-list">
        {questions.map((item) => (
          <div
            key={item.id}
            className={`think-item ${openId === item.id ? "open" : ""}`}
            onClick={() => toggle(item.id)}
          >
            <div className="think-question">
              <span className="think-q-label">QUESTION0{item.id}</span>
              <p>{item.q}</p>
              <span className="think-arrow">⌄</span>
            </div>

            <div className="think-answer">
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Think;
