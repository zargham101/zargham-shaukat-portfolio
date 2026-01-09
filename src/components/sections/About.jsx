import React from 'react';
import { Code, Award, GraduationCap, Briefcase, Zap, Globe, Cpu } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-40 px-4 sm:px-6 lg:px-8 relative bg-dark overflow-hidden">
            {/* Background Text Overlay */}
            <div className="absolute top-20 left-10 text-[200px] font-black text-white/[0.02] -z-10 tracking-tighter select-none pointer-events-none uppercase">
                Profile
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    {/* Left Column - Large Image/Profile Concept */}
                    <div className="lg:col-span-5 relative group">
                        <div className="absolute -inset-4 bg-neon-green/10 border border-neon-green/20 rounded-[3rem] -rotate-3 group-hover:rotate-0 transition-transform duration-700" />
                        <div className="relative glass-card rounded-[3rem] p-10 border border-white/10 z-10">
                            <h2 className="text-6xl font-black tracking-tighter mb-10 text-gradient leading-tight">Beyond the <br />Syntax</h2>

                            <div className="space-y-10">
                                <p className="text-xl text-gray-400 leading-relaxed font-medium">
                                    I am a <span className="text-white">creative architect</span> in the digital world, driven by the thrill of solving complex problems through elegant code.
                                </p>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-neon-green/30 transition-all group/stat">
                                        <Zap size={24} className="text-neon-green mb-4 group-hover/stat:animate-bounce" />
                                        <h4 className="text-sm font-black text-white uppercase tracking-widest">Performance</h4>
                                        <p className="text-[10px] text-gray-500 mt-1 uppercase font-bold">Optimization Nerd</p>
                                    </div>
                                    <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-neon-green/30 transition-all group/stat">
                                        <Globe size={24} className="text-neon-green mb-4 group-hover/stat:animate-pulse" />
                                        <h4 className="text-sm font-black text-white uppercase tracking-widest">Scalability</h4>
                                        <p className="text-[10px] text-gray-500 mt-1 uppercase font-bold">Systems Architect</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Experience & Details */}
                    <div className="lg:col-span-7 space-y-10">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="glass-card rounded-[2.5rem] p-10 border border-white/5 hover:bg-white/[0.02] transition-all duration-500 group animate-reveal">
                                <div className="w-12 h-12 rounded-2xl bg-neon-green/10 flex items-center justify-center mb-8 border border-neon-green/20">
                                    <Briefcase className="text-neon-green" />
                                </div>
                                <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">Mission</h3>
                                <p className="text-gray-400 leading-relaxed font-medium capitalize">
                                    Transforming complex business logic into seamless, human-centric software that empowers innovation and drives measurable growth.
                                </p>
                            </div>

                            <div className="glass-card rounded-[2.5rem] p-10 border border-white/5 hover:bg-white/[0.02] transition-all duration-500 group animate-reveal" style={{ animationDelay: '100ms' }}>
                                <div className="w-12 h-12 rounded-2xl bg-neon-green/10 flex items-center justify-center mb-8 border border-neon-green/20">
                                    <Cpu className="text-neon-green" />
                                </div>
                                <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">Philosophy</h3>
                                <p className="text-gray-400 leading-relaxed font-medium">
                                    Code is not just about functionality; it's about <span className="text-neon-green">resilience</span>, <span className="text-neon-green">maintainability</span>, and the subtle art of future-proofing.
                                </p>
                            </div>
                        </div>

                        <div className="glass-card rounded-[3rem] p-12 border border-white/5 animate-reveal" style={{ animationDelay: '200ms' }}>
                            <div className="flex items-center gap-6 mb-10">
                                <div className="w-14 h-14 rounded-full bg-dark border border-white/10 flex items-center justify-center">
                                    <GraduationCap className="text-neon-green" size={28} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-white uppercase tracking-tight">Education</h3>
                                    <p className="text-xs font-mono text-gray-500 tracking-widest font-bold mt-1 uppercase">Foundation of Engineering</p>
                                </div>
                            </div>

                            <div className="relative pl-8 border-l-2 border-neon-green/20">
                                <div className="absolute top-0 left-0 w-2 h-2 bg-neon-green rounded-full -translate-x-[5px]" />
                                <h4 className="text-xl font-black text-white mb-2 italic">Bachelor's in Software Engineering</h4>
                                <p className="text-neon-green font-mono text-sm uppercase tracking-widest font-bold mb-4">COMSATS University Islamabad (2020 - 2024)</p>
                                <p className="text-gray-400 font-medium leading-relaxed max-w-xl">
                                    Rigorous academic foundation in algorithms, systems architecture, and modern software engineering paradigms.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
