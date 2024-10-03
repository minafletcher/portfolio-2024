import Dropdown from "./Dropdown";
import { useState, useEffect } from "react";
import { useElementOnScreen } from "../helpers/useElementOnScreen";
import content from "../../content/content";
import ResumeIcon from "../../content/img/svgs/resume-icon.svg?react";
import { Link } from "react-router-dom";

export default function Experience({ sectionKey, setDot }) {
  // use state to set first drawer initially to open
  const [openFirstDrop, setOpenFirstDrop] = useState(1);

  const [openDrop, setOpenDrop] = useState();

  const handleToggle = (key) => {
    // once handleToggle is called, change first drawer open to false
    setOpenFirstDrop(false);

    setOpenDrop(openDrop !== key ? key : null);
  };

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
      id="experience"
      className="EXPERIENCE-ANCHOR anchor-padding"
    >
      <div className="EXPERIENCE-CONTAINER snap-scroll section-vert justify-center section-px-lg">
        <div className="HEADER-RESUME-WRAPPER z-10 flex flex-row flex-wrap items-end justify-between">
          <div className="EXPERIENCE-HEADER section-header">
            {content.experience.header}
          </div>

          <div className="VIEW-RESUME">
            <Link
              className="flex flex-row items-center gap-2 cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out"
              to={content.contact.links[0].linkUrl}
              target="_blank"
            >
              <div className="body-responsive font-mona">
                {content.experience.downloadText}
              </div>
              <ResumeIcon className="w-8 h-8 fill-black"></ResumeIcon>
            </Link>
          </div>
        </div>

        <div className="EXPERIENCE-BLOCKS z-10 mt-6 flex flex-col gap-4">
          {content.experience.experienceBlocks.map((block) => {
            return (
              <Dropdown
                key={block.key}
                block={block}
                toggle={handleToggle}
                open={
                  block.key === openFirstDrop ? true : openDrop === block.key
                }
              ></Dropdown>
            );
          })}
        </div>
        <div className="BACKGROUND-DOTS absolute z-0 flex w-full items-end justify-center">
          <img
            className="mobile:w-60 tablet:w-80 mobile:ml-60 tablet:ml-72 mobile:-mb-[425px] laptop:-mb-[475px]"
            src={content.page.dotUrl2}
            alt={content.page.dotAlt2}
          ></img>
        </div>
      </div>
    </div>
  );
}
