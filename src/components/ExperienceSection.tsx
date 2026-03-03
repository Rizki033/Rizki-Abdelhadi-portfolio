import { motion } from "framer-motion";
import { Briefcase, Heart } from "lucide-react";

const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 relative">
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

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="group p-6 rounded-lg border border-primary/20 bg-primary/5 border-glow transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded bg-primary/10 text-primary">
                                        <Briefcase className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1 text-foreground/90">Penetration Tester Intern</h4>
                                        <div className="font-mono text-[10px] text-primary mb-3">Autocache | 2026 - Present</div>
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            Conducting penetration testing assessments, vulnerability analysis, and security audits.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
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
