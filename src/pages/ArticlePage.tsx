import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { articles, Article } from "../data/articles";
import Navbar from "../components/Navbar";

const ArticlePage = () => {
    const { slug } = useParams<{ slug: string }>();
    const [article, setArticle] = useState<Article | null>(null);

    useEffect(() => {
        // Scroll to top when loading the article
        window.scrollTo(0, 0);
        const found = articles.find((a) => a.slug === slug);
        if (found) {
            setArticle(found);
        }
    }, [slug]);

    if (!article) {
        return (
            <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
                <h1 className="text-4xl font-mono text-primary mb-4">404 - Not Found</h1>
                <p className="text-muted-foreground mb-8">The requested intelligence file could not be located in the database.</p>
                <Link to="/" className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors border border-border px-6 py-2 rounded-lg bg-card/50">
                    <ArrowLeft size={16} /> Return to Home
                </Link>
            </div>
        );
    }

    const Icon = article.icon;

    return (
        <div className="min-h-screen bg-background text-foreground relative selection:bg-primary/30 selection:text-primary">
            {/* Background Decor */}
            <div className="fixed inset-0 cyber-grid pointer-events-none opacity-40" />

            <Navbar />

            <main className="relative z-10 pt-32 pb-20">
                <article className="container mx-auto px-6 max-w-4xl bg-background/95 backdrop-blur-md rounded-2xl py-12 shadow-2xl border border-border/30">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors mb-10 group"
                        >
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Portfolio
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full"
                    >
                        {article.content ? (
                            article.content
                        ) : (
                            <div className="flex flex-col items-center justify-center py-32 text-muted-foreground border border-dashed border-border rounded-xl bg-card/30 backdrop-blur-sm">
                                <Icon size={64} className="mb-6 opacity-30" />
                                <p className="font-mono text-lg text-foreground">Secure Connection Established.</p>
                                <p className="font-mono text-sm opacity-70 mt-2 flex items-center gap-2">
                                    <span className="block w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    Awaiting data stream packet formulation...
                                </p>
                            </div>
                        )}
                    </motion.div>
                </article>
            </main>

            <footer className="py-10 text-center text-muted-foreground text-xs font-mono relative z-10 border-t border-border/50 bg-background/80 backdrop-blur-sm">
                <p>&copy; {new Date().getFullYear()} 0xRizki. All systems nominal.</p>
            </footer>
        </div>
    );
};

export default ArticlePage;
