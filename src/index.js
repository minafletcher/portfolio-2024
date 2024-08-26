import "./input.css";

import ReactDOM from "react-dom/client";
import App from "./App";

// create root element
const root = ReactDOM.createRoot(document.querySelector("#root"));

// const RoutesJSX = (
//   <Route path="/" element={<Outlet />}>
//     <Route
//       index
//       loader={async ({ request }) => {
//         // loaders can be async functions
//         const res = await fetch("https://jsonplaceholder.typicode.com/users", {
//           signal: request.signal
//         });
//         const user = await res.json();
//         return user;
//       }}
//       element={<Portfolio />}
//     ></Route>
//     <Route path='/sketchbook' element={<SketchbookPage/>}></Route>
//   </Route>
// );

// const routes = createRoutesFromElements(RoutesJSX);

// const router = createBrowserRouter(routes);

// handle toggling communication between dots and hamburger menu

root.render(
  <>
    {/* <RouterProvider router={router} /> */}
    <App />
  </>
);
