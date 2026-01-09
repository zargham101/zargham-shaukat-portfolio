import React from 'react';
import { navItems } from '../../data/portfolioData';

const Sidebar = ({ isScrolled, activeSection, scrollToSection }) => {
    return (
        <aside className={`hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-8 py-8 px-4 bg-dark/60 backdrop-blur-3xl rounded-2xl border border-white/10 transition-all duration-300 ease-in-out ${isScrolled ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0 pointer-events-none'
            }`}>
            <div className="mb-4">
                <h1 className="text-2xl font-bold text-neon-green cursor-pointer" onClick={() => scrollToSection('home')}>
                    Z
                </h1>
            </div>

            <div className="flex flex-col gap-6">
                {navItems.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => scrollToSection(item.name.toLowerCase())}
                        className={`relative group flex items-center justify-center transition-all duration-300 hover:text-neon-green ${activeSection === item.name.toLowerCase() ? 'text-neon-green' : 'text-gray-400'
                            }`}
                    >
                        <item.icon size={18} />
                        <span className="absolute left-full ml-4 px-3 py-1.5 bg-dark border border-neon-green/30 text-neon-green text-[10px] rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none uppercase tracking-[0.2em] font-mono shadow-[0_0_15px_rgba(57,255,20,0.1)]">
                            {item.name}
                        </span>
                    </button>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
