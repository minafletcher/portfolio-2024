import content from "../../content/content";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import scrollViewHelper from "../helpers/scrollToView";
import { useOutsideClick } from "../helpers/useOutsideClick";
import HamburgerButton from "./HamburgerButton";
import classNames from "classnames";

export default function HamburgerMenu({ sketchbook, setDot, setNavLight, navLight }) {
  // control menu's state
  const [isNavOpen, setIsNavOpen] = useState(false);

  // always set nav light to false on page load
  useEffect(() => {
    setNavLight(false)
  }, []);

  // scroll to clicked linked
  function hamScroll(id, index, closeDrawer) {
    setDot ? setDot(index) : null;
    scrollViewHelper(id);
    closeDrawer ? setIsNavOpen((prev) => !prev) : null;
  }

  // close menu on outside click
  const handleClickOutside = () => {
    setIsNavOpen(false);
  };

  const hamRef = useOutsideClick(handleClickOutside);

  // styling
  const navLanding = classNames(
    "NAV-LANDING top-0 z-50 fixed left-0 nav-padding mobile:text-black text-2xl font-bold font-mona transition-all ease-in-out",
    {
      "laptop:text-white": navLight,
      "laptop:text-black": !navLight,
    }
  );

  const navOverlay = classNames(
    "OVERLAY-CONTAINER absolute flex flex-col gap-6 z-50 w-[275px] right-0 bg-white flex flex-col p-8 transition-all duration-300 ease-in-out drop-shadow-md",
    {
      "opacity-100 cursor-events-auto visible translate-y-0": isNavOpen,
      "opacity-0 cursor-events-none invisible translate-y-3": !isNavOpen,
    }
  );

  const overlay_close_container = classNames(
    "absolute w-full h-full cursor-events-none top-0 z-40 opacity-0",
    {
      block: isNavOpen,
      hidden: !isNavOpen,
    }
  );

  const homeLink = content.navbar.links[0];

  return (
    <div className="NAV-HAM-WRAPPER">
      <div className="NAV-MOBILE-BANNER mobile:block laptop:hidden top-0 fixed z-40 w-full bg-white opacity-100 mobile:h-16 tablet:h-18"></div>
      <div className={navLanding}>
        {sketchbook ? (
          <Link to="/">
            <button onClick={() => hamScroll(homeLink.id, homeLink.key, false)}>
              {homeLink.text}
            </button>
          </Link>
        ) : (
          <button onClick={() => hamScroll(homeLink.id, homeLink.key, false)}>
            {homeLink.text}
          </button>
        )}
      </div>
      <div className="HAMBURGER-WRAPPER top-0 z-50 fixed right-0 nav-padding laptop:mt-10 mobile:mt-0">
        <div className="HAMBURGER-ICON-WRAPPER flex items-center cursor-pointer">
          <div className={overlay_close_container}></div>
          <HamburgerButton
            navLight={navLight}
            isNavOpen={isNavOpen}
            setIsNavOpen={setIsNavOpen}
          ></HamburgerButton>
        </div>

        <div ref={hamRef} className={navOverlay}>
          <div className="MENU-LINKS flex flex-col gap-1.5 items-start justify-between nav-lg-link">
            {sketchbook ? (
              <Link to="/">
                <div className="BURGER-LINK hover:italic uppercase cursor-pointer">
                  {content.navbar.homeText}
                </div>
              </Link>
            ) : (
              content.navbar.links.map((sectionLink) => {
                return sectionLink.key != 1 && sectionLink.key != 3 ? (
                  <div
                    key={sectionLink.key}
                    className="BURGER-LINK hover:italic uppercase cursor-pointer"
                    onClick={() =>
                      hamScroll(sectionLink.id, sectionLink.key, true)
                    }
                  >
                    {sectionLink.text}
                  </div>
                ) : null;
              })
            )}
          </div>
          <div className="MENU-LINE w-full border-black border-b-2"></div>
          <div className="MENU-CONTACT flex flex-col gap-1.5">
            {content.navbar.smallLinks.map((link) => {
              return (
                <Link
                  className="nav-small-link"
                  to={link.url}
                  target={link.target ? link.target : null}
                >
                  {link.text}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
