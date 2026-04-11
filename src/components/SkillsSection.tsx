import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Offensive Security",
    skills: ["Penetration Testing", "OWASP Top 10", "Burp Suite", "Metasploit", "Nmap", "OSINT", "Privilege Escalation", "Command Injection", "XSS", "SSRF", "IDOR", "File Inclusion", "Authentication Bypass", "Race Conditions", "SQL Injection"],
  },
  {
    title: "Security Operations",
    skills: ["Security Reporting", "Bug Bounty Hunting", "Subdomain Enumeration", "Source Intelligence", "Exploit Vulnerabilities", "Web Hacking", "Email Security", "Network Security"],
  },
  {
    title: "Programming",
    skills: ["Python", "Java", "JavaScript", "Bash", "PHP", "React.js", "HTML", "CSS"],
  },
  {
    title: "Systems & Networks",
    skills: ["Linux", "Networking", "Cloud Security", "Virtualization", "Active Directory", "Cryptography", "GNS3", "Network Automation"],
  },
  {
    title: "AI & Data",
    skills: ["Deep Learning", "PyTorch", "Computer Vision", "Medical Imaging", "CNNs", "Data Analysis", "Jupyter"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-3xl font-bold mb-2">
            <span className="text-primary">~/</span>skills
          </h2>
          <div className="w-16 h-0.5 bg-primary/50 mb-10" />

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-5 rounded-lg border border-border bg-card card-glow transition-all"
              >
                <h3 className="font-mono text-sm text-primary mb-4">{`> ${cat.title}`}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-mono rounded border border-primary/20 bg-primary/5 text-primary/80 hover:bg-primary/10 hover:border-primary/40 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
