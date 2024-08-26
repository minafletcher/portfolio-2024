export default function Tag({ content, size }) {
  var tagStyle = "";

  if (size === 1) {
    tagStyle = "text-14 py-0.5 px-2.5";
  }

  if (size === 2) {
    tagStyle = "tablet:text-16 mobile:text-14 py-0.5 px-3";
  }

  if (size === 3) {
    tagStyle = "body laptop:py-1.5 laptop:px-6 mobile:py-1 mobile:px-4";
  }

  return (
    <div className="TAG flex font-hubot text-black border-black rounded-full border bg-white items-center">
      <div className={tagStyle}>{content}</div>
    </div>
  );
}
