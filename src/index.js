import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./styles.css";
import Main from "./components/Main/Main.jsx";
import LayoutMain from "./components/LayoutMain/LayoutMain.jsx";
import Home from "../src/components/Home/Home.jsx";
import Contact from "../src/components/Contact/Contact.jsx";
import About from "../src/components/About/About.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="*"
        element={
          <LayoutMain>
            <Main />
          </LayoutMain>
        }
      />
      <Route
        path="home"
        element={
          <LayoutMain>
            <Home />
          </LayoutMain>
        }
      />
      <Route
        path="about"
        element={
          <LayoutMain>
            <About />
          </LayoutMain>
        }
      />
      <Route
        path="contact"
        element={
          <LayoutMain>
            <Contact />
          </LayoutMain>
        }
      />
    </Routes>
  </BrowserRouter>
);

root.render(<App />);

// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// // import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./styles.css";
// // import App from "./components/app/App.jsx";
// import Main from "./components/Main/Main.jsx";
// import LayoutMain from "./components/LayoutMain/LayoutMain.jsx";
// import Home from "../src/components/Home/Home.jsx";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <LayoutMain>
//         <Main />
//       </LayoutMain>
//     ),
//   },
//   {
//     path: "home",
//     element: (
//       <LayoutMain>
//         <Home />
//       </LayoutMain>
//     ),
//   },
// ]);

// root.render(
//   <RouterProvider router={router} />
//   // <StrictMode>
//   //   <Main />
//   // </StrictMode>
// );

// // import ReactDOM from "react-dom";
// // import { BrowserRouter } from "react-router-dom";
// // import Main from "./components/Main/Main.jsx";

// // const rootElement = document.getElementById("root");
// // const root = createRoot(rootElement);

// // ReactDOM.render(
// //   <BrowserRouter>
// //     <Main />
// //   </BrowserRouter>,
// //   root(createRoot(rootElement))
// // );
