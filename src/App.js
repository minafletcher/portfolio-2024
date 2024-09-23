import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/helpers/scrollToTop";
import Portfolio from "./portfolio";
import SketchbookPage from "./components/Sketchbook/SketchbookPage";
import Footer from "./components/Footer/Footer";

export default function App() {
  // set initial dot to section key 1 (landing)
  const [activeDot, setActiveDot] = useState(1);
  const [dotsLight, setDotsLight] = useState(false);
  const [navLight, setNavLight] = useState(false);

  const navToggle = (light) => {
    setNavLight(light);
  };

  const dotsMode = (light) => {
    setDotsLight(light);
  };

  return (
    <Router>
      <ScrollToTop />
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <Portfolio
                navToggle={navToggle}
                setNavLight={setNavLight}
                navLight={navLight}
                dotsMode={dotsMode}
                setActiveDot={setActiveDot}
                activeDot={activeDot}
                dotsLight={dotsLight}
              />
            }
          ></Route>
          <Route
            path="/sketchbook"
            element={<SketchbookPage navLight={navLight} setNavLight={setNavLight} />}
          ></Route>
          <Route
            path="*"
            element={
              <Portfolio
                navToggle={navToggle}
                setNavLight={setNavLight}
                navLight={navLight}
                dotsMode={dotsMode}
                setActiveDot={setActiveDot}
                activeDot={activeDot}
                dotsLight={dotsLight}
              />
            }
          />
        </Routes>
        <Footer
          sectionKey={7}
          navToggle={navToggle}
          setDot={setActiveDot}
          dotsMode={dotsMode}
        />
      </div>
    </Router>
  );
}
