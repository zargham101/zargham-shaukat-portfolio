import React from 'react';
import { Award, Code, Briefcase, Mail, ArrowRight } from 'lucide-react';

const Hero = ({ typedText, scrollToSection }) => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-28 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-10 animate-reveal">
                        <div className="space-y-4">
                            <div className="h-6">
                                <p className="text-neon-green font-mono tracking-[0.3em] uppercase text-xs border-r-2 border-neon-green pr-2 w-fit animate-blink-caret">
                                    {typedText}
                                </p>
                            </div>
                            <h1 className="text-7xl sm:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter">
                                <span className="block text-white">Zargham</span>
                                <span className="block text-gradient">Shaukat</span>
                            </h1>
                        </div>

                        <div className="flex flex-col gap-5 text-gray-400">
                            <div className="flex items-center gap-4 group cursor-default">
                                <div className="p-2 rounded-lg bg-neon-green/10 group-hover:bg-neon-green/20 transition-colors">
                                    <Award size={20} className="text-neon-green" />
                                </div>
                                <span className="text-lg font-medium group-hover:text-white transition-colors">Senior Software Engineer @ BITBASH</span>
                            </div>
                            <div className="flex items-center gap-4 group cursor-default">
                                <div className="p-2 rounded-lg bg-neon-green/10 group-hover:bg-neon-green/20 transition-colors">
                                    <Code size={20} className="text-neon-green" />
                                </div>
                                <span className="text-lg font-medium group-hover:text-white transition-colors">Architeching Next-Gen Web Solutions</span>
                            </div>
                        </div>

                        <div className="max-w-xl relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-neon-green/20 to-transparent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                            <div className="relative glass-card p-8 rounded-2xl border-l-[6px] border-neon-green">
                                <p className="text-gray-300 leading-relaxed text-xl">
                                    I build <span className="text-white font-bold italic">high-performance digital experiences</span> that bridge the gap between complex engineering and elegant design.
                                    Specializing in scalable MERN stack and Next.js ecosystems.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-center">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-white">15+</span>
                                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Projects Shipped</span>
                            </div>
                            <div className="w-[1px] h-10 bg-white/10" />
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-white">3+</span>
                                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Years Exp.</span>
                            </div>
                            <div className="w-[1px] h-10 bg-white/10" />
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-white">100%</span>
                                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Code Quality</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-6 pt-6">
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="px-10 py-5 bg-white text-dark rounded-xl font-black hover:bg-neon-green hover:scale-105 transition-all duration-300 shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:shadow-[0_20px_40px_rgba(57,255,20,0.2)] flex items-center gap-3 group"
                            >
                                VIEW MY WORK <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="px-10 py-5 bg-dark-secondary text-white rounded-xl font-black border border-white/10 hover:border-neon-green/50 hover:bg-neon-green/5 transition-all duration-500 flex items-center gap-3 uppercase tracking-wider"
                            >
                                Let's Talk <Mail size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="hidden lg:block relative">
                        <div className="relative z-10 p-12 animate-float-slow">
                            <div className="w-[450px] h-[450px] mx-auto relative">
                                <div className="absolute inset-0 bg-neon-green/20 rounded-[4rem] blur-[80px] animate-pulse" />
                                <div className="relative h-full w-full rounded-[4rem] overflow-hidden border-2 border-white/10 group">
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-700 z-10" />
                                    <img
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                                        alt="Zargham Shaukat"
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                                    />
                                </div>

                                {/* Floating Tech Tags */}
                                <div className="absolute -top-6 -right-6 glass-card p-4 rounded-2xl border border-neon-green/30 animate-float shadow-2xl z-20">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-neon-green/20 flex items-center justify-center">
                                            <Code size={20} className="text-neon-green" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-white uppercase tracking-tighter">Clean Code</p>
                                            <p className="text-[10px] text-gray-400">Architechture First</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -bottom-10 -left-10 glass-card p-6 rounded-3xl border border-white/10 shadow-2xl z-20 max-w-[200px]">
                                    <div className="flex -space-x-3 mb-3">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-8 h-8 rounded-full border-2 border-dark bg-gray-800 flex items-center justify-center text-[10px] font-bold">
                                                {String.fromCharCode(64 + i)}
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-xs text-gray-300 font-medium">Trusted by founders worldwide to deliver excellence.</p>
                                </div>
                            </div>
                        </div>

                        {/* Background Shapes */}
                        <div className="absolute top-0 right-0 w-64 h-64 border-t-4 border-r-4 border-neon-green/10 rounded-tr-[5rem]" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 border-b-4 border-l-4 border-neon-green/10 rounded-bl-[5rem]" />
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-500">Scroll to Explore</span>
                    <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                        <div className="w-1 h-2 bg-neon-green rounded-full animate-bounce" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
