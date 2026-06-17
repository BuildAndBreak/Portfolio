import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowDown, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const roles = [
  "IT Technician",
  "Network Technician",
  "IT Support Specialist",
  "Aspiring Network Engineer",
  "Problem Solver",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-start sm:items-center justify-center overflow-hidden pt-28 pb-24 sm:pt-32 sm:pb-28 lg:pt-24">
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.1) 1px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
      />
      <motion.div
        className="absolute top-24 -left-20 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
      <div className="absolute bottom-24 left-1/3 w-[350px] h-[350px] bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/8 text-cyan-500 dark:text-cyan-400 text-sm mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
          Open to IT opportunities
        </motion.div>

        <motion.p
          className="text-muted-foreground text-xl mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}>
          Hello, I'm
        </motion.p>

        <motion.h1
          className="pb-2 text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] font-black tracking-tight mb-3 sm:mb-4 leading-[1.08] bg-linear-to-br from-slate-800 via-blue-700 to-violet-700 dark:from-white dark:via-blue-100 dark:to-violet-200 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}>
          Tiago Pereira
        </motion.h1>

        <motion.div
          className="mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}>
          <div className="relative h-9 sm:h-10 md:h-12 overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                className="absolute text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold bg-linear-to-r from-cyan-500 to-violet-600 dark:from-cyan-400 dark:to-violet-500 bg-clip-text text-transparent whitespace-nowrap"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}>
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.p
          className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}>
          Electronics and Computer Systems background, now focused on building a
          career in IT. Passionate about systems, networking, and databases —
          with my sights set on cloud and security down the road.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}>
          <button
            onClick={() => scrollTo("projects")}
            className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-linear-to-r from-cyan-500 to-violet-600 text-white font-semibold hover:opacity-90 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-2xl shadow-cyan-500/30 cursor-pointer">
            View My Work
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl border border-border bg-card/40 backdrop-blur-sm text-foreground font-semibold hover:bg-white/5 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer">
            Get In Touch
          </button>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}>
          {[
            {
              Icon: FaGithub,
              href: "https://github.com/BuildAndBreak",
              label: "GitHub",
            },
            {
              Icon: FaLinkedin,
              href: "https://www.linkedin.com/in/tiago-pereira-5a4698289/",
              label: "LinkedIn",
            },
            { Icon: Mail, href: "mailto:tdlap7@gmail.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-11 h-11 rounded-xl border border-border bg-card/40 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-500/30 dark:hover:border-cyan-400/30 hover:bg-cyan-500/8 transition-all duration-300">
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        onClick={() => scrollTo("projects")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-label="Scroll to projects">
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1">
          <span className="text-xs tracking-widest uppercase opacity-60">
            Scroll
          </span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
}
