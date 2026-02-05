import Hero from "./pages/HeroPage/Hero";
import "./App.css";
import Video from "./pages/VideoPage/Video";
import About from "./pages/AboutPage/About";
import Keyword from "./pages/KeywordPage/Keyword";
import Hobby from "./pages/HobbyPage/Hobby";
import Skill from "./pages/SkillPage/Skill";
import Gallery from "./pages/GalleryPage/Gallery";
import Project from "./pages/ProjectPage/Project";
import Coding from "./pages/CodingPage/Coding";
import Think from "./pages/ThinkPage/Think";
import Together from "./pages/TogetherPage/Together";
import Contact from "./pages/ContactPage/Contact";

function App() {
  return (
    <div className="App">
      <Hero />
      <Video />
      <About />
      <Keyword />
      <Hobby />
      <Skill />
      <Gallery />
      <Project />
      <Coding />
      <Think />
      <Together />
      <Contact />
    </div>
  );
}

export default App;
