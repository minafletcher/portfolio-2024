import content from "../../content/content";
import { Canvas } from "@react-three/fiber";
import Experience from "../../Experience";
import { useElementOnScreen } from "../helpers/useElementOnScreen";
import scrollViewHelper from "../helpers/scrollToView";
import { useEffect } from "react";
import NoiseLanding from "../int-animation/NoiseLanding";
import { ReactP5Wrapper } from "react-p5-wrapper";
import useWindowSize from "../helpers/useWindowSize";

export default function Landing({ sectionKey, setDot }) {
  // checks throughout run when landing is visible
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  useEffect(() => {
    isVisible ? setDot(sectionKey) : null;
  }, [containerRef, isVisible]);

  const dimensions = useWindowSize();

  if (dimensions.width > 768){
    dimensions.height = dimensions.height + 200
  }

  return (
    <div
      ref={containerRef}
      id="home"
      className="LANDING-ANCHOR"
    >
      <div className="CONT-CANVAS relative mobile:min-h-[400px] tablet:min-h-[800px] h-screen grid grid-cols-[1fr] items-center top-0">
      <div className="CUSTOM-P5-WRAPPER p5-wrapper">
            <ReactP5Wrapper
              sketch={NoiseLanding}
              width={dimensions.width}
              height={dimensions.height}
            ></ReactP5Wrapper>
          </div>
        <div className="LANDING-CONTAINER background-section justify-center items-center">
          <h1 className="LANDING-TITLE max-w-fit text-center text-black laptop:heading1 tablet:tablet-heading1 mobile:mobile-heading1 uppercase tablet:pr-0">
            {content.landing.firstName}
          </h1>
          {/* <h1 className="LANDING-TITLE max-w-fit text-black laptop:heading1 tablet:tablet-heading1 mobile:mobile-heading1 uppercase mobile:pr-24 tablet:pr-0">
            {content.landing.lastName}
          </h1> */}
          <h2 className="LANDING-SUBTITLE max-w-fit text-black laptop:heading2 tablet:tablet-heading2 mobile:heading3">
            {content.landing.subtitle}
          </h2>
          <p className="LANDING-BODY text-black body-responsive max-w-2xl mt-4 text-center">
            {content.landing.body}
          </p>
          <button
            className="LANDING-BUTTON bg-black max-w-fit border-2 mobile:mt-6 laptop:mt-8 rounded-md border-black text-white tablet:heading2-5 mobile:mobile-heading3 uppercase py-2 px-10 hover:text-black hover:bg-transparent hover:border-black transition-all duration-200"
            onClick={() => scrollViewHelper("work")}
          >
            {content.landing.button}
          </button>
        </div>
        {/* <Canvas
          className="CANVAS relative row-start-1 col-start-1"
          orthographic
          camera={{ zoom: 150, position: [0, 0, 100] }}
        >
          <Experience />
        </Canvas> */}
        
      </div>
    </div>
  );
}
