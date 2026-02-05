import React from "react";
import "./Gallery.css";
import Button from "../../components/Button";

const Gallery = () => {
  return (
    <section className="gallery">
      <p className="top-label">UX/UI DESIGN @2026</p>

      <div className="center">
        <h1 className="main-display-title">
          MY WORK PAGE
          <br />
          GALLERY
        </h1>

        <Button
          text="Decode My Projects"
          onClick={() => console.log("Navigate to Projects")}
        />
      </div>

      <p className="bottom-description">
        UI/UX 프로젝트, 클론 코딩, 디자인 작업물로
        <br />
        창의성과 실용성을 담아낸 저의 디자인 역량을 확인하실 수 있습니다
      </p>
    </section>
  );
};

export default Gallery;
