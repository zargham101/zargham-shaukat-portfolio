import { useState, useEffect, useRef } from 'react';

export const useScroll = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            // Use requestAnimationFrame to throttle scroll updates
            window.requestAnimationFrame(() => {
                setIsScrolled(window.scrollY > 100);
            });
        };

        // Use IntersectionObserver for active section tracking - much more efficient than getBoundingClientRect
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px', // Trigger when section is in middle of viewport
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];

        sections.forEach((sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) observer.observe(element);
        });

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    const scrollToSection = (sectionId, callback) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            if (callback) callback();
        }
    };

    return { isScrolled, activeSection, scrollToSection };
};

export const useMousePosition = () => {
    // We'll still return the position but we'll also update CSS variables
    // to avoid React re-renders for visual effects
    useEffect(() => {
        const root = document.documentElement;

        const handleMouseMove = (e) => {
            // Using requestAnimationFrame for smooth performance
            window.requestAnimationFrame(() => {
                root.style.setProperty('--mouse-x', `${e.clientX}px`);
                root.style.setProperty('--mouse-y', `${e.clientY}px`);
            });
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return null; // No longer need to return state to trigger re-renders
};

export const useTypewriter = (text, speed = 80, delay = 10000) => {
    const [typedText, setTypedText] = useState('');

    useEffect(() => {
        let i = 0;
        let isDeleting = false;
        let timer;

        const typeLoop = () => {
            const typingSpeed = isDeleting ? speed / 2 : speed;

            if (!isDeleting && i <= text.length) {
                setTypedText(text.substring(0, i));
                i++;
                timer = setTimeout(typeLoop, typingSpeed);
            } else if (isDeleting && i >= 0) {
                setTypedText(text.substring(0, i));
                i--;
                timer = setTimeout(typeLoop, typingSpeed);
            } else if (!isDeleting && i > text.length) {
                timer = setTimeout(() => {
                    isDeleting = true;
                    typeLoop();
                }, delay);
            } else if (isDeleting && i < 0) {
                isDeleting = false;
                i = 0;
                timer = setTimeout(typeLoop, 500);
            }
        };

        typeLoop();
        return () => clearTimeout(timer);
    }, [text, speed, delay]);

    return typedText;
};

