import Dot from "./dot";
import content from "../../content/content";
import { useState } from "react";

export default function Dots({ setDot, activeDot, dotsLight }) {
  //TO DO: #Determine how we want to highlight active class
  //only issue with always setting the first is scroll restoration on page / page linking

  return (
    <div className="laptop:flex mobile:hidden fixed z-20 right-0 bottom-0 flex-col gap-2 nav-dots-padding">
      {content.navbar.links.map((linkDot) => {
        return (
          <Dot
            key={linkDot.key}
            dotKey={linkDot.key}
            dotId={linkDot.id}
            setDot={setDot}
            activeDot={activeDot === linkDot.key}
            dotsLight={dotsLight}
          ></Dot>
        );
      })}
    </div>
  );
}
