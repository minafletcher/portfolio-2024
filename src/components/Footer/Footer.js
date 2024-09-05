import content from "../../content/content";
import { Link } from "react-router-dom";
import LinkedInIcon from "../../content/img/svgs/linked-in-icon.svg?react";
import GithubIcon from "../../content/img/svgs/github-icon.svg?react";
import BehanceIcon from "../../content/img/svgs/behance-icon.svg?react";
import ResumeIcon from "../../content/img/svgs/resume-icon.svg?react";
import { useEffect } from "react";
import { useElementOnScreen } from "../helpers/useElementOnScreen";
import ContactForm from "./ContactForm";
import { ReactP5Wrapper } from "react-p5-wrapper";
import NoiseSketch from "../int-animation/NoiseSketch.js";
import useWindowSize from "../helpers/useWindowSize";

export default function Footer({ sectionKey, navToggle, setDot, dotsMode }) {
  // checks throughout run that footer is visible. if yes, show nav white, if no, show nav black
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  });

  useEffect(() => {
    isVisible ? navToggle(true) : navToggle(false);
    isVisible ? setDot(sectionKey) : null;
    isVisible ? dotsMode(true) : dotsMode(false);
  }, [containerRef, isVisible]);

  // access page dimensions and handle resize
  const dimensions = useWindowSize();

  return (
    <div ref={containerRef} id="contact" className="CONTACT-ANCHOR">
      <div className="FOOTER-MARGIN relative snap-scroll background-margin-offset">
      <div className="FOOTER-CONTAINER h-fit mobile:min-h-[90vh] laptop:min-h-screen background-section justify-between gap-8 py-12 pt-24">
          <div className="FOOTER-TOP flex flex-col gap-4">
          <div className="FOOTER-TITLE text-white section-header">
            {content.footer.title}
          </div>
          <ContactForm></ContactForm>
        </div>

        <div className="FOOTER-BOTTOM flex flex-col gap-8">
          <div className="EMAIL-LINKS-WRAPPER flex flex-col gap-4">
            <div className="FOOTER-EMAIL text-white tablet:heading2-5 mobile:mobile-heading3">
              {content.footer.email}
            </div>
            <div className="FOOTER-LINKS flex flex-row gap-4">
              <Link to={content.contact.links[0].linkUrl} target="_blank">
                <ResumeIcon className="about-link fill-white"></ResumeIcon>
              </Link>
              <Link to={content.contact.links[1].linkUrl} target="_blank">
                <LinkedInIcon className="about-link fill-white"></LinkedInIcon>
              </Link>
              <Link to={content.contact.links[2].linkUrl} target="_blank">
                <GithubIcon className="about-link fill-white"></GithubIcon>
              </Link>
              <Link to={content.contact.links[3].linkUrl} target="_blank">
                <BehanceIcon className="about-link fill-white"></BehanceIcon>
              </Link>
            </div>
          </div>

          <div className="flex flex-row justify-between text-white body-responsive ">
            <div>{content.footer.designedBy}</div>
            <div>{content.footer.v1}</div>
          </div>
        </div>
      </div>
      <div className="CUSTOM-P5-WRAPPER p5-wrapper"><ReactP5Wrapper sketch={NoiseSketch} width={dimensions.width} height={dimensions.height}></ReactP5Wrapper></div>
      </div>
      
    </div>
  );
}
