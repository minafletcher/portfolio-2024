import classNames from "classnames";
import { useState, useEffect } from "react";

export default function SkillsIcon({ item, interestStates }) {
  // load svg and get the d attribute
  const [pathD, setPathD] = useState("");

  useEffect(() => {
    // Function to fetch and process the SVG file
    const fetchSvg = async () => {
      try {
        // Fetch the SVG file
        const response = await fetch(item.imgUrl); // Adjust the path to your SVG file
        const svgText = await response.text();

        // Create a DOM parser to parse the SVG content
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgText, "image/svg+xml");

        // Find the path element and get the 'd' attribute
        const pathElement = doc.querySelector("path");
        if (pathElement) {
          setPathD(pathElement.getAttribute("d"));
        }
      } catch (error) {
        console.error("Error fetching or parsing SVG:", error);
      }
    };

    fetchSvg();
  }, []);

  // update the skill to highlight state if one of corresponding interests is hovered
  var highlightSkill = false;
  var highlightColor = "fill-black";
  var partyMode = false;

  interestStates.map((state) => {
    var stateMode = state[0];

    if (stateMode) {
      highlightSkill = true;
      highlightColor = state[1];
    }
  });

  const skillsItem = classNames(
    "SKILLS-ITEM flex flex-col gap-2 items-center transition-all duration-200 ease-in-out",
    {
      "scale-125": highlightSkill,
      "scale-110": !highlightSkill,
    }
  );

  const skillsIcon = classNames(
    "SKILLS-ICON fill-black tablet:h-10 mobile:h-6 transition-all duration-200 ease-in-out"
  );

  return (
    <div key={item.key} className={skillsItem}>
      <div className="scale-110">
        <svg
          className={skillsIcon + " " + highlightColor}
          alt={item.imgAlt}
          width="50px"
          height="50px"
          viewBox="0 0 50 50"
          preserveAspectRatio="xMidYMid meet"
          fill="currentColor"
        >
          <path d={pathD}></path>
        </svg>
      </div>
      <div className="SKILLS-TEXT text-black body-responsive">{item.text}</div>
    </div>
  );
}
