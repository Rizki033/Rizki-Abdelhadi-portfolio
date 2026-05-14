import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
    const education = [
        {
            school: "Faculté des Sciences et Techniques Gueliz - Marrakech",
            degree: "Engineering Degree – IT Security (Sécurité d’Information Technologique)",
            period: "2024 – 2027",
            tags: ["Ethical Hacking & Security Testing", "Cryptography & Network Security", "Cloud Security & DevOps", "Cyber Incident Management & Digital Forensics", "Network and system security", "Mobile programming", "Java programming and security", "IT security and cyber law", "Back-end & front-end web development", "Project and Business Management", "Application and service security", "Cloud security and blockchain", "IT project management and agile methodologies", "Systems and Network Administration", "Security of banking payment systems and industrial information systems"],
            logo: "/fst_marrakech_logo.png",
            link: "https://www.fstg-marrakech.ac.ma/",
        },
        {
            school: "FSTE - Errachidia",
            degree: "DEUST – Math, Computer Science & Physics",
            period: "2022 – 2024",
            tags: ["Programming & Databases"],
            logo: "/fst_errachidia_logo.png",
            link: "https://fst-maroc.com/school/6",
        },
        {
            school: "Lycée Abi El Kacem",
            degree: "Baccalauréat – Physical Sciences (Mention Bien)",
            period: "2021-2022",
            tags: [],
            logo: "/high_school_logo.png",
            link: "#",
        },
    ];

    return (
        <section id="education" className="py-16 md:py-24 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-emerald-400/8 to-transparent" />
                <div className="absolute left-10 top-16 h-44 w-44 rounded-full bg-emerald-400/10 blur-3xl" />
                <div className="absolute right-0 bottom-10 h-52 w-52 rounded-full bg-lime-300/8 blur-3xl" />
            </div>
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-12">
                        <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-2">
                            <span className="text-primary">~/</span>Education
                            <span className="text-[#a78bfa]">.</span>
                        </h2>
                        <div className="w-16 h-0.5 bg-gradient-to-r from-primary via-emerald-500/80 to-violet-400/90 mx-auto mt-4" />
                    </div>

                    <div className="space-y-4 relative">
                        {/* Timeline Line */}
                        <div className="absolute left-4 top-0 bottom-0 w-px bg-primary/25 dark:bg-emerald-300/25 -z-10" />

                        {education.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="relative pl-12 group"
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-2.5 top-6 w-3 h-3 rounded-full bg-background border-2 border-primary dark:border-emerald-300 group-hover:scale-125 transition-transform" />

                                <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-primary/5 dark:border-slate-200/10 dark:bg-gradient-to-br dark:from-slate-900/70 dark:via-slate-950/70 dark:to-slate-900/60 dark:hover:border-emerald-300/30 dark:hover:bg-transparent dark:hover:shadow-[0_18px_50px_rgba(52,211,153,0.10)]">
                                    <div className="flex items-start gap-4 flex-col md:flex-row">
                                        <a
                                            href={item.link}
                                            target={item.link !== "#" ? "_blank" : "_self"}
                                            rel="noopener noreferrer"
                                            className="block shrink-0 group/logo"
                                            title={`Visit ${item.school}`}
                                        >
                                            <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted/60 border border-border p-2 flex items-center justify-center transition-all dark:bg-white/5 dark:border-emerald-300/20 group-hover/logo:border-primary/40 group-hover/logo:bg-primary/5 dark:group-hover/logo:border-emerald-300/50 dark:group-hover/logo:bg-emerald-100/5">
                                                <img
                                                    src={`${import.meta.env.BASE_URL}${item.logo.replace(/^\//, "")}`}
                                                    alt={`${item.school} Logo`}
                                                    className="w-full h-full object-contain group-hover/logo:scale-110 transition-transform"
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement;
                                                        target.style.display = 'none';
                                                        target.parentElement?.classList.add('fallback-icon');
                                                    }}
                                                />
                                                <GraduationCap className="w-8 h-8 text-primary dark:text-emerald-300 hidden group-[.fallback-icon]/logo:block" />
                                            </div>
                                        </a>

                                        <div className="flex-1 mt-2 md:mt-0">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                                <a
                                                    href={item.link}
                                                    target={item.link !== "#" ? "_blank" : "_self"}
                                                    rel="noopener noreferrer"
                                                    className="hover:text-primary transition-colors inline-block group/title dark:hover:text-emerald-200"
                                                >
                                                    <h3 className="text-lg font-bold text-foreground group-hover/title:text-primary transition-colors underline-offset-4 decoration-primary/35 decoration-1 group-hover/title:underline dark:group-hover/title:text-emerald-200 dark:decoration-emerald-300/40">{item.school}</h3>
                                                </a>
                                                <span className="font-mono text-xs text-muted-foreground dark:text-emerald-200/80">
                                                    {item.period}
                                                </span>
                                            </div>
                                            <h4 className="font-mono text-sm text-muted-foreground dark:text-emerald-100/90 mb-4">{item.degree}</h4>

                                            {item.tags.length > 0 && (
                                                <div className="flex flex-wrap gap-2">
                                                    {item.tags.map(tag => (
                                                        <span key={tag} className="px-2 py-1 text-xs font-mono rounded border border-border bg-muted/80 text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground dark:border-slate-200/10 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:border-emerald-300/25 dark:hover:text-emerald-100">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default EducationSection;
