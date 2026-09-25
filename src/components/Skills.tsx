import { motion } from "motion/react";
import {
  Monitor,
  Network,
  Database,
  Terminal,
  Cloud,
  Shield,
} from "lucide-react";

const skillCategories = [
  {
    Icon: Monitor,
    category: "Operating Systems",
    barClass: "from-cyan-400 to-cyan-500",
    iconClass:
      "text-cyan-500 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20",
    badgeBg: "bg-cyan-500/10",
    badgeText: "text-cyan-600 dark:text-cyan-300",
    badgeBorder: "border-cyan-500/20",
    skills: [
      { name: "Linux (Ubuntu / Debian)", level: 70 },
      { name: "Windows Client", level: 78 },
      { name: "Windows Server (basics)", level: 55 },
      { name: "macOS (basics)", level: 60 },
    ],
  },
  {
    Icon: Network,
    category: "Networking",
    barClass: "from-teal-400 to-teal-500",
    iconClass:
      "text-teal-500 dark:text-teal-400 bg-teal-500/10 border border-teal-500/20",
    badgeBg: "bg-teal-500/10",
    badgeText: "text-teal-600 dark:text-teal-300",
    badgeBorder: "border-teal-500/20",
    skills: [
      { name: "Cisco Packet Tracer", level: 45 },
      { name: "IPv4/IPv6 · TCP/UDP · DNS/DHCP", level: 65 },
      { name: "Subnetting & CIDR", level: 55 },
      { name: "VLANs · Switching · Cisco IOS", level: 45 },
    ],
  },
  {
    Icon: Database,
    category: "Databases",
    barClass: "from-orange-400 to-amber-500",
    iconClass:
      "text-orange-500 dark:text-orange-400 bg-orange-500/10 border border-orange-500/20",
    badgeBg: "bg-orange-500/10",
    badgeText: "text-orange-600 dark:text-orange-300",
    badgeBorder: "border-orange-500/20",
    skills: [
      { name: "MongoDB", level: 70 },
      { name: "SQL (MySQL / PostgreSQL)", level: 58 },
      { name: "CRUD Operations", level: 72 },
      { name: "Basic Queries & Joins", level: 60 },
    ],
  },
  {
    Icon: Terminal,
    category: "Scripting",
    barClass: "from-violet-400 to-violet-500",
    iconClass:
      "text-violet-500 dark:text-violet-400 bg-violet-500/10 border border-violet-500/20",
    badgeBg: "bg-violet-500/10",
    badgeText: "text-violet-600 dark:text-violet-300",
    badgeBorder: "border-violet-500/20",
    skills: [
      { name: "JavaScript (intermediate)", level: 72 },
      { name: "Python (basics)", level: 58 },
      { name: "TypeScript (basics)", level: 52 },
      { name: "PowerShell (learning)", level: 42 },
    ],
  },
  {
    Icon: Cloud,
    category: "Cloud & Virtualization",
    barClass: "from-blue-400 to-indigo-500",
    iconClass:
      "text-blue-500 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20",
    badgeBg: "bg-blue-500/10",
    badgeText: "text-blue-600 dark:text-blue-300",
    badgeBorder: "border-blue-500/20",
    skills: [
      { name: "Proxmox / VirtualBox", level: 68 },
      { name: "Docker (basics)", level: 55 },
      { name: "AWS Fundamentals (learning)", level: 38 },
      { name: "Azure Basics (learning)", level: 32 },
    ],
  },
  {
    Icon: Shield,
    category: "IT Support & Security",
    barClass: "from-rose-400 to-rose-500",
    iconClass:
      "text-rose-500 dark:text-rose-400 bg-rose-500/10 border border-rose-500/20",
    badgeBg: "bg-rose-500/10",
    badgeText: "text-rose-600 dark:text-rose-300",
    badgeBorder: "border-rose-500/20",
    skills: [
      { name: "Troubleshooting", level: 75 },
      { name: "Hardware knowledge", level: 80 },
      { name: "Active Directory (basics)", level: 45 },
      { name: "Security fundamentals", level: 50 },
    ],
  },
];

const learning = [
  "CCNA (in progress)",
  "Cisco Packet Tracer",
  "Wireshark",
  "Routing & Switching",
  "IPv6",
  "Network Troubleshooting",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}>
          <p className="text-cyan-500 dark:text-cyan-400 text-sm font-mono tracking-widest uppercase mb-3">
            // tech stack
          </p>
          <h2
            className="font-black text-foreground mb-4 leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 3.75rem)" }}>
            My{" "}
            <span className="bg-linear-to-r from-cyan-500 to-violet-600 dark:from-cyan-400 dark:to-violet-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A growing IT skill set — honest levels, actively improving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.category}
              className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 hover:border-white/15 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: catIndex * 0.08 }}
              whileHover={{ y: -4 }}>
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${cat.iconClass}`}>
                  <cat.Icon className="w-5 h-5" />
                </div>
                <h3
                  className="text-foreground font-bold"
                  style={{ fontSize: "1rem" }}>
                  {cat.category}
                </h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-muted-foreground text-sm">
                        {skill.name}
                      </span>
                      <span
                        className={`text-xs font-mono px-1.5 py-0.5 rounded border ${cat.badgeBg} ${cat.badgeText} ${cat.badgeBorder}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-linear-to-r ${cat.barClass} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          ease: "easeOut",
                          delay: catIndex * 0.08 + skillIndex * 0.1,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently learning / target certs */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}>
          <p className="text-center text-muted-foreground text-sm font-mono tracking-widest uppercase mb-5">
            CCNA focus
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {learning.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full border border-border bg-secondary text-muted-foreground text-sm hover:border-cyan-500/30 dark:hover:border-cyan-400/30 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-200 cursor-default">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
