import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Users } from "lucide-react";

const TypingTerminal = () => {
  const [typed, setTyped] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const cmd = "cat about.txt";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < cmd.length) {
        setTyped(cmd.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowOutput(true), 400);
      }
    }, 75);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
      className="rounded-lg overflow-hidden border border-border"
    >
      {/* Terminal top bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-black/60 border-b border-border">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
        <span className="flex-1 text-center text-xs text-muted-foreground">
          0xRizki@portfolio ~ bash
        </span>
      </div>

      {/* Terminal body */}
      <div className="bg-black/80 p-5 min-h-[260px]">
        {/* Command line */}
        <div className="text-sm">
          <span className="text-primary">0xRizki@portfolio</span>
          <span className="text-muted-foreground">:</span>
          <span className="text-yellow-400">~/about</span>
          <span className="text-muted-foreground">$ </span>
          <span className="text-foreground">{typed}</span>
          {!showOutput && (
            <span className="inline-block w-2 h-4 bg-primary align-middle animate-pulse ml-0.5" />
          )}
        </div>

        {/* Output */}
        {showOutput && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mt-4 space-y-3 text-sm"
          >
            <div className="text-muted-foreground border-t border-border/40 pt-3">
              <p className="leading-relaxed text-foreground/80">
                As a cybersecurity engineering student, I am passionate about protecting
                the digital world and highly motivated to develop innovative solutions
                against evolving threats. I specialize in{" "}
                <span className="text-primary">ethical hacking</span>,{" "}
                <span className="text-primary">information systems security</span>, and{" "}
                <span className="text-primary">threat analysis</span>, with a strong
                interest in integrating artificial intelligence into cybersecurity.
              </p>
            </div>

            <div className="border-t border-border/40 pt-3 text-foreground/60 leading-relaxed">
              My goal is to design intelligent tools capable of anticipating, detecting,
              and mitigating attacks, while contributing to a safer and more secure digital
              environment. Curious, dedicated, and driven, I am actively seeking
              opportunities to learn, grow, and make a meaningful impact.
            </div>

            {/* Second prompt */}
            <div className="pt-2">
              <span className="text-primary">0xRizki@portfolio</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-yellow-400">~/about</span>
              <span className="text-muted-foreground">$ </span>
              <span className="inline-block w-2 h-4 bg-primary align-middle animate-pulse" />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-3xl font-bold mb-2">
            <span className="text-primary">~/</span>about
          </h2>
          <div className="w-16 h-0.5 bg-primary/50 mb-10" />

          <div className="grid md:grid-cols-2 gap-10">
            {/* LEFT — Terminal animé */}
            <div>
              <TypingTerminal />
            </div>

            {/* RIGHT — Info cards */}
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
                  value: "Engineering Degree – IT Security, FST Gueliz Marrakech (2024–2027)",
                },
                {
                  icon: Users,
                  label: "community",
                  value: "GDG Marrakech Member & DevFest 2025 Volunteer",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card/30 backdrop-blur-sm border-glow hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default group"
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

              {/* GitHub Stats — style terminal */}
              <div
                className="p-4 rounded-lg border border-border bg-black/60 border-glow"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <div className="flex items-center gap-2 text-xs text-primary/60 mb-4">
                  <span className="text-primary">$</span>
                  <span>cat github_stats.json</span>
                </div>
                <div className="text-xs text-muted-foreground mb-3">{"{"}</div>
                <div className="grid grid-cols-3 gap-2 text-center px-2">
                  {[
                    { value: '"875+"', label: "contributions" },
                    { value: '"25+"', label: "repos" },
                    { value: '"Top 6%"', label: "tryhackme" },
                  ].map((stat) => (
                    <div key={stat.label} className="space-y-1">
                      <div className="text-lg font-bold text-primary">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground opacity-70">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-xs text-muted-foreground mt-3">{"}"}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;