import { motion } from "motion/react";
import { Mail, ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

/* Replace the placeholder hrefs with your real profile URLs */
const links = [
  {
    Icon: FaGithub,
    platform: "GitHub",
    handle: "@BuildAndBreak",
    description: "Check out my code and projects",
    href: "https://github.com/BuildAndBreak",
    gradientClasses:
      "from-slate-600 to-slate-800 dark:from-slate-500 dark:to-slate-700",
    hoverBorder: "hover:border-slate-400/30",
    hoverText: "group-hover:text-slate-300",
  },
  {
    Icon: ExternalLink,
    platform: "Frontend Mentor",
    handle: "@BuildAndBreak",
    description: "See my frontend challenges & solutions",
    href: "https://www.frontendmentor.io/profile/BuildAndBreak",
    gradientClasses: "from-teal-500 to-cyan-600",
    hoverBorder: "hover:border-teal-400/30",
    hoverText: "group-hover:text-teal-300",
  },
  {
    Icon: FaLinkedin,
    platform: "LinkedIn",
    handle: "Tiago Pereira",
    description: "Let's connect professionally",
    href: "https://www.linkedin.com/in/tiago-pereira-5a4698289/",
    gradientClasses: "from-blue-600 to-blue-700",
    hoverBorder: "hover:border-blue-400/30",
    hoverText: "group-hover:text-blue-300",
  },
  {
    Icon: Mail,
    platform: "Email",
    handle: "tiagodlapereira@gmail.com",
    description: "Reach me directly in my inbox",
    href:
      "https://mail.google.com/mail/?view=cm&fs=1&to=tiagodlapereira%40gmail.com",
    gradientClasses: "from-violet-500 to-purple-600",
    hoverBorder: "hover:border-violet-400/30",
    hoverText: "group-hover:text-violet-300",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}>
          <p className="text-cyan-500 dark:text-cyan-400 text-sm font-mono tracking-widest uppercase mb-3">
            // get in touch
          </p>
          <h2
            className="font-black text-foreground mb-4 leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 3.75rem)" }}>
            Find Me{" "}
            <span className="bg-linear-to-r from-cyan-500 to-violet-600 dark:from-cyan-400 dark:to-violet-500 bg-clip-text text-transparent">
              Online
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Whether you want to collaborate, give feedback, or just say hello —
            pick your preferred channel.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {links.map((link, index) => (
            <motion.a
              key={link.platform}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center gap-5 p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm ${link.hoverBorder} hover:bg-white/5 transition-all duration-300 overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.99 }}>
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-linear-to-br ${link.gradientClasses} flex items-center justify-center shrink-0 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}>
                <link.Icon className="w-6 h-6 text-white" />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p
                  className="text-foreground font-bold"
                  style={{ fontSize: "1.0625rem" }}>
                  {link.platform}
                </p>
                <p className="text-muted-foreground text-sm font-mono truncate">
                  {link.handle}
                </p>
                <p className="text-muted-foreground text-xs mt-0.5 opacity-75">
                  {link.description}
                </p>
              </div>

              {/* Arrow */}
              <ArrowUpRight
                className={`w-5 h-5 text-muted-foreground ${link.hoverText} transition-all duration-300 shrink-0 translate-x-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5`}
              />

              {/* Subtle gradient sweep on hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br ${link.gradientClasses} rounded-2xl -z-10 blur-xl`}
                style={{ opacity: 0 }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
