"use client";
import React, { useState } from 'react';
import Link from 'next/link';

// Inline SVGs
const CheckIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="20 6 9 17 4 12"></polyline></svg>
);
const ClockIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);
const StarIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
);
const ArrowRightIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);

const courses = [
    {
        title: "AI Foundations Bootcamp",
        subtitle: "Learn Artificial Intelligence Basics",
        duration: "4 Weeks • 12 Hrs",
        level: "Beginner",
        levelColor: "#22c55e", // Green
        levelBg: "rgba(34, 197, 94, 0.1)",
        desc: "Master ChatGPT, Claude, and prompt engineering. The perfect starting point to learn AI without coding.",
        includes: ["15 Video Lessons", "20 Templates", "Certificate"],
        price: "₹2,000 INR",
        oldPrice: "₹4,000 INR",
        cta: "Enroll Now",
        category: "beginners"
    },
    {
        title: "Automation Architect",
        subtitle: "AI Course for Professionals",
        duration: "8 Weeks • 30 Hrs",
        level: "Intermediate",
        levelColor: "#a855f7", // Purple
        levelBg: "rgba(168, 85, 247, 0.1)",
        desc: "Build production-ready automations with Make, Zapier, and n8n. Integrate AI into real business processes.",
        includes: ["40 Video Lessons", "50+ Workflow Templates", "1:1 Coaching Call"],
        price: "₹3,000 INR",
        oldPrice: "₹6,000 INR",
        cta: "Enroll Now",
        featured: true,
        category: "builders"
    },
    {
        title: "AI Business Mastery",
        subtitle: "Launch & Scale with AI",
        duration: "12 Weeks • 45 Hrs",
        level: "Advanced",
        levelColor: "#ef4444", // Red
        levelBg: "rgba(239, 68, 68, 0.1)",
        desc: "Launch AI consulting services. Build and sell automation solutions. Create passive income with AI products.",
        includes: ["60 Video Lessons", "Business Templates", "Weekly Group Coaching"],
        price: "₹5,000 INR",
        oldPrice: "₹10,000 INR",
        cta: "Apply Now",
        category: "creators"
    },
    {
        title: "Corporate AI Transformation",
        subtitle: "Enterprise AI Training",
        duration: "Custom",
        level: "Enterprise",
        levelColor: "#06b6d4", // Cyan
        levelBg: "rgba(6, 182, 212, 0.1)",
        desc: "Custom AI training for organizations. Upskill your workforce on secure AI adoption and productivity tools.",
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
        <section id="courses" className="py-20 sm:py-24 bg-[#0B1221] relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl max-h-[800px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider mb-6">
                        <span>Learning Paths</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        Explore Our Top-Rated <span className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">AI Courses Online</span>
                    </h2>

                    <p className="text-gray-400 text-lg sm:text-xl leading-relaxed">
                        Comprehensive tracks including <strong>AI certification</strong>. Start where you are, from beginner basics to advanced automation architecture.
                    </p>
                </div>

                {/* Filter Tabs - Scrollable on mobile */}
                <div className="flex justify-center mb-12 overflow-x-auto pb-4 hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
                    <div className="bg-white/5 p-1.5 rounded-2xl border border-white/10 flex whitespace-nowrap min-w-max">
                        {['all', 'beginners', 'builders', 'creators'].map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`
                                    px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300
                                    ${filter === f
                                        ? 'bg-[#7C3AED] text-white shadow-lg shadow-purple-500/25'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }
                                `}
                            >
                                {f.charAt(0).toUpperCase() + f.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
                    {filteredCourses.map((course, index) => (
                        <div
                            key={index}
                            className={`
                                group relative
                                bg-[#0F172A]/80 backdrop-blur-xl
                                border border-white/10
                                rounded-3xl overflow-hidden
                                hover:border-[#7C3AED]/50 hover:shadow-2xl hover:shadow-purple-500/10
                                transition-all duration-300
                                flex flex-col
                                ${course.featured ? 'ring-1 ring-[#7C3AED] shadow-lg shadow-purple-900/20' : ''}
                            `}
                        >
                            {/* Featured Badge */}
                            {course.featured && (
                                <div className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white text-[10px] font-bold uppercase tracking-widest text-center py-1.5">
                                    Best Seller
                                </div>
                            )}

                            <div className="p-6 sm:p-8 flex flex-col h-full">
                                {/* Header */}
                                <div className="flex justify-between items-start mb-6">
                                    <span
                                        className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                                        style={{
                                            backgroundColor: course.levelBg,
                                            color: course.levelColor,
                                            border: `1px solid ${course.levelColor}40`
                                        }}
                                    >
                                        {course.level}
                                    </span>
                                    <div className="flex items-center gap-1 text-gray-400 text-xs">
                                        <ClockIcon className="w-3.5 h-3.5" />
                                        <span>{course.duration.split('•')[0]}</span>
                                    </div>
                                </div>

                                {/* Title */}
                                <div className="mb-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                                        {course.title}
                                        <span className="block text-gray-500 text-lg sm:text-xl">{course.subtitle}</span>
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                                    {course.desc}
                                </p>

                                {/* Features */}
                                <div className="space-y-4 mb-8">
                                    {course.includes.slice(0, 3).map((item, i) => (
                                        <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                            <div className="mt-0.5 p-0.5 rounded-full bg-green-500/20 text-green-400">
                                                <CheckIcon className="w-3 h-3" />
                                            </div>
                                            <span className="text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Footer (Price & CTA) */}
                                <div className="pt-6 border-t border-white/10 mt-auto">
                                    <div className="flex items-baseline gap-2 mb-4">
                                        <span className="text-2xl font-bold text-white">{course.price}</span>
                                        {course.oldPrice && (
                                            <span className="text-sm text-gray-500 line-through decoration-gray-600">
                                                {course.oldPrice}
                                            </span>
                                        )}
                                    </div>

                                    <Link
                                        href={`/enroll?course=${encodeURIComponent(course.title + ' ' + course.subtitle)}`}
                                        className={`
                                            w-full flex items-center justify-center gap-2
                                            py-3.5 rounded-xl
                                            font-semibold text-sm
                                            transition-all duration-300
                                            ${course.featured
                                                ? 'bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white hover:opacity-90 hover:shadow-lg hover:shadow-purple-500/25'
                                                : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20'
                                            }
                                        `}
                                    >
                                        {course.cta}
                                        <ArrowRightIcon className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link href="/quiz" className="inline-flex items-center text-gray-400 hover:text-white transition-colors text-sm border-b border-gray-700 pb-0.5 hover:border-white">
                        <span>Not sure which path? Take our 2-minute AI readiness quiz</span>
                        <ArrowRightIcon className="w-3 h-3 ml-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LearningPaths;
