import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter, Mail, Shield } from "lucide-react";

import TypingText from "./TypingText";


const HeroSection = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative pt-20">
            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-primary text-xs font-mono mb-8"
                >
                    <Shield className="w-3 h-3" />
                    CYBERSECURITY ENGINEER
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight"
                >
                    Abdelhadi Rizki<span className="text-primary">.</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="group"
                >
                    <p className="font-mono text-base md:text-lg text-muted-foreground/90 mb-5 h-8 inline-block px-4 py-1 rounded-full bg-white/[0.02] border border-white/8">
                        <TypingText texts={[
                            "Security Researcher",
                            "Junior Penetration Tester",
                            "CTF Player",
                            "Ethical Hacker"
                        ]} />
                    </p>
                </motion.div>




                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="max-w-2xl mx-auto text-muted-foreground/80 leading-relaxed mb-10 text-sm md:text-lg"
                >
                    I build a cybersecurity profile around offensive thinking, secure engineering,
                    and clear execution, with a portfolio designed to feel sharp, calm, and intentional.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <a
                        href="#cv"
                        className="inline-flex items-center gap-2 rounded-[16px] border border-primary/25 bg-primary/[0.08] px-5 py-3 text-sm font-medium text-primary transition-all hover:bg-primary/[0.12] hover:border-primary/40"
                    >
                        <span>View Resume</span>
                        <ArrowDown className="w-4 h-4" />
                    </a>
                    {[
                        { icon: Github, href: "https://github.com/0xRizki" },
                        { icon: Linkedin, href: "https://linkedin.com/in/0xRizki" },
                        { icon: Twitter, href: "https://twitter.com/0xRizki" },
                        { icon: Mail, href: "mailto:rizki@example.com" },
                    ].map((social, i) => (
                        <a
                            key={i}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-[16px] border border-white/10 bg-white/[0.03] hover:border-primary/30 hover:bg-white/[0.06] transition-all group"
                        >
                            <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                        </a>
                    ))}
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary/50"
            >
                <span className="text-[10px] font-mono tracking-widest uppercase">Scroll to initiate</span>
                <div className="w-6 h-10 rounded-full border border-white/10 flex items-start justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1 h-1 rounded-full bg-primary"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
