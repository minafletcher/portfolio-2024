import content from "../../content/content";
import { useElementOnScreen } from "../helpers/useElementOnScreen";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactP5Wrapper } from "react-p5-wrapper";
import NoiseSketch from "../int-animation/NoiseSketch.js";
import useWindowSize from "../helpers/useWindowSize";
import classNames from "classnames";

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

    // access page dimensions and handle resize
const dimensions = useWindowSize();

// if dimensions.windowChangeW > 0, window is growing larger. scale
// if window change >=0, window is growing smaller. stay the same and overflow-hidden

  return (
    <div>
      <div
        ref={containerRef}
        id="sketchbook"
        className="SKETCHBOOK-ANCHOR relative"
      >
        <div className="SKETCHBOOK-MARGIN relative snap-scroll background-margin-offset overflow-hidden h-screen min-h-[600px]">
          <div className="SKETCHBOOK-CONTAINER background-section justify-center gap-4">
            <div className="SKETCHBOOK-HEADER text-white heading1-responsive">
              {content.sketchbook.header}
            </div>
            <Link className="max-w-fit" to="/sketchbook">
              <button className="lg-button-white">
                {content.sketchbook.button}
              </button>
            </Link>
          </div>
          <div className="relative z-0 w-full h-full bg-black overflow-hidden">
            <ReactP5Wrapper sketch={NoiseSketch} width={dimensions.width} height={dimensions.height}></ReactP5Wrapper>
          </div>
        </div>
      </div>
    </div>
  );
}
