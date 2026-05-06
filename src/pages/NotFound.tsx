import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4 selection:bg-primary/30 selection:text-primary relative overflow-hidden">
      <div className="fixed inset-0 starfield pointer-events-none opacity-90" />
      <div className="fixed inset-0 cyber-grid pointer-events-none opacity-20" />
      <div className="fixed inset-0 scanline pointer-events-none opacity-60" />

      <div className="text-center relative z-10 p-8 border border-border bg-card/75 rounded-xl backdrop-blur-sm shadow-[0_18px_60px_rgba(15,23,42,0.12)]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-6">Error: System Not Found</p>
        <div className="text-sm text-muted-foreground/80 mb-8 max-w-md mx-auto">
          The requested resource <span className="text-red-400">{location.pathname}</span> could not be located on this server.
        </div>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary border border-primary/30 rounded hover:bg-primary/20 hover:border-primary/50 transition-all font-mono text-sm"
        >
          <span>&lt;</span> Return to Home <span>/&gt;</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
