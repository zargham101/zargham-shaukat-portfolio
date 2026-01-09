import React from 'react';
import { experiences } from '../../data/portfolioData';

const Experience = () => {
    return (
        <section id="experience" className="py-40 px-4 sm:px-6 lg:px-8 bg-dark relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-green/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col mb-24">
                    <h2 className="text-6xl font-bold tracking-tighter mb-6">Experience</h2>
                    <div className="flex items-center gap-4">
                        <div className="w-20 h-1 bg-neon-green" />
                        <span className="text-gray-500 font-mono text-sm uppercase tracking-widest">// Building high-impact solutions since 2022</span>
                    </div>
                </div>

                <div className="relative space-y-16">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden md:block" />

                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`group relative flex flex-col md:flex-row items-center justify-between w-full animate-reveal`}
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-0 md:left-1/2 top-10 w-4 h-4 rounded-full bg-dark border-4 border-neon-green -translate-x-1/2 z-20 hidden md:block group-hover:scale-150 transition-transform duration-500" />

                            {/* Experience Card */}
                            <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto md:text-right'}`}>
                                <div className={`glass-card rounded-[2rem] p-10 transition-all duration-500 hover:bg-white/[0.05] border border-white/5 relative group/card`}>
                                    <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-24 h-24 bg-neon-green/5 blur-3xl -z-10`} />

                                    <div className={`flex flex-col ${index % 2 === 0 ? '' : 'md:items-end'} mb-6`}>
                                        <span className="text-neon-green font-mono text-sm tracking-[0.2em] mb-3 uppercase">{exp.period}</span>
                                        <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-neon-green transition-colors">{exp.role}</h3>
                                        <p className="text-xl text-gray-400 font-semibold">{exp.company}</p>
                                    </div>

                                    <p className={`text-gray-400 mb-8 leading-relaxed text-lg ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                                        {exp.description}
                                    </p>

                                    <div className={`flex flex-wrap gap-3 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                                        {exp.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-5 py-2 bg-white/5 rounded-xl text-xs font-bold text-gray-500 group-hover:text-neon-green border border-white/5 group-hover:border-neon-green/30 transition-all duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
