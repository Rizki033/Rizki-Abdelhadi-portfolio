import { motion } from "framer-motion";
import { Briefcase, Heart } from "lucide-react";

const ExperienceSection = () => {
    const workExperiences = [
        {
            title: "Penetration Tester Intern",
            company: "Autocache",
            companyUrl: "https://www.linkedin.com/company/autocache/",
            period: "2026 – Present",
            description: "Conducting penetration testing assessments, vulnerability analysis, and security audits.",
            logo: "/logos/autocache.svg",
        },
        {
            title: "Bug Bounty Hunter (Independent Researcher)",
            company: "Bugcrowd",
            companyUrl: "https://www.linkedin.com/company/bugcrowd/",
            period: "Jan 2026 – Present",
            description:
                "Participating in web application security testing on the Bugcrowd platform, identifying and reporting vulnerabilities and practicing responsible disclosure.",
            logo: "/logos/bugcrowd.svg",
        },
        {
            title: "Bug Bounty Hunter | Independent Security Researcher",
            company: "HackerOne",
            companyUrl: "https://www.linkedin.com/company/hackerone/",
            period: "Jan 2026 – Present",
            description:
                "Performing real-world web application penetration testing on HackerOne, focusing on issues such as XSS, IDOR, and SQL Injection while following disclosure processes.",
            logo: "/logos/hackerone.svg",
        },
        {
            title: "Cybersecurity CTF Player | Red Team Practice",
            company: "TryHackMe",
            companyUrl: "https://www.linkedin.com/company/tryhackme/",
            period: "Jan 2025 – Present",
            description:
                "Solving CTF challenges focused on web, network, and privilege escalation, practicing Red Team methodologies and achieving Gold League (Top ~6%) rankings.",
            logo: "/logos/tryhackme.svg",
        },
    ];

    return (
        <section id="experience" className="py-16 md:py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-mono text-3xl font-bold mb-2">
                        <span className="text-primary">~/</span>experience
                    </h2>
                    <div className="w-16 h-0.5 bg-primary/50 mb-12" />

                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        {/* Work Experience */}
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <span className="text-primary font-mono text-xl">#</span>
                                <h3 className="text-xl font-bold tracking-tight">Work</h3>
                            </div>

                            <div className="space-y-4">
                                {workExperiences.map((exp, index) => (
                                    <motion.div
                                        key={exp.title}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.06 }}
                                        className="group p-6 rounded-lg border border-border bg-card/30 backdrop-blur-sm border-glow transition-all"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="shrink-0">
                                                <div className="w-12 h-12 rounded-lg overflow-hidden bg-primary/5 border border-primary/30 flex items-center justify-center">
                                                    {exp.logo ? (
                                                        <img
                                                            src={exp.logo}
                                                            alt={`${exp.company} logo`}
                                                            className="w-full h-full object-contain"
                                                        />
                                                    ) : (
                                                        <Briefcase className="w-6 h-6 text-primary" />
                                                    )}
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold mb-1 text-foreground/90">
                                                    {exp.title}
                                                </h4>
                                                <div className="font-mono text-[10px] text-primary mb-3">
                                                    <a
                                                        href={exp.companyUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="hover:underline hover:text-primary/90"
                                                    >
                                                        {exp.company}
                                                    </a>{" "}
                                                    | {exp.period}
                                                </div>
                                                <p className="text-xs text-muted-foreground leading-relaxed">
                                                    {exp.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Volunteering */}
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <span className="text-primary font-mono text-xl">#</span>
                                <h3 className="text-xl font-bold tracking-tight">Volunteering</h3>
                            </div>

                            <div className="space-y-4">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="p-6 rounded-lg border border-border bg-card/30 backdrop-blur-sm border-glow transition-all"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 rounded bg-primary/10 text-primary">
                                            <Heart className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold mb-1 text-foreground/90">Member & DevFest 2025 Volunteer</h4>
                                            <div className="font-mono text-[10px] text-primary mb-3">Google Developer Groups Marrakesh | Dec 2025 - Present</div>
                                            <p className="text-xs text-muted-foreground leading-relaxed">
                                                Contributing to tech community events, organizing workshops, and supporting DevFest 2025 as a volunteer.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="p-6 rounded-lg border border-border bg-card/30 backdrop-blur-sm border-glow transition-all"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 rounded bg-primary/10 text-primary">
                                            <Heart className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold mb-1 text-foreground/90">IT Club Member</h4>
                                            <div className="font-mono text-[10px] text-primary mb-3">FSTE - Errachidia | 2023 - 2024</div>
                                            <p className="text-xs text-muted-foreground leading-relaxed">
                                                Participated in technical workshops, organized coding competitions, and collaborated on student-led IT projects.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>


                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ExperienceSection;
