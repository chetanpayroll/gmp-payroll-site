
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import CountUpStats from './CountUpStats';

const Hero = () => {
    const [videoOpen, setVideoOpen] = useState(false);

    return (
        <>
            <section className="hero-bg relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#0A1628]">
                {/* 1. Animated Gradient Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="gradient-orb orb-1" />
                    <div className="gradient-orb orb-2" />
                    <div className="gradient-orb orb-3" />
                    {/* Floating Particles */}
                    <div className="absolute inset-0 z-0">
                        {/* CSS for particles is in globals/enterprise css via classes or inline */}
                        <div style={{ position: 'absolute', top: '20%', left: '10%', width: '4px', height: '4px', background: 'white', borderRadius: '50%', opacity: 0.4, animation: 'float 5s ease-in-out infinite' }}></div>
                        <div style={{ position: 'absolute', top: '70%', right: '20%', width: '6px', height: '6px', background: 'var(--color-accent)', borderRadius: '50%', opacity: 0.3, animation: 'float 7s ease-in-out infinite' }}></div>
                        <div style={{ position: 'absolute', top: '40%', left: '80%', width: '3px', height: '3px', background: 'var(--color-secondary)', borderRadius: '50%', opacity: 0.5, animation: 'float 4s ease-in-out infinite' }}></div>
                    </div>
                </div>

                {/* 6. Floating Tool Badges (Desktop) */}
                <div className="hidden lg:block absolute inset-0 pointer-events-none z-10">
                    {[
                        { name: 'ChatGPT', icon: '🤖', color: '#10A37F', position: 'top-[20%] left-[5%]', delay: '0s' },
                        { name: 'Claude', icon: '🧠', color: '#D97706', position: 'top-[15%] right-[10%]', delay: '1s' },
                        { name: 'Make', icon: '⚡', color: '#7C3AED', position: 'bottom-[25%] left-[8%]', delay: '2s' },
                        { name: 'Zapier', icon: '🔗', color: '#FF4A00', position: 'bottom-[20%] right-[5%]', delay: '3s' },
                        { name: 'n8n', icon: '🔄', color: '#EA4B71', position: 'top-[50%] right-[3%]', delay: '1.5s' },
                    ].map((tool, index) => (
                        <div
                            key={tool.name}
                            className={`floating-badge ${tool.position}`}
                            style={{
                                animationDelay: tool.delay,
                                border: `1px solid ${tool.color}`,
                                boxShadow: `0 0 15px ${tool.color}40`
                            }}
                        >
                            <span className="text-xl">{tool.icon}</span>
                            <span className="font-semibold text-white text-sm">{tool.name}</span>
                        </div>
                    ))}
                </div>


                <div className="container mx-auto px-4 relative z-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="text-center lg:text-left space-y-8">

                            {/* 3. Trust Badge */}
                            <div className="flex justify-center lg:justify-start">
                                <div className="trust-badge">
                                    <span className="text-yellow-400 text-xl">⭐</span>
                                    <span className="badge-glow"></span>
                                    <span className="text-gray-300 text-sm font-medium">
                                        🏆 Premier <span className="text-white font-bold">AI Certification Institute</span> for Professionals
                                    </span>
                                </div>
                            </div>

                            {/* 2. Headline */}
                            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-white tracking-tight">
                                Learn <span className="gradient-text-animated">Artificial Intelligence</span> &<br />
                                <span className="gradient-text-animated">Automation</span> Without Code
                            </h1>

                            <p className="text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                Join our top-rated AI courses online. Transform from beginner to expert in 90 days. Master ChatGPT, Claude, and workflow automation to future-proof your career.
                            </p>

                            {/* 4. CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                                <Link href="/enroll" className="cta-primary btn-glow px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2">
                                    <span className="cta-shine"></span>
                                    <span>🚀 Start Free AI Journey</span>
                                </Link>

                                <button onClick={() => setVideoOpen(true)} className="cta-secondary px-8 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 group">
                                    <span className="play-icon w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#7C3AED] transition-colors">
                                        ▶
                                    </span>
                                    <span>Watch Demo</span>
                                </button>
                            </div>

                            {/* 5. Stats Section - Horizontal */}
                            <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10 mt-8">
                                {[
                                    { value: 4.9, suffix: '/5', label: 'Rating', icon: '⭐' },
                                    { value: 5000, suffix: '+', label: 'Learners', icon: '👨‍🎓' },
                                    { value: 40, suffix: '+', label: 'Countries', icon: '🌍' },
                                    { value: 73, suffix: '%', label: 'Growth', icon: '📈' },
                                ].map((stat, index) => (
                                    <div key={index} className="stat-card p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:-translate-y-2 transition-transform duration-300">
                                        <div className="text-2xl mb-2">{stat.icon}</div>
                                        <div className="text-3xl font-bold text-white mb-1">
                                            <CountUpStats end={stat.value} suffix={stat.suffix} decimals={stat.value % 1 !== 0 ? 1 : 0} />
                                        </div>
                                        <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Visual Column - Refined Orb/Dashboard Mockup */}
                        <div className="relative h-[500px] hidden lg:flex items-center justify-center perspective-1000">
                            {/* Central Dashboard Mockup */}
                            <div className="relative z-20 transform rotate-y-12 rotate-x-6 hover:rotate-0 transition-transform duration-700 w-full max-w-md">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
                                <div className="relative bg-[#0F172A]/90 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl">
                                    {/* Mockup Header */}
                                    <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        <div className="ml-auto text-xs text-gray-500">AI Automation Workflow.json</div>
                                    </div>
                                    {/* Mockup Content */}
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center text-2xl">🤖</div>
                                            <div className="flex-1">
                                                <div className="h-2 w-24 bg-white/20 rounded mb-2"></div>
                                                <div className="h-2 w-16 bg-white/10 rounded"></div>
                                            </div>
                                            <div className="text-green-400 text-xs">Active</div>
                                        </div>
                                        <div className="h-8 w-1 border-l-2 border-dashed border-white/20 ml-6"></div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center text-2xl">⚡</div>
                                            <div className="flex-1">
                                                <div className="h-2 w-32 bg-white/20 rounded mb-2"></div>
                                                <div className="h-2 w-20 bg-white/10 rounded"></div>
                                            </div>
                                            <div className="text-purple-400 text-xs">Processing</div>
                                        </div>
                                        <div className="h-8 w-1 border-l-2 border-dashed border-white/20 ml-6"></div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-2xl">📧</div>
                                            <div className="flex-1">
                                                <div className="h-2 w-28 bg-white/20 rounded mb-2"></div>
                                                <div className="h-2 w-12 bg-white/10 rounded"></div>
                                            </div>
                                            <div className="text-blue-400 text-xs">Sent</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {videoOpen && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fade-in"
                    onClick={() => setVideoOpen(false)}
                >
                    <div
                        className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setVideoOpen(false)}
                            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                        >
                            ✕
                        </button>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/outcGtbnMuQ?autoplay=1&rel=0&modestbranding=1"
                            title="AI Automation Demo"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    );
};

export default Hero;
