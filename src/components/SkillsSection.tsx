import { motion } from "framer-motion";

const G = (d: string, c: string) =>
  `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;

const skillCategories = [
  {
    name: "Offensive Security",
    skills: [
      { label: "Penetration Testing", icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>', color: "#00ff88" },
      { label: "OWASP Top 10", icon: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>', color: "#ff4d6d" },
      { label: "Burp Suite", icon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>', color: "#f4a261" },
      { label: "Metasploit", icon: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>', color: "#ff4d6d" },
      { label: "Nmap", icon: '<path d="M1 6l5 14 6-11 6 11 5-14"/>', color: "#4cc9f0" },
      { label: "OSINT", icon: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>', color: "#a78bfa" },
      { label: "XSS", icon: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>', color: "#ff4d6d" },
      { label: "SSRF", icon: '<path d="M5 12h14M12 5l7 7-7 7"/>', color: "#f4a261" },
      { label: "IDOR", icon: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>', color: "#a78bfa" },
      { label: "SQL Injection", icon: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>', color: "#ff4d6d" },
      { label: "Auth Bypass", icon: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>', color: "#ff4d6d" },
      { label: "Race Conditions", icon: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>', color: "#4cc9f0" },
      { label: "File Inclusion", icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>', color: "#f4a261" },
      { label: "Command Injection", icon: '<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>', color: "#00ff88" },
      { label: "Privilege Escalation", icon: '<polyline points="18 15 12 9 6 15"/>', color: "#00ff88" },
    ],
  },
  {
    name: "Security Operations",
    skills: [
      { label: "Security Reporting", icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>', color: "#a78bfa" },
      { label: "Bug Bounty", icon: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>', color: "#f4a261" },
      { label: "Subdomain Enum", icon: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10z"/>', color: "#4cc9f0" },
      { label: "Exploit Research", icon: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>', color: "#ff4d6d" },
      { label: "Web Hacking", icon: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>', color: "#00ff88" },
      { label: "Email Security", icon: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>', color: "#a78bfa" },
      { label: "Network Security", icon: '<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>', color: "#4cc9f0" },
    ],
  },
  {
    name: "Programming",
    skills: [
      { label: "Python", icon: '<path d="M12 2C8 2 6 4 6 7v2h6v1H5C3 10 2 11 2 13v3c0 2 1 3 3 3h2v-2H5v-3h7v-1H6V7c0-1 1-3 6-3s6 2 6 3v2h-7v1h7c2 0 3 1 3 3v3c0 2-1 3-3 3h-2v-2h2v-3h-7v-1h7V7c0-3-2-5-6-5z"/>', color: "#4cc9f0" },
      { label: "JavaScript", icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 17c0 1 .5 2 2 2s2-1 2-3v-7M15 11c.5-1 1.5-2 3-1"/>', color: "#f4d261" },
      { label: "Java", icon: '<path d="M8 20s-2 1-1 3c0 0 4-1 8 0 0 0 1-2-1-3H8z"/><path d="M12 2C8 2 6 5 6 8c0 2 1 4 3 5l1 1s-1 0-1 1 1 1 1 1h4s1 0 1-1-1-1-1-1l1-1c2-1 3-3 3-5 0-3-2-6-6-6z"/>', color: "#f4a261" },
      { label: "Bash", icon: '<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>', color: "#00ff88" },
      { label: "PHP", icon: '<ellipse cx="12" cy="12" rx="10" ry="5"/>', color: "#a78bfa" },
      { label: "React.js", icon: '<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>', color: "#4cc9f0" },
      { label: "HTML", icon: '<path d="M4 3l1.5 16.5L12 21l6.5-1.5L20 3H4z"/>', color: "#f4a261" },
      { label: "CSS", icon: '<path d="M4 3l1.5 16.5L12 21l6.5-1.5L20 3H4z"/><path d="M8 8h8l-1 8-3 1-3-1"/>', color: "#4cc9f0" },
    ],
  },
  {
    name: "Systems & Networks",
    skills: [
      { label: "Linux", icon: '<path d="M12 2a5 5 0 0 1 5 5c0 2-1 3.5-2 4.5L16 20H8l1-8.5C8 10.5 7 9 7 7a5 5 0 0 1 5-5z"/><line x1="9" y1="20" x2="15" y2="20"/>', color: "#f4a261" },
      { label: "Networking", icon: '<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>', color: "#4cc9f0" },
      { label: "Cloud Security", icon: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>', color: "#4cc9f0" },
      { label: "Virtualization", icon: '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>', color: "#a78bfa" },
      { label: "Active Directory", icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/>', color: "#a78bfa" },
      { label: "Cryptography", icon: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>', color: "#00ff88" },
      { label: "GNS3", icon: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10z"/>', color: "#4cc9f0" },
      { label: "Network Automation", icon: '<path d="M5 12h14M12 5l7 7-7 7"/>', color: "#00ff88" },
    ],
  },
  {
    name: "AI & Data",
    skills: [
      { label: "Deep Learning", icon: '<circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>', color: "#a78bfa" },
      { label: "PyTorch", icon: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>', color: "#f4a261" },
      { label: "Computer Vision", icon: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>', color: "#4cc9f0" },
      { label: "Medical Imaging", icon: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>', color: "#ff4d6d" },
      { label: "CNNs", icon: '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="6" y1="8" x2="6" y2="14"/><line x1="10" y1="6" x2="10" y2="14"/><line x1="14" y1="9" x2="14" y2="14"/>', color: "#a78bfa" },
      { label: "Data Analysis", icon: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>', color: "#00ff88" },
      { label: "Jupyter", icon: '<circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/>', color: "#f4a261" },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-3">
            Skills <span className="text-primary">&</span> Expertise
            <span className="text-[#a78bfa]">.</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            A collection of technologies I'm proficient with, from offensive security to AI
          </p>
        </motion.div>

        <div className="space-y-10">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <h3 className="text-sm font-semibold text-neutral-400 mb-4 pb-2 border-b border-neutral-800">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.label}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-neutral-800 bg-neutral-900 text-neutral-400 text-sm font-medium hover:border-neutral-600 hover:text-white hover:bg-neutral-800 transition-all duration-150 cursor-default"
                  >
                    <svg
                      width="16" height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={skill.color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      dangerouslySetInnerHTML={{ __html: skill.icon }}
                    />
                    {skill.label}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;