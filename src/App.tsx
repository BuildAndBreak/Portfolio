import "./styles/globals.css";
import { createContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
// SECTION_IMPORTS

export const ThemeContext = createContext({
  isDark: true,
  toggle: () => {},
});

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <ThemeContext.Provider
      value={{ isDark, toggle: () => setIsDark((value) => !value) }}>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <About />
          <About />
          {/* SECTIONS */}
        </main>
      </div>
    </ThemeContext.Provider>
  );
}
