import React from 'react';
import { Mail, Phone, Github, Linkedin, ArrowUpRight, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-40 px-4 sm:px-6 lg:px-8 bg-dark relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="relative glass-card rounded-[4rem] p-12 sm:p-24 border border-white/5 overflow-hidden group">
                    {/* Animated background highlights */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-green/10 blur-[150px] -z-10 group-hover:bg-neon-green/20 transition-all duration-1000" />
                    <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-white/[0.02] blur-[100px] -z-10" />

                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-neon-green font-mono text-sm uppercase tracking-[0.5em] font-black mb-8 block">// Availability: Open for New Projects</span>
                            <h2 className="text-7xl sm:text-8xl font-black mb-10 tracking-tighter italic leading-none">
                                Let's Build <br />
                                <span className="text-gradient">Something <br />Unforgettable.</span>
                            </h2>
                            <p className="text-2xl text-gray-400 mb-12 max-w-lg leading-relaxed font-medium">
                                currently architecting digital futures. have a vision? let's turn it into high-performance reality.
                            </p>

                            <div className="flex flex-col gap-8">
                                <a
                                    href="mailto:khanzargham434@gmail.com"
                                    className="flex items-center gap-6 group/item w-fit"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover/item:border-neon-green transition-all shadow-xl">
                                        <Mail size={24} className="text-gray-500 group-hover/item:text-neon-green" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-600 uppercase tracking-widest font-black mb-1">Send an Email</p>
                                        <p className="text-xl text-white font-bold group-hover/item:text-neon-green transition-colors">khanzargham434@gmail.com</p>
                                    </div>
                                    <ArrowUpRight size={20} className="text-gray-700 opacity-0 group-hover/item:opacity-100 transition-all" />
                                </a>

                                <a
                                    href="tel:+923071963998"
                                    className="flex items-center gap-6 group/item w-fit"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover/item:border-neon-green transition-all shadow-xl">
                                        <Phone size={24} className="text-gray-500 group-hover/item:text-neon-green" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-600 uppercase tracking-widest font-black mb-1">Call for Action</p>
                                        <p className="text-xl text-white font-bold group-hover/item:text-neon-green transition-colors">+92 307 1963998</p>
                                    </div>
                                    <ArrowUpRight size={20} className="text-gray-700 opacity-0 group-hover/item:opacity-100 transition-all" />
                                </a>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="glass-card rounded-[3rem] p-10 border border-white/10 relative z-10 transition-transform duration-700 group-hover:scale-[1.02]">
                                <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-widest italic">Direct Message</h3>
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] text-gray-600 uppercase tracking-[0.2em] font-black ml-4">Full Name</label>
                                        <input type="text" className="w-full bg-dark/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-neon-green/50 transition-all" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] text-gray-600 uppercase tracking-[0.2em] font-black ml-4">Email Address</label>
                                        <input type="email" className="w-full bg-dark/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-neon-green/50 transition-all" placeholder="john@example.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] text-gray-600 uppercase tracking-[0.2em] font-black ml-4">Message</label>
                                        <textarea className="w-full bg-dark/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-neon-green/50 transition-all h-32 resize-none" placeholder="Tell me about your project..."></textarea>
                                    </div>
                                    <button className="w-full bg-neon-green text-dark font-black py-5 rounded-2xl hover:scale-[1.05] transition-all flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(57,255,20,0.3)] group/btn">
                                        LAUNCH MESSAGE <Send size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-center gap-12 mt-12 relative z-10">
                                <a href="https://github.com/zargham101" className="p-4 rounded-2xl bg-white/[0.03] text-gray-500 hover:text-neon-green hover:border-neon-green/30 border border-transparent transition-all">
                                    <Github size={28} />
                                </a>
                                <a href="https://www.linkedin.com/in/zargham-shaukat-953708182/" className="p-4 rounded-2xl bg-white/[0.03] text-gray-500 hover:text-neon-green hover:border-neon-green/30 border border-transparent transition-all">
                                    <Linkedin size={28} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="mt-40 text-center pb-20">
                <div className="max-w-6xl mx-auto px-4 border-t border-white/5 pt-20">
                    <p className="text-[10px] font-mono text-gray-700 uppercase tracking-[0.5em] font-black">
                        © 2026 Zargham Shaukat. Powered by Precision & Innovation.
                    </p>
                </div>
            </footer>
        </section>
    );
};

export default Contact;
