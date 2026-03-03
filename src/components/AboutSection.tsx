import { motion } from "framer-motion";
import { Terminal, MapPin, GraduationCap, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
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
            <div className="space-y-6">
              <div className="p-5 rounded-lg border border-border bg-card border-glow">
                <div className="font-mono text-xs text-primary/60 mb-3">
                  <Terminal className="w-4 h-4 inline mr-2" />
                  cat about.txt
                </div>
                <p className="text-muted-foreground leading-relaxed text-base">
                  As a cybersecurity engineering student, I am passionate about protecting
                  the digital world and highly motivated to develop innovative solutions
                  against evolving threats. I specialize in ethical hacking, information
                  systems security, and threat analysis, with a strong interest in integrating
                  artificial intelligence into cybersecurity.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed text-base">
                My goal is to design intelligent tools capable of anticipating, detecting,
                and mitigating attacks, while contributing to a safer and more secure digital
                environment. Curious, dedicated, and driven, I am actively seeking opportunities
                to learn, grow, and make a meaningful impact.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: MapPin, label: "Location", value: "Marrakech, Morocco" },
                { icon: GraduationCap, label: "Education", value: "Engineering Degree – IT Security, FST Gueliz Marrakech (2024–2027)" },
                { icon: Users, label: "Community", value: "GDG Marrakech Member & DevFest 2025 Volunteer" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card/30 backdrop-blur-sm border-glow hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default group">
                  <div className="p-2 rounded bg-primary/10 text-primary shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-primary/60 mb-1">{item.label}</div>
                    <div className="text-sm text-foreground/90">{item.value}</div>
                  </div>
                </div>
              ))}


              <div className="p-4 rounded-lg border border-border bg-card/30 backdrop-blur-sm border-glow">
                <div className="font-mono text-xs text-primary/60 mb-4 uppercase tracking-widest">GitHub Stats</div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-xl font-bold text-primary text-glow">875+</div>
                    <div className="text-xs text-muted-foreground uppercase opacity-70">Contributions</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-primary text-glow">25+</div>
                    <div className="text-xs text-muted-foreground uppercase opacity-70">Repos</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-primary text-glow">Top 7%</div>
                    <div className="text-xs text-muted-foreground uppercase opacity-70">TryHackMe</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
