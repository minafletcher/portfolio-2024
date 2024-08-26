import classNames from "classnames";
import { useState } from "react";
import scrollViewHelper from "../helpers/scrollToView";

export default function Dot({ dotKey, dotId, setDot, activeDot, dotsLight }) {
  const [dotHovering, setDotHovering] = useState(false);

  const handleMouseOver = () => {
    setDotHovering(true);
  };

  const handleMouseOut = () => {
    setDotHovering(false);
  };

  const handleDotClick = () => {
    !activeDot ? dotScroll() : null;
    handleMouseOut();
  };

  function dotScroll() {
    setDot(dotKey);
    scrollViewHelper(dotId);
  }

  const dotCond = classNames(
    "pointer-events-auto border bg-none border-black rounded-full w-3.5 h-3.5 cursor-pointer transition-all duration-300 ease-in-out",
    {
      "bg-black scale-[115%]": activeDot,
      "bg-white border-white scale-[115%]": activeDot && dotsLight,
      "border-black": !activeDot,
      "border-white": !activeDot && dotsLight,
    }
  );

  const dotName = classNames(
    "body cursor-default text-black font-rubik font-bold capitalize transition-all delay-300 duration-200 ease-in-out",
    {
      "block opacity-100": dotHovering,
      "text-white": dotsLight,
      "hidden opacity-0": !dotHovering,
    }
  );

  return (
    <div className="DOT-WRAPPER flex flex-row h-5 gap-2 justify-end items-center">
      <div className={dotName}>{dotId}</div>
        <div
          className={dotCond}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={handleDotClick}
        ></div>
    </div>
  );
}
