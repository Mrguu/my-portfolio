import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "./Pages/Home";
import Nav from "./Components/Nav";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import { DarkContext } from "./Context/DarkContext";

function App() {
  const [theme, setTheme] = useState("light");

  const handleSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div>
      <DarkContext.Provider value={{ handleSwitch }}>
        <Nav />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </DarkContext.Provider>
    </div>
  );
}

export default App;
