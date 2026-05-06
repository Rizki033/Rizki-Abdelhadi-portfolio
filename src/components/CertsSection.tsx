import { motion } from "framer-motion";
import { Trophy, Flag, ExternalLink } from "lucide-react";

const issuerStyles: Record<string, { color: string; bg: string; label: string }> = {
    "TryHackMe": { color: "#ff4d6d", bg: "#ff4d6d18", label: "THM" },
    "SOCRadar": { color: "#f4a261", bg: "#f4a26118", label: "SOC" },
    "Proofpoint": { color: "#4cc9f0", bg: "#4cc9f018", label: "PP" },
    "Cisco": { color: "#4cc9f0", bg: "#4cc9f018", label: "CSC" },
    "Cybrary": { color: "#a78bfa", bg: "#a78bfa18", label: "CBR" },
    "Cisco Networking Academy": { color: "#4cc9f0", bg: "#4cc9f018", label: "CSC" },
};

const certifications = [
    { title: "Ethical Hacker", issuer: "Cisco", date: "May 2026", url: "https://www.credly.com/badges/06ec8462-385d-4989-9db7-f11fba15681a/public_url" },
    { title: "Jr Penetration Tester", issuer: "TryHackMe", date: "Feb 2026", url: "https://tryhackme.com/certificate/THM-S3LRB8724U" },
    { title: "Ransomware Defense Masterclass", issuer: "SOCRadar", date: "Jul 2025", url: "https://credsverse.com/credentials/dc6384e6-2920-46ff-b2f1-0aef9ab1c826?preview=1" },
    { title: "Mastering Cyber Threat Intelligence for SOC Analysts", issuer: "SOCRadar", date: "Jul 2025", url: "https://credsverse.com/credentials/3b0c8b7f-223f-4f93-a1c9-c3e083141e42?preview=2" },
    { title: "Certified Email Authentication Specialist", issuer: "Proofpoint", date: "Apr 2025", url: "https://www.credly.com/badges/68b5fe7a-e1af-41ba-962f-022a414bf4a2/linked_in_profile" },
    { title: "Introduction to Cybersecurity", issuer: "Cisco", date: "Mar 2025", url: "https://www.credly.com/badges/7b687211-0909-4ba1-943a-875f70f56ea2/linked_in_profile" },
    { title: "CCNA: Automation and Programmability", issuer: "Cybrary", date: "Feb 2025", url: "https://app.cybrary.it/profile/CooperativeMockingbird3528?tab=badges" },
    { title: "Python Essentials 1", issuer: "Cisco", date: "Jan 2025", url: "https://www.credly.com/badges/b0164192-1158-42f7-a33e-e479b31fbdfb/linked_in_profile" },
    { title: "Python", issuer: "Cisco Networking Academy", date: "Sep 2024", url: "" },
    { title: "Pre Security", issuer: "TryHackMe", date: "Nov 2024", url: "" },
    { title: "Introduction to Cyber Security", issuer: "TryHackMe", date: "Nov 2024", url: "" },
];

const achievements = [
    {
        title: "1st Place Gold League",
        description: "Top 6% worldwide on TryHackMe",
        icon: Trophy,
        color: "#f4a261",
        bg: "#f4a26118",
    },
    {
        title: "Natas CTF Complete",
        description: "All 33 levels completed on OverTheWire",
        icon: Flag,
        color: "#00ff88",
        bg: "#00ff8818",
    },
    {
        title: "Top 10 – Knights of the Fury CTF",
        description: "8ème place sur 100 équipes avec S4M_Hack – 24h de challenges intensifs en cybersécurité (Web, Crypto, OSINT, Reverse, IoT…).",
        icon: Trophy,
        color: "#FFD700",
        bg: "#FFD70018",
    },
    {
        title: "Official CTF Player – SOC4M",
        description: "Active CTF player officially representing team SOC4M, participating in cybersecurity competitions and solving challenges across multiple domains.",
        icon: Flag,
        color: "#00c2ff",
        bg: "#00c2ff18",
    }
];

const CertsSection = () => {
    return (
        <section id="certs" className="py-16 md:py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-12">
                        <h2 className="font-mono text-3xl md:text-4xl font-bold text-white mb-2">
                            <span className="text-primary">~/</span>Certifications
                            <span className="text-[#a78bfa]"></span>
                        </h2>
                        <div className="w-16 h-0.5 bg-primary/50 mx-auto mt-4" />
                    </div>

                    {/* Cert Cards Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-12">
                        {certifications.map((cert, i) => {
                            const s = issuerStyles[cert.issuer] ?? { color: "#888", bg: "#88888818", label: "?" };
                            return (
                                <motion.a
                                    key={cert.title}
                                    href={cert.url || "#"}
                                    target={cert.url ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                    className="group relative flex flex-col p-4 rounded-xl border transition-all duration-200 cursor-pointer no-underline"
                                    style={{
                                        background: "#0d0d18",
                                        borderColor: "#1e1e35",
                                    }}
                                    onMouseEnter={e => {
                                        (e.currentTarget as HTMLElement).style.borderColor = s.color + "40";
                                        (e.currentTarget as HTMLElement).style.background = "#0d1a10";
                                    }}
                                    onMouseLeave={e => {
                                        (e.currentTarget as HTMLElement).style.borderColor = "#1e1e35";
                                        (e.currentTarget as HTMLElement).style.background = "#0d0d18";
                                    }}
                                >
                                    {/* Top row: issuer badge + external icon */}
                                    <div className="flex items-start justify-between gap-2 mb-3">
                                        <span
                                            className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded"
                                            style={{ background: s.bg, color: s.color }}
                                        >
                                            {s.label}
                                        </span>
                                        <ExternalLink
                                            className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5"
                                            style={{ color: "#00ff88" }}
                                        />
                                    </div>

                                    {/* Title */}
                                    <p className="font-mono text-[11px] font-semibold text-[#d0d0e8] leading-snug mb-2 flex-1">
                                        {cert.title}
                                    </p>

                                    {/* Meta */}
                                    <p className="text-[10px] text-neutral-600 font-mono">
                                        {cert.issuer} · {cert.date}
                                    </p>
                                </motion.a>
                            );
                        })}
                    </div>

                    {/* Achievements */}
                    <h3 className="font-mono text-base font-bold mb-5 text-[#a78bfa]">
                        # achievements
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {achievements.map((ach, i) => (
                            <motion.div
                                key={ach.title}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="flex items-start gap-4 p-4 rounded-xl border"
                                style={{ background: "#0d0a18", borderColor: ach.color + "30" }}
                            >
                                <div
                                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                                    style={{ background: ach.bg, border: `1px solid ${ach.color}30` }}
                                >
                                    <ach.icon className="w-4 h-4" style={{ color: ach.color }} />
                                </div>
                                <div>
                                    <h4 className="font-mono text-xs font-semibold text-[#d0d0e8] mb-1">
                                        {ach.title}
                                    </h4>
                                    <p className="text-[11px] text-neutral-600">{ach.description}</p>
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