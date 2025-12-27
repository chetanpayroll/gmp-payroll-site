"use client";
import React, { useState } from 'react';

const courses = [
    {
        title: "AI Foundations Bootcamp",
        duration: "4 Weeks • 12 Hours",
        level: "Beginner",
        levelColor: "badge-green",
        desc: "Master ChatGPT, Claude, and prompt engineering. Build your first 5 AI-powered workflows.",
        includes: ["15 Video Lessons", "20 Templates", "Certificate"],
        price: "$197",
        oldPrice: "$397",
        cta: "Enroll Now",
        category: "beginners"
    },
    {
        title: "Automation Architect Program",
        duration: "8 Weeks • 30 Hours",
        level: "Intermediate",
        levelColor: "badge-purple",
        desc: "Build production-ready automations with Make, Zapier, and n8n. Integrate AI into real business processes.",
        includes: ["40 Video Lessons", "50+ Workflow Templates", "1:1 Coaching Call"],
        price: "$497",
        oldPrice: "$997",
        cta: "Enroll Now",
        featured: true,
        category: "builders"
    },
    {
        title: "AI Business Mastery",
        duration: "12 Weeks • 45 Hours",
        level: "Advanced",
        levelColor: "badge-red",
        desc: "Launch AI consulting services. Build and sell automation solutions. Create passive income with AI products.",
        includes: ["60 Video Lessons", "Business Templates", "Weekly Group Coaching"],
        price: "$997",
        oldPrice: "$2,497",
        cta: "Apply Now",
        category: "creators"
    },
    {
        title: "Corporate AI Transformation",
        duration: "Custom",
        level: "Enterprise",
        levelColor: "badge-cyan",
        desc: "Team training programs tailored for your organization. Upskill your entire workforce on AI tools.",
        includes: ["Custom Curriculum", "Live Workshops", "Implementation Support"],
        price: "Custom",
        cta: "Book Discovery Call",
        category: "business"
    }
];

const LearningPaths = () => {
    const [filter, setFilter] = useState('all');

    const filteredCourses = filter === 'all'
        ? courses
        : courses.filter(c => c.category === filter || c.category === 'business'); // Always show corporate mainly

    return (
        <section className="section bg-dark" id="courses">
            <div className="container">
                <div className="text-center mb-12">
                    <div className="badge badge-purple mb-4">LEARNING PATHS</div>
                    <h2 className="mb-4">Choose Your <span className="text-gradient">AI Mastery Journey</span></h2>
                    <p className="text-gray">Structured tracks designed for different goals. Start where you are.</p>
                </div>

                <div className="path-tabs">
                    {['all', 'beginners', 'builders', 'creators'].map(f => (
                        <button
                            key={f}
                            className={`path-tab ${filter === f ? 'active' : ''}`}
                            onClick={() => setFilter(f)}
                            style={{ textTransform: 'capitalize' }}
                        >
                            {f === 'all' ? 'All Paths' : f}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredCourses.map((course, index) => (
                        <div key={index} className={`path-card ${course.featured ? 'featured' : ''}`}>
                            {course.featured && (
                                <div className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-center text-xs font-bold py-1 uppercase tracking-wider" style={{ background: 'var(--gradient-main)' }}>
                                    Most Popular
                                </div>
                            )}
                            <div className="p-6 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-4">
                                    <span className={`badge ${course.levelColor}`}>{course.level}</span>
                                    <span className="text-xs text-gray">{course.duration}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                                <p className="text-gray text-sm mb-6 flex-grow">{course.desc}</p>

                                <ul className="mb-6 space-y-2">
                                    {course.includes.map((item, i) => (
                                        <li key={i} className="text-xs text-gray-300 flex items-center gap-2">
                                            <span className="text-green-400">✓</span> {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-4 border-t border-white/10 mt-auto">
                                    <div className="flex items-baseline gap-2 mb-4">
                                        <span className="text-2xl font-bold">{course.price}</span>
                                        {course.oldPrice && <span className="text-sm text-gray line-through">{course.oldPrice}</span>}
                                    </div>
                                    <button className={`btn w-full ${course.featured ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%' }}>
                                        {course.cta}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="#" className="text-sm text-gray hover:text-white transition-colors border-b border-gray-700 pb-1">Not sure which path? Take our 2-minute AI readiness quiz →</a>
                </div>
            </div>
        </section>
    );
};

export default LearningPaths;
