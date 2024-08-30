import content from "../../content/content";
import { useElementOnScreen } from "../helpers/useElementOnScreen";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactP5Wrapper } from "react-p5-wrapper";
import { animation } from "../int-animation/animation.js";

export default function Sketchbook({
  sectionKey,
  navToggle,
  setNavLight,
  setDot,
  dotsMode,
}) {
  // checks throughout run that sketchbook is visible
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  useEffect(() => {
    isVisible ? navToggle(true) : navToggle(false);
    isVisible ? setDot(sectionKey) : null;
    isVisible ? dotsMode(true) : dotsMode(false);
    
  }, [containerRef, isVisible]);

  return (
    <div>
      <div
        ref={containerRef}
        id="sketchbook"
        className="SKETCHBOOK-ANCHOR relative"
      >
        <div className="SKETCHBOOK-CONTAINER h-screen min-h-[600px] background-section justify-center gap-4 section-margin-offset">
          <div className="SKETCHBOOK-HEADER text-white heading1-responsive">
            {content.sketchbook.header}
          </div>
          <Link
            className="max-w-fit"
            to="/sketchbook"
          >
            <button className="lg-button-white">
              {content.sketchbook.button}
            </button>
          </Link>
        </div>
        {/* <div className="relative z-0 w-full h-full"><ReactP5Wrapper sketch={animation}></ReactP5Wrapper></div> */}
      </div>
    </div>
  );
}
