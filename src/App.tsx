import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { Skills } from "./pages/skills";
import { Contact } from "./pages/contact";
import Intro from "./pages/intro";
import Blog from "./pages/tweet";

import ThemeContext from "./context/useContext";
import Layout from "./layout/layout";
import NotFound from "./pages/notFound";

export default function App() {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Intro />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}
