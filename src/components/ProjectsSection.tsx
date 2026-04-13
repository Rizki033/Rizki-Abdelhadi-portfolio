import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Autonomous-pentester",
    description: "A research-oriented project exploring how Artificial Intelligence can enhance and automate offensive security operations and red team activities.",
    tags: ["AI", "Red Teaming", "Offensive Security"],
    github: "https://github.com/Rizki033/Autonomous-pentester",
  },
  {
    title: "oneSec",
    description: "All-in-one bash-based security tools installer and manager with 18+ pre-configured penetration testing tools and interactive terminal UI.",
    tags: ["Bash", "Security", "CLI"],
    github: "https://github.com/Rizki033/oneSec",
    stars: 3,
  },
  {
    title: "NeuroScan AI",
    description: "AI-powered web application for automatic brain tumor detection from MRI images. Features secure authentication, encrypted data, and real-time AI analysis.",
    tags: ["React.js", "FastAPI", "PyTorch", "PostgreSQL"],
    github: "https://github.com/Rizki033/Brain-Tumor-WebApp",
    stars: 2,
  },
  {
    title: "NetSentry AI",
    description: "AI-based DDoS attack detection system using machine learning to classify network traffic and identify malicious patterns in real-time.",
    tags: ["Python", "Machine Learning", "Network Security"],
    github: "https://github.com/Rizki033/NetSentry-AI",
    stars: 2,
  },
  {
    title: "ARP Spoofing & DNS Sniffing",
    description: "Python script using Scapy for ARP spoofing attacks and DNS request interception on local networks for security research and education.",
    tags: ["Python", "Scapy", "Networking"],
    github: "https://github.com/Rizki033/ARP-Spoofing-DNS-Sniffing-Script",
    stars: 1,
  },
  {
    title: "Deep Learning Medical Imaging",
    description: "CNN model for brain tumor classification from MRI images with feature visualization, achieving high accuracy through 600 epochs of training.",
    tags: ["PyTorch", "Deep Learning", "Medical AI"],
    github: "https://github.com/Rizki033/Deep-Learning-Model",
  },
  {
    title: "Ifrane CleanTech",
    description: "Participatory digital solution for citizens to report waste problems in real-time, with a centralized municipal dashboard for optimized collection.",
    tags: ["PHP", "Web App", "Civic Tech"],
    github: "https://github.com/Rizki033/Ifrane-CleanTech",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-white mb-2">
              <span className="text-primary">~/</span>Projects
              <span className="text-[#a78bfa]"></span>
            </h2>
            <div className="w-16 h-0.5 bg-primary/50 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group p-5 rounded-lg border border-border bg-card card-glow transition-all flex flex-col"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-mono text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-[10px] font-mono rounded bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
