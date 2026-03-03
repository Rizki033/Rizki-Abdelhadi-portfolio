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
        <section id="education" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-mono text-3xl font-bold mb-2">
                        <span className="text-primary">~/</span>education
                    </h2>
                    <div className="w-16 h-0.5 bg-primary/50 mb-12" />

                    <div className="space-y-4 relative">
                        {/* Timeline Line */}
                        <div className="absolute left-4 top-0 bottom-0 w-px bg-primary/20 -z-10" />

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
                                <div className="absolute left-2.5 top-6 w-3 h-3 rounded-full bg-background border-2 border-primary group-hover:scale-125 transition-transform" />

                                <div className="p-6 rounded-lg border border-border bg-card/30 backdrop-blur-sm border-glow transition-all">
                                    <div className="flex items-start gap-4 flex-col md:flex-row">
                                        <a
                                            href={item.link}
                                            target={item.link !== "#" ? "_blank" : "_self"}
                                            rel="noopener noreferrer"
                                            className="block shrink-0 group/logo"
                                            title={`Visit ${item.school}`}
                                        >
                                            <div className="w-16 h-16 rounded-lg overflow-hidden bg-white/5 border border-primary/20 p-2 flex items-center justify-center group-hover/logo:border-primary/50 group-hover/logo:bg-white/10 transition-all">
                                                <img
                                                    src={item.logo}
                                                    alt={`${item.school} Logo`}
                                                    className="w-full h-full object-contain group-hover/logo:scale-110 transition-transform"
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement;
                                                        target.style.display = 'none';
                                                        target.parentElement?.classList.add('fallback-icon');
                                                    }}
                                                />
                                                <GraduationCap className="w-8 h-8 text-primary hidden group-[.fallback-icon]/logo:block" />
                                            </div>
                                        </a>

                                        <div className="flex-1 mt-2 md:mt-0">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                                <a
                                                    href={item.link}
                                                    target={item.link !== "#" ? "_blank" : "_self"}
                                                    rel="noopener noreferrer"
                                                    className="hover:text-primary transition-colors inline-block group/title"
                                                >
                                                    <h3 className="text-lg font-bold text-foreground/90 group-hover/title:text-primary transition-colors underline-offset-4 decoration-primary/30 decoration-1 group-hover/title:underline">{item.school}</h3>
                                                </a>
                                                <span className="font-mono text-xs text-primary/60">
                                                    {item.period}
                                                </span>
                                            </div>
                                            <h4 className="font-mono text-sm text-primary mb-4">{item.degree}</h4>

                                            {item.tags.length > 0 && (
                                                <div className="flex flex-wrap gap-2">
                                                    {item.tags.map(tag => (
                                                        <span key={tag} className="px-2 py-1 text-xs font-mono border border-primary/20 bg-primary/5 text-primary/80 rounded">
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
