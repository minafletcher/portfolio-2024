import content from "../../content/content";
import { Canvas } from "@react-three/fiber";
import Experience from "../../Experience";
import { useElementOnScreen } from "../helpers/useElementOnScreen";
import scrollViewHelper from "../helpers/scrollToView";
import { useEffect } from "react";

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

  return (
    <div
      ref={containerRef}
      id="home"
      className="LANDING-ANCHOR section-b-padding"
    >
      <div className="CONT-CANVAS snap-scroll h-screen min-h-[600px] grid grid-cols-[1fr] items-center top-0">
        <div className="LANDING-CONTAINER max-w-fit section-vert row-start-1 col-start-1 z-10 section-px-sm">
          <h1 className="LANDING-TITLE max-w-fit text-black laptop:heading1 tablet:tablet-heading1 mobile:mobile-heading1 uppercase mobile:pr-24 tablet:pr-0">
            {content.landing.name}
          </h1>
          <h2 className="LANDING-SUBTITLE max-w-fit text-black laptop:heading2 tablet:tablet-heading2 mobile:heading3">
            {content.landing.subtitle}
          </h2>
          <p className="LANDING-BODY text-black body-responsive max-w-2xl mt-4">
            {content.landing.body}
          </p>
          <button
            className="LANDING-BUTTON bg-black max-w-fit border-2 mobile:mt-6 laptop:mt-8 rounded-md border-black text-white tablet:heading2-5 mobile:mobile-heading3 uppercase py-2 px-10 hover:text-black hover:bg-transparent hover:border-black transition-all duration-200"
            onClick={() => scrollViewHelper("work")}
          >
            {content.landing.button}
          </button>
        </div>
        <Canvas
          className="CANVAS relative row-start-1 col-start-1"
          orthographic
          camera={{ zoom: 150, position: [0, 0, 100] }}
        >
          <Experience />
        </Canvas>
      </div>
    </div>
  );
}
