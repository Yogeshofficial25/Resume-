
import { Experience, SkillCategory, Education, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Yogesh Anil Kulkarni",
  role: "Product Manager",
  location: "Aurangabad, MH, India",
  phone: "9022050461",
  email: "yogeshkulkarnioficial@gmail.com",
  summary: "Product Manager and Product Systems Builder with 4+ years of experience building and scaling user-facing web platforms across B2B, B2C, and AI-enabled products. Strong focus on user behavior, engagement loops, incentives, and retention, with hands-on experience translating data and feedback into high-impact product decisions.",
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80" // Placeholder for high-quality feel, the user provided a face photo which can be used in the component
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Farmseasy Tech Solutions",
    role: "Product Manager",
    period: "Jun 2025 – Present",
    points: [
      "Building and structuring product systems for a consumer-facing digital platform focused on user engagement, usability, and scalable architecture.",
      "Defined core product flows, feature dependencies, and system-level logic to support future growth and monetization.",
      "Worked closely with engineering to translate business ideas into clear product specs, workflows, and acceptance criteria.",
      "Focused on platform performance, reliability, and user trust, ensuring a smooth experience across devices."
    ]
  },
  {
    company: "Farmology India",
    role: "Business Analyst",
    period: "Jun 2024 – Jan 2025",
    points: [
      "Owned product roadmap for an AI-powered Agri Tech SaaS platform serving tens of thousands of users.",
      "Led product development from discovery to delivery, including user stories, BRDs, and release reviews.",
      "Launched AI-assisted workflows that improved user adoption and retention among non-technical users.",
      "Defined and tracked KPIs such as feature usage, retention, and engagement, iterating post-launch."
    ]
  },
  {
    company: "Digital Cafeteria Solutions",
    role: "Business Analyst",
    period: "May 2022 – April 2024",
    points: [
      "Led product lifecycle for a consumer and merchant-facing web platform, collaborating with design and engineering.",
      "Improved user engagement by ~35% by optimizing onboarding, user journeys, and feature discoverability.",
      "Owned and prioritized product backlog in JIRA, balancing business goals and technical feasibility."
    ]
  },
  {
    company: "Elastic Run",
    role: "Trainee",
    period: "Sep 2020 – Feb 2022",
    points: [
      "Supported product and operations teams with insights that reduced procurement cycle time.",
      "Analyzed large-scale supply chain and procurement data using SQL and Excel tools.",
      "Documented workflows to support platform automation and product improvements."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Product & Delivery",
    skills: ["JIRA", "Confluence", "Notion", "Trello", "AWS"]
  },
  {
    category: "Design & UX",
    skills: ["Figma", "Miro", "Balsamiq", "Whimsical"]
  },
  {
    category: "Analytics",
    skills: ["Power BI", "SQL", "Google Analytics", "Firebase"]
  },
  {
    category: "Web & APIs",
    skills: ["Postman", "Git", "GitHub", "JavaScript", "React", "Node.js"]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Master of Management Studies",
    institution: "Nath School of Business & Technology, MGM University",
    period: "2025–2027"
  },
  {
    degree: "Bachelor of Mechanical Engineering",
    institution: "CSMSS College of Engineering, Aurangabad",
    period: "2018–2021"
  },
  {
    degree: "Diploma In Mechanical Engineering",
    institution: "CSMSS College of Engineering, Aurangabad",
    period: "2013–2017"
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Certified Product Manager", issuer: "IIBA" },
  { name: "Technical Product Manager", issuer: "IIBA" }
];
