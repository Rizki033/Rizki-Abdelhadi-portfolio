import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Globe2, Languages } from "lucide-react";

const cvLinks = {
    fr: "https://drive.google.com/file/d/10mGH0es9_RsE52nt4-gM0uROP9BAYgMK/view?usp=sharing",
    en: "https://drive.google.com/file/d/1jZtJ3i59KZyHyhvutUE_7Al_z6PTAJxH/view?usp=sharing",
};

const resumes = [
    {
        title: "Version Francaise",
        subtitle: "Pour les candidatures en francais",
        href: cvLinks.fr,
        icon: Languages,
    },
    {
        title: "English Version",
        subtitle: "For international opportunities",
        href: cvLinks.en,
        icon: Globe2,
    },
];

const CVSection = () => {
    return (
        <section id="cv" className="py-16 md:py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                     className="mx-auto max-w-4xl rounded-[28px] border border-border bg-card/80 px-6 py-10 shadow-lg backdrop-blur-sm md:px-12 md:py-14 dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(24,24,27,0.88),rgba(14,14,16,0.96))] dark:shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
                >
                    <div className="mx-auto max-w-2xl text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-3 py-1 text-[11px] font-mono uppercase tracking-[0.24em] text-primary/85">
                            <FileText className="h-3.5 w-3.5" />
                            Resume
                        </div>

                        <h2 className="mt-6 text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
                            Want to know more<span className="text-primary">?</span>
                        </h2>

                        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                            Open the version that matches your context and get a clearer view of my
                            experience, skills, education, and cybersecurity background.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-4 md:grid-cols-2">
                        {resumes.map((resume, index) => (
                            <motion.a
                                key={resume.title}
                                href={resume.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.35, delay: index * 0.08 }}
                                className="group rounded-[22px] border border-border bg-muted/50 p-5 text-left transition-all hover:border-primary/40 hover:bg-primary/5 dark:border-white/8 dark:bg-white/[0.03] dark:hover:border-primary/30 dark:hover:bg-white/[0.05] dark:hover:shadow-[0_0_24px_rgba(255,107,107,0.08)]"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="rounded-2xl border border-border bg-background/90 p-3 text-foreground dark:border-white/10 dark:bg-white/[0.03] dark:text-foreground/85">
                                            <resume.icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-foreground">{resume.title}</h3>
                                            <p className="text-sm text-muted-foreground">{resume.subtitle}</p>
                                        </div>
                                    </div>
                                    <div className="rounded-full border border-primary/20 bg-primary/[0.06] p-2 text-primary transition-transform group-hover:translate-x-0.5">
                                        <ArrowUpRight className="h-4 w-4" />
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CVSection;
