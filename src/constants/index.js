import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    nodejs,
    react,
    snapgram,
    ecommerce,
    tailwindcss,
    medivisit1,
    freelance,
    codecool,
    whatever,
    customiz
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    
    
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    
];

export const experiences = [
    {
        title: "Full-Stack Web Developer",
        company_name: "Freelancer",
        icon: freelance,
        iconBg: "#accbe1",
        date: "Jul 2023 - ",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full-Stack Programming Course",
        company_name: "Codecool",
        icon: codecool,
        iconBg: "#fbc3bc",
        date: "Jul 2022 - Jun 2023",
        points: [
            "Crafted various web applications using a full-stack approach learned during a 12-month intensive course.",
            "Worked alongside peers in a simulated product development environment to build and refine software solutions.",
            "Developed robust time management and teamwork skills, adopting agile methodologies and participating in sprint cycles for efficient project delivery.",
            "Engaged in thorough code reviews and collaborative learning sessions, enhancing our collective coding expertise.",
        ],
    },
    {
        title: "Social Media Manager",
        company_name: "Whatever Group",
        icon: whatever,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Oversaw the social media presence of renowned brands across Facebook, Instagram, and Twitter, enhancing their digital footprint.",
            "Crafted engaging content strategies that boosted follower engagement and brand visibility on multiple platforms.",
            "Implemented SEO best practices to optimize content visibility and drive increased traffic to brand websites.",
            "Analyzed performance metrics to refine social media strategies, ensuring maximum impact and reach for each campaign.",
        ],
    },
   
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/SzimkoBalazs',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://linkedin.com/in/szimkó-balázs',
    }
];

export const projects = [
    {
        iconUrl: customiz,
        theme: 'btn-back-pink',
        name: 'Customiz',
        description: 'Created a website that allows users to customize 3D products in real-time, providing a personalized shopping experience and visualization before purchase.',
        link: 'https://3dproducts.vercel.app',
    },
    {
        iconUrl: medivisit1,
        theme: 'btn-back-green',
        name: 'Full Stack Medical Booking',
        description: 'Designed and launched a full-stack medical booking web application, streamlining appointment scheduling and patient management for healthcare providers.',
        link: 'https://medivisit-app-new.vercel.app',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Full Stack Nostalgicar',
        description: 'Developed a full-stack web application dedicated to the buying and selling of rare sports cars, offering a niche marketplace for enthusiasts and collectors.',
        link: 'https://nostalgicar.vercel.app',
    },
    {
        iconUrl: ecommerce,
        theme: 'btn-back-red',
        name: 'Full Stack E-Commerce Website',
        description: 'Coming soon: A new full-stack eCommerce website from scratch built for a real customer, designed for practical, everyday use with a straightforward interface.',
        link: 'https://github.com/SzimkoBalazs/ecommerce-frontend',
    },
   
];