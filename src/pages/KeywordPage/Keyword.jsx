import React from "react";
import "./Keyword.css";

const Keyword = () => {
  const photos = [
    { id: 1, src: "img/key1.svg", alt: "Collaboration" },
    { id: 2, src: "img/key2.svg", alt: "Discussion" },
    { id: 3, src: "img/key3.svg", alt: "Presentation" },
    { id: 4, src: "img/key4.svg", alt: "Ideation" },
    { id: 5, src: "img/key5.svg", alt: "Certificate" },
    { id: 6, src: "img/key6.svg", alt: "Working" },
  ];

  return (
    <section className="keyword">
      <p className="section-label">Keyword</p>

      <div className="keyword-container">
        <div className="keyword-text-group">
          <h2 className="kw-item light">COLLABORATION</h2>
          <h2 className="kw-item dark italic">
            ENTHUSIASM <span className="badge purple">열정</span>
          </h2>
          <h2 className="kw-item light">
            <span className="badge yellow">아이디어</span> IDEATION
          </h2>
          <h2 className="kw-item light">PERSISTENCE</h2>
          <h2 className="kw-item light">RESPONSIBILITY</h2>
        </div>

        {photos.map((photo, index) => (
          <div key={photo.id} className={`photo-box photo-${index + 1}`}>
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Keyword;
