import { useEffect, useState } from "react";
import { useElementOnScreen } from "../helpers/useElementOnScreen";
import content from "../../content/content";
import Tag from "../Tag.js";
import SkillsIcon from "./SkillsIcon";
import SkillsTag from "./SkillsTag";

export default function Skills({ sectionKey, setDot }) {
  const [webHover, setWebHover] = useState(false);
  const [uiHover, setUIHover] = useState(false);
  const [animHover, setAnimHover] = useState(false);
  const [cgHover, setCGHover] = useState(false);
  const [ccHover, setCCHover] = useState(false);
  const [gdHover, setGDHover] = useState(false);
  const [desHover, setDesHover] = useState(false);
  const [partyHover, setPartyHover] = useState(false);

  // checks throughout run if this section is visible. if yes, activate corresponding dot
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
      id="skills"
      className="SKILLS-ANCHOR section-b-padding anchor-padding"
    >
      <div className="SKILLS-CONTAINER snap-scroll section-vert mobile:gap-0 laptop:gap-8 justify-center section-px-lg">
        <div className="HEADER-BODY-WRAPPER flex flex-col gap-4">
          <div className="SKILLS-HEADER section-header">
            {content.skills.header}
          </div>
          <div className="SKILLS-BODY body-responsive text-black">
            {content.skills.body}
          </div>
        </div>

        <div className="SKILLS-TAGS flex flex-row flex-wrap gap-3 justify-center mobile:py-6 tablet:py-8">
          {content.skills.tags.map((interest) => {
            return (
              <SkillsTag
                key={interest.key}
                tagKey={interest.key}
                content={interest.text}
                hoverState={
                  interest.key == 1
                    ? [setWebHover, "hover:bg-cyan"]
                    : interest.key == 2
                    ? [setUIHover, "hover:bg-pink"]
                    : interest.key == 3
                    ? [setAnimHover, "hover:bg-yellow"]
                    : interest.key == 4
                    ? [setCGHover, "hover:bg-red"]
                    : interest.key == 5
                    ? [setCCHover, "hover:bg-green"]
                    : interest.key == 6
                    ? [setGDHover, "hover:bg-blue"]
                    : interest.key == 7
                    ? [setDesHover, "hover:bg-purple"]
                    : [
                        setPartyHover,
                        "hover:bg-gradient-to-r from-pink via-yellow to-cyan",
                      ]
                }
              ></SkillsTag>
            );
          })}
        </div>

        <div className="SKILLS-ICONS flex flex-row flex-wrap mobile:gap-8 tablet:gap-12 justify-center mobile:pt-2 laptop:pt-0">
          {content.skills.skillsItems.map((item) => {
            const stateArray = [];

            item.interests.map((interest) => {
              switch (interest.interestTag) {
                case "web":
                  stateArray.push([webHover, "fill-cyan"]);
                  break;
                case "ui":
                  stateArray.push([uiHover, "fill-pink"]);
                  break;
                case "anim":
                  stateArray.push([animHover, "fill-yellow"]);
                  break;
                case "cg":
                  stateArray.push([cgHover, "fill-red"]);
                  break;
                case "cc":
                  stateArray.push([ccHover, "fill-green"]);
                  break;
                case "gd":
                  stateArray.push([gdHover, "fill-blue"]);
                  break;
                case "des":
                  stateArray.push([desHover, "fill-purple"]);
                case "party":
                  stateArray.push([partyHover, "animate-party-mode"]);
              }
            });

            return (
              <SkillsIcon item={item} interestStates={stateArray}></SkillsIcon>
            );
          })}
        </div>
      </div>
    </div>
  );
}
