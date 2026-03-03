import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Shield } from "lucide-react";

import TypingText from "./TypingText";


const HeroSection = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative pt-20">
            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono mb-8"
                >
                    <Shield className="w-3 h-3" />
                    CYBERSECURITY ENGINEER
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tighter"
                >
                    Abdelhadi <span className="text-primary text-glow">Rizki</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="group"
                >
                    <p className="font-mono text-base md:text-lg text-muted-foreground/90 mb-4 h-8 inline-block px-4 py-1 rounded-full hover:bg-primary/5 hover:text-primary transition-all cursor-default border border-transparent hover:border-primary/20">
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
                    className="max-w-xl mx-auto text-muted-foreground/80 leading-relaxed mb-10 text-sm md:text-base"
                >
                    Passionate about protecting the digital world through ethical hacking, threat
                    analysis, and building intelligent security tools.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-center justify-center gap-4"
                >
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
                            className="p-3 rounded-lg border border-border bg-card/50 hover:border-primary/50 hover:bg-primary/5 transition-all group"
                        >
                            <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </a>
                    ))}
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary/40"
            >
                <span className="text-[10px] font-mono tracking-widest uppercase">Scroll to initiate</span>
                <div className="w-6 h-10 rounded-full border border-primary/20 flex items-start justify-center p-2">
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
