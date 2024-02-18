import { useEffect, useLayoutEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalContext } from "../../share/context";
import App from "../app/App";

export default function Main() {
  const [size, setSize] = useState({ wd: 0, hd: 0 });

  const [theme, setTheme] = useState(localStorage.getItem("theme") && "light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const resize = () => {
    setSize(() => {
      return { wd: window.innerWidth, hd: window.innerHeight };
    });
  };

  useLayoutEffect(() => {
    resize();
    window.addEventListener("resize", resize);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <GlobalContext.Provider value={{ size, theme, toggleTheme }}>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </GlobalContext.Provider>
  );
}
