import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import NavLink from "./NavLink";


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setScrollProgress(progress);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Education", href: "#education" },
        { name: "Projects", href: "#projects" },
        { name: "Articles", href: "#articles" },
        { name: "Certs", href: "#certs" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between relative">
                <a href="#" className="flex items-center gap-2 group">
                    <span className="font-mono text-base font-bold tracking-tighter text-glow group-hover:text-primary transition-colors">
                        <span className="text-primary mr-2">&gt;</span>0xRizki
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">

                    {navLinks.map((link) => (
                        <NavLink key={link.name} href={link.href}>
                            {link.name}
                        </NavLink>
                    ))}
                </div>



                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Scroll progress bar */}
            <motion.div
                className="h-0.5 w-full bg-transparent"
                initial={false}
            >
                <motion.div
                    className="h-full bg-primary/70 origin-left"
                    style={{ width: `${scrollProgress}%` }}
                />
            </motion.div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 top-[72px] bg-background/95 backdrop-blur-xl z-40 md:hidden flex flex-col items-center justify-center gap-8"
                    >
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-bold"
                            >
                                {link.name}
                            </NavLink>
                        ))}

                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
