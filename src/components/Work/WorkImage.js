import classNames from "classnames";

export default function WorkImage({ project, open }) {
  const drawerImage = classNames(
    "absolute w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out",
    {
      "z-10 opacity-100": open,
      "z-0 opacity-0": !open,
    }
  );

  return <img className={drawerImage} src={project.projImg}></img>;
}
