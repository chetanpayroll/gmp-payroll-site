"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import CountUpStats from './CountUpStats';

const Hero = () => {
    const [videoOpen, setVideoOpen] = useState(false);

    return (
        <>
            <section
                className="
                    relative min-h-screen min-h-[100dvh]
                    flex items-center justify-center
                    pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-0 lg:pb-0
                    px-4 sm:px-6 lg:px-8
                    overflow-hidden
                    bg-[#0A1628]
                "
            >
                {/* Background - Simplified on mobile for performance */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Gradient orbs - hidden on small mobile for performance */}
                    <div className="hidden sm:block absolute top-[20%] left-[10%] w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
                    <div className="hidden sm:block absolute bottom-[20%] right-[20%] w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl" />

                    {/* Floating Particles (Preserved) */}
                    <div className="absolute inset-0 opacity-40">
                        <div style={{ position: 'absolute', top: '20%', left: '10%', width: '4px', height: '4px', background: 'white', borderRadius: '50%', opacity: 0.4, animation: 'float 5s ease-in-out infinite' }}></div>
                        <div style={{ position: 'absolute', top: '70%', right: '20%', width: '6px', height: '6px', background: 'var(--color-accent)', borderRadius: '50%', opacity: 0.3, animation: 'float 7s ease-in-out infinite' }}></div>
                        <div style={{ position: 'absolute', bottom: '30%', left: '40%', width: '3px', height: '3px', background: 'var(--color-secondary)', borderRadius: '50%', opacity: 0.5, animation: 'float 6s ease-in-out infinite' }}></div>
                    </div>
                </div>

                <div className="relative z-10 container mx-auto">
                    <div className="
                        grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12
                        items-center
                    ">
                        {/* Content Column */}
                        <div className="
                            text-center lg:text-left
                            order-2 lg:order-1
                            space-y-6 sm:space-y-8
                            fade-in-up
                        ">
                            {/* Trust Badge / H2 SEO Context */}
                            <div className="
                                inline-flex items-center gap-2
                                px-3 py-1.5 sm:px-4 sm:py-2
                                rounded-full
                                bg-white/5 border border-white/10
                                text-xs sm:text-sm text-gray-300
                            ">
                                <span className="text-yellow-400">⭐</span>
                                <h2 className="text-sm font-medium inline">Premier <span className="text-white font-bold">AI Certification Institute</span> for Professionals</h2>
                            </div>

                            {/* Main Headline - H1 */}
                            <h1 className="
                                text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                                font-bold leading-tight
                                text-white
                                delay-100 fade-in-up
                            ">
                                Learn <span className="text-white">Artificial Intelligence</span> &{' '}
                                <span className="
                                    bg-gradient-to-r from-[#7C3AED] via-[#06B6D4] to-[#7C3AED]
                                    bg-[length:200%_auto]
                                    bg-clip-text text-transparent
                                    animate-gradient
                                ">
                                    Automation
                                </span>{' '}
                                Without Code
                            </h1>

                            {/* Subheadline - SEO rich paragraph */}
                            <p className="
                                text-base sm:text-lg lg:text-xl
                                text-gray-400
                                max-w-xl mx-auto lg:mx-0
                                leading-relaxed
                                delay-200 fade-in-up
                            ">
                                Join our top-rated <strong>AI courses online</strong>. Transform from beginner to expert in 90 days.
                                Master ChatGPT, Claude, and workflow automation to future-proof your career.
                            </p>

                            {/* CTA Buttons */}
                            <div className="
                                flex flex-col sm:flex-row
                                gap-3 sm:gap-4
                                justify-center lg:justify-start
                                delay-300 fade-in-up
                            ">
                                {/* Primary CTA */}
                                <Link
                                    href="/enroll"
                                    className="
                                        w-full sm:w-auto
                                        inline-flex items-center justify-center
                                        px-6 sm:px-8 py-3.5 sm:py-4
                                        rounded-xl
                                        text-base sm:text-lg font-bold text-white
                                        bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]
                                        hover:shadow-xl hover:shadow-purple-500/30
                                        transform hover:scale-[1.02] active:scale-[0.98]
                                        transition-all duration-300
                                        min-h-[52px]
                                    "
                                >
                                    Start Free AI Journey
                                </Link>

                                {/* Secondary CTA */}
                                <button
                                    onClick={() => setVideoOpen(true)}
                                    className="
                                        w-full sm:w-auto
                                        inline-flex items-center justify-center gap-2
                                        px-6 sm:px-8 py-3.5 sm:py-4
                                        rounded-xl
                                        text-base sm:text-lg font-semibold text-white
                                        bg-transparent border border-white/20
                                        hover:bg-white/5 hover:border-white/40
                                        transform hover:scale-[1.02] active:scale-[0.98]
                                        transition-all duration-300
                                        min-h-[52px]
                                    "
                                >
                                    <span>▶</span> Watch Demo
                                </button>
                            </div>

                            {/* Trust Indicators */}
                            <div className="
                                grid grid-cols-2 sm:flex sm:flex-wrap
                                gap-4 sm:gap-6 lg:gap-8
                                justify-center lg:justify-start
                                pt-4 sm:pt-6
                                border-t border-white/10
                                delay-300 fade-in-up
                            ">
                                <div className="text-center sm:text-left">
                                    <div className="text-xl sm:text-2xl font-bold text-white text-yellow-500">
                                        <CountUpStats end={4.9} decimals={1} suffix="/5" />
                                    </div>
                                    <div className="text-xs sm:text-sm text-gray-500">Rating</div>
                                </div>
                                <div className="text-center sm:text-left">
                                    <div className="text-xl sm:text-2xl font-bold text-white">
                                        <CountUpStats end={5000} suffix="+" />
                                    </div>
                                    <div className="text-xs sm:text-sm text-gray-500">Learners</div>
                                </div>
                                <div className="text-center sm:text-left">
                                    <div className="text-xl sm:text-2xl font-bold text-white">
                                        <CountUpStats end={40} suffix="+" />
                                    </div>
                                    <div className="text-xs sm:text-sm text-gray-500">Countries</div>
                                </div>
                                <div className="text-center sm:text-left">
                                    <div className="text-xl sm:text-2xl font-bold text-white">
                                        <CountUpStats end={73} suffix="%" />
                                    </div>
                                    <div className="text-xs sm:text-sm text-gray-500">Growth</div>
                                </div>
                            </div>
                        </div>

                        {/* Visual Column */}
                        <div className="
                            order-1 lg:order-2
                            relative
                            h-64 sm:h-96 lg:h-auto
                            flex items-center justify-center
                            fade-in-up delay-200
                        ">
                            {/* Scaled down orbit for mobile */}
                            <div className="transform scale-[0.55] sm:scale-75 lg:scale-100 origin-center">
                                <div className="orbit-container">
                                    {/* Central Dashboard Mockup */}
                                    <div style={{
                                        width: '280px',
                                        height: '180px',
                                        background: 'rgba(10, 22, 40, 0.8)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '12px',
                                        backdropFilter: 'blur(12px)',
                                        zIndex: 10,
                                        position: 'relative',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        overflow: 'hidden',
                                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                                    }}>
                                        <div style={{ height: '30px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', padding: '0 12px', gap: '6px' }}>
                                            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f56' }}></div>
                                            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffbd2e' }}></div>
                                            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#27c93f' }}></div>
                                        </div>
                                        <div style={{ padding: '16px', display: 'flex', gap: '10px' }}>
                                            <div style={{ width: '30%', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', height: '100px' }}></div>
                                            <div style={{ width: '70%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                                <div style={{ height: '60px', background: 'rgba(124, 58, 237, 0.2)', borderRadius: '4px', border: '1px dashed rgba(124, 58, 237, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', color: '#c4b5fd' }}>
                                                    AI Workflow Active
                                                </div>
                                                <div style={{ height: '8px', width: '100%', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}></div>
                                                <div style={{ height: '8px', width: '60%', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="orbit-item glass-badge" style={{ animationDuration: '15s', top: '10%', left: '50%' }}>
                                        <span style={{ background: '#10a37f', width: 20, height: 20, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>AI</span> ChatGPT
                                    </div>
                                    <div className="orbit-item glass-badge" style={{ animationDuration: '18s', animationDelay: '-5s', top: '50%', left: '90%' }}>
                                        <span style={{ background: '#d97757', width: 20, height: 20, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>★</span> Claude
                                    </div>
                                    <div className="orbit-item glass-badge" style={{ animationDuration: '20s', animationDelay: '-10s', top: '90%', left: '50%' }}>
                                        <span style={{ background: '#6420ff', width: 20, height: 20, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>M</span> Make
                                    </div>
                                    <div className="orbit-item glass-badge" style={{ animationDuration: '22s', animationDelay: '-15s', top: '50%', left: '10%' }}>
                                        <span style={{ background: '#ff4f00', width: 20, height: 20, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>Z</span> Zapier
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator - Hidden on mobile */}
                <div className="
                    hidden lg:flex
                    absolute bottom-8 left-1/2 -translate-x-1/2
                    flex-col items-center gap-2
                    text-gray-500
                    animate-bounce
                ">
                    <span className="text-sm">Scroll to explore</span>
                    <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
                        <div className="w-1.5 h-3 bg-gray-500 rounded-full animate-pulse" />
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
