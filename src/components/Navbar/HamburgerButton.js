import { motion, MotionConfig } from "framer-motion";
import classNames from "classnames";
import { useMediaQuery } from "../helpers/useMediaQuery";

export default function HamburgerButton({ isNavOpen, setIsNavOpen, navLight }) {
  // const useLaptop = () => useMediaQuery('(min-width: 1240px)');

  // const isLaptop = useLaptop()

  const handleOnClick = () => {
    setIsNavOpen((prev) => !prev);
  };

  const hamburgerLine = classNames(
    "absolute h-1 rounded-md mobile:bg-black transition-colors duration-200 ease-in-out",
    {
      "laptop:bg-white": navLight,
      "laptop:bg-black": !navLight,
    }
  );

  const VARIANTS = {
    top: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        top: ["35%", "50%", "50%"],
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        top: ["50%", "50%", "35%"],
      },
    },
    middle: {
      open: {
        rotate: ["0deg", "0deg", "-45deg"],
      },
      closed: {
        rotate: ["-45deg", "0deg", "0deg"],
      },
    },
    bottom: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        bottom: ["35%", "50%", "50%"],
        left: "50%",
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        bottom: ["50%", "50%", "35%"],
        left: "calc(50% + 8px)",
      },
    },
    //   } :
    //   {
    //       top: {
    //         open: {
    //           rotate: ["0deg", "0deg", "45deg"],
    //           top: ["35%", "50%", "50%"],
    //         },
    //         closed: {
    //           rotate: ["45deg", "0deg", "0deg"],
    //           top: ["50%", "50%", "35%"],
    //         },
    //       },
    //       middle: {
    //         open: {
    //           rotate: ["0deg", "0deg", "-45deg"],
    //         },
    //         closed: {
    //           rotate: ["-45deg", "0deg", "0deg"],
    //         },
    //       },
    //       bottom: {
    //         open: {
    //           rotate: ["0deg", "0deg", "45deg"],
    //           bottom: ["35%", "50%", "50%"],
    //           left: "50%",
    //         },
    //         closed: {
    //           rotate: ["45deg", "0deg", "0deg"],
    //           bottom: ["50%", "50%", "35%"],
    //           left: "calc(50% + 8px)"
    //         },
    //       },
  };

  return (
    <MotionConfig
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={isNavOpen ? "open" : "closed"}
        onClick={handleOnClick}
        className="relative mobile:h-16 laptop:h-20 w-10"
      >
        <motion.span
          variants={VARIANTS.top}
          className={hamburgerLine + " mobile:w-8 laptop:w-10"}
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className={hamburgerLine + " mobile:w-8 laptop:w-10"}
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className={hamburgerLine + " mobile:w-4 laptop:w-5"}
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 8px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
}
