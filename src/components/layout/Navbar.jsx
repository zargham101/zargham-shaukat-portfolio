import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../../data/portfolioData';

const Navbar = ({ isScrolled, activeSection, scrollToSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = (id) => {
        scrollToSection(id);
        setIsMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'md:-translate-y-full md:opacity-0' : 'translate-y-0 opacity-100'
            } bg-dark/80 backdrop-blur-xl border-b border-white/5`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold tracking-tighter cursor-pointer" onClick={() => handleScroll('home')}>
                            <span className="text-white">Zargham</span>
                            <span className="text-neon-green">.</span>
                        </h1>
                    </div>

                    <div className="hidden md:flex space-x-10">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => handleScroll(item.name.toLowerCase())}
                                className={`text-[11px] font-bold transition-all duration-300 hover:text-neon-green uppercase tracking-[0.2em] ${activeSection === item.name.toLowerCase() ? 'text-neon-green' : 'text-gray-400'
                                    }`}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>

                    <button
                        className="md:hidden text-gray-400 hover:text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-dark border-b border-white/5">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => handleScroll(item.name.toLowerCase())}
                                className="block w-full text-left py-3 text-lg font-medium text-gray-400 hover:text-neon-green transition-colors"
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
