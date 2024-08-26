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
      <div className="ABOUT-ME-CONTAINER snap-scroll section-hor justify-center items-center section-px-lg">
        <div className="ABOUT-ME-HEADER-MOBILE flex w-full justify-end mb-14 section-header laptop:hidden">
          {content.aboutMe.header}
        </div>

        <div className="HEADSHOT-TEXT-CONTAINER flex laptop:flex-row mobile:flex-col items-center">
          <img
            className="ABOUT-ME-HEADSHOT shrink-0 laptop:w-2/5 tablet:w-5/12 mobile:w-8/12 aspect-square max-w-md"
            src={content.aboutMe.imgUrl}
            alt={content.aboutMe.imgAlt}
          ></img>

          <div className="ABOUT-ME-TEXT flex flex-col laptop:pl-10 laptop:mr-10 mobile:pb-8">
            <div className="ABOUT-ME-HEADER-LAPTOP section-header laptop:block mobile:hidden">
              {content.aboutMe.header}
            </div>
            <div className="ABOUT-ME-BIO text-black body-responsive">
              <div className="pt-4">{content.aboutMe.line1}</div>
              <div className="pt-4">{content.aboutMe.line2}</div>
              <div className="pt-4">{content.aboutMe.line3}</div>
            </div>
          </div>
        </div>

        <div className="ABOUT-ME-LINKS flex gap-4 laptop:flex-col mobile:flex-row justify-center h-min p-4">
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
