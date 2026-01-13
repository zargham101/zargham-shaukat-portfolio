import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import { useScroll, useMousePosition, useTypewriter } from './hooks/usePortfolioHooks';

const Portfolio = () => {
    const { isScrolled, activeSection, scrollToSection } = useScroll();
    useMousePosition();
    const typedText = useTypewriter("// Senior Software Engineer");

    return (
        <div className="bg-dark text-white min-h-screen relative overflow-hidden font-sans">
            {/* Animated Grid Background */}
            <div className="fixed inset-0 z-0 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(#39FF14 1px, transparent 1px), linear-gradient(90deg, #39FF14 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            />

            {/* Radial Gradient overlay */}
            <div
                className="fixed inset-0 opacity-40 pointer-events-none z-0"
                style={{
                    background: `radial-gradient(circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(57, 255, 20, 0.15), transparent 80%)`
                }}
            />

            <Navbar
                isScrolled={isScrolled}
                activeSection={activeSection}
                scrollToSection={scrollToSection}
            />

            <Sidebar
                isScrolled={isScrolled}
                activeSection={activeSection}
                scrollToSection={scrollToSection}
            />

            <main>
                <Hero typedText={typedText} scrollToSection={scrollToSection} />
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Contact />
            </main>
        </div>
    );
};

export default Portfolio;