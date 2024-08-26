import Dropdown from "./Dropdown";
import { useState, useEffect } from "react";
import { useElementOnScreen } from "../helpers/useElementOnScreen";
import content from "../../content/content";
import ResumeIcon from "../../content/img/svgs/resume-icon.svg?react";

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
      className="EXPERIENCE-ANCHOR section-b-padding"
    >
      <div className="EXPERIENCE-CONTAINER snap-scroll section-vert justify-center section-px-lg">
        <div className="flex flex-row flex-wrap items-end justify-between">
          <div className="EXPERIENCE-HEADER section-header">
            {content.experience.header}
          </div>

          <div className="VIEW-RESUME">
            <div className="mobile:mobile-body tablet:tablet-body">
              {content.experience.downloadText}
            </div>
          </div>
        </div>

        <div className="EXPERIENCE-BLOCKS mt-6 flex flex-col gap-4">
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
      </div>
    </div>
  );
}
