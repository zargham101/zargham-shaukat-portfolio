import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, ChevronDown, Code, Database, Server, Briefcase, GraduationCap, Award, ExternalLink, ArrowRight } from 'lucide-react';

const Portfolio = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isVisible, setIsVisible] = useState({});
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [typedText, setTypedText] = useState('');
    const fullText = "// Senior Software Engineer";

    useEffect(() => {
        let i = 0;
        let isDeleting = false;
        let timer;

        const typeLoop = () => {
            const typingSpeed = isDeleting ? 40 : 80;

            if (!isDeleting && i <= fullText.length) {
                setTypedText(fullText.substring(0, i));
                i++;
                timer = setTimeout(typeLoop, typingSpeed);
            } else if (isDeleting && i >= 0) {
                setTypedText(fullText.substring(0, i));
                i--;
                timer = setTimeout(typeLoop, typingSpeed);
            } else if (!isDeleting && i > fullText.length) {
                // Wait for 10 seconds while text is fully visible
                timer = setTimeout(() => {
                    isDeleting = true;
                    typeLoop();
                }, 10000);
            } else if (isDeleting && i < 0) {
                isDeleting = false;
                i = 0;
                timer = setTimeout(typeLoop, 500);
            }
        };

        typeLoop();
        return () => clearTimeout(timer);
    }, []);

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
                    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(57, 255, 20, 0.15), transparent 80%)`
                }}
            />

            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-dark/80 backdrop-blur-xl z-50 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex-shrink-0">
                            <h1 className="text-2xl font-bold tracking-tighter cursor-pointer" onClick={() => scrollToSection('home')}>
                                <span className="text-white">Zargham</span>
                                <span className="text-neon-green">.</span>
                            </h1>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-10">
                            {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className={`text-sm font-medium transition-all duration-300 hover:text-neon-green uppercase tracking-widest ${activeSection === item.toLowerCase() ? 'text-neon-green' : 'text-gray-400'
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-gray-400 hover:text-white"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-dark border-b border-white/5">
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className="block w-full text-left py-3 text-lg font-medium text-gray-400 hover:text-neon-green transition-colors"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section - Redesigned like the screenshot */}
            <section id="home" className="min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 animate-slide-up">
                            <div className="space-y-4">
                                <div className="h-6">
                                    <p className="text-neon-green font-mono tracking-widest uppercase text-sm border-r-2 border-neon-green pr-1 w-fit animate-blink-caret">
                                        {typedText}
                                    </p>
                                </div>
                                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-none tracking-tighter">
                                    Hi, I'm <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">
                                        Zargham Shaukat
                                    </span>
                                </h1>
                            </div>

                            <div className="flex flex-col gap-4 text-gray-400">
                                <div className="flex items-center gap-3">
                                    <Award size={18} className="text-neon-green" />
                                    <span className="text-lg">Senior Software Engineer @ BITBASH</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Code size={18} className="text-neon-green" />
                                    <span className="text-lg">MERN Stack & Next.js Expert</span>
                                </div>
                            </div>

                            <div className="max-w-xl glass-card p-6 rounded-2xl border-l-4 border-neon-green">
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    Crafting <span className="text-white font-semibold">high-performance digital solutions</span> that solve real-world problems.
                                    I specialize in building scalable web applications and advanced automation systems that drive business growth.
                                    <span className="italic block mt-2 text-gray-500 text-sm">Because performance and scalability matter.</span>
                                </p>
                            </div>

                            <div className="flex gap-4 items-center">
                                <div className="glass-card px-4 py-2 rounded-lg flex items-center gap-3 border border-white/5">
                                    <Briefcase size={16} className="text-neon-green" />
                                    <span className="text-xs uppercase tracking-tighter text-gray-400 font-medium">Shipped 15+ Projects</span>
                                </div>
                                <div className="glass-card px-4 py-2 rounded-lg flex items-center gap-3 border border-white/5">
                                    <Award size={16} className="text-neon-green" />
                                    <span className="text-xs uppercase tracking-tighter text-gray-400 font-medium">3+ Years Experience</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-6 pt-4">
                                <button
                                    onClick={() => scrollToSection('projects')}
                                    className="px-8 py-4 bg-white text-dark rounded-full font-bold hover:bg-neon-green hover:scale-105 transition-all duration-300 shadow-xl flex items-center gap-2 group"
                                >
                                    See My Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="px-8 py-4 bg-dark-secondary text-white rounded-full font-bold hover:neon-border transition-all duration-300 border border-white/10 flex items-center gap-2"
                                >
                                    Get In Touch <Mail size={20} />
                                </button>
                            </div>
                        </div>

                        <div className="hidden lg:block relative">
                            <div className="relative z-10 p-8">
                                <div className="w-80 h-80 mx-auto rounded-3xl overflow-hidden border-2 border-neon-green/50 shadow-[0_0_50px_rgba(57,255,20,0.2)]">
                                    <img
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                                        alt="Zargham Shaukat"
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>

                                {/* Featured Quote Card - Similar to screenshot */}
                                <div className="absolute -bottom-4 -left-12 max-w-xs glass-card p-6 rounded-2xl border border-neon-green/30 animate-float shadow-2xl">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-neon-green/20 flex items-center justify-center">
                                            <Award size={16} className="text-neon-green" />
                                        </div>
                                        <h4 className="font-bold text-sm">Professional Excellence</h4>
                                    </div>
                                    <p className="text-xs text-gray-400 italic">
                                        "You have some really sleek design concepts and robust architectural patterns."
                                    </p>
                                    <p className="text-[10px] text-neon-green mt-2 font-mono uppercase tracking-widest">
                                        → Quality Guaranteed
                                    </p>
                                </div>
                            </div>

                            {/* Decorative background elements */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-green/5 rounded-full blur-[100px] -z-10" />
                            <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-neon-green/20 rounded-tr-3xl" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-neon-green/20 rounded-bl-3xl" />
                        </div>
                    </div>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
                        <div className="w-1 h-3 bg-neon-green rounded-full" />
                        <ChevronDown size={20} className="text-gray-500" />
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative bg-dark">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col items-center mb-20 text-center">
                        <h2 className="text-5xl font-bold tracking-tighter mb-4">About Me</h2>
                        <div className="w-20 h-1 bg-neon-green" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div className="space-y-8">
                            <div className="glass-card rounded-2xl p-10 neon-border">
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <Code className="text-neon-green" /> Professional Journey
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    With over 3 years of hands-on experience in software development, I've evolved from a Backend Developer
                                    to a <span className="text-white font-semibold">Senior Software Engineer</span>, mastering the full spectrum of web technologies. My journey has been marked
                                    by continuous learning and adapting to cutting-edge technologies.
                                </p>
                            </div>

                            <div className="glass-card rounded-2xl p-10 neon-border">
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <Award className="text-neon-green" /> Expertise
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    Specialized in building <span className="text-white font-semibold">scalable, secure, and performant applications</span> using MERN stack, Next.js, and
                                    modern cloud technologies. I excel at transforming complex business requirements into elegant technical solutions.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="glass-card rounded-2xl p-10 neon-border">
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <GraduationCap className="text-neon-green" /> Education
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xl font-bold text-white">Bachelor's in Software Engineering</p>
                                        <p className="text-gray-400">COMSATS University Islamabad</p>
                                        <p className="text-gray-500 font-mono">2020 - 2024</p>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-card rounded-2xl p-10 neon-border">
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <Briefcase className="text-neon-green" /> What I Offer
                                </h3>
                                <ul className="grid grid-cols-1 gap-4">
                                    {[
                                        "Architecting Scalable Systems",
                                        "End-to-End Web Solutions",
                                        "Automation & Scripting",
                                        "Cloud Infrastructure (AWS)",
                                        "Frontend Excellence (Next.js)",
                                        "API Performance Tuning"
                                    ].map((service, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-400">
                                            <div className="w-1.5 h-1.5 bg-neon-green rounded-full shadow-[0_0_8px_rgba(57,255,20,0.8)]" />
                                            {service}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-32 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col items-center mb-20 text-center">
                        <h2 className="text-5xl font-bold tracking-tighter mb-4">Experience</h2>
                        <div className="w-20 h-1 bg-neon-green" />
                    </div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="group relative glass-card rounded-3xl p-8 hover:bg-white/[0.02] transition-all duration-500 border border-white/5"
                            >
                                <div className="absolute top-0 left-0 w-1 h-full bg-neon-green opacity-0 group-hover:opacity-100 transition-opacity rounded-l-3xl" />

                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                                    <div className="space-y-1">
                                        <p className="text-neon-green font-mono text-sm tracking-widest uppercase">{exp.period}</p>
                                        <h3 className="text-3xl font-bold text-white group-hover:text-neon-green transition-colors">{exp.role}</h3>
                                        <p className="text-xl text-gray-400 font-medium">{exp.company}</p>
                                    </div>
                                    <div className="mt-4 md:mt-0 px-4 py-2 glass-card rounded-xl border-white/5 text-xs font-mono text-gray-400 uppercase tracking-widest">
                                        Remote / On-site
                                    </div>
                                </div>

                                <p className="text-gray-400 mb-8 leading-relaxed text-lg max-w-4xl">{exp.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-1.5 bg-white/5 rounded-full text-xs font-mono text-gray-400 hover:text-white transition-colors border border-white/5"
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

            {/* Skills Section - Enhanced and Descriptive */}
            <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8 bg-dark">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col items-center mb-20 text-center">
                        <h2 className="text-5xl font-bold tracking-tighter mb-4">Technical Skills</h2>
                        <div className="w-20 h-1 bg-neon-green" />
                        <p className="mt-6 text-gray-500 font-mono text-sm">// Mastering the art of full-stack engineering</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.entries(skills).map(([category, items], index) => (
                            <div
                                key={category}
                                className="glass-card rounded-3xl p-8 neon-border group flex flex-col h-full"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-neon-green/20 group-hover:text-neon-green transition-all border border-white/5">
                                        {category === "Frontend" && <Code size={24} />}
                                        {category === "Backend" && <Server size={24} />}
                                        {category === "Database" && <Database size={24} />}
                                        {category === "Cloud & Tools" && <Briefcase size={24} />}
                                        {category === "Other" && <Award size={24} />}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white tracking-tight">{category}</h3>
                                </div>

                                <div className="space-y-4 flex-grow">
                                    {items.map((skill, i) => (
                                        <div key={i} className="group/item">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-gray-400 group-hover/item:text-neon-green transition-colors font-medium">{skill}</span>
                                            </div>
                                            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-neon-green transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(57,255,20,0.5)]"
                                                    style={{ width: `${85 + Math.random() * 10}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/5">
                                    <p className="text-xs text-gray-500 italic">
                                        {category === "Frontend" && "Architecting interfaces with focus on UX/UI and performance."}
                                        {category === "Backend" && "Building robust APIs and efficient server-side logic."}
                                        {category === "Database" && "Designing optimized data schemas for high scalability."}
                                        {category === "Cloud & Tools" && "DevOps integration and cloud infrastructure management."}
                                        {category === "Other" && "Comprehensive skills for end-to-end development."}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col items-center mb-20 text-center">
                        <h2 className="text-5xl font-bold tracking-tighter mb-4">Featured Projects</h2>
                        <div className="w-20 h-1 bg-neon-green" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="group relative glass-card rounded-[2rem] overflow-hidden border border-white/5 hover:border-neon-green/30 transition-all duration-500"
                            >
                                <div className="p-10">
                                    <div className="flex justify-between items-start mb-6">
                                        <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent group-hover:from-neon-green group-hover:to-white transition-all duration-500">
                                            {project.name}
                                        </h3>
                                        <ExternalLink size={24} className="text-gray-600 group-hover:text-neon-green transition-colors" />
                                    </div>

                                    <p className="text-gray-400 mb-8 leading-relaxed text-lg">{project.description}</p>

                                    <div className="space-y-3 mb-10">
                                        {project.highlights.map((highlight, i) => (
                                            <div key={i} className="flex items-center gap-3 text-sm text-gray-500">
                                                <ArrowRight size={14} className="text-neon-green" />
                                                {highlight}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-4 py-1.5 bg-dark rounded-xl text-xs font-mono text-neon-green border border-neon-green/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 bg-dark">
                <div className="max-w-4xl mx-auto">
                    <div className="glass-card rounded-[3rem] p-12 sm:p-20 text-center border border-neon-green/10 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-neon-green/5 blur-[100px] -z-10 group-hover:bg-neon-green/10 transition-all" />

                        <h2 className="text-5xl sm:text-6xl font-bold mb-8 tracking-tighter">
                            Let's Build <br />
                            <span className="text-neon-green">Something Better</span>
                        </h2>

                        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Currently open to high-impact projects and engineering opportunities.
                            Let's connect and discuss how I can help you scale.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 mb-12">
                            <a
                                href="mailto:khanzargham434@gmail.com"
                                className="glass-card rounded-2xl p-8 border border-white/5 hover:neon-border transition-all duration-500 group/link"
                            >
                                <Mail size={40} className="mx-auto mb-4 text-gray-600 group-hover/link:text-neon-green transition-colors" />
                                <h3 className="text-lg font-bold mb-1">Email</h3>
                                <p className="text-gray-500 text-sm">khanzargham434@gmail.com</p>
                            </a>

                            <a
                                href="tel:+923071963998"
                                className="glass-card rounded-2xl p-8 border border-white/5 hover:neon-border transition-all duration-500 group/link"
                            >
                                <Phone size={40} className="mx-auto mb-4 text-gray-600 group-hover/link:text-neon-green transition-colors" />
                                <h3 className="text-lg font-bold mb-1">Phone</h3>
                                <p className="text-gray-500 text-sm">+92 307 1963998</p>
                            </a>
                        </div>

                        <div className="flex justify-center gap-8">
                            <a href="https://github.com/zargham101" className="text-gray-600 hover:text-neon-green transition-colors scale-125">
                                <Github size={32} />
                            </a>
                            <a href="https://www.linkedin.com/in/zargham-shaukat-953708182/" className="text-gray-600 hover:text-neon-green transition-colors scale-125">
                                <Linkedin size={32} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-4 border-t border-white/5 bg-dark text-center">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs font-mono text-gray-600 uppercase tracking-widest">
                        © 2026 Zargham Shaukat. Developed with Precision.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;