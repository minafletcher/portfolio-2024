import { useState } from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  BrowserRouter,
  Routes,
} from "react-router-dom";

import ScrollToTop from "./components/helpers/scrollToTop";
import Portfolio from "./portfolio";
import SketchbookPage from "./components/Sketchbook/SketchbookPage";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [activeDot, setActiveDot] = useState();
  const [dotsLight, setDotsLight] = useState();
  const [navLight, setNavLight] = useState(false);

  const navToggle = (light) => {
    setNavLight(light);
  };

  const dotsMode = (light) => {
    setDotsLight(light);
  };

  return (
    <BrowserRouter>
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
            element={<SketchbookPage navLight={navLight} />}
          ></Route>
        </Routes>
        <Footer
          sectionKey={7}
          navToggle={navToggle}
          setDot={setActiveDot}
          dotsMode={dotsMode}
        />
      </div>
    </BrowserRouter>
  );
}
