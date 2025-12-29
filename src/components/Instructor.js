
"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CountUpStats from './CountUpStats';

const Instructor = () => {
    return (
        <section className="instructor-section py-24 relative overflow-hidden bg-gradient-to-b from-[#0A1628] to-[#0F172A]" id="instructor">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column - Image with Effects */}
                    <div className="instructor-image-col relative order-2 lg:order-1">
                        <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group">
                            {/* Animated Border */}
                            <div className="image-border-animated absolute inset-0 z-0 opacity-75"></div>

                            {/* Main Image */}
                            <div className="absolute inset-[3px] bg-[#0A1628] rounded-[22px] overflow-hidden z-10 transition-transform duration-500 group-hover:scale-105">
                                <Image
                                    src="/chetan-sharma-new.png"
                                    alt="Chetan 'Champ' Sharma - Founder of AI Gravity Academy"
                                    fill
                                    className="object-cover object-top hover:scale-110 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, 500px"
                                    onError={(e) => { e.target.src = '/chetan-sharma.png' }} // Fallback
                                />
                            </div>

                            {/* Floating Achievement Badges */}
                            <div className="absolute top-8 -right-4 md:-right-8 bg-[#0F172A]/90 backdrop-blur-md border border-white/10 p-4 rounded-xl z-20 shadow-xl animate-float delay-0">
                                <div className="text-3xl font-extrabold text-white text-center">
                                    <CountUpStats end={5} suffix="K+" />
                                </div>
                                <div className="text-xs text-gray-400 uppercase tracking-widest text-center font-bold">Students</div>
                            </div>

                            <div className="absolute bottom-12 -left-4 md:-left-8 bg-[#0F172A]/90 backdrop-blur-md border border-white/10 p-4 rounded-xl z-20 shadow-xl animate-float delay-1000">
                                <div className="text-3xl font-extrabold text-white text-center">
                                    <CountUpStats end={13} suffix="+" />
                                </div>
                                <div className="text-xs text-gray-400 uppercase tracking-widest text-center font-bold">Years Exp</div>
                            </div>

                            <div className="absolute top-1/2 -left-8 bg-[#0F172A]/90 backdrop-blur-md border border-white/10 p-3 rounded-xl z-20 shadow-xl animate-float delay-2000 flex items-center gap-2">
                                <span className="text-2xl">🏆</span>
                                <span className="text-xs text-gray-300 font-bold uppercase">Fortune 500<br />Experience</span>
                            </div>
                        </div>

                        {/* Experience Ring Background */}
                        <div className="absolute -inset-10 z-0 opacity-20 pointer-events-none">
                            <svg className="w-full h-full experience-ring" viewBox="0 0 200 200">
                                <circle className="stroke-purple-500" cx="100" cy="100" r="90" fill="none" strokeWidth="1" strokeDasharray="10, 10" />
                            </svg>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="instructor-content-col order-1 lg:order-2">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                            👨‍🏫 Meet Your Instructor
                        </span>

                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                            Hi, I'm Chetan <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]">'Champ'</span> Sharma
                        </h2>

                        <p className="text-xl text-cyan-400 font-medium mb-10">
                            🚀 Global Payroll Expert → AI Educator → Your Career Catalyst
                        </p>

                        {/* Story Cards */}
                        <div className="space-y-6 mb-10">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors">
                                <div className="flex gap-4">
                                    <div className="text-3xl">😤</div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-2">The Problem I Faced</h4>
                                        <p className="text-gray-400 leading-relaxed">
                                            13 years in global payroll, managing 25+ countries. 60+ hour weeks. Drowning in spreadsheets. I knew there had to be a better way.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl"></div>
                                <div className="flex gap-4 relative z-10">
                                    <div className="text-3xl">💡</div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-2">The AI Discovery</h4>
                                        <p className="text-gray-300 leading-relaxed">
                                            When I discovered AI, everything changed. I automated 70% of my tasks, saved 15+ hours weekly, and earned <strong className="text-cyan-400">5 promotions in just 4 years</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors">
                                <div className="flex gap-4">
                                    <div className="text-3xl">🎯</div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-2">My Mission Now</h4>
                                        <p className="text-gray-400 leading-relaxed">
                                            I'm on a mission to help professionals like you master AI without technical overwhelm. Real skills. Real results. No coding required.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 mb-10">
                            <Link href="/about" className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white font-bold hover:shadow-lg hover:shadow-purple-500/25 transition-all transform hover:-translate-y-1">
                                🎓 Learn From Champ
                            </Link>
                            <Link href="/contact" className="px-8 py-4 rounded-xl bg-transparent border border-white/20 text-white font-bold hover:bg-white/5 transition-all flex items-center gap-2">
                                📅 Book Strategy Call
                            </Link>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            <span className="text-gray-500 text-sm font-medium">Connect with me:</span>
                            <div className="flex gap-3">
                                <a href="https://linkedin.com/in/chetan-sharma" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-colors text-white">
                                    in
                                </a>
                                <a href="https://twitter.com/chetansharma" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-black hover:border-white/50 transition-colors text-white">
                                    𝕏
                                </a>
                                <a href="https://youtube.com/@aigravity" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-colors text-white">
                                    ▶
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Instructor;
