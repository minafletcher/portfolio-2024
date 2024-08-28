import content from "../../content/content";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import React, { useState } from "react";
import SketchbookTag from "./SketchbookTag";
import HamburgerMenu from "../Navbar/HamburgerMenu";
import Tag from "../Tag";

export default function SketchbookPage({ navLight }) {
  const [tagClick, setTagClick] = useState(0);

  const setTag = (key) => {
    setTagClick(key);
  };

  return (
    <>
    <HamburgerMenu sketchbook={true} navLight={navLight} />
    <div className="SKETCHBOOK-CONTAINER section-vert section-px-lg pt-40 pb-40 laptop:snap-start">
      <div className="TITLE-INFO-WRAPPER flex flex-col gap-4">
        <div className="SKETCHBOOK-TITLE section-header text-black">
          {content.sketchbookPage.title}
        </div>
        <div className="SKETCHBOOK-DESC body-responsive text-black">
          {content.sketchbookPage.description}
        </div>
        <div className="SKETCHBOOK-TAGS flex flex-row gap-4 items-center">
          {content.sketchbookPage.tags.map((tag) => {
            return (
              <div>
                <SketchbookTag
                  key={tag.key}
                  tagKey={tag.key}
                  text={tag.tag}
                  tagClick={tagClick}
                  setTagClick={setTag}
                ></SketchbookTag>
              </div>
            );
          })}
          <div
            className={tagClick == 0 ? "hidden" : "block"}
            onClick={() => setTag(0)}
          >
            <img
              className="cursor-pointer w-4"
              src={content.sketchbookPage.closeSvg}
            ></img>
          </div>
        </div>
      </div>
      <div className="SKETCHBOOK-PROJECTS grid tablet:grid-cols-2 mobile:grid-cols-1 pt-20 gap-20">
        {content.sketchbookPage.projects.map((project) => {
          return (
            <div
              className={
                tagClick == 0 || tagClick == project.tagNum
                  ? "flex flex-col gap-3"
                  : "hidden"
              }
            >
              <div className="PROJECT-EMBED">
                {project.type == "code" ? (
                  <div className="overflow-hidden">
                    <Link to={project.url} target="_blank">
                      <img
                        src={project.imgUrl}
                        className="w-full h-full object-cover hover:scale-105 transition duration-200 ease-in-out"
                      ></img>
                    </Link>
                  </div>
                ) : (
                  <div className="VIDEO-PLAYER aspect-video">
                    <ReactPlayer
                      url={
                        "https://www.youtube-nocookie.com/embed/" + project.url
                      }
                      controls={true}
                      width="100%"
                      height="100%"
                    />
                  </div>
                )}
              </div>
              <div className="PROJ-TITLE heading3-responsive text-black">
                {project.title}
              </div>
              <div className="PROJ-TAGS flex flex-row gap-2">
                {project.tags.map((tag) => {
                  return <Tag content={tag.tag} size={1}></Tag>;
                })}
              </div>
              <div className="PROJ-DESC body-responsive text-black">
                {project.desc}
              </div>
              {project.buttonTxt ? (
                <Link to={project.url} target="_blank">
                  <div className="PROJ-LINK max-w-fit lg-button">
                    {project.buttonTxt}
                  </div>
                </Link>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}
