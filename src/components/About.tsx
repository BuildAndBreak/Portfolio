import { motion } from "motion/react";
import { GraduationCap, MapPin, Mail, Target } from "lucide-react";

const timeline = [
  {
    year: "2026 (expected)",
    role: "Cisco CCNA Certification",
    company: "Cisco · Homelab · Network Labs",
    type: "now" as const,
    desc: "Completing the CCNA certification through hands-on labs covering networking fundamentals, routing, switching, and troubleshooting.",
  },
  {
    year: "2026",
    role: "Hikvision & AJAX Security Systems Certifications",
    company: "Professional Technical Training",
    type: "edu" as const,
    desc: "Certified training for alarm-system, access-control, and video-surveillance installations using Hikvision and AJAX security solutions.",
  },
  {
    year: "2022 – 2025",
    role: "Full Stack Web Bootcamp",
    company: "Bootcamp",
    type: "edu" as const,
    desc: "Full-stack web development training covering frontend, backend, databases, and deployment — where I developed a strong foundation in modern web technologies.",
  },
  {
    year: "2015 – 2017",
    role: "Electronic & Computer Systems",
    company: "Higher Education Degree",
    type: "edu" as const,
    desc: "Advanced studies covering digital systems, computer architecture, microprocessors, and software fundamentals.",
  },
  {
    year: "2012 – 2015",
    role: "Electronics, Automation & Computers",
    company: "Technical Vocational Course",
    type: "edu" as const,
    desc: "Technical training in electronics, automation, and computer systems. Built hands-on skills in hardware, troubleshooting and systems thinking.",
  },
];

const goals = [
  { label: "Short term", text: "IT Support Technician - IT Technician" },
  { label: "Mid term", text: "Network Technician - Junior Network Engineer" },
  { label: "Long term", text: "Network Engineer - Cloud Network Engineer" },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}>
          <p className="text-cyan-500 dark:text-cyan-400 text-sm font-mono tracking-widest uppercase mb-3">
            // about me
          </p>
          <h2
            className="font-black text-foreground leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 3.75rem)" }}>
            Who I{" "}
            <span className="bg-linear-to-r from-cyan-500 to-violet-600 dark:from-cyan-400 dark:to-violet-500 bg-clip-text text-transparent">
              Am
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <h3
              className="text-foreground font-bold mb-3"
              style={{ fontSize: "1.375rem" }}>
              Building toward network engineering
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              My background in Electronics and Computer Systems gave me a solid
              foundation in hardware, infrastructure, and troubleshooting. Now,
              I want to deepen my knowledge of network infrastructure, routing
              and switching, and security systems.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm studying for Cisco's CCNA certification, focusing on IPv4/IPv6
              addressing, subnetting, switching, VLANs, routing, and network
              troubleshooting. I reinforce each topic through Packet Tracer and
              homelab practice.
            </p>

            {/* Career path */}
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-5">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                <span className="text-foreground font-semibold text-sm">
                  Career Path
                </span>
              </div>
              <div className="space-y-3">
                {goals.map((goal, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span
                      className={`text-xs font-mono px-2 py-0.5 rounded shrink-0 mt-0.5 ${
                        i === 0
                          ? "bg-cyan-500/15 text-cyan-500 dark:text-cyan-400"
                          : i === 1
                            ? "bg-violet-500/15 text-violet-500 dark:text-violet-400"
                            : "bg-slate-500/15 text-slate-500 dark:text-slate-400"
                      }`}>
                      {goal.label}
                    </span>
                    <p className="text-muted-foreground text-sm">{goal.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <h3
              className="text-foreground font-bold mb-8"
              style={{ fontSize: "1.25rem" }}>
              My Journey
            </h3>

            <div className="relative">
              <div className="absolute left-4.5 top-2 bottom-2 w-px bg-linear-to-b from-cyan-500/40 via-violet-500/25 to-transparent" />

              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    className="relative flex gap-5"
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}>
                    <div className="relative z-10 shrink-0">
                      <div
                        className={`w-9 h-9 rounded-full border-2 flex items-center justify-center ${
                          item.type === "now"
                            ? "border-cyan-500/50 bg-cyan-500/10 text-cyan-500 dark:text-cyan-400"
                            : "border-violet-500/40 bg-violet-500/10 text-violet-500 dark:text-violet-400"
                        }`}>
                        {item.type === "now" ? (
                          <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
                        ) : (
                          <GraduationCap className="w-3.5 h-3.5" />
                        )}
                      </div>
                    </div>

                    <div className="flex-1 pt-0.5">
                      <span
                        className={`inline-block text-xs font-mono px-2 py-0.5 rounded mb-1.5 ${
                          item.type === "now"
                            ? "text-cyan-500 dark:text-cyan-400 bg-cyan-500/10"
                            : "text-violet-500 dark:text-violet-400 bg-violet-500/10"
                        }`}>
                        {item.year}
                      </span>
                      <h4 className="text-foreground font-bold">{item.role}</h4>
                      <p className="text-muted-foreground text-sm font-medium mb-1">
                        {item.company}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
