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
        name: "Lead Generation — Unified Dashboard",
        description: "A central operations dashboard for monitoring the lead-generation tools, collecting their records in one workspace, and routing verified leads into outreach campaigns.",
        tech: ["Lead operations", "Centralized workspace", "Outreach integrations"],
        highlights: ["Monitor multiple lead sources", "Central lead collection", "Campaign handoff"],
        liveUrl: "http://157.173.200.90/dashboard",
        image: "/lead-generation-dashboard.png"
    },
    {
        name: "Instagram Lead Generator",
        description: "A hashtag-driven Instagram prospecting tool for discovering relevant businesses, creators, and influencers and collecting their available profile and contact details.",
        tech: ["Instagram", "Hashtag discovery", "Lead extraction"],
        highlights: ["Search by relevant hashtags", "Discover creators and businesses", "Collect available lead details"],
        liveUrl: "http://207.244.246.122/login",
        image: "/instagram-lead-generator.png"
    },
    {
        name: "Google Maps Lead Generator",
        description: "A regional business prospecting tool that searches Google Maps by business category and location, then gathers available business contact information.",
        tech: ["Google Maps", "Business discovery", "Regional search"],
        highlights: ["Search by business category", "Target regions globally", "Collect available business contacts"],
        liveUrl: "http://147.93.135.100/login",
        image: "/google-maps-lead-generator.png"
    },
    {
        name: "LeadVerify — Lead Verification SaaS",
        description: "A subscription-based, multi-tenant platform that connects selected lead sources to a staged email-verification workflow and campaign-ready exports.",
        tech: ["Multi-tenant SaaS", "Email verification", "Campaign exports"],
        highlights: ["Workspace-scoped lead data", "Plan-based source access", "Review and export verified records"],
        liveUrl: "http://157.173.200.90:8082/",
        image: "/leadverify.png"
    },
    {
        name: "Fate.bet — Betting & Casino Platform",
        description: "A Greece-based client project delivering browser-based casino games and sports betting, with a TypeScript and Next.js frontend, blockchain-integrated payment flows, and multi-user wallet and activity features.",
        tech: ["Next.js", "TypeScript", "Blockchain payments", "Multi-user wallets"],
        highlights: ["Web-based casino and sports experiences", "Blockchain-integrated payment flows", "Wallet and activity features"],
        liveUrl: "https://fate.bet/",
        image: "/fate-bet.png"
    },
    {
        name: "Petla - Veterinary Platform",
        description: "A Germany-based veterinary platform connecting pet owners with their chosen practices for appointments and online consultations, with three integrated applications for different user roles.",
        tech: ["Next.js", "TypeScript", "Calendly", "Google Meet"],
        highlights: ["Three integrated applications", "Appointment scheduling", "Online consultations"],
        liveUrl: "https://petla.app/en/tierarzt/notdienst",
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
    // {
    //     name: "Breakness",
    //     description: "Gamification app promoting learning through blogs, articles, and courses with reward systems and achievement tracking.",
    //     tech: ["MongoDB", "Express", "React", "Node.js"],
    //     highlights: ["Gamification", "User engagement", "Achievement system"],
    //     liveUrl: "https://play.google.com/store/apps/details?id=com.breakness.breaknessbeta&pli=1",
    //     githubUrl: "https://github.com/zargham101",
    //     image: "/breakness.png"
    // },
    {
        name: "Dukhān — Oud Fragrance Store",
        description: "An e-commerce storefront for oud and fragrance products, featuring curated collections, product details, and online shopping.",
        tech: ["E-commerce", "Fragrance retail", "Product catalog"],
        highlights: ["Browse oud fragrances and curated sets", "Explore product collections", "Online storefront"],
        liveUrl: "https://dukaan-coral-eight.vercel.app/",
        image: "/dukaan.png"
    },
    {
        name: "BAAB — Real Estate Property Finder",
        description: "A property discovery application for browsing homes to buy or rent, exploring Dubai communities, and reviewing property and listing details.",
        tech: ["Real estate", "Property search", "Buy and rent"],
        highlights: ["Browse homes for sale and rent", "Explore properties by community", "Review listing details"],
        liveUrl: "https://baab-demo.vercel.app",
        image: "/baab.png"
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
