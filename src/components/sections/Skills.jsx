import React, { useState, useEffect } from 'react';
import { skills } from '../../data/portfolioData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Skills = () => {
    const skillCategories = Object.entries(skills);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        let timer;
        if (isAutoPlaying) {
            timer = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % skillCategories.length);
            }, 5000);
        }
        return () => clearInterval(timer);
    }, [isAutoPlaying, skillCategories.length]);

    const handleNext = () => {
        setIsAutoPlaying(false);
        setActiveIndex((prev) => (prev + 1) % skillCategories.length);
    };

    const handlePrev = () => {
        setIsAutoPlaying(false);
        setActiveIndex((prev) => (prev - 1 + skillCategories.length) % skillCategories.length);
    };

    return (
        <section id="skills" className="py-40 px-4 sm:px-6 lg:px-8 bg-dark-secondary relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-neon-green/5 blur-[180px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col items-center mb-24 text-center">
                    <h2 className="text-6xl font-black tracking-tighter mb-8 text-gradient">Technical Mastery</h2>
                    <div className="w-32 h-2 bg-neon-green rounded-full shadow-[0_0_20px_rgba(57,255,20,0.5)]" />
                    <p className="mt-10 text-gray-400 font-mono text-sm max-w-2xl tracking-widest leading-relaxed">
                        // A rotating ecosystem of modern technologies focused on performance and scalability.
                    </p>
                </div>

                <div className="relative h-[600px] flex items-center justify-center">
                    {/* Navigation Buttons */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between z-30 px-2 lg:-mx-20">
                        <button
                            onClick={handlePrev}
                            className="p-5 rounded-full glass-card border border-white/5 hover:border-neon-green/50 hover:text-neon-green transition-all duration-500 group"
                        >
                            <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="p-5 rounded-full glass-card border border-white/5 hover:border-neon-green/50 hover:text-neon-green transition-all duration-500 group"
                        >
                            <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Circular Card Slider Container */}
                    <div className="relative w-full max-w-2xl h-full flex items-center justify-center">
                        {skillCategories.map(([category, data], index) => {
                            const offset = index - activeIndex;
                            const isVisible = Math.abs(offset) <= 1 || (activeIndex === 0 && index === skillCategories.length - 1) || (activeIndex === skillCategories.length - 1 && index === 0);

                            // Circular positioning logic
                            let position = offset;
                            if (offset > 1) position = offset - skillCategories.length;
                            if (offset < -1) position = offset + skillCategories.length;

                            return (
                                <div
                                    key={category}
                                    className={`absolute w-full transition-all duration-1000 ease-out-expo ${index === activeIndex ? 'z-20 scale-110 opacity-100' : 'z-10 scale-75 opacity-20'
                                        }`}
                                    style={{
                                        transform: `translateX(${position * 110}%) rotateY(${position * -45}deg) translateZ(${Math.abs(position) * -100}px)`,
                                        filter: index === activeIndex ? 'none' : 'blur(4px)',
                                        pointerEvents: index === activeIndex ? 'auto' : 'none'
                                    }}
                                >
                                    <div className="glass-card rounded-[3rem] p-12 border border-white/10 relative overflow-hidden group shadow-2xl">
                                        <div className="absolute -top-24 -right-24 w-60 h-60 bg-neon-green/10 blur-[80px] group-hover:bg-neon-green/20 transition-all duration-700" />

                                        <div className="flex items-center gap-8 mb-16">
                                            <div className="w-24 h-24 rounded-3xl bg-dark border border-white/10 flex items-center justify-center text-neon-green shadow-2xl group-hover:scale-110 transition-transform duration-500">
                                                <data.icon size={44} />
                                            </div>
                                            <div>
                                                <h3 className="text-5xl font-black text-white tracking-tighter mb-2">{category}</h3>
                                                <p className="text-xs uppercase tracking-[0.4em] text-neon-green font-bold">Expertise Level 0{index + 1}</p>
                                            </div>
                                        </div>

                                        <div className="space-y-8 mb-16">
                                            {data.items.map((skill, i) => (
                                                <div key={i} className="group/item">
                                                    <div className="flex justify-between items-end mb-3">
                                                        <span className="text-xl text-gray-300 font-bold tracking-tight group-hover/item:text-neon-green transition-colors">{skill}</span>
                                                        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">{90 + (i % 3) * 3}% Proficiency</span>
                                                    </div>
                                                    <div className="w-full h-2 bg-dark rounded-full overflow-hidden border border-white/5 p-[2px]">
                                                        <div
                                                            className="h-full bg-gradient-to-r from-neon-green/50 to-neon-green rounded-full transition-all duration-1500 delay-300 shadow-[0_0_15px_rgba(57,255,20,0.5)]"
                                                            style={{ width: index === activeIndex ? `${85 + (i * 2)}%` : '0%' }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <p className="text-gray-400 italic text-lg leading-relaxed border-t border-white/5 pt-10">
                                            {data.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Circular Indicators */}
                <div className="flex justify-center gap-6 mt-20 relative z-30">
                    {skillCategories.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setActiveIndex(index);
                                setIsAutoPlaying(false);
                            }}
                            className={`group relative h-1 transition-all duration-500 ${index === activeIndex ? 'w-20 bg-neon-green' : 'w-8 bg-white/10'
                                } rounded-full overflow-hidden`}
                        >
                            {index === activeIndex && isAutoPlaying && (
                                <div className="absolute inset-0 bg-white/40 animate-progress" />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

