import classNames from "classnames";

export default function SketchbookTag({ text, tagKey, tagClick, setTagClick }) {
  const tagClicked = tagClick == tagKey;

  const tagStyle = classNames(
    "SKETCHBOOK-TAG flex font-hubot border-black rounded-full border items-center cursor-pointer hover:bg-black hover:text-white transition-all duration-200 ease-in-out",
    {
      "bg-black text-white": tagClicked,
      "bg-white text-black": !tagClicked,
    }
  );

  return (
    <div className={tagStyle} onClick={() => setTagClick(tagKey)}>
      <div className="body laptop:py-1.5 laptop:px-6 mobile:py-1 mobile:px-4">
        {text}
      </div>
    </div>
  );
}
