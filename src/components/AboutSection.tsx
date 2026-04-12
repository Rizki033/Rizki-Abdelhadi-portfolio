import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Users } from "lucide-react";

// ─── Contribution Graph ───────────────────────────────────────────────────────

const generateContributions = () => {
  const data: number[][] = [];
  for (let w = 0; w < 52; w++) {
    const week: number[] = [];
    for (let d = 0; d < 7; d++) {
      const r = Math.random();
      if (r < 0.15) week.push(0);
      else if (r < 0.35) week.push(1);
      else if (r < 0.60) week.push(2);
      else if (r < 0.80) week.push(3);
      else week.push(4);
    }
    data.push(week);
  }
  return data;
};

const CONTRIB_DATA = generateContributions();
const MONTHS = ["Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar"];
const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];

const levelColor = (level: number) => {
  switch (level) {
    case 1: return "bg-green-900 border border-green-800/50";
    case 2: return "bg-green-700 border border-green-600/50";
    case 3: return "bg-green-500 border border-green-400/50";
    case 4: return "bg-green-400 border border-green-300/50";
    default: return "bg-neutral-800/60 border border-neutral-700/30";
  }
};

const ContributionGraph = () => (
  <div
    className="p-4 rounded-xl border border-border bg-black/60"
    style={{ fontFamily: "'JetBrains Mono', monospace" }}
  >
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2 text-xs text-primary/60">
        <span className="text-primary">$</span>
        <span>cat github_stats.json</span>
      </div>
      <span className="text-xs text-neutral-500">875+ contributions</span>
    </div>

    <div className="grid grid-cols-3 gap-2 text-center mb-4">
      {[
        { value: "875+", label: "contributions" },
        { value: "25+", label: "repos" },
        { value: "Top 6%", label: "tryhackme" },
      ].map((stat) => (
        <div key={stat.label} className="space-y-0.5">
          <div className="text-base font-bold text-primary">{stat.value}</div>
          <div className="text-[10px] text-muted-foreground opacity-70">{stat.label}</div>
        </div>
      ))}
    </div>

    <div className="overflow-x-auto">
      <div style={{ minWidth: "520px" }}>
        <div className="flex ml-7 mb-1">
          {MONTHS.map((m, i) => (
            <div
              key={i}
              className="text-[10px] text-neutral-500"
              style={{ width: `${(520 / 12)}px` }}
            >
              {m}
            </div>
          ))}
        </div>

        <div className="flex gap-[2px]">
          <div className="flex flex-col gap-[2px] mr-1">
            {DAY_LABELS.map((d, i) => (
              <div
                key={i}
                className="text-[10px] text-neutral-500 h-[11px] leading-[11px] w-6 text-right pr-1"
              >
                {d}
              </div>
            ))}
          </div>
          {CONTRIB_DATA.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[2px]">
              {week.map((level, di) => (
                <div
                  key={di}
                  className={`w-[11px] h-[11px] rounded-[2px] ${levelColor(level)}`}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-end gap-1 mt-2">
          <span className="text-[10px] text-neutral-600 mr-1">Less</span>
          {[0, 1, 2, 3, 4].map((l) => (
            <div key={l} className={`w-[11px] h-[11px] rounded-[2px] ${levelColor(l)}`} />
          ))}
          <span className="text-[10px] text-neutral-600 ml-1">More</span>
        </div>
      </div>
    </div>
  </div>
);

// ─── Hacker Terminal ──────────────────────────────────────────────────────────

interface HackerLine {
  type: "prompt" | "output" | "blank";
  cmd?: string;
  out?: string;
  color?: string;
  delay: number;
}

const HACKER_LINES: HackerLine[] = [
  { type: "prompt", cmd: "whoami", delay: 0 },
  { type: "output", out: "0xRizki -- cybersecurity engineer & ethical hacker", color: "text-green-400", delay: 500 },
  { type: "blank", delay: 700 },
  { type: "prompt", cmd: "cat about.txt", delay: 900 },
  { type: "blank", delay: 1400 },
  { type: "output", out: "Passionate about protecting the digital world.", color: "text-foreground/80", delay: 1500 },
  { type: "output", out: "Specializing in:", color: "text-foreground/80", delay: 1700 },
  { type: "output", out: "  [+] ethical hacking", color: "text-primary", delay: 1900 },
  { type: "output", out: "  [+] information systems security", color: "text-primary", delay: 2100 },
  { type: "output", out: "  [+] threat analysis & AI integration", color: "text-primary", delay: 2300 },
  { type: "blank", delay: 2450 },
  { type: "output", out: "Goal: design intelligent tools to anticipate, detect & mitigate cyber attacks", color: "text-foreground/60", delay: 2550 },
  // { type: "output", out: "detect & mitigate cyber attacks.", color: "text-foreground/60", delay: 2750 },
  { type: "blank", delay: 2950 },
  { type: "prompt", cmd: "nmap -sV --open target.htb", delay: 3100 },
  { type: "output", out: "Starting Nmap 7.94 ...", color: "text-yellow-400/80", delay: 3700 },
  { type: "output", out: "PORT     STATE  SERVICE   VERSION", color: "text-neutral-400", delay: 3900 },
  { type: "output", out: "22/tcp   open   ssh       OpenSSH 8.9", color: "text-green-400", delay: 4050 },
  { type: "output", out: "80/tcp   open   http      Apache 2.4.52", color: "text-green-400", delay: 4150 },
  { type: "output", out: "443/tcp  open   https     nginx 1.18", color: "text-green-400", delay: 4250 },
  { type: "blank", delay: 4400 },
  { type: "prompt", cmd: "", delay: 4500 },
];

const PromptLine = ({
  cmd,
  isLast,
  showCursor,
}: {
  cmd: string;
  isLast: boolean;
  showCursor: boolean;
}) => (
  <div style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-xs leading-5">
    <span className="text-green-400">{"┌──("}</span>
    <span className="text-primary font-bold">0xRizki</span>
    <span className="text-green-400">{"㉿kali)-[~]"}</span>
    <br />
    <span className="text-green-400">{"└─$ "}</span>
    <span className="text-white">{cmd}</span>
    {isLast && (
      <span
        className="inline-block w-2 h-3 bg-primary ml-0.5 align-middle"
        style={{ opacity: showCursor ? 1 : 0, transition: "opacity 0.1s" }}
      />
    )}
  </div>
);

const TypingTerminal = () => {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [typedCmds, setTypedCmds] = useState<Record<number, string>>({});
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    HACKER_LINES.forEach((line, idx) => {
      if (line.type === "prompt" && line.cmd && line.cmd !== "") {
        line.cmd.split("").forEach((_, ci) => {
          const t = setTimeout(() => {
            setTypedCmds((prev) => ({ ...prev, [idx]: line.cmd!.slice(0, ci + 1) }));
            setVisibleLines((prev) => (prev.includes(idx) ? prev : [...prev, idx]));
          }, line.delay + ci * 55);
          timers.push(t);
        });
      } else {
        const t = setTimeout(() => {
          setVisibleLines((prev) => (prev.includes(idx) ? prev : [...prev, idx]));
        }, line.delay);
        timers.push(t);
      }
    });

    const cursorTimer = setInterval(() => setShowCursor((v) => !v), 530);
    return () => {
      timers.forEach(clearTimeout);
      clearInterval(cursorTimer);
    };
  }, []);

  const lastIdx = HACKER_LINES.length - 1;

  return (
    <div
      className="rounded-xl overflow-hidden border border-border h-full flex flex-col"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {/* Top bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-black/70 border-b border-border shrink-0">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
        <span className="flex-1 text-center text-xs text-muted-foreground">
          0xRizki@kali ~ bash
        </span>
      </div>

      {/* Body */}
      <div className="bg-black/85 p-4 flex-1 min-h-[320px] overflow-hidden space-y-0.5">
        {HACKER_LINES.map((line, idx) => {
          if (!visibleLines.includes(idx)) return null;

          if (line.type === "prompt") {
            const displayed = line.cmd === "" ? "" : (typedCmds[idx] ?? "");
            return (
              <PromptLine
                key={idx}
                cmd={displayed}
                isLast={idx === lastIdx}
                showCursor={showCursor}
              />
            );
          }

          if (line.type === "blank") {
            return <div key={idx} className="h-2" />;
          }

          return (
            <div key={idx} className={`text-xs leading-5 ${line.color ?? "text-neutral-400"}`}>
              {line.out}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ─── Main Section ─────────────────────────────────────────────────────────────

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Centered title */}
          <div className="text-center mb-10 md:mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-3"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <span className="text-primary">~/</span>About
              <span className="text-[#a78bfa]">.</span>
            </h2>
            <p className="text-muted-foreground text-sm px-4">
              Cybersecurity engineer, ethical hacker &amp; AI enthusiast
            </p>
          </div>

          {/* Grid: stacks on mobile, side-by-side on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {/* LEFT — Hacker Terminal */}
            <TypingTerminal />

            {/* RIGHT — Info cards + contribution graph */}
            <div className="space-y-4">
              {[
                {
                  icon: MapPin,
                  label: "location",
                  value: "Marrakech, Morocco",
                },
                {
                  icon: GraduationCap,
                  label: "education",
                  value: "Engineering Degree – IT Security  (2024–2027)",
                },
                {
                  icon: Users,
                  label: "community",
                  value: "GDG Marrakech Member & DevFest 2025 Volunteer",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card/30 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default group"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  <div className="p-2 rounded bg-primary/10 text-primary shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-primary/60 mb-1">
                      <span className="text-primary/40">~/</span>
                      {item.label}
                    </div>
                    <div className="text-sm text-foreground/90">{item.value}</div>
                  </div>
                </div>
              ))}

              <ContributionGraph />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;