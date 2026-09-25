import "./styles/globals.css";
import { useState, useEffect, createContext } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export const ThemeContext = createContext<{
  isDark: boolean;
  toggle: () => void;
}>({
  isDark: true,
  toggle: () => {},
});

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const stored =
      typeof window !== "undefined"
        ? localStorage.getItem("portfolio-theme")
        : null;
    return stored !== "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <ThemeContext.Provider
      value={{ isDark, toggle: () => setIsDark((prev) => !prev) }}>
      <div className="min-h-screen bg-background text-foreground antialiased">
        <Navbar />
        <main>
          <Hero />

          {/* Section divider */}
          <div className="max-w-7xl mx-auto px-6">
            <div className="h-px bg-linear-to-r from-transparent via-border to-transparent" />
          </div>

          <Projects />

          <div className="max-w-7xl mx-auto px-6">
            <div className="h-px bg-linear-to-r from-transparent via-border to-transparent" />
          </div>

          <About />

          <div className="max-w-7xl mx-auto px-6">
            <div className="h-px bg-linear-to-r from-transparent via-border to-transparent" />
          </div>

          <Skills />

          <div className="max-w-7xl mx-auto px-6">
            <div className="h-px bg-linear-to-r from-transparent via-border to-transparent" />
          </div>

          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
