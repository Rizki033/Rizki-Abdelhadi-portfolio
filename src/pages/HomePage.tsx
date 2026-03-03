import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import EducationSection from "../components/EducationSection";
import ProjectsSection from "../components/ProjectsSection";
import ArticlesSection from "../components/ArticlesSection";
import CertsSection from "../components/CertsSection";
import ContactSection from "../components/ContactSection";
import { User, Sparkles, Briefcase, School, FolderGit2, FileText, Medal, Send } from "lucide-react";

const HomePage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary relative overflow-hidden">
            {/* Background Decor */}
            <div className="fixed inset-0 cyber-grid pointer-events-none opacity-40" />

            <div className="fixed inset-0 scanline pointer-events-none" />

            <Navbar />

            {/* Quick section dock */}
            <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3">
                <div className="px-2 py-1 rounded-full border border-primary/30 bg-background/80 backdrop-blur-md text-[10px] font-mono text-primary/80">
                    MAP
                </div>
                <div className="w-px h-6 bg-primary/30" />
                {[
                    { href: "#about", icon: User, label: "About" },
                    { href: "#skills", icon: Sparkles, label: "Skills" },
                    { href: "#experience", icon: Briefcase, label: "Experience" },
                    { href: "#education", icon: School, label: "Education" },
                    { href: "#projects", icon: FolderGit2, label: "Projects" },
                    { href: "#articles", icon: FileText, label: "Articles" },
                    { href: "#certs", icon: Medal, label: "Certifications" },
                    { href: "#contact", icon: Send, label: "Contact" },
                ].map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        className="group relative p-2 rounded-lg border border-border bg-background/80 backdrop-blur-md hover:border-primary/60 hover:bg-primary/5 transition-all"
                        aria-label={item.label}
                    >
                        <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="pointer-events-none absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-0.5 rounded bg-background/95 border border-border text-[10px] font-mono text-muted-foreground opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all whitespace-nowrap">
                            {item.label}
                        </span>
                    </a>
                ))}
            </div>

            <main className="relative z-10">
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ExperienceSection />
                <EducationSection />
                <ProjectsSection />
                <ArticlesSection />
                <CertsSection />
                <ContactSection />
            </main>

            <footer className="py-10 text-center text-muted-foreground text-xs font-mono relative z-10 border-t border-border/50">
                <p>&copy; {new Date().getFullYear()} 0xRizki. All systems nominal.</p>
            </footer>
        </div>
    );
};

export default HomePage;
