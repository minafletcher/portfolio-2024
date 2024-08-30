import Landing from "./components/Landing/Landing";
import HamburgerMenu from "./components/Navbar/HamburgerMenu";
import Dots from "./components/Navbar/dots";
import Work from "./components/Work/Work";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import AboutMe from "./components/AboutMe/AboutMe";

import ReactFullpage from "@fullpage/react-fullpage";
import Sketchbook from "./components/Sketchbook/Sketchbook";

const Portfolio = ({
  navToggle,
  setNavLight,
  navLight,
  dotsMode,
  setActiveDot,
  activeDot,
  dotsLight,
}) => {
  return (
    <div className="PORTFOLIO-CONTAINER">
      <HamburgerMenu
        sketchbook={false}
        setDot={setActiveDot}
        setNavLight={setNavLight}
        navLight={navLight}
      />
      <Dots setDot={setActiveDot} activeDot={activeDot} dotsLight={dotsLight} />
      <div className="SECTION-PADDING">
      <Landing sectionKey={1} setDot={setActiveDot} />
      <Work sectionKey={2} setDot={setActiveDot} />
      <Sketchbook
        sectionKey={3}
        navToggle={navToggle}
        setNavLight={setNavLight}
        setDot={setActiveDot}
        dotsMode={dotsMode}
      />
      <AboutMe sectionKey={4} setDot={setActiveDot} />
      <Experience sectionKey={5} setDot={setActiveDot} />
      <Skills sectionKey={6} setDot={setActiveDot} />
          </div>
    </div>
  );
};

export default Portfolio;
