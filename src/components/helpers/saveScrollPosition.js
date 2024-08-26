import { useEffect } from "react";

const useScrollPosition = (key) => {
  useEffect(() => {
    // Restore scroll position
    const savedPosition = localStorage.getItem(key);
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition, 10));
    }

    // Save scroll position before unload
    const saveScrollPosition = () => {
      sessionStorage.setItem(key, window.scrollY);
    };

    window.addEventListener("beforeunload", saveScrollPosition);

    return () => {
      window.removeEventListener("beforeunload", saveScrollPosition);
    };
  }, [key]);
};

export default useScrollPosition;
