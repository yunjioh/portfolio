import React from "react";
import "./Title.css";

const Title = ({ subTitle, mainTitle, decoTitle }) => {
  return (
    <div className="title-container">
      <span className="sub-title">{subTitle}</span>
      <h1 className="title">{mainTitle}</h1>
      <h2 className="title deco">{decoTitle}</h2>
    </div>
  );
};

export default Title;
