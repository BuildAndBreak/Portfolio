import { useRef } from "react";
import { motion } from "motion/react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import weatherAppPreview from "../assets/project-previews/weather-app.webp";
import secretSantaPreview from "../assets/project-previews/secret-santa.webp";
import ipsCamPreview from "../assets/project-previews/ips-cam.webp";
import homelabPreview from "../assets/project-previews/homelab-under-construction.webp";

type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  gradientClasses: string;
  glowClass: string;
  label: string;
  sourceUrl?: string;
  liveUrl?: string;
  previewImage?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Weather App",
    description:
      "A weather application that makes it easy to check current conditions and forecasts for any location.",
    tech: ["React", "Tailwind CSS", "OpenWeatherMap"],
    highlights: [
      "City autocomplete with keyboard navigation",
      "Current weather, local time, and error states",
    ],
    gradientClasses: "from-orange-500 via-amber-500 to-yellow-500",
    glowClass: "hover:shadow-orange-500/20",
    label: "Web",
    sourceUrl: "https://github.com/BuildAndBreak/weather-app",
    liveUrl: "https://weather-app-bnb.netlify.app/",
    previewImage: weatherAppPreview,
  },
  {
    id: 2,
    title: "Secret Santa",
    description:
      "A full-stack platform for organizing private Secret Santa exchanges from group creation to the final reveal.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    highlights: [
      "Email magic links protect every participant's private page",
      "Exclusions, budget voting, wishlists, group chat, and automated draw",
    ],
    gradientClasses: "from-slate-600 via-slate-500 to-slate-700",
    glowClass: "hover:shadow-slate-500/20",
    label: "Web",
    sourceUrl: "https://github.com/BuildAndBreak/Secret-Santa",
    liveUrl: "https://secret-santa-bnb.netlify.app/",
    previewImage: secretSantaPreview,
  },
  {
    id: 3,
    title: "IPS-CAM",
    description:
      "Website for IPS-CAM, a Swiss company. Visit ips-cam.ch to learn more about its services.",
    tech: ["Website", "Swiss Company"],
    highlights: [
      "Professional website for a Swiss company",
      "Live website available at ips-cam.ch",
    ],
    gradientClasses: "from-rose-500 via-pink-500 to-fuchsia-600",
    glowClass: "hover:shadow-rose-500/20",
    label: "Web",
    liveUrl: "https://ips-cam.ch",
    previewImage: ipsCamPreview,
  },
  {
    id: 4,
    title: "CCNA Homelab Network — In Development",
    description:
      "A hands-on networking lab for applying CCNA concepts through practical router, switch, and service configuration.",
    tech: ["Packet Tracer", "Cisco IOS", "VLANs", "OSPF"],
    highlights: [
      "IPv4/IPv6 addressing, VLANs, trunks, and inter-VLAN routing",
      "DHCP, ACLs, OSPF, and documented troubleshooting scenarios",
    ],
    gradientClasses: "from-cyan-500 via-blue-500 to-indigo-600",
    glowClass: "hover:shadow-cyan-500/20",
    label: "Networking",
    previewImage: homelabPreview,
  },
];

const labelColors: Record<string, string> = {
  Sysadmin: "bg-cyan-700/90 text-white",
  Networking: "bg-teal-700/90 text-white",
  "IT Support": "bg-violet-700/90 text-white",
  Databases: "bg-orange-600/90 text-white",
  Web: "bg-rose-600/90 text-white",
};

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transition = "none";
    card.style.transform = `perspective(1000px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transition =
      "transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    card.style.transform =
      "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`group relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden cursor-default transition-[border-color,box-shadow] duration-300 hover:border-white/15 hover:shadow-2xl ${project.glowClass}`}>
        <div
          className={`relative h-52 bg-linear-to-br ${project.gradientClasses} overflow-hidden`}>
          {project.previewImage && (
            <img
              src={project.previewImage}
              alt={`${project.title} website preview`}
              className="absolute inset-0 h-full w-full object-contain object-center p-2"
            />
          )}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
          <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/10 rounded-full" />

          <div className="absolute bottom-3 right-3 w-9 h-9 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>

        <div className="p-6">
          <span
            className={`inline-flex mb-3 px-2.5 py-1 rounded-full border border-white/25 shadow-sm text-xs font-semibold ${labelColors[project.label]}`}>
            {project.label}
          </span>
          <h3
            className="text-foreground font-bold mb-2 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-300"
            style={{ fontSize: "1.1rem" }}>
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          <ul className="space-y-1.5 mb-4 text-sm text-muted-foreground">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md bg-secondary text-xs text-muted-foreground border border-border font-mono">
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-3 border-t border-border">
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                <FaGithub className="w-3.5 h-3.5" />
                Source
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                <ExternalLink className="w-3.5 h-3.5" />
                Website
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}>
          <p className="text-cyan-500 dark:text-cyan-400 text-sm font-mono tracking-widest uppercase mb-3">
            // featured work
          </p>
          <h2
            className="font-black text-foreground mb-4 leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 3.75rem)" }}>
            Selected{" "}
            <span className="bg-linear-to-r from-cyan-500 to-violet-600 dark:from-cyan-400 dark:to-violet-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Hands-on projects across sysadmin, networking, databases, and
            scripting — built to learn by doing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
