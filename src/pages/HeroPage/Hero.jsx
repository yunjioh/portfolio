import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="header">
        <div className="hero-name">OH YUNJI</div>

        <nav className="hero-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#process">Process</a>
          <a href="#project">Project</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>

      <div className="hero-center">
        <svg
          className="decoder-svg"
          viewBox="0 0 1200 300"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <mask id="text-mask">
              <rect width="100%" height="100%" fill="black" />
              <text
                x="50%"
                y="55%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="decoder-text"
                fill="white"
              >
                DECODER
              </text>
            </mask>
          </defs>

          <foreignObject width="100%" height="100%" mask="url(#text-mask)">
            <video
              className="decoder-video"
              src="/video/video.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </foreignObject>
        </svg>
      </div>

      <div className="hero-bottomBox">
        <div className="hero-bottom">
          <div className="hero-bottom left">
            <p>I AM A DE-CODER YUNJI OH</p>
            <p>UI/UX DESIGNER · INTERACTION DESIGNER</p>
          </div>

          <div className="hero-bottom right">
            <p>Interpreting through Design, Decoding through Code.</p>
            <p>디자인으로 해석하고, 코드로 해독하는 디자이너 오윤지입니다.</p>
          </div>
        </div>
      </div>

      <span className="guide vertical" />
    </section>
  );
}
