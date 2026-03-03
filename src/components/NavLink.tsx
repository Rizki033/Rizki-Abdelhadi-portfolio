import { motion } from "framer-motion";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const NavLink = ({ href, children, onClick, className = "" }: NavLinkProps) => {
    return (
        <a
            href={href}
            onClick={onClick}
            className={`font-mono text-sm text-muted-foreground hover:text-primary transition-colors relative group ${className}`}
        >
            {children}
            <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"
                layoutId="nav-underline"
            />
        </a>
    );
};

export default NavLink;
