import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { articles } from "../data/articles";

const ArticlesSection = () => {
    return (
        <section id="articles" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
                        <span className="text-primary font-mono text-xl">&lt;</span>
                        Articles & Solutions
                        <span className="text-primary font-mono text-xl">/&gt;</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary/50 relative">
                        <div className="absolute top-0 left-0 h-full w-1/3 bg-primary animate-pulse" />
                    </div>
                    <p className="text-muted-foreground mt-4 max-w-2xl font-mono text-sm">
                        Insights, tutorials, and research in the realm of cybersecurity, web development, and secure software engineering.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article, index) => {
                        const Icon = article.icon;
                        return (
                            <motion.div
                                key={article.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative h-full flex"
                            >
                                {/* Emerald Glow Background Effect */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-primary/0 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500" />

                                <Link
                                    to={`/article/${article.slug}`}
                                    className="relative w-full h-full flex flex-col p-6 bg-background/80 backdrop-blur-sm border border-border group-hover:border-primary/50 rounded-lg transition-colors overflow-hidden"
                                >
                                    {/* Top Accents */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 rounded-md bg-primary/10 text-primary border border-primary/20 group-hover:scale-110 transition-transform">
                                            <Icon size={24} />
                                        </div>
                                        <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
                                            {article.category}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                        {article.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm flex-grow mb-6">
                                        {article.description}
                                    </p>

                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                                        <span className="text-xs font-mono text-muted-foreground flex items-center gap-2">
                                            <span className="block w-2 h-2 rounded-full bg-primary animate-pulse" />
                                            {article.date}
                                        </span>
                                        <span
                                            className="inline-flex items-center gap-2 text-sm font-mono text-foreground group-hover:text-primary transition-colors group-hover:translate-x-1"
                                        >
                                            Read <ArrowRight size={16} />
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ArticlesSection;
