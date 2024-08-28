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
    <div className="PORTFOLIO-CONTAINER flex flex-col mobile:gap-20 laptop:gap-0">
      <HamburgerMenu
        sketchbook={false}
        setDot={setActiveDot}
        navLight={navLight}
      />
      <Dots setDot={setActiveDot} activeDot={activeDot} dotsLight={dotsLight} />
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
      {/* <ScrollRestoration 
        getKey={(location, matches) => {
            return location.pathname;
          }}
          /> */}
    </div>
  );

  // FULLPAGE JS LIBRARY

  // return(

  // <ReactFullpage
  //   //fullpage options
  //   licenseKey = {'YOUR_KEY_HERE'}
  //   scrollingSpeed = {1000} /* Options here */

  //   render={({ state, fullpageApi }) => {
  //     return (
  //         <>
  //         <Navbar />
  //         <ReactFullpage.Wrapper>
  //             <div className="section">
  //             <Landing />
  //             </div>
  //             <div className="section">
  //             <Work />
  //             </div>
  //             <div className="section">
  //             <AboutMe />
  //             </div>
  //             <div className="section">
  //             <Experience />
  //             </div>
  //             <div className="section">
  //             <Skills />
  //             </div>
  //             <div className="section">
  //             <Footer />
  //             </div>
  //         </ReactFullpage.Wrapper>
  //         </>
  //     );
  //   }}
  //   />
  // )
};

export default Portfolio;
