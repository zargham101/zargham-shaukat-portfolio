import React from 'react';
import { ExternalLink, ArrowRight, Github } from 'lucide-react';
import { projects } from '../../data/portfolioData';

const Projects = () => {
    return (
        <section id="projects" className="py-40 px-4 sm:px-6 lg:px-8 bg-dark relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neon-green/5 blur-[150px] -z-10 rounded-full" />

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-5xl sm:text-7xl font-black tracking-tighter mb-6 sm:mb-8 italic">Selected <br /><span className="text-gradient not-italic">Works</span></h2>
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-1 bg-neon-green rounded-full focus:shadow-[0_0_15px_#39FF14]" />
                            <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.3em] font-black">
                                // Handpicked showcase of impact-driven engineering
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`group relative glass-card rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-white/5 hover:border-neon-green/40 transition-all duration-700 animate-reveal`}
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            {/* Project Header Area */}
                            <div className="h-72 bg-dark-secondary relative overflow-hidden group/header">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                                    />
                                ) : (
                                    <>
                                        <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 to-transparent group-hover:opacity-100 transition-opacity duration-700" />
                                        <div className="absolute inset-0 flex items-center justify-center translate-y-10 group-hover:translate-y-0 transition-transform duration-700 opacity-20 group-hover:opacity-100">
                                            <h4 className="text-[120px] font-black text-white/5 tracking-tighter uppercase whitespace-nowrap">
                                                {project.name.split(' ')[0]}
                                            </h4>
                                        </div>
                                    </>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-80" />
                                <div className="absolute top-8 right-8 flex gap-4 z-20">
                                    {project.githubUrl && project.githubUrl !== '#' && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-dark/80 backdrop-blur-md rounded-full border border-white/10 hover:border-neon-green transition-colors cursor-pointer group/icon"
                                        >
                                            <Github size={20} className="text-white group-hover/icon:text-neon-green" />
                                        </a>
                                    )}
                                    {project.liveUrl && project.liveUrl !== '#' && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-dark/80 backdrop-blur-md rounded-full border border-white/10 hover:border-neon-green transition-colors cursor-pointer group/icon"
                                        >
                                            <ExternalLink size={20} className="text-white group-hover/icon:text-neon-green" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="p-8 sm:p-12">
                                <div className="flex justify-between items-start mb-6 sm:mb-8">
                                    <h3 className="text-2xl sm:text-4xl font-black text-white group-hover:text-neon-green transition-all duration-500 leading-tight">
                                        {project.name}
                                    </h3>
                                </div>

                                <p className="text-gray-400 mb-8 sm:mb-10 leading-relaxed text-base sm:text-lg font-medium">
                                    {project.description}
                                </p>

                                <div className="space-y-4 mb-10 sm:mb-12">
                                    <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold mb-4">Key Highlights</p>
                                    {project.highlights.map((highlight, i) => (
                                        <div key={i} className="flex items-center gap-4 text-xs sm:text-sm text-gray-300 font-medium group/item">
                                            <div className="w-1.5 h-1.5 bg-neon-green rounded-full shadow-[0_0_8px_#39FF14] group-hover/item:scale-150 transition-transform" />
                                            {highlight}
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-2 sm:px-6 sm:py-2.5 bg-dark rounded-xl sm:rounded-2xl text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-neon-green border border-neon-green/20 hover:bg-neon-green/10 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative bottom bar */}
                            <div className="absolute bottom-0 left-0 h-1 bg-neon-green w-0 group-hover:w-full transition-all duration-1000 ease-in-out shadow-[0_0_20px_#39FF14]" />
                        </div>
                    ))}
                </div>

                <div className="mt-16 sm:mt-24 text-center">
                    <button className="px-8 py-5 sm:px-12 sm:py-6 glass-card rounded-2xl border border-white/10 hover:border-neon-green/50 text-white font-black uppercase tracking-[0.3em] text-[10px] sm:text-xs transition-all duration-500 hover:scale-105">
                        Discover More on GitHub
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
