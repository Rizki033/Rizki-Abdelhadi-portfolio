import { useState } from "react";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Crosshair,
    Terminal,
    Network,
    Database,
    Cloud,
    Workflow,
    Lock,
} from "lucide-react";

const SkillsSection = () => {
    const categories = [
        {
            title: "Offensive Security & Pentesting",
            icon: Crosshair,
            skills: [
                // Core techniques
                "Penetration Testing",
                "Red Team Methodology",
                "OWASP Top 10",
                "Privilege Escalation",
                "Command Injection",
                "XSS",
                "SSRF",
                "IDOR",
                "File Inclusion",
                "Authentication Bypass",
                "Race Conditions",
                "SQL Injection",
                // Pentesting tools
                "Nmap",
                "Wireshark",
                "Burp Suite",
                "Metasploit Framework",
                "sqlmap",
                "Hydra",
                "John the Ripper",
                "Hashcat",
                "Dirb / Gobuster",
                "Nikto",
                "wpscan",
                "Aircrack-ng",
                "Responder",
                "Scapy",
                "OSINT Frameworks",
            ],
        },
        {
            title: "Blue Team & Cybersecurity Tools",
            icon: ShieldCheck,
            skills: [
                "Security Operations",
                "Blue Teaming",
                "SIEM (Splunk / Wazuh / ELK)",
                "IDS / IPS (Snort / Suricata)",
                "Endpoint Security",
                "Threat Hunting",
                "Incident Response",
                "Digital Forensics",
                "Log Analysis",
                "Vulnerability Management",
                "Burp Suite Scanner",
                "Nessus / OpenVAS",
                "Email Security",
                "Network Security Monitoring",
                "Firewall Hardening",
                "Bug Bounty Reporting",
            ],
        },
        {
            title: "Programming & Scripting",
            icon: Terminal,
            skills: [
                "Python",
                "Java",
                "JavaScript",
                "TypeScript",
                "Bash",
                "PHP",
                "React.js",
                "FastAPI",
                "HTML",
                "CSS / Tailwind CSS",
            ],
        },
        {
            title: "Systems, Networks & Cloud",
            icon: Network,
            skills: [
                "Linux (Kali, Ubuntu, Debian)",
                "Windows Server & Active Directory",
                "Networking (TCP/IP, VLAN, Routing)",
                "VPN & Tunneling",
                "Firewall & Proxy",
                "Virtualization (VirtualBox, VMware)",
                "Cloud Security Basics",
                "GNS3 / Packet Tracer",
                "Network Automation",
                "PKI & Cryptography",
            ],
        },
        {
            title: "AI & Data",
            icon: Database,
            skills: [
                "Deep Learning",
                "PyTorch",
                "Computer Vision",
                "Medical Imaging",
                "CNNs",
                "Data Analysis",
                "Pandas / NumPy",
                "Jupyter Notebooks",
            ],
        },
        {
            title: "DevOps Tooling",
            icon: Cloud,
            skills: [
                "Git & GitHub",
                "GitHub Actions",
                "CI/CD Pipelines",
                "Docker",
                "Docker Compose",
                "Kubernetes (Basics)",
                "Linux Servers",
                "NGINX Reverse Proxy",
                "Monitoring & Logging",
            ],
        },
        {
            title: "DevSecOps & Secure SDLC",
            icon: Lock,
            skills: [
                "Secure SDLC",
                "Shift-Left Security",
                "Security Code Review",
                "Static Analysis (SAST)",
                "Dynamic Analysis (DAST)",
                "Software Composition Analysis (SCA)",
                "OWASP ZAP",
                "Trivy",
                "Bandit / Semgrep",
                "SonarQube (Code Quality & Security)",
                "Dependency Scanning",
                "Secrets Scanning (GitLeaks, truffleHog)",
                "Container Image Scanning",
                "Security Gates in CI/CD",
            ],
        },
    ];

    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    const activeCategory = categories[activeCategoryIndex];
    const ActiveIcon = activeCategory.icon;

    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                        <div>
                            <h2 className="font-mono text-3xl font-bold mb-2">
                                <span className="text-cyan-400">&gt;&gt;</span>{" "}
                                <span className="text-primary">skill-matrix</span>
                            </h2>
                            <div className="w-24 h-0.5 bg-gradient-to-r from-cyan-400/70 via-primary/70 to-emerald-400/60 mb-3 rounded-full" />
                            <p className="text-xs md:text-sm text-muted-foreground font-mono">
                                Offensive, defensive, DevOps & DevSecOps — a full-stack cybersecurity toolkit aligned with modern industry practices.
                            </p>
                        </div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-400/40 bg-cyan-500/5 text-[11px] font-mono text-cyan-300 shadow-[0_0_20px_rgba(8,145,178,0.25)]">
                            <Workflow className="w-3.5 h-3.5" />
                            <span>Innovation-driven · End‑to‑end security</span>
                        </div>
                    </div>

                    {/* Split view: left = category list, right = expanded detail */}
                    <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4 items-start">
                        {/* Category selector — same visual style as project cards, stacked vertically */}
                        <div className="space-y-3 md:col-span-1 lg:col-span-1">
                            {categories.map((category, idx) => {
                                const isActive = idx === activeCategoryIndex;
                                return (
                                    <button
                                        key={category.title}
                                        type="button"
                                        onClick={() => setActiveCategoryIndex(idx)}
                                        className={`group w-full p-4 rounded-lg border text-left bg-card/30 backdrop-blur-sm flex items-center gap-3 transition-all card-glow ${
                                            isActive
                                                ? "border-primary/60 bg-primary/10"
                                                : "border-border hover:border-primary/50 hover:bg-primary/5"
                                        }`}
                                    >
                                        <div
                                            className={`p-2 rounded-lg text-primary shrink-0 ${
                                                isActive ? "bg-primary/20" : "bg-primary/10 group-hover:bg-primary/20"
                                            }`}
                                        >
                                            <category.icon className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground group-hover:text-primary">
                                                {category.title}
                                            </span>
                                            <span className="text-[10px] text-muted-foreground/70">
                                                {category.skills.length} tools & skills
                                            </span>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Active category detail (focus panel with all tools) */}
                        <motion.div
                            key={activeCategory.title}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="relative overflow-hidden rounded-xl border border-primary/40 bg-card/40 backdrop-blur-md card-glow md:col-span-2 lg:col-span-3"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-cyan-500/10 opacity-70 pointer-events-none" />
                            {/* Big background icon for the selected category */}
                            <div className="pointer-events-none absolute -top-10 -right-6 opacity-[0.06] md:opacity-[0.08]">
                                <ActiveIcon className="w-40 h-40 md:w-52 md:h-52 text-primary" />
                            </div>
                            <div className="relative z-10 p-6 md:p-8">
                                <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/40 text-primary">
                                            <activeCategory.icon className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <h3 className="font-mono text-sm font-semibold tracking-[0.18em] uppercase text-foreground/90">
                                                {activeCategory.title}
                                            </h3>
                                            <p className="text-[11px] text-muted-foreground mt-1">
                                                Detailed view of your current capabilities and tools in this area.
                                            </p>
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-mono text-muted-foreground/80 bg-background/80 border border-primary/50 rounded-full px-3 py-1">
                                        {activeCategory.skills.length} tools mapped
                                    </span>
                                </div>

                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {activeCategory.skills.map((skill) => (
                                        <div
                                            key={skill}
                                            className="flex items-center gap-3 px-3 py-2 rounded-lg border border-border bg-card/50 hover:border-primary/60 hover:bg-primary/10 transition-all"
                                        >
                                            <div className="p-1.5 rounded-md bg-background/80 border border-border/70 text-primary">
                                                <activeCategory.icon className="w-3.5 h-3.5" />
                                            </div>
                                            <span className="text-[11px] font-mono text-foreground/90">
                                                {skill}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;
