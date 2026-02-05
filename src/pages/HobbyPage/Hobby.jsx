import React from "react";
import { motion } from "framer-motion";
import "./Hobby.css";
import Title from "../../components/Title";

const Hobby = () => {
  const hobbyList = [
    { id: 1, title: "HEALING", desc: "휴식", img: "/img/hobby1.svg" },
    { id: 2, title: "THEATER", desc: "연극 관람", img: "/img/hobby2.svg" },
    {
      id: 3,
      title: "VISIT EXHIBITION",
      desc: "전시 관람",
      img: "/img/hobby3.svg",
    },
    {
      id: 4,
      title: "VISIT MUSEUM",
      desc: "박물관 방문",
      img: "/img/hobby4.svg",
    },
    {
      id: 5,
      title: "MAKING PERFUME",
      desc: "조향 체험",
      img: "/img/hobby5.svg",
    },
    { id: 6, title: "ACTIVITY", desc: "야구 직관", img: "/img/hobby6.svg" },
    { id: 7, title: "TRAVEL", desc: "여행", img: "/img/hobby7.svg" },
  ];

  const marqueeList = [...hobbyList, ...hobbyList, ...hobbyList];

  return (
    <section className="hobby">
      <Title
        subTitle="THIS IS ME"
        mainTitle="HOBBIES: "
        decoTitle="MUSIC · EXERCISE · INSPIRATION · THEATER · TRAVEL"
      />

      <div className="hobby-slider-container">
        <motion.div
          className="hobby-track"
          animate={{ x: [0, "-33.33%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          style={{ display: "flex", width: "max-content" }}
        >
          {marqueeList.map((item, index) => (
            <motion.div
              key={`${item.id}-${index}`}
              className="hobby-item"
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ flex: "0 0 auto", cursor: "pointer" }}
            >
              <div className="hobby-img-wrapper">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="hobby-info">
                <h4 className="item-title">{item.title}</h4>
                <p className="item-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hobby;
