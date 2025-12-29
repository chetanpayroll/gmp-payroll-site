"use client";

// ============================================
// ORGANIZATION SCHEMA
// Shows company info in Google Knowledge Panel
// ============================================
export const OrganizationSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "@id": "https://www.gmppayroll.org/#organization",
        "name": "AI Gravity Academy",
        "alternateName": ["AI Gravity", "AGA", "Chetan Sharma AI Academy"],
        "url": "https://www.gmppayroll.org",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.gmppayroll.org/logo.png",
            "width": 512,
            "height": 512,
        },
        "image": "https://www.gmppayroll.org/og-image.png",
        "description": "AI Gravity Academy empowers professionals to master AI and automation skills without coding. Founded by Chetan Sharma, a Fortune 500 consultant with 13+ years experience.",
        "foundingDate": "2023",
        "founder": {
            "@type": "Person",
            "@id": "https://www.gmppayroll.org/#founder",
            "name": "Chetan Sharma",
            "alternateName": "Champ",
            "jobTitle": "Founder & Lead Instructor",
            "description": "Global payroll expert with 13+ years experience across 25+ countries. Fortune 500 consultant turned AI educator.",
            "url": "https://www.gmppayroll.org/about",
            "image": "https://www.gmppayroll.org/chetan-sharma.jpg",
            "sameAs": [
                "https://www.linkedin.com/in/chetansharma",
                "https://twitter.com/chetansharma",
            ],
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Alwar",
            "addressRegion": "Rajasthan",
            "postalCode": "301001",
            "addressCountry": "IN",
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 27.5530,
            "longitude": 76.6346,
        },
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "hello@gmppayroll.org",
                "url": "https://www.gmppayroll.org/contact",
                "availableLanguage": ["English", "Hindi"],
                "areaServed": "Worldwide",
            },
            {
                "@type": "ContactPoint",
                "contactType": "sales",
                "email": "sales@gmppayroll.org",
                "url": "https://www.gmppayroll.org/contact",
            },
        ],
        "sameAs": [
            "https://www.linkedin.com/company/aigravityacademy",
            "https://twitter.com/AIGravityAcademy",
            "https://www.youtube.com/@AIGravityAcademy",
            "https://www.facebook.com/AIGravityAcademy",
            "https://www.instagram.com/aigravityacademy",
            "https://discord.gg/aigravity",
        ],
        "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 20.5937,
                "longitude": 78.9629,
            },
            "geoRadius": "20000 km",
        },
        "serviceArea": {
            "@type": "Place",
            "name": "Worldwide",
        },
        "numberOfEmployees": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 10,
        },
        "slogan": "Master AI Without Writing a Single Line of Code",
        "award": [
            "4.9/5 Rating from 2,000+ Reviews",
            "5,000+ Students Trained",
            "40+ Countries Reached",
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "2000",
            "bestRating": "5",
            "worstRating": "1",
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

// ============================================
// WEBSITE SCHEMA
// Enables sitelinks search box in Google
// ============================================
export const WebsiteSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://www.gmppayroll.org/#website",
        "name": "AI Gravity Academy",
        "alternateName": "AI Gravity",
        "url": "https://www.gmppayroll.org",
        "description": "Master AI and automation without coding. Hands-on training with ChatGPT, Claude, Make, and Zapier.",
        "publisher": {
            "@id": "https://www.gmppayroll.org/#organization",
        },
        "inLanguage": "en-US",
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.gmppayroll.org/search?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
        },
        "copyrightYear": 2024,
        "copyrightHolder": {
            "@id": "https://www.gmppayroll.org/#organization",
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

// ============================================
// COURSE SCHEMA (FOR EACH COURSE)
// Shows course details in search results
// ============================================
export const CourseSchema = ({ course }) => {
    // Default course if none provided
    const defaultCourse = {
        name: "AI Foundations Bootcamp",
        description: "Master ChatGPT, Claude & prompt engineering fundamentals. Build 20+ real-world AI projects in 4 weeks.",
        url: "https://www.gmppayroll.org/#courses",
        image: "https://www.gmppayroll.org/courses/ai-foundations.png",
        provider: "AI Gravity Academy",
        instructor: "Chetan Sharma",
        duration: "P4W", // ISO 8601 duration: 4 weeks
        price: "2000",
        currency: "INR",
        level: "Beginner",
        language: "English",
        rating: "4.9",
        reviewCount: "500",
    };

    const c = course || defaultCourse;

    const schema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "@id": `https://www.gmppayroll.org/courses/${c.slug || 'ai-foundations'}`,
        "name": c.name,
        "description": c.description,
        "url": c.url,
        "image": c.image,
        "provider": {
            "@type": "Organization",
            "name": "AI Gravity Academy",
            "url": "https://www.gmppayroll.org",
            "sameAs": "https://www.gmppayroll.org",
        },
        "instructor": {
            "@type": "Person",
            "name": c.instructor || "Chetan Sharma",
            "description": "AI & Automation Expert with 13+ years experience",
            "url": "https://www.gmppayroll.org/about",
        },
        "educationalLevel": c.level || "Beginner",
        "inLanguage": c.language || "en",
        "courseCode": c.code || "AGA-101",
        "numberOfCredits": c.credits || "4",
        "timeRequired": c.duration || "P4W",
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "online",
            "courseWorkload": "PT20H", // 20 hours total
            "instructor": {
                "@type": "Person",
                "name": c.instructor || "Chetan Sharma",
            },
        },
        "offers": {
            "@type": "Offer",
            "price": c.price || "2000",
            "priceCurrency": c.currency || "INR",
            "availability": "https://schema.org/InStock",
            "validFrom": "2024-01-01",
            "url": c.url,
            "category": "Paid",
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": c.rating || "4.9",
            "ratingCount": c.reviewCount || "500",
            "bestRating": "5",
            "worstRating": "1",
        },
        "about": [
            "Artificial Intelligence",
            "ChatGPT",
            "Prompt Engineering",
            "Automation",
            "No-Code Tools",
        ],
        "teaches": [
            "ChatGPT Advanced Techniques",
            "Claude AI Usage",
            "Prompt Engineering",
            "AI Workflow Automation",
            "No-Code AI Tools",
        ],
        "competencyRequired": "Basic computer skills",
        "educationalCredentialAwarded": "AI Gravity Academy Certificate",
        "financialAidEligible": false,
        "occupationalCredentialAwarded": {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Certificate",
            "name": "AI Foundations Certificate",
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

// ============================================
// ALL COURSES ITEM LIST SCHEMA
// Shows multiple courses in search results
// ============================================
export const CourseListSchema = () => {
    const courses = [
        {
            name: "AI Foundations Bootcamp",
            description: "Master ChatGPT, Claude & prompt engineering in 4 weeks",
            url: "https://www.gmppayroll.org/#courses",
            image: "https://www.gmppayroll.org/courses/ai-foundations.png",
            price: "2000",
            rating: "4.9",
        },
        {
            name: "Automation Architect Program",
            description: "Build advanced workflows with Make, Zapier & n8n in 8 weeks",
            url: "https://www.gmppayroll.org/#courses",
            image: "https://www.gmppayroll.org/courses/automation-architect.png",
            price: "3000",
            rating: "4.8",
        },
        {
            name: "AI Business Mastery",
            description: "Launch your AI consulting business in 12 weeks",
            url: "https://www.gmppayroll.org/#courses",
            image: "https://www.gmppayroll.org/courses/business-mastery.png",
            price: "5000",
            rating: "4.9",
        },
        {
            name: "All-Access Professional",
            description: "Unlimited access to all courses, templates & community",
            url: "https://www.gmppayroll.org/#courses",
            image: "https://www.gmppayroll.org/courses/all-access.png",
            price: "8000",
            rating: "5.0",
        },
    ];

    const schema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "AI Gravity Academy Courses",
        "description": "Complete list of AI and automation training courses",
        "url": "https://www.gmppayroll.org/#courses",
        "numberOfItems": courses.length,
        "itemListElement": courses.map((course, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Course",
                "name": course.name,
                "description": course.description,
                "url": course.url,
                "image": course.image,
                "provider": {
                    "@type": "Organization",
                    "name": "AI Gravity Academy",
                },
                "offers": {
                    "@type": "Offer",
                    "price": course.price,
                    "priceCurrency": "INR",
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": course.rating,
                    "ratingCount": "500",
                },
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

// ============================================
// FAQ SCHEMA
// Shows FAQ snippets in search results
// ============================================
export const FAQSchema = () => {
    const faqs = [
        {
            question: "Do I need coding experience to take these AI courses?",
            answer: "No! All our courses are designed for non-technical professionals. We focus on no-code tools like ChatGPT, Claude, Make, and Zapier. If you can use a computer and type, you can master AI with us.",
        },
        {
            question: "How long does it take to complete a course?",
            answer: "Course duration varies: AI Foundations Bootcamp is 4 weeks, Automation Architect is 8 weeks, and AI Business Mastery is 12 weeks. Most students spend 5-10 hours per week on learning and projects.",
        },
        {
            question: "What tools will I learn to use?",
            answer: "You'll master ChatGPT, Claude AI, Make (Integromat), Zapier, n8n, and various AI productivity tools. Each course includes hands-on projects using real-world scenarios.",
        },
        {
            question: "Is there a money-back guarantee?",
            answer: "Yes! We offer a 30-day money-back guarantee on all courses. If you're not satisfied with your learning experience, we'll provide a full refund, no questions asked.",
        },
        {
            question: "Do I get a certificate after completing the course?",
            answer: "Yes! Upon successful completion, you receive an AI Gravity Academy Certificate that you can share on LinkedIn and add to your resume. Our certificates are recognized by leading companies.",
        },
        {
            question: "Can I access the course materials after completion?",
            answer: "Absolutely! You get lifetime access to all course materials, including future updates. Plus, you'll have permanent access to our community of 5,000+ AI enthusiasts.",
        },
        {
            question: "Do you offer corporate training?",
            answer: "Yes! We offer customized corporate AI training programs for teams and organizations. Contact us for a tailored curriculum, pricing, and scheduling options.",
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit/debit cards, UPI, net banking, and international payments via PayPal and Stripe. EMI options are available for Indian customers.",
        },
    ];

    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

// ============================================
// BREADCRUMB SCHEMA
// Shows breadcrumb navigation in search results
// ============================================
export const BreadcrumbSchema = ({ items }) => {
    const defaultItems = [
        { name: "Home", url: "https://www.gmppayroll.org" },
    ];

    const breadcrumbs = items || defaultItems;

    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

// ============================================
// REVIEW/TESTIMONIAL SCHEMA
// Shows star ratings in search results
// ============================================
export const ReviewSchema = () => {
    const reviews = [
        {
            author: "Sarah Johnson",
            rating: 5,
            reviewBody: "This course completely transformed how I work. I automated 15 hours of tasks weekly and got promoted within 3 months!",
            datePublished: "2024-10-15",
        },
        {
            author: "Raj Patel",
            rating: 5,
            reviewBody: "As an HR manager, I was skeptical about AI. Chetan's teaching style made everything click. Now I'm the AI expert in my company.",
            datePublished: "2024-11-02",
        },
        {
            author: "Maria Garcia",
            rating: 5,
            reviewBody: "The hands-on projects were incredible. I built actual automations I use daily at work. Best investment in my career!",
            datePublished: "2024-11-20",
        },
    ];

    const schema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "AI Gravity Academy Courses",
        "description": "AI and automation training courses for professionals",
        "brand": {
            "@type": "Brand",
            "name": "AI Gravity Academy",
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "2000",
            "bestRating": "5",
            "worstRating": "1",
        },
        "review": reviews.map(review => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": review.author,
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": review.rating,
                "bestRating": "5",
                "worstRating": "1",
            },
            "reviewBody": review.reviewBody,
            "datePublished": review.datePublished,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

// ============================================
// LOCAL BUSINESS SCHEMA (for Google Maps)
// ============================================
export const LocalBusinessSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://www.gmppayroll.org/#localbusiness",
        "name": "AI Gravity Academy",
        "alternateName": "AI Gravity",
        "description": "Online AI and automation training academy. Master ChatGPT, Claude, Make & Zapier without coding.",
        "url": "https://www.gmppayroll.org",
        "telephone": "+91-8619495587",
        "email": "hello@gmppayroll.org",
        "image": "https://www.gmppayroll.org/og-image.png",
        "logo": "https://www.gmppayroll.org/logo.png",
        "priceRange": "₹₹",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "88 Indra Colony",
            "addressLocality": "Alwar",
            "addressRegion": "Rajasthan",
            "postalCode": "301001",
            "addressCountry": "IN",
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 27.5530,
            "longitude": 76.6346,
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00",
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "10:00",
                "closes": "14:00",
            },
        ],
        "sameAs": [
            "https://www.linkedin.com/company/aigravityacademy",
            "https://twitter.com/AIGravityAcademy",
            "https://www.youtube.com/@AIGravityAcademy",
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "2000",
        },
        "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 20.5937,
                "longitude": 78.9629,
            },
            "geoRadius": "20000",
        },
        "serviceType": [
            "AI Training",
            "Automation Courses",
            "Corporate Training",
            "Online Education",
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "AI Training Courses",
            "itemListElement": [
                {
                    "@type": "OfferCatalog",
                    "name": "Individual Courses",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "AI Foundations Bootcamp",
                            },
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Automation Architect Program",
                            },
                        },
                    ],
                },
            ],
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

// ============================================
// PERSON SCHEMA (for Founder/Instructor)
// ============================================
export const PersonSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://www.gmppayroll.org/about#person",
        "name": "Chetan Sharma",
        "alternateName": "Champ",
        "givenName": "Chetan",
        "familyName": "Sharma",
        "jobTitle": "Founder & Lead Instructor",
        "description": "Global payroll implementation expert with 13+ years experience across 25+ countries. Fortune 500 consultant turned AI educator helping 5,000+ professionals master AI and automation.",
        "url": "https://www.gmppayroll.org/about",
        "image": {
            "@type": "ImageObject",
            "url": "https://www.gmppayroll.org/chetan-sharma.jpg",
            "width": 400,
            "height": 400,
        },
        "email": "chetan@gmppayroll.org",
        "worksFor": {
            "@type": "Organization",
            "name": "AI Gravity Academy",
            "url": "https://www.gmppayroll.org",
        },
        "alumniOf": [
            {
                "@type": "Organization",
                "name": "AON Hewitt",
            },
            {
                "@type": "Organization",
                "name": "Deel",
            },
        ],
        "knowsAbout": [
            "Artificial Intelligence",
            "ChatGPT",
            "Claude AI",
            "Automation",
            "Make (Integromat)",
            "Zapier",
            "Global Payroll",
            "Process Automation",
            "Prompt Engineering",
        ],
        "sameAs": [
            "https://www.linkedin.com/in/chetansharma",
            "https://twitter.com/chetansharma",
            "https://www.gmppayroll.com",
        ],
        "award": [
            "5,000+ Professionals Trained",
            "99.8% Client Success Rate",
            "5 Promotions in 4 Years",
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

// ============================================
// VIDEO SCHEMA (for Course Previews)
// ============================================
export const VideoSchema = ({ video }) => {
    const defaultVideo = {
        name: "AI Gravity Academy Introduction",
        description: "Learn how AI Gravity Academy can transform your career with AI and automation skills",
        thumbnailUrl: "https://www.gmppayroll.org/video-thumbnail.jpg",
        uploadDate: "2024-01-15",
        duration: "PT5M30S",
        contentUrl: "https://www.youtube.com/watch?v=XXXXXXXXX",
    };

    const v = video || defaultVideo;

    const schema = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": v.name,
        "description": v.description,
        "thumbnailUrl": v.thumbnailUrl,
        "uploadDate": v.uploadDate,
        "duration": v.duration,
        "contentUrl": v.contentUrl,
        "embedUrl": v.embedUrl || v.contentUrl,
        "publisher": {
            "@type": "Organization",
            "name": "AI Gravity Academy",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.gmppayroll.org/logo.png",
            },
        },
        "author": {
            "@type": "Person",
            "name": "Chetan Sharma",
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

// ============================================
// EVENT SCHEMA (for Webinars/Workshops)
// ============================================
export const EventSchema = ({ event }) => {
    const defaultEvent = {
        name: "Free AI Masterclass: ChatGPT for Business Professionals",
        description: "Join our free 60-minute masterclass and learn how to use ChatGPT to boost your productivity by 10x",
        startDate: "2025-01-15T18:00:00+05:30",
        endDate: "2025-01-15T19:00:00+05:30",
        location: "Online",
        image: "https://www.gmppayroll.org/events/masterclass.png",
        url: "https://www.gmppayroll.org/events/ai-masterclass",
        organizer: "AI Gravity Academy",
        performer: "Chetan Sharma",
    };

    const e = event || defaultEvent;

    const schema = {
        "@context": "https://schema.org",
        "@type": "Event",
        "name": e.name,
        "description": e.description,
        "startDate": e.startDate,
        "endDate": e.endDate,
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
        "location": {
            "@type": "VirtualLocation",
            "url": e.url,
        },
        "image": e.image,
        "url": e.url,
        "organizer": {
            "@type": "Organization",
            "name": "AI Gravity Academy",
            "url": "https://www.gmppayroll.org",
        },
        "performer": {
            "@type": "Person",
            "name": e.performer || "Chetan Sharma",
        },
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "url": e.url,
            "validFrom": "2024-12-01",
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

// ============================================
// SPECIAL OFFER SCHEMA (for Promotions)
// ============================================
export const SpecialOfferSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Offer",
        "name": "New Year Special - 50% Off All Courses",
        "description": "Start 2025 with AI skills! Get 50% off all courses with code NEWYEAR50",
        "url": "https://www.gmppayroll.org/#pricing",
        "priceCurrency": "INR",
        "price": "1000",
        "priceValidUntil": "2025-01-31",
        "availability": "https://schema.org/InStock",
        "seller": {
            "@type": "Organization",
            "name": "AI Gravity Academy",
        },
        "itemOffered": {
            "@type": "Course",
            "name": "AI Foundations Bootcamp",
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

// ============================================
// HOWTO SCHEMA (for Tutorial Content)
// ============================================
export const HowToSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Get Started with AI Gravity Academy",
        "description": "Learn how to start your AI learning journey with AI Gravity Academy in 5 simple steps",
        "image": "https://www.gmppayroll.org/howto-start.png",
        "totalTime": "PT10M",
        "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "INR",
            "value": "0",
        },
        "step": [
            {
                "@type": "HowToStep",
                "position": 1,
                "name": "Visit the Website",
                "text": "Go to www.gmppayroll.org and explore our courses",
                "url": "https://www.gmppayroll.org",
                "image": "https://www.gmppayroll.org/steps/step1.png",
            },
            {
                "@type": "HowToStep",
                "position": 2,
                "name": "Choose Your Course",
                "text": "Select the course that matches your learning goals - Beginner, Intermediate, or Advanced",
                "url": "https://www.gmppayroll.org/#courses",
                "image": "https://www.gmppayroll.org/steps/step2.png",
            },
            {
                "@type": "HowToStep",
                "position": 3,
                "name": "Start with Free Content",
                "text": "Access our free AI Starter Course to experience our teaching style",
                "url": "https://www.gmppayroll.org/#resources",
                "image": "https://www.gmppayroll.org/steps/step3.png",
            },
            {
                "@type": "HowToStep",
                "position": 4,
                "name": "Enroll in a Course",
                "text": "Choose a paid course and complete the enrollment process",
                "url": "https://www.gmppayroll.org/#pricing",
                "image": "https://www.gmppayroll.org/steps/step4.png",
            },
            {
                "@type": "HowToStep",
                "position": 5,
                "name": "Join the Community",
                "text": "Connect with 5,000+ learners in our Discord community for support and networking",
                "url": "https://discord.gg/aigravity",
                "image": "https://www.gmppayroll.org/steps/step5.png",
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

// ============================================
// MASTER COMPONENT - ADD ALL SCHEMAS TO PAGES
// ============================================
export const AllStructuredData = () => {
    return (
        <>
            <OrganizationSchema />
            <WebsiteSchema />
            <CourseListSchema />
            <FAQSchema />
            <ReviewSchema />
            <LocalBusinessSchema />
            <PersonSchema />
            <HowToSchema />
        </>
    );
};

export default AllStructuredData;
