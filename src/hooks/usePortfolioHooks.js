import { useState, useEffect } from 'react';

export const useScroll = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);

            const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
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
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return mousePosition;
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
