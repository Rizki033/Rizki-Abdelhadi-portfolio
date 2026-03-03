import { motion } from "framer-motion";
import { Award, Trophy, Flag } from "lucide-react";

const certifications = [
    {
        title: "Jr Penetration Tester",
        issuer: "TryHackMe",
        date: "Feb 2026",
        icon: Award,
    },
    {
        title: "Ransomware Defense Masterclass",
        issuer: "SOCRadar",
        date: "Jul 2025",
        icon: Award,
    },
    {
        title: "Mastering Cyber Threat Intelligence for SOC Analysts",
        issuer: "SOCRadar",
        date: "Jul 2025",
        icon: Award,
    },
    {
        title: "Certified Email Authentication Specialist",
        issuer: "Proofpoint",
        date: "Apr 2025",
        icon: Award,
    },
    {
        title: "Introduction to Cybersecurity",
        issuer: "Cisco",
        date: "Mar 2025",
        icon: Award,
    },
    {
        title: "CCNA: Automation and Programmability",
        issuer: "Cybrary",
        date: "Feb 2025",
        icon: Award,
    },
    {
        title: "Python Essentials 1",
        issuer: "Cisco",
        date: "Jan 2025",
        icon: Award,
    },
    {
        title: "Python",
        issuer: "Cisco Networking Academy",
        date: "Sep 2024",
        icon: Award,
    },
    {
        title: "Pre Security",
        issuer: "TryHackMe",
        date: "Nov 2024",
        icon: Award,
    },
    {
        title: "Introduction to Cyber Security",
        issuer: "TryHackMe",
        date: "Nov 2024",
        icon: Award,
    },
];

const achievements = [
    {
        title: "1st Place Gold League",
        description: "Top 7% worldwide on TryHackMe",
        icon: Trophy,
    },
    {
        title: "Natas CTF Complete",
        description: "All 33 levels completed on OverTheWire",
        icon: Flag,
    },
];

const CertsSection = () => {
    return (
        <section id="certs" className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-mono text-3xl font-bold mb-2">
                        <span className="text-primary">~/</span>certifications
                    </h2>
                    <div className="w-16 h-0.5 bg-primary/50 mb-10" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                        {certifications.map((cert, i) => (
                            <motion.div
                                key={cert.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="p-4 rounded-lg border border-primary/20 bg-primary/5 border-glow hover:bg-primary/10 transition-all cursor-default"
                            >
                                <cert.icon className="w-5 h-5 text-primary mb-2" />
                                <h3 className="font-mono text-[11px] font-semibold text-foreground mb-1 leading-tight">{cert.title}</h3>
                                <p className="text-[10px] text-muted-foreground">{cert.issuer} · {cert.date}</p>
                            </motion.div>
                        ))}
                    </div>

                    <h3 className="font-mono text-xl font-bold mb-6">
                        <span className="text-primary">#</span> Achievements
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {achievements.map((ach, i) => (
                            <motion.div
                                key={ach.title}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="flex items-start gap-4 p-5 rounded-lg border border-border bg-card/30 backdrop-blur-sm card-glow"
                            >
                                <ach.icon className="w-6 h-6 text-cyber-cyan shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-mono text-sm font-semibold text-foreground mb-1">{ach.title}</h4>
                                    <p className="text-xs text-muted-foreground">{ach.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CertsSection;
