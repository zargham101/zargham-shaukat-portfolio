import { Github, Linkedin, Mail, Phone, Code, Database, Server, Briefcase, GraduationCap, Award, Home, User } from 'lucide-react';

export const experiences = [
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

export const projects = [
    {
        name: "Petla - Veterinary Platform",
        description: "Built 4 interconnected Next.js applications for comprehensive veterinary service management, featuring appointment scheduling, patient records, and real-time consultations.",
        tech: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
        highlights: ["Multi-app architecture", "Real-time features", "Scalable design"],
        liveUrl: "https://petla.app/",
        githubUrl: "https://github.com/zargham101",
        image: "/petla.png"
    },
    {
        name: "Trusty Living System",
        description: "Property review platform for London localities with integrated Google Maps API, AWS S3, EC2, and IAM for secure, scalable operations.",
        tech: ["Next.js", "Google Maps API", "AWS", "PostgreSQL"],
        highlights: ["Property ratings", "Agent reviews", "Map integration"],
        liveUrl: "https://trustyliving.softaims.com/",
        githubUrl: "https://github.com/zargham101",
        image: "/trustyliving.png"
    },
    {
        name: "Breakness",
        description: "Gamification app promoting learning through blogs, articles, and courses with reward systems and achievement tracking.",
        tech: ["MongoDB", "Express", "React", "Node.js"],
        highlights: ["Gamification", "User engagement", "Achievement system"],
        liveUrl: "https://play.google.com/store/apps/details?id=com.breakness.breaknessbeta&pli=1",
        githubUrl: "https://github.com/zargham101",
        image: "/breakness.png"
    },
    {
        name: "Food-E",
        description: "A comprehensive food delivery platform developed as a specialization starter project to master real-time logistics and state management in the MERN stack.",
        tech: ["MERN Stack", "Socket.io", "Vercel"],
        highlights: ["Real-time tracking", "Order management", "Restaurant dashboard"],
        liveUrl: "https://food-e-client.vercel.app/",
        githubUrl: "https://github.com/zargham101",
        image: "/food-e.png"
    },
    {
        name: "Gigcore",
        description: "Online marketing platform connecting businesses with social media content creators for seamless collaboration.",
        tech: ["MERN Stack", "Selenium", "REST APIs"],
        highlights: ["Multi-user platform", "Content management", "Marketing tools"],
        githubUrl: "https://github.com/zargham101"
    }
];

export const skills = {
    "Frontend": { items: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"], icon: Code, description: "Architecting interfaces with focus on UX/UI and performance." },
    "Backend": { items: ["Node.js", "Express.js", "Ruby on Rails", "REST APIs", "GraphQL"], icon: Server, description: "Building robust APIs and efficient server-side logic." },
    "Database": { items: ["MongoDB", "PostgreSQL", "MySQL"], icon: Database, description: "Designing optimized data schemas for high scalability." },
    "Cloud & Tools": { items: ["AWS (S3, EC2, IAM)", "Git/GitHub", "Docker", "Vercel", "Postman"], icon: Briefcase, description: "DevOps integration and cloud infrastructure management." },
    "Other": { items: ["Authentication Systems", "Middleware", "CORS", "Socket.io", "Automation"], icon: Award, description: "Comprehensive skills for end-to-end development." }
};

export const navItems = [
    { name: 'Home', icon: Home },
    { name: 'About', icon: User },
    { name: 'Experience', icon: Briefcase },
    { name: 'Skills', icon: Code },
    { name: 'Projects', icon: Database },
    { name: 'Contact', icon: Mail }
];
