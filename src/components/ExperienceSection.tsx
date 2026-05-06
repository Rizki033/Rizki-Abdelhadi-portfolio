import { motion } from "framer-motion";
import { Briefcase, Heart } from "lucide-react";

interface ExpEntry {
  title: string;
  organization: string;
  period: string;
  location: string;
  contract: string;
  description?: string;
  missions: string[];
  skills: string[];
  logoUrl: string;
}

const experience: ExpEntry[] = [
  {
    title: "Étudiant en Cybersécurité - Programme SkillUp IT 2026",
    organization: "EMAN Aerospace",
    period: "mars 2026 – A distance · 3 mois",
    location: "Marrakech, Maroc · A distance",
    contract: "Contrat en alternance",
    description:
      "Programme d'Immersion Professionnelle – SkillUp IT 2026, en partenariat avec EMAN Aerospace et l'Universite Cadi Ayyad. Integration d'une equipe d'ingenierie pour concevoir et deployer une solution complete de cybersecurite et d'architecture IT pour un environnement universitaire reel.",
    missions: [
      "Audit & Securite : Detection et analyse de vulnerabilites sur une infrastructure critique.",
      "Architecture : Conception de l'architecture applicative et securisation de l'infrastructure reseau.",
      "Gouvernance : Mise en conformite des configurations et definition des politiques de continuite d'activite (PCA).",
      "Gestion de Projet : Application de la methodologie Agile (KANBAN) pour le suivi des livrables techniques.",
    ],
    skills: ["Configuration Compliance", "ServiceNow Integration", "Analyse de vulnerabilites", "Architecture de securite", "Methodologie Agile", "Gouvernance IT & Conformite"],
    logoUrl: "https://media.licdn.com/dms/image/v2/D4E0BAQFkrHCMWL8FWg/company-logo_200_200/company-logo_200_200/0/1701456642519?e=2147483647&v=beta&t=Ii5oV3H78GaHpxWtyBEPZ2j0HkdisS3V8FkMFLaJYcY",
  },
  {
    title: "Bug Bounty Hunter (Independent Researcher)",
    organization: "Bugcrowd & HackerOne",
    period: "janv. 2026 – Present · 4 mois",
    location: "Remote · Independant",
    contract: "Independant",
    missions: [
      "Conducting web application security testing through Bugcrowd platform.",
      "Identifying and reporting security vulnerabilities.",
      "Practicing vulnerability research and responsible disclosure.",
    ],
    skills: ["Burp Suite", "Nmap", "Web Application Testing", "Vulnerability Research", "Responsible Disclosure","XSS","IDOR","SQL Injection"],
    logoUrl: "https://cdn.simpleicons.org/bugcrowd/F26822",
  },
  // {
  //   title: "Bug Bounty Hunter | Independent Security Researcher",
  //   organization: "HackerOne",
  //   period: "janv. 2026 – Present · 4 mois",
  //   location: "Remote · Independant",
  //   contract: "Independant",
  //   missions: [
  //     "Practicing real-world web application penetration testing.",
  //     "Identifying vulnerabilities such as XSS, IDOR, and SQL Injection.",
  //     "Learning responsible disclosure processes.",
  //     "Improving reconnaissance and exploitation techniques.",
  //   ],
  //   skills: ["Burp Suite", "Nmap", "XSS", "IDOR", "SQL Injection", "Reconnaissance"],
  //   logoUrl: "https://cdn.simpleicons.org/hackerone/494649",
  // },
  {
    title: "Cybersecurity CTF Player | Red Team Practice",
    organization: "TryHackMe",
    period: "janv. 2025 – Present · 1 an 4 mois",
    location: "Remote · Temps partiel",
    contract: "Temps partiel",
    missions: [
      "Solving CTF challenges related to web, network and privilege escalation.",
      "Practicing Red Team techniques and attack methodology.",
      "Ranked in Gold League – Top 6%.",
      "Hands-on labs with Linux, networking and exploitation.",
    ],
    skills: ["CTF", "Red Team", "Linux", "Networking", "Privilege Escalation", "Web Exploitation"],
    logoUrl: "https://cdn.simpleicons.org/tryhackme/212C42",
  },
];

const volunteering: ExpEntry[] = [
  {
    title: "Member & DevFest 2025 Volunteer",
    organization: "Google Developer Groups Marrakesh",
    period: "Dec 2025 – Present",
    location: "Marrakech, Maroc",
    contract: "Benevole",
    description:
      "Contributing to tech community events, organizing workshops, and supporting DevFest 2025 as a volunteer.",
    missions: [
      "Organisation d'ateliers techniques et d'evenements communautaires.",
      "Support logistique et animation pendant DevFest 2025.",
      "Facilitation de sessions networking entre developpeurs.",
    ],
    skills: ["Community Building", "Event Management", "Public Speaking"],
    logoUrl: "https://cdn.simpleicons.org/googledevelopers/4285F4",
  },
];

const LogoBox = ({ entry }: { entry: ExpEntry }) => (
  <div className="w-14 h-14 rounded-xl overflow-hidden border border-border bg-black/60 flex items-center justify-center shrink-0">
    <img
      src={entry.logoUrl}
      alt={entry.organization}
      width={42}
      height={42}
      className="object-contain"
      onError={(e) => {
        const t = e.target as HTMLImageElement;
        t.style.display = "none";
        const p = t.parentElement;
        if (p) {
          const span = document.createElement("span");
          span.style.cssText = "font-size:16px;font-weight:bold;color:#aaa;font-family:'JetBrains Mono',monospace;";
          span.textContent = entry.organization.slice(0, 2).toUpperCase();
          p.appendChild(span);
        }
      }}
    />
  </div>
);

const ExperienceCard = ({
  entry,
  accentClass,
  index,
}: {
  entry: ExpEntry;
  accentClass: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    className="p-6 rounded-xl border border-border bg-card/40 backdrop-blur-sm hover:border-primary/40 hover:bg-primary/5 transition-all"
  >
    {/* Header */}
    <div className="flex items-start gap-4 mb-5">
      <LogoBox entry={entry} />
      <div className="flex-1 min-w-0">
        {/* Title — large and clear */}
        <h4
          className="text-base font-bold text-foreground leading-snug mb-1"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {entry.title}
        </h4>
        {/* Organization */}
        <p className={`text-sm font-semibold mb-1 ${accentClass}`}>
          {entry.organization}
        </p>
        {/* Period + contract */}
        <p className="text-sm text-muted-foreground">
          {entry.period} &middot; {entry.contract}
        </p>
        {/* Location */}
        <p className="text-sm text-muted-foreground/60 mt-0.5">{entry.location}</p>
      </div>
    </div>

    {/* Description */}
    {entry.description && (
      <p className="text-sm text-foreground/70 leading-relaxed mb-4 pl-3 border-l-2 border-border">
        {entry.description}
      </p>
    )}

    {/* Missions */}
    <div className="mb-4">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
        Missions
      </p>
      <ul className="space-y-2">
        {entry.missions.map((m, i) => (
          <li key={i} className="flex gap-3 text-sm text-foreground/75 leading-relaxed">
            <span className={`shrink-0 font-bold mt-0.5 ${accentClass}`}>›</span>
            {m}
          </li>
        ))}
      </ul>
    </div>

    {/* Skills */}
    <div className="flex flex-wrap gap-2 pt-4 border-t border-border/40">
      {entry.skills.map((s) => (
        <span
          key={s}
          className="text-xs px-2.5 py-1 rounded-md border border-border bg-card/80 text-muted-foreground font-medium"
        >
          {s}
        </span>
      ))}
    </div>
  </motion.div>
);

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Page title */}
          <div className="text-center mb-12 md:mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground mb-3"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <span className="text-primary">~/</span>Experience
              <span className="text-[#a78bfa]">.</span>
            </h2>
            <p className="text-muted-foreground text-base">
              Professional journey in cybersecurity &amp; community engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">

            {/* ── Work Column ── */}
            <div>
              {/* Section title */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    Work
                  </h3>
                  <p className="text-sm text-muted-foreground">{experience.length} positions</p>
                </div>
              </div>

              <div className="space-y-5">
                {experience.map((exp, i) => (
                  <ExperienceCard
                    key={exp.title + i}
                    entry={exp}
                    accentClass="text-primary"
                    index={i}
                  />
                ))}
              </div>
            </div>

            {/* ── Volunteering Column ── */}
            <div>
              {/* Section title */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-[#4cc9f0]/10 text-[#4cc9f0]">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    Volunteering
                  </h3>
                  <p className="text-sm text-muted-foreground">{volunteering.length} position</p>
                </div>
              </div>

              <div className="space-y-5">
                {volunteering.map((vol, i) => (
                  <ExperienceCard
                    key={vol.title + i}
                    entry={vol}
                    accentClass="text-[#4cc9f0]"
                    index={i}
                  />
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
