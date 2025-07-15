import content from "../../content/content";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import React, { useState } from "react";
import SketchbookTag from "./SketchbookTag";
import HamburgerMenu from "../Navbar/HamburgerMenu";
import Tag from "../Tag";

export default function SketchbookPage({ navLight, setNavLight }) {
  const [tagClick, setTagClick] = useState(0);

  const setTag = (key) => {
    setTagClick(key);
  };


  return (
    <>
    <HamburgerMenu sketchbook={true} navLight={navLight} setNavLight={setNavLight} />
    <div className="SKETCHBOOK-CONTAINER flex flex-col section-px-lg mobile:pt-24 tablet:pt-32 laptop:pt-40 laptop:pb-20">
      <div className="TITLE-INFO-WRAPPER flex flex-col gap-4">
        <div className="SKETCHBOOK-TITLE section-header text-black">
          {content.sketchbookPage.title}
        </div>
        <div className="SKETCHBOOK-DESC body-responsive text-black mobile:w-full laptop:w-3/4">
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
      <div className="SKETCHBOOK-PROJECTS grid tablet:grid-cols-2 mobile:grid-cols-1 pt-12 gap-16">
        {content.sketchbookPage.projects.map((project) => {
          return (
            <div
              className={
                tagClick == 0 || tagClick == project.tagNum
                  ? "flex flex-col gap-4"
                  : "hidden"
              }
            >
              <div className="PROJECT-EMBED">
                {project.type == "code" ? (
                  <div className="overflow-hidden">
                    <Link to={project.url} target="_blank">
                      <img
                        src={project.imgUrl}
                        className="w-full h-[300px] object-cover hover:scale-105 transition duration-200 ease-in-out"
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
                <div className="TITLE-TAGS-WRAPPER flex flex-col gap-2">
                    <div className="PROJ-TITLE heading3-responsive text-black">
                    {project.title}
                </div>
                <div className="PROJ-TAGS flex flex-row gap-2">
                    {project.tags.map((tag) => {
                    return <Tag content={tag.tag} size={1}></Tag>;
                    })}
                </div>
              </div>
              <div className="PROJ-DESC body-responsive text-black">
                {project.desc}
              </div>
              {project.buttonTxt ? (
                <Link to={project.url} target="_blank">
                  <div className="PROJ-LINK max-w-fit small-button capitalize">
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
