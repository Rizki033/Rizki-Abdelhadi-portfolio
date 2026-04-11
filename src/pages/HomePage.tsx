import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import EducationSection from "../components/EducationSection";
import ProjectsSection from "../components/ProjectsSection";
import CertsSection from "../components/CertsSection";
import ContactSection from "../components/ContactSection";
import CVSection from "../components/CVSection";

const HomePage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary relative overflow-hidden">
            {/* Background Decor */}
            <div className="fixed inset-0 starfield pointer-events-none opacity-90" />
            <div className="fixed inset-0 cyber-grid pointer-events-none opacity-20" />

            <div className="fixed inset-0 scanline pointer-events-none opacity-60" />

            <Navbar />

            <main className="relative z-10">
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ExperienceSection />
                <EducationSection />
                <ProjectsSection />
                <CVSection />
                <CertsSection />
                <ContactSection />
            </main>

            {/* <footer className="py-10 text-center text-muted-foreground text-xs font-mono relative z-10 border-t border-border/50">
                <p>&copy; {new Date().getFullYear()} 0xRizki. All systems nomina    l.</p>
            </footer> */}
        </div>
    );
};

export default HomePage;
