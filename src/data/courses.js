export const courses = [
    {
        id: 'ai-foundations-bootcamp',
        slug: 'ai-foundations-bootcamp',
        icon: '🎓',
        title: 'AI Foundations Bootcamp',
        subtitle: 'Learn Artificial Intelligence Basics',
        description: 'Master ChatGPT, Claude, and prompt engineering. The perfect starting point to learn AI without coding. This comprehensive course takes you from zero to hero in generative AI.',
        longDescription: 'In a world rapidly transforming by Artificial Intelligence, staying ahead means mastering the tools of tomorrow. The AI Foundations Bootcamp is meticulously designed for non-technical professionals, students, and creatives who want to harness the power of AI without getting bogged down in code. You will learn to craft perfect prompts, automate daily workflows, and understand the ethical implications of AI.',
        level: 'Beginner',
        levelIcon: '🌱',
        duration: '4 Weeks',
        schedule: 'Weekend Live Sessions + Self-paced',
        features: [
            '35 Video Lessons',
            '20+ Templates',
            'Certificate of Completion',
            'Private Community Access',
            'Lifetime Updates'
        ],
        syllabus: [
            {
                module: "Module 1: Introduction to GenAI",
                lessons: ["What is LLM?", "History of AI", "Setting up ChatGPT & Claude"]
            },
            {
                module: "Module 2: Prompt Engineering Mastery",
                lessons: ["The CO-STAR Framework", "Chain of Thought Prompting", "Zero-shot vs Few-shot"]
            },
            {
                module: "Module 3: Visual AI & Content Creation",
                lessons: ["Midjourney Basics", "Canva Magic Tools", "Creating Consistent Characters"]
            },
            {
                module: "Module 4: Ethics & Future",
                lessons: ["AI Hallucinations", "Data Privacy", "The Future of Work"]
            }
        ],
        originalPrice: 4000,
        price: 2000,
        currency: '₹',
        students: 2500,
        rating: 4.9,
        category: 'Beginner',
        featured: false,
    },
    {
        id: 'automation-architect',
        slug: 'automation-architect',
        icon: '⚡',
        title: 'Automation Architect',
        subtitle: 'AI Course for Professionals',
        description: 'Build production-ready automations with Make, Zapier, and n8n. Integrate AI into real business processes to save hundreds of hours.',
        longDescription: 'Become the architect of efficiency in your organization. This course moves beyond chat interfaces to building robust, autonomous agents and workflows. You will master tools like Make.com (formerly Integromat), Zapier, and open-source alternatives like n8n. By the end, you will have a portfolio of live automations handling emails, leads, and content generation.',
        level: 'Intermediate',
        levelIcon: '🚀',
        duration: '8 Weeks',
        schedule: 'Hybrid (Live Labs + Content)',
        features: [
            '60 Video Lessons',
            '30+ Workflow Templates',
            '1:1 Coaching Call',
            'Priority Support',
            'API Integration Basics'
        ],
        syllabus: [
            {
                module: "Module 1: Automation Mindset",
                lessons: ["Identifying Bottlenecks", "API vs Webhooks", "JSON Basics for Non-Coders"]
            },
            {
                module: "Module 2: Mastering Make.com",
                lessons: ["Scenarios & Routers", "Error Handling", "Connecting OpenAI to Google Sheets"]
            },
            {
                module: "Module 3: Building AI Agents",
                lessons: ["Knowledge Retrieval", "Function Calling", "Multi-step Reasoning"]
            },
            {
                module: "Module 4: Real World Projects",
                lessons: ["Automated CRM Entry", "Social Media Autopilot", "Invoice Processing"]
            }
        ],
        originalPrice: 6000,
        price: 3000,
        currency: '₹',
        students: 1800,
        rating: 4.8,
        category: 'Intermediate',
        featured: true,
    },
    {
        id: 'ai-business-mastery',
        slug: 'ai-business-mastery',
        icon: '💼',
        title: 'AI Business Mastery',
        subtitle: 'Launch & Scale with AI',
        description: 'Launch AI consulting services. Build and sell automation solutions. Create passive income with digital AI products.',
        longDescription: 'Turn your AI skills into a profitable venture. Whether you want to start an AI Automation Agency (AAA), consult for enterprises, or build micro-SaaS products, this masterclass provides the blueprint. We cover not just technical implementation, but pricing, sales, and client acquisition strategies specific to the AI niche.',
        level: 'Advanced',
        levelIcon: '👑',
        duration: '12 Weeks',
        schedule: 'Intensive Workshop Cohort',
        features: [
            '80 Video Lessons',
            'Business Contracts & Proposals',
            'Weekly Group Coaching',
            'Client Acquisition System',
            'White-label Assets'
        ],
        syllabus: [
            {
                module: "Module 1: The AI Business Landscape",
                lessons: ["Niche Selection", "Service vs Product", "Pricing Your Services"]
            },
            {
                module: "Module 2: Client Acquisition",
                lessons: ["Cold Outreach for AI", "LinkedIn Personal Branding", "Discovery Calls"]
            },
            {
                module: "Module 3: Delivery & Operations",
                lessons: ["Managing Expectations", "SOPs for Automations", "Scaling Your Team"]
            },
            {
                module: "Module 4: The Exit Strategy",
                lessons: ["Building IP", "Valuation", "Future Proofing"]
            }
        ],
        originalPrice: 10000,
        price: 5000,
        currency: '₹',
        students: 950,
        rating: 4.9,
        category: 'Advanced',
        featured: false,
    },
    {
        id: 'corporate-ai-transformation',
        slug: 'corporate-ai-transformation',
        icon: '🏢',
        title: 'Corporate AI Transformation',
        subtitle: 'Enterprise AI Training',
        description: 'Custom AI training for organizations. Upskill your workforce on secure, effective AI adoption and policy framework.',
        longDescription: 'Prepare your organization for the AI revolution. This track is tailored for leadership and teams, focusing on governance, security, and scalable adoption. We move beyond tools to strategy, ensuring your company leverages AI to drive innovation while mitigating risks.',
        level: 'Enterprise',
        levelIcon: '🏆',
        duration: 'Custom',
        schedule: 'On-site / Virtual Flexible',
        features: [
            'Custom Curriculum Design',
            'Live Hands-on Workshops',
            'Implementation Support',
            'Team Analytics & ROI',
            'Data Security Training'
        ],
        syllabus: [
            {
                module: "Phase 1: Assessment",
                lessons: ["Workforce Readiness Audit", "Use Case Identification", "Security Risk Assessment"]
            },
            {
                module: "Phase 2: Strategy",
                lessons: ["AI Governance Frameworks", "Policy Development", "Tool Selection"]
            },
            {
                module: "Phase 3: Implementation",
                lessons: ["Department-specific Training", "Pilot Programs", "Feedback Loops"]
            }
        ],
        originalPrice: null,
        price: 'Custom',
        currency: '',
        students: 50,
        rating: 5.0,
        category: 'Advanced',
        featured: false,
    }
];
