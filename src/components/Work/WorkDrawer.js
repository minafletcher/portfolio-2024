import Tag from "../Tag";
import { Link } from "react-router-dom";
import classNames from "classnames";

export default function WorkDrawer({ project, toggle, open }) {
  const dropdown = classNames(
    "grid overflow-hidden transition-all duration-300 ease-in-out",
    {
      "pt-4 grid-rows-[1fr] opacity-100": open,
      "grid-rows-[0fr] opacity-0": !open,
    }
  );

  const titleTags = classNames(
    "TITLE-TAGS flex flex-row mobile:flex-wrap laptop:flex-nowrap justify-between mobile:gap-2 laptop:gap-0 transition-all duration-300 ease-in-out",
    {
      "px-0 laptop:hover:px-2 cursor-pointer": !open,
    }
  );

  const mobileImg = classNames(
    "MOBILE-IMG basis-1/2 tablet:basis-1/3 laptop:hidden transition-all duration-400 ease-in-out",
    {
      "opacity-100": open,
      "opacity-0": !open,
    }
  );

  return (
    <div
      className="PROJECT-TAB flex flex-col border-b border-black py-4"
      onClick={() => (!open ? toggle(project.key) : null)}
    >
      <div className={titleTags}>
        <div
          className="PROJECT-TITLE text-black heading3-responsive"
          // onMouseEnter={!open ? () => toggle(project.key) : null}
        >
          {project.title}
        </div>
        <div className="PROJECT-TAGS flex flex-row gap-2">
          {project.tags.map((tag) => {
            return <Tag key={tag.key} content={tag.tag} size={1}></Tag>;
          })}
        </div>
      </div>

      <div className={dropdown}>
        <div className="overflow-hidden flex flex-row laptop:flex-col gap-4">
          <div className="DESC-BTN-WRAPPER flex flex-col basis-1/2 tablet:basis-2/3 body-responsive gap-4">
            {project.description}
            <Link className="max-w-fit" to={project.buttonUrl} target="_blank">
              <button className="small-button max-w-fit capitalize">
                {project.buttonTxt}
              </button>
            </Link>
          </div>
          <div className={mobileImg}>
            <img className="rounded-lg" src={project.projImg}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
