import { useState, useEffect } from "react";
import { useElementOnScreen } from "../helpers/useElementOnScreen";
import content from "../../content/content";
import WorkDrawer from "./WorkDrawer";
import WorkImage from "./WorkImage";
import { Link } from "react-router-dom";

export default function Work({ sectionKey, setDot }) {
  // use state to set first drawer initially to open
  const [openFirstDrawer, setOpenFirstDrawer] = useState(1);

  const [openDrawer, setOpenDrawer] = useState();

  const handleToggle = (key) => {
    // once handleToggle is called, change first drawer open to false
    setOpenFirstDrawer(false);

    setOpenDrawer(openDrawer !== key ? key : null);
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
    <div ref={containerRef} id="work" className="WORK-ANCHOR anchor-padding">
      <div className="WORK-CONTAINER section-vert snap-scroll justify-center section-px-lg">
        <div className="WORK-HEADER section-header">{content.work.header}</div>
        <div className="TABS-IMG flex flex-row justify-between laptop:gap-8">
          <div className="PROJECT-TABS flex flex-col mt-6 border-t border-black laptop:basis-1/2 desktop:basis-3/5">
            {content.work.projects.map((project) => {
              return (
                <WorkDrawer
                  key={project.key}
                  project={project}
                  toggle={handleToggle}
                  open={
                    project.key === openFirstDrawer
                      ? true
                      : openDrawer === project.key
                  }
                ></WorkDrawer>
              );
            })}
          </div>
          <div className="relative laptop:basis-1/2 desktop:basis-2/5 overflow-hidden rounded-lg">
            {content.work.projects.map((project) => {
              return (
                <Link to={project.buttonUrl} target="_blank"><WorkImage
                  key={project.key}
                  project={project}
                  open={
                    project.key === openFirstDrawer
                      ? true
                      : openDrawer === project.key
                  }
                ></WorkImage></Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
