
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { courses } from '../data/courses';

const LearningPaths = () => {
    const [activeFilter, setActiveFilter] = useState('All Courses');

    const filteredCourses = activeFilter === 'All Courses'
        ? courses
        : courses.filter(course => course.category === activeFilter);

    return (
        <section className="py-24 bg-[#0A1628] relative" id="courses">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block py-2 px-6 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold tracking-widest uppercase mb-6">
                        📚 Learning Paths
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]">Top-Rated</span> AI Programs
                    </h2>
                    <p className="text-xl text-gray-400">
                        Comprehensive tracks including AI certification. Start where you are, from beginner basics to advanced automation architecture.
                    </p>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        {['All Courses', 'Beginner', 'Intermediate', 'Advanced'].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${activeFilter === filter
                                    ? 'bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white shadow-lg transform -translate-y-1'
                                    : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {filteredCourses.map((course) => (
                        <div
                            key={course.id}
                            className={`course-card group relative bg-white/5 backdrop-blur-md border rounded-3xl p-6 overflow-hidden flex flex-col ${course.featured
                                ? 'border-purple-500/50 bg-gradient-to-br from-purple-500/10 to-transparent'
                                : 'border-white/10 hover:border-purple-500/30'
                                }`}
                        >
                            {/* Card Glow */}
                            <div className="card-glow"></div>

                            {/* Featured Badge */}
                            {course.featured && (
                                <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider z-10">
                                    🔥 Best Seller
                                </div>
                            )}

                            {/* Header */}
                            <div className="flex justify-between items-center mb-6 relative z-10">
                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase border flex items-center gap-1 ${course.level === 'Beginner' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                    course.level === 'Intermediate' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' :
                                        course.level === 'Advanced' ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' :
                                            'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
                                    }`}>
                                    {course.levelIcon} {course.level}
                                </span>
                                <span className="text-gray-400 text-xs flex items-center gap-1">
                                    ⏱️ {course.duration}
                                </span>
                            </div>

                            {/* Icon */}
                            <div className="mb-6 relative z-10 flex justify-center">
                                <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-4xl shadow-2xl group-hover:scale-110 transition-transform duration-300">
                                    {course.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 flex-grow">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{course.title}</h3>
                                <p className="text-sm text-purple-400 mb-4 font-medium">{course.subtitle}</p>
                                <p className="text-sm text-gray-400 mb-6 leading-relaxed line-clamp-3">
                                    {course.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-3 mb-6">
                                    {course.features.slice(0, 4).map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                            <span className="text-green-400 text-xs">✅</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Pricing & CTA */}
                            <div className="relative z-10 mt-auto pt-6 border-t border-white/10">
                                <div className="flex justify-between items-center mb-4">
                                    <div>
                                        {course.originalPrice && (
                                            <span className="text-xs text-gray-500 line-through block">₹{course.originalPrice}</span>
                                        )}
                                        <span className="text-2xl font-bold text-white">
                                            {typeof course.price === 'number' ? `₹${course.price}` : course.price}
                                        </span>
                                    </div>
                                    {course.originalPrice && (
                                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded">
                                            {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                                        </span>
                                    )}
                                </div>

                                <div className="grid grid-cols-2 gap-2">
                                    <Link href={`/course/${course.slug}`} className="py-3 rounded-xl border border-white/20 hover:bg-white/5 text-white font-bold text-center text-sm transition-all">
                                        Details
                                    </Link>
                                    <Link href="/enroll" className="py-3 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white font-bold text-center text-sm transition-all hover:shadow-lg hover:shadow-purple-500/25">
                                        Enroll
                                    </Link>
                                </div>

                                <div className="flex justify-between items-center mt-4 text-xs text-gray-500 font-medium">
                                    <span className="flex items-center gap-1">👨‍🎓 {course.students}+</span>
                                    <span className="flex items-center gap-1">⭐ {course.rating}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LearningPaths;
