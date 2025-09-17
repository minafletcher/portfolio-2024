import content from "../../content/content";
import { Link } from "react-router-dom";
import classNames from "classnames";

export default function Dropdown({ block, toggle, open }) {
  const dropdownEXP = classNames(
    "grid overflow-hidden transition-all duration-300 ease-in-out",
    {
      "grid-rows-[1fr] pt-4 border-t border-black opacity-100": open,
      "grid-rows-[0fr] opacity-0": !open,
    }
  );

  const dropdownHover = classNames(
    "DROPDOWN-TOP cursor-pointer flex tablet:flex-row tablet:flex-wrap mobile:flex-col tablet:items-center mobile:items-start justify-between gap-1 transition-all duration-300 ease-in-out",
    {
      "pb-2": open,
      "px-0 laptop:hover:px-2": !open,
    }
  );

  return (
    <div className="DROPDOWN-CONTENT flex flex-col border border-black py-3 px-4 bg-white rounded-lg">
      <div className={dropdownHover} onClick={() => toggle(block.key)}>
        <div className="JOB-COMPANY flex flex-row flex-wrap items-center gap-1.5">
          <div className="text-black laptop:heading3 tablet:mobile-heading3 mobile:mobile-heading4">
            {block.jobTitle}
          </div>
          { block.company &&

            <div className="text-black font-rubik font-regular laptop:heading3 tablet:mobile-heading3 mobile:mobile-heading4">
              {"@ " + block.company}{" "}
            </div> }
        </div>

        <div className="DROPDOWN-TOP-RIGHT flex flex-row gap-4">
          <div className="flex text-black body-responsive font-barlow laptop:gap-3 mobile:gap-2 items-center">
            <div>{block.date}</div>
          </div>
        </div>
      </div>

      {/* DROPDOWN-CONTENT */}
      <div className={dropdownEXP}>
        <div className="DROPDOWN-CONTENT overflow-hidden">
          <ul className="list-disc pl-4 marker:text-black">
            {block.bullets.map((bullet) => {
              return (
                <li
                  key={bullet.key}
                  className="text-black laptop:body tablet:tablet-body mobile:mobile-body"
                >
                  {bullet.text}
                </li>
              );
            })}
          </ul>

          {block.linkUrl &&
            <Link to={block.linkUrl} target="_blank">
              <div className="BLOCK-LINK max-w-fit small-button mt-4 lowercase">
                {block.linkText}
              </div>
            </Link>}

        </div>
      </div>
    </div>
  );
}
