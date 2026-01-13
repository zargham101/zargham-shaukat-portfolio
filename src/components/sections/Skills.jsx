import React from 'react';
import { skills } from '../../data/portfolioData';

const Skills = () => {
    return (
        <section id="skills" className="py-40 px-4 sm:px-6 lg:px-8 bg-dark-secondary relative">
            <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center mb-32 text-center">
                    <h2 className="text-6xl font-black tracking-tighter mb-8 text-gradient">Technical Mastery</h2>
                    <div className="w-32 h-2 bg-neon-green rounded-full shadow-[0_0_20px_rgba(57,255,20,0.5)]" />
                    <p className="mt-10 text-gray-400 font-mono text-sm max-w-2xl tracking-widest leading-relaxed">
                        // A comprehensive ecosystem of modern technologies focused on performance, scalability, and seamless user experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {Object.entries(skills).map(([category, data], index) => (
                        <div
                            key={category}
                            className={`glass-card rounded-[2.5rem] p-10 border border-white/5 group hover:border-neon-green/30 transition-all duration-700 animate-reveal relative overflow-hidden`}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon-green/5 blur-[60px] group-hover:bg-neon-green/10 transition-all duration-700" />

                            <div className="flex items-center gap-6 mb-12">
                                <div className="w-16 h-16 rounded-2xl bg-dark border border-white/10 flex items-center justify-center group-hover:bg-neon-green group-hover:text-dark transition-all duration-500 shadow-xl">
                                    <data.icon size={28} />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-white tracking-tight">{category}</h3>
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mt-1">Core Expertise</p>
                                </div>
                            </div>

                            <div className="space-y-6 flex-grow relative z-10">
                                {data.items.map((skill, i) => (
                                    <div key={i} className="group/item">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-300 group-hover/item:text-neon-green transition-colors font-semibold text-sm">{skill}</span>
                                            <span className="text-[10px] font-mono text-gray-600 group-hover/item:text-neon-green/50">95%</span>
                                        </div>
                                        <div className="w-full h-[6px] bg-dark rounded-full overflow-hidden border border-white/5">
                                            <div
                                                className="h-full bg-neon-green transition-all duration-1000 ease-out shadow-[0_0_12px_rgba(57,255,20,0.5)] group-hover:brightness-125"
                                                style={{ width: `${85 + (i * 2)}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/5">
                                <p className="text-sm text-gray-500 leading-relaxed italic font-medium">
                                    {data.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
