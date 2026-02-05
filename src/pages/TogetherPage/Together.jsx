import React from "react";
import "./Together.css";
import Button from "../../components/Button";

const Together = () => {
  return (
    <section className="together">
      <p className="top-label">UX/UI DESIGN @2026</p>

      <div className="center">
        <h1 className="main-display-title">
          LET’S BUILD <br />
          SOMETHING TOGETHER.
        </h1>

        <Button
          text="Decode My Projects"
          onClick={() => console.log("Navigate to Projects")}
        />
      </div>

      <p className="bottom-description">
        해석하고 연결할 준비가 되어 있습니다.
      </p>
    </section>
  );
};

export default Together;
