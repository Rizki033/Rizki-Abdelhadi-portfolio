import { Description } from "@radix-ui/react-toast";
import { motion } from "framer-motion";
import { ExternalLink, Github, Tags } from "lucide-react";

const projects = [
  {
    title: "PentAI",
    description: "PentAI is an AI-powered security automation platform for reconnaissance, vulnerability discovery, pentesting operations, and offensive security workflows. ",
    tags: ["AI", "Red Teaming", "Offensive Security","Python","JavaScript","HTML","CSS","Shell","ollama"],
    github: "https://github.com/Rizki033/PentAI",
    live: "https://pent-ai-rizki.lovable.app/",
  },
  {
    title: "oneSec",
    description: "All-in-one bash-based security tools installer and manager with 19+ pre-configured penetration testing tools and interactive terminal UI.",
    tags: ["Bash", "Security", "CLI"],
    github: "https://github.com/Rizki033/oneSec",
    stars: 3,
  },
  {
    title: "NeuroScan AI",
    description: "AI-powered web application for automatic brain tumor detection from MRI images. Features secure authentication, encrypted data, and real-time AI analysis.",
    tags: ["React.js","Python", "FastAPI", "PyTorch/ONNX", "PostgreSQL","HTML","CSS"],
    github: "https://github.com/Rizki033/Brain-Tumor-WebApp",
    stars: 2,
  },
  {
    title: "VigilantScan",
    description: "VigilantScan is a sleek React-based security dashboard that simulates website vulnerability scanning, highlights potential risks, and presents findings, reports, and scan activity in a modern SOC-style interface.",
    tags: ["JavaScript","React.js","HTML","CSS"],
    github: "https://github.com/Rizki033/VIGILANTSCAN",
    stars: 2,
  },
  {
    title: "NetSentry AI",
    description: "AI-based DDoS attack detection system using machine learning to classify network traffic and identify malicious patterns in real-time.",
    tags: ["Python", "Machine Learning", "Network Security","Pandas","Scikit-learn"],
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
    tags: ["PyTorch", "Deep Learning", "Medical AI","NumPy","Matplotlib","Seaborn","OpenCV","Scikit-learn"],
    github: "https://github.com/Rizki033/Deep-Learning-Model",
  },
  {
    title: "Ifrane CleanTech",
    description: "Ifrane CleanTech is a smart waste management platform that allows citizens to report waste issues in real time using GPS and photos.It helps municipalities optimize waste collection operations through centralized dashboards and data-driven monitoring.",
    tags: ["PHP", "JavaScript", "MySQL","Laravel"],
    github: "https://github.com/Rizki033/Ifrane-CleanTech",
  },
  {
    title: "AI-Service",
    description: "AI-Service is a FastAPI-based facial recognition API designed for smart student attendance management. It allows a mobile application to capture and send student photos for real-time identity verification and attendance tracking.",
    tags: ["Python", "SQLite", "FastAPI", "OpenCV", "Face Recognition"],
    github: "https://github.com/FSTG-Tracker/ai-service",
  },
  {
    title: "CTF-Challenges-Solutions",
    description: "A collection of Capture The Flag (CTF) challenges I’ve solved, covering topics like cryptography, web exploitation, reverse engineering, and more, along with detailed explanations",
    tags: ["Python","Cryptography","Web Exploitation","OSINT","Reverse Engineering","Forensics","Ruby","Stegnography"],
    github: "https://github.com/Rizki033/CTF-Challenges-Solutions",
  }
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
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-2">
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
                  <div className="flex items-center gap-2">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.title} live website`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
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
