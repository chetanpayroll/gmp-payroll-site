"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const courses = [
    {
        title: "AI Foundations",
        subtitle: "Bootcamp",
        duration: "4 Weeks • 12 Hrs",
        level: "Beginner",
        levelColor: "#22c55e", // Green
        levelBg: "rgba(34, 197, 94, 0.1)",
        desc: "Master ChatGPT, Claude, and prompt engineering. Build your first 5 AI-powered workflows.",
        includes: ["15 Video Lessons", "20 Templates", "Certificate"],
        price: "$197",
        oldPrice: "$397",
        cta: "Enroll Now",
        category: "beginners"
    },
    {
        title: "Automation Architect",
        subtitle: "Program",
        duration: "8 Weeks • 30 Hrs",
        level: "Intermediate",
        levelColor: "#a855f7", // Purple
        levelBg: "rgba(168, 85, 247, 0.1)",
        desc: "Build production-ready automations with Make, Zapier, and n8n. Integrate AI into real business processes.",
        includes: ["40 Video Lessons", "50+ Workflow Templates", "1:1 Coaching Call"],
        price: "$497",
        oldPrice: "$997",
        cta: "Enroll Now",
        featured: true,
        category: "builders"
    },
    {
        title: "AI Business",
        subtitle: "Mastery",
        duration: "12 Weeks • 45 Hrs",
        level: "Advanced",
        levelColor: "#ef4444", // Red
        levelBg: "rgba(239, 68, 68, 0.1)",
        desc: "Launch AI consulting services. Build and sell automation solutions. Create passive income with AI products.",
        includes: ["60 Video Lessons", "Business Templates", "Weekly Group Coaching"],
        price: "$997",
        oldPrice: "$2,497",
        cta: "Apply Now",
        category: "creators"
    },
    {
        title: "Corporate AI",
        subtitle: "Transformation",
        duration: "Custom",
        level: "Enterprise",
        levelColor: "#06b6d4", // Cyan
        levelBg: "rgba(6, 182, 212, 0.1)",
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
        : courses.filter(c => c.category === filter || c.category === 'business');

    return (
        <section className="section bg-dark" id="courses" style={{ position: 'relative' }}>
            {/* Background Glows */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', background: 'radial-gradient(circle at center, rgba(124, 58, 237, 0.05) 0%, transparent 70%)', pointerEvents: 'none' }}></div>

            <div className="container">
                <div className="text-center mb-16">
                    <div style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '50px', background: 'rgba(124, 58, 237, 0.15)', border: '1px solid rgba(124, 58, 237, 0.3)', color: '#c4b5fd', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '1rem', letterSpacing: '1px' }}>LEARNING PATHS</div>
                    <h2 className="mb-4" style={{ fontSize: '3rem' }}>Choose Your <span className="text-gradient">AI Mastery Journey</span></h2>
                    <p className="text-gray" style={{ fontSize: '1.2rem' }}>Structured tracks designed for different goals. Start where you are.</p>
                </div>

                <div className="path-tabs" style={{ marginBottom: '4rem' }}>
                    {['all', 'beginners', 'builders', 'creators'].map(f => (
                        <button
                            key={f}
                            className={`path-tab ${filter === f ? 'active' : ''}`}
                            onClick={() => setFilter(f)}
                            style={{ textTransform: 'capitalize', fontSize: '1rem', padding: '0.8rem 2rem' }}
                        >
                            {f === 'all' ? 'All Paths' : f}
                        </button>
                    ))}
                </div>

                {/* CSS Grid for Cards - explicitly defined here to override broken classes */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    alignItems: 'start'
                }}>
                    {filteredCourses.map((course, index) => (
                        <div key={index} style={{
                            background: '#0f172a',
                            border: course.featured ? '1px solid #7c3aed' : '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            position: 'relative',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            boxShadow: course.featured ? '0 0 30px rgba(124, 58, 237, 0.2)' : 'none'
                        }}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = course.featured ? '0 0 30px rgba(124, 58, 237, 0.2)' : 'none'; }}
                        >
                            {course.featured && (
                                <div style={{ background: 'linear-gradient(90deg, #7c3aed, #06b6d4)', color: 'white', padding: '8px', textAlign: 'center', fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    Most Popular
                                </div>
                            )}

                            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
                                {/* Top Badges */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                    <span style={{
                                        background: course.levelBg,
                                        color: course.levelColor,
                                        border: `1px solid ${course.levelColor}40`,
                                        padding: '4px 12px',
                                        borderRadius: '50px',
                                        fontSize: '0.75rem',
                                        fontWeight: '700',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px'
                                    }}>
                                        {course.level}
                                    </span>
                                    <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{course.duration}</span>
                                </div>

                                {/* Title */}
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', lineHeight: 1.2, marginBottom: '0.2rem' }}>{course.title}</h3>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', lineHeight: 1.2, color: '#94a3b8' }}>{course.subtitle}</h3>
                                </div>

                                <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>{course.desc}</p>

                                {/* Checklist */}
                                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '12px', marginBottom: '2rem' }}>
                                    {course.includes.map((item, i) => (
                                        <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px', fontSize: '0.9rem', color: '#e2e8f0' }}>
                                            <span style={{ color: '#4ade80' }}>✓</span> {item}
                                        </div>
                                    ))}
                                </div>

                                {/* Price & CTA */}
                                <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '1.5rem' }}>
                                        <span style={{ fontSize: '2rem', fontWeight: '700', color: 'white' }}>{course.price}</span>
                                        {course.oldPrice && <span style={{ textDecoration: 'line-through', color: '#64748b', fontSize: '1rem' }}>{course.oldPrice}</span>}
                                    </div>

                                    <Link
                                        href={`/enroll?course=${encodeURIComponent(course.title + ' ' + course.subtitle)}`}
                                        style={{
                                            display: 'block',
                                            width: '100%',
                                            padding: '14px',
                                            textAlign: 'center',
                                            background: course.featured ? 'linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)' : 'rgba(255,255,255,0.05)',
                                            color: 'white',
                                            borderRadius: '50px',
                                            fontWeight: '600',
                                            border: course.featured ? 'none' : '1px solid rgba(255,255,255,0.1)',
                                            boxShadow: course.featured ? '0 4px 15px rgba(124, 58, 237, 0.4)' : 'none',
                                            cursor: 'pointer',
                                            transition: '0.3s'
                                        }}
                                        className={course.featured ? 'btn-glow' : ''}
                                    >
                                        {course.cta}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <a href="#" className="text-gray hover:text-white transition-colors border-b border-gray-700 pb-1 text-sm">Not sure which path? Take our 2-minute AI readiness quiz →</a>
                </div>
            </div>
        </section>
    );
};

export default LearningPaths;
