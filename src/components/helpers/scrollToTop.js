import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    document.getElementById("root").scrollTo({top: 0, left:0, behavior: "instant"});
  }, [location]);

  return null;
};

export default ScrollToTop;
