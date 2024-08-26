import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useElementOnScreen } from "../helpers/useElementOnScreen";
import content from "../../content/content";
import LinkedInIcon from "../../content/img/svgs/linked-in-icon.svg?react";
import GithubIcon from "../../content/img/svgs/github-icon.svg?react";
import BehanceIcon from "../../content/img/svgs/behance-icon.svg?react";
import ResumeIcon from "../../content/img/svgs/resume-icon.svg?react";

export default function AboutMe({ sectionKey, setDot }) {
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
      id="about"
      className="ABOUT-ANCHOR relative section-b-padding"
    >
      <div className="ABOUT-ME-CONTAINER snap-scroll flex mobile:flex-col laptop:flex-row mobile:gap-6 laptop:gap-12 justify-center items-center section-px-lg">
        <div className="ABOUT-ME-HEADER-MOBILE flex w-full justify-end section-header laptop:hidden">
          {content.aboutMe.header}
        </div>

        <div className="HEADSHOT-TEXT-CONTAINER flex laptop:flex-row mobile:flex-col items-center mobile:gap-6 laptop:gap-12">
          <img
            className="ABOUT-ME-HEADSHOT laptop:w-2/5 tablet:w-5/12 mobile:w-8/12 aspect-square max-w-md"
            src={content.aboutMe.imgUrl}
            alt={content.aboutMe.imgAlt}
          ></img>

          <div className="ABOUT-ME-TEXT flex flex-col gap-4">
            <div className="ABOUT-ME-HEADER-LAPTOP section-header laptop:block mobile:hidden">
              {content.aboutMe.header}
            </div>
            <div className="ABOUT-ME-BIO section-vert gap-4 text-black body-responsive">
              <div>{content.aboutMe.line1}</div>
              <div>{content.aboutMe.line2}</div>
              <div>{content.aboutMe.line3}</div>
            </div>
          </div>
        </div>

        <div className="ABOUT-ME-LINKS flex gap-4 laptop:flex-col mobile:flex-row justify-center h-min">
          <Link to={content.contact.links[0].linkUrl} target="_blank">
            <ResumeIcon className="about-link fill-black"></ResumeIcon>
          </Link>
          <Link to={content.contact.links[1].linkUrl} target="_blank">
            <LinkedInIcon className="about-link fill-black"></LinkedInIcon>
          </Link>
          <Link to={content.contact.links[2].linkUrl} target="_blank">
            <GithubIcon className="about-link fill-black"></GithubIcon>
          </Link>
          <Link to={content.contact.links[3].linkUrl} target="_blank">
            <BehanceIcon className="about-link fill-black"></BehanceIcon>
          </Link>
        </div>
      </div>
    </div>
  );
}
