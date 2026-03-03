import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Terminal } from "lucide-react";

const ContactSection = () => {
    return (
        <section id="contact" className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-mono text-3xl font-bold mb-2">
                        <span className="text-primary">~/</span>contact
                    </h2>
                    <div className="w-16 h-0.5 bg-primary/50 mb-12" />

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div className="space-y-8">
                            <div className="p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm border-glow">
                                <div className="font-mono text-xs text-primary/60 mb-6 flex items-center gap-2">
                                    <Terminal className="w-4 h-4" />
                                    finger 0xRizki
                                </div>

                                <div className="space-y-6">
                                    {[
                                        { icon: Mail, label: "Email", value: "rizki@example.com" },
                                        { icon: Phone, label: "Phone", value: "+212 6XX-XXXXXX" },
                                        { icon: MapPin, label: "Location", value: "Rabat, Morocco" },
                                    ].map((item) => (
                                        <div key={item.label} className="flex items-center gap-4">
                                            <div className="p-3 rounded-lg bg-primary/5 text-primary">
                                                <item.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="font-mono text-[10px] text-muted-foreground uppercase">{item.label}</div>
                                                <div className="text-sm font-bold tracking-tight">{item.value}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="text-sm text-muted-foreground/60 font-mono italic p-4 border-l-2 border-primary/20">
                                &gt; Secure communication channel established. Send your transmission.
                            </div>
                        </div>

                        <form className="space-y-4">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="NAME"
                                    className="w-full px-4 py-3 rounded-lg bg-card/50 border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/20 outline-none font-mono text-xs transition-all"
                                />
                                <input
                                    type="email"
                                    placeholder="EMAIL"
                                    className="w-full px-4 py-3 rounded-lg bg-card/50 border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/20 outline-none font-mono text-xs transition-all"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="SUBJECT"
                                className="w-full px-4 py-3 rounded-lg bg-card/50 border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/20 outline-none font-mono text-xs transition-all"
                            />
                            <textarea
                                placeholder="MESSAGE"
                                rows={6}
                                className="w-full px-4 py-3 rounded-lg bg-card/50 border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/20 outline-none font-mono text-xs transition-all resize-none"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-mono font-bold text-xs tracking-widest hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group border-glow shadow-lg shadow-primary/20"
                            >
                                INITIALIZE_TRANSMISSION <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
