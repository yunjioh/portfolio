import React from "react";
import "./Video.css";

const Video = () => {
  return (
    <section id="video">
      <div className="video-page-container">
        <div className="video-frame">
          <video autoPlay loop muted playsInline className="main-video">
            <source src="/video/video.mp4" type="video/mp4" />
          </video>
        </div>

        <span className="guide vertical" />
      </div>
    </section>
  );
};

export default Video;
