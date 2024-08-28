import classNames from "classnames";

export default function SkillsTag({ content, hoverState }) {
  const tagStyle = classNames(
    "TAG flex font-hubot text-black border-black rounded-full border items-center cursor-pointer transition-all duration-200 ease-in-out"
  );

  return (
    <div
      className={tagStyle + " hover:bg-" + hoverState[1]}
      onMouseEnter={() => hoverState[0](true)}
      onMouseLeave={() => hoverState[0](false)}
    >
      <div className="body-responsive laptop:py-1.5 laptop:px-6 mobile:py-1 mobile:px-4">
        {content}
      </div>
    </div>
  );
}
