import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, ChevronDown, Code, Database, Server, Briefcase, GraduationCap, Award, ExternalLink, ArrowRight } from 'lucide-react';

const Portfolio = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isVisible, setIsVisible] = useState({});
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => {
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

        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    const experiences = [
        {
            company: "BITBASH",
            role: "Senior Software Engineer",
            period: "July 2025 - Present",
            description: "Full stack development with focus on high-end projects, implementing cutting-edge solutions including Next.js veterinary service applications (4 different apps) and advanced website automation systems.",
            technologies: ["Next.js", "React", "Node.js", "TypeScript", "Automation"]
        },
        {
            company: "Softaims",
            role: "Associate Software Engineer",
            period: "November 2024 - June 2025",
            description: "Developed scalable web applications using Ruby on Rails and Next.js, focusing on backend optimization and seamless user experiences.",
            technologies: ["Ruby on Rails", "Next.js", "PostgreSQL", "REST APIs"]
        },
        {
            company: "AXON Technologies",
            role: "MERN Stack Developer",
            period: "August 2024 - November 2024",
            description: "Specialized in backend development with Node.js, Express.js, and MongoDB. Optimized server performance and implemented secure authentication systems.",
            technologies: ["Node.js", "Express.js", "MongoDB", "REST APIs"]
        },
        {
            company: "Symphony Logics",
            role: "Backend Developer",
            period: "February 2022 - November 2022",
            description: "Collaborated on cross-functional team developing tutoring platform with real-time features, grading systems, and course management.",
            technologies: ["Node.js", "MongoDB", "Express.js", "WebSocket"]
        }
    ];

    const projects = [
        {
            name: "Veterinary Services Platform",
            description: "Built 4 interconnected Next.js applications for comprehensive veterinary service management, featuring appointment scheduling, patient records, and real-time consultations.",
            tech: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
            highlights: ["Multi-app architecture", "Real-time features", "Scalable design"]
        },
        {
            name: "Trusty Living System",
            description: "Property review platform for London localities with integrated Google Maps API, AWS S3, EC2, and IAM for secure, scalable operations.",
            tech: ["Next.js", "Google Maps API", "AWS", "PostgreSQL"],
            highlights: ["Property ratings", "Agent reviews", "Map integration"]
        },
        {
            name: "Breakness",
            description: "Gamification app promoting learning through blogs, articles, and courses with reward systems and achievement tracking.",
            tech: ["MongoDB", "Express", "React", "Node.js"],
            highlights: ["Gamification", "User engagement", "Achievement system"]
        },
        {
            name: "Food-E",
            description: "Comprehensive food delivery platform with real-time order tracking, restaurant management, and delivery logistics.",
            tech: ["MERN Stack", "Socket.io", "Vercel"],
            highlights: ["Real-time tracking", "Order management", "Restaurant dashboard"]
        },
        {
            name: "Gigcore",
            description: "Online marketing platform connecting businesses with social media content creators for seamless collaboration.",
            tech: ["MERN Stack", "Selenium", "REST APIs"],
            highlights: ["Multi-user platform", "Content management", "Marketing tools"]
        }
    ];

    const skills = {
        "Frontend": ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
        "Backend": ["Node.js", "Express.js", "Ruby on Rails", "REST APIs", "GraphQL"],
        "Database": ["MongoDB", "PostgreSQL", "MySQL"],
        "Cloud & Tools": ["AWS (S3, EC2, IAM)", "Git/GitHub", "Docker", "Vercel", "Postman"],
        "Other": ["Authentication Systems", "Middleware", "CORS", "Socket.io", "Automation"]
    };

    return (
        <div className="bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white min-h-screen relative overflow-hidden">
            {/* Animated Background Gradient */}
            <div
                className="fixed inset-0 opacity-30 pointer-events-none"
                style={{
                    background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 80%)`
                }}
            />

            {/* Floating Particles */}
            <div className="fixed inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 3}s`
                        }}
                    />
                ))}
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-lg z-50 border-b border-purple-500/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex-shrink-0">
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                                ZS
                            </h1>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8">
                            {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className={`transition-all duration-300 hover:text-purple-400 ${activeSection === item.toLowerCase() ? 'text-purple-400' : 'text-gray-300'
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-slate-900/95 backdrop-blur-lg">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className="block w-full text-left px-3 py-2 text-base font-medium hover:bg-purple-900/50 rounded-md transition-colors"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-7xl mx-auto text-center z-10">
                    <div className="mb-8 animate-fade-in">
                        <div className="inline-block p-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
                            <div className="bg-slate-950 rounded-full px-6 py-2">
                                <span className="text-sm bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent font-semibold">
                                    Available for Freelance & Full-time
                                </span>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
                        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                            Zargham Shaukat
                        </span>
                    </h1>

                    <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        Senior Software Engineer
                    </p>

                    <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                        Full-Stack Developer specializing in MERN Stack, Next.js, and scalable cloud solutions.
                        Building robust, user-centric applications that drive business success.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/50 flex items-center gap-2"
                        >
                            View My Work <ArrowRight size={20} />
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="px-8 py-4 bg-slate-800/50 backdrop-blur-lg rounded-full font-semibold hover:bg-slate-800 transition-all duration-300 border border-purple-500/30 flex items-center gap-2"
                        >
                            Get In Touch <Mail size={20} />
                        </button>
                    </div>

                    <div className="flex justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.8s' }}>
                        <a href="https://github.com/zargham101" target="_blank" rel="noopener noreferrer"
                            className="p-3 bg-slate-800/50 rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/zargham-shaukat-953708182/" target="_blank" rel="noopener noreferrer"
                            className="p-3 bg-slate-800/50 rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:khanzargham434@gmail.com"
                            className="p-3 bg-slate-800/50 rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110">
                            <Mail size={24} />
                        </a>
                        <a href="tel:+923071963998"
                            className="p-3 bg-slate-800/50 rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110">
                            <Phone size={24} />
                        </a>
                    </div>

                    <div className="mt-12 animate-bounce">
                        <ChevronDown size={32} className="mx-auto text-purple-400" />
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                        About Me
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-purple-900/30 to-slate-900/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                    <Code className="text-purple-400" /> Professional Journey
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    With over 3 years of hands-on experience in software development, I've evolved from a Backend Developer
                                    to a Senior Software Engineer, mastering the full spectrum of web technologies. My journey has been marked
                                    by continuous learning and adapting to cutting-edge technologies.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-purple-900/30 to-slate-900/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                    <Award className="text-purple-400" /> Expertise
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Specialized in building scalable, secure, and performant applications using MERN stack, Next.js, and
                                    modern cloud technologies. I excel at transforming complex business requirements into elegant technical solutions.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-purple-900/30 to-slate-900/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                    <GraduationCap className="text-purple-400" /> Education
                                </h3>
                                <p className="text-xl font-semibold text-purple-300">Bachelor's in Software Engineering</p>
                                <p className="text-gray-400">COMSATS University Islamabad, Lahore Campus</p>
                                <p className="text-gray-500">2020 - 2024</p>
                            </div>

                            <div className="bg-gradient-to-br from-purple-900/30 to-slate-900/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                    <Briefcase className="text-purple-400" /> What I Offer
                                </h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                        Full-Stack Web Development
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                        API Design & Development
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                        Cloud Solutions (AWS)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                        Performance Optimization
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-purple-950/20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                        Professional Experience
                    </h2>

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-purple-900/20 to-slate-900/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
                            >
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-purple-300 mb-1">{exp.role}</h3>
                                        <p className="text-xl text-gray-300">{exp.company}</p>
                                    </div>
                                    <span className="text-gray-400 mt-2 md:mt-0">{exp.period}</span>
                                </div>

                                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300 border border-purple-500/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                        Technical Skills
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.entries(skills).map(([category, items], index) => (
                            <div
                                key={category}
                                className="bg-gradient-to-br from-purple-900/30 to-slate-900/30 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                            >
                                <h3 className="text-xl font-bold mb-4 text-purple-300 flex items-center gap-2">
                                    {category === "Frontend" && <Code size={20} />}
                                    {category === "Backend" && <Server size={20} />}
                                    {category === "Database" && <Database size={20} />}
                                    {category}
                                </h3>
                                <div className="space-y-2">
                                    {items.map((skill, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-2 text-gray-300 hover:text-purple-300 transition-colors"
                                        >
                                            <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></span>
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-purple-950/20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                        Featured Projects
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-purple-900/30 to-slate-900/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-[1.02] group"
                            >
                                <h3 className="text-2xl font-bold mb-3 text-purple-300 group-hover:text-purple-200 transition-colors flex items-center gap-2">
                                    {project.name}
                                    <ExternalLink size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h3>

                                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Highlights:</h4>
                                    <div className="space-y-1">
                                        {project.highlights.map((highlight, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                                                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                                                {highlight}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-sm text-purple-300 border border-purple-500/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                        Let's Work Together
                    </h2>

                    <p className="text-xl text-gray-300 mb-12">
                        I'm currently available for freelance projects and full-time opportunities.
                        Let's create something amazing together!
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <a
                            href="mailto:khanzargham434@gmail.com"
                            className="bg-gradient-to-br from-purple-900/30 to-slate-900/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
                        >
                            <Mail size={32} className="mx-auto mb-4 text-purple-400 group-hover:text-purple-300" />
                            <h3 className="text-xl font-bold mb-2">Email</h3>
                            <p className="text-gray-400">khanzargham434@gmail.com</p>
                        </a>

                        <a
                            href="tel:+923071963998"
                            className="bg-gradient-to-br from-purple-900/30 to-slate-900/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
                        >
                            <Phone size={32} className="mx-auto mb-4 text-purple-400 group-hover:text-purple-300" />
                            <h3 className="text-xl font-bold mb-2">Phone</h3>
                            <p className="text-gray-400">+92 307 1963998</p>
                        </a>
                    </div>

                    <div className="flex justify-center gap-6">
                        <a
                            href="https://github.com/zarghamshaukat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-gradient-to-br from-purple-900/30 to-slate-900/30 backdrop-blur-lg rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110 border border-purple-500/20"
                        >
                            <Github size={28} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/zarghamshaukat-953708182"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-gradient-to-br from-purple-900/30 to-slate-900/30 backdrop-blur-lg rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110 border border-purple-500/20"
                        >
                            <Linkedin size={28} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-4 border-t border-purple-500/20 bg-slate-950/50 backdrop-blur-lg">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-gray-400">
                        © 2026 Zargham Shaukat. Built with React & Tailwind CSS.
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                        Crafted with passion for creating exceptional digital experiences.
                    </p>
                </div>
            </footer>

            <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
        </div>
    );
};

export default Portfolio;