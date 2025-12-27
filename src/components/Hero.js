"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Hero = () => {
    const [videoOpen, setVideoOpen] = useState(false);

    return (
        <>
            <section className="hero bg-animated" style={{ overflow: 'hidden' }}>
                {/* Simulated Floating Particles */}
                <div className="absolute inset-0 pointer-events-none">
                    <div style={{ position: 'absolute', top: '20%', left: '10%', width: '4px', height: '4px', background: 'white', borderRadius: '50%', opacity: 0.4, animation: 'float 5s ease-in-out infinite' }}></div>
                    <div style={{ position: 'absolute', top: '70%', right: '20%', width: '6px', height: '6px', background: 'var(--color-accent)', borderRadius: '50%', opacity: 0.3, animation: 'float 7s ease-in-out infinite' }}></div>
                    <div style={{ position: 'absolute', bottom: '30%', left: '40%', width: '3px', height: '3px', background: 'var(--color-secondary)', borderRadius: '50%', opacity: 0.5, animation: 'float 6s ease-in-out infinite' }}></div>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 10, height: '100%' }}>
                    <div className="hero-grid" style={{ height: '100%', alignItems: 'center' }}>

                        {/* LEFT SIDE: Content */}
                        <div className="hero-content fade-in-up" style={{ paddingRight: '2rem' }}>
                            <div className="glass-badge mb-4">
                                <span>🏆</span> Trusted by 5,000+ Learners Across 40+ Countries
                            </div>

                            <h1 className="mb-4 delay-100 fade-in-up" style={{ fontSize: '3.5rem', lineHeight: 1.1 }}>
                                Master AI Without <br />
                                Writing a <span className="text-gradient">Single Line of Code</span>
                            </h1>

                            <p className="text-gray mb-8 delay-200 fade-in-up" style={{ fontSize: '1.125rem', maxWidth: '600px', lineHeight: 1.6 }}>
                                Transform from AI-curious to automation expert in 90 days.
                                Build real-world AI workflows, automate your business, and future-proof your career.
                            </p>

                            <div className="flex gap-4 mb-8 delay-300 fade-in-up" style={{ flexWrap: 'wrap' }}>
                                <Link href="#join" className="btn btn-primary btn-glow" style={{ fontSize: '1.1rem', padding: '16px 32px' }}>
                                    Start Your Free AI Journey →
                                </Link>
                                <button
                                    className="btn btn-secondary flex items-center gap-2 group"
                                    onClick={() => setVideoOpen(true)}
                                    style={{ padding: '16px 24px', transition: 'all 0.3s' }}
                                >
                                    <div className="w-8 h-8 rounded-full border-2 border-white/80 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                                        <span style={{ fontSize: '14px', marginLeft: '2px' }}>►</span>
                                    </div>
                                    Watch 2-Min Demo
                                </button>
                            </div>

                            {/* Trust Indicators */}
                            <div className="flex gap-8 delay-300 fade-in-up" style={{ borderTop: '1px solid var(--color-glass-border)', paddingTop: '1.5rem', flexWrap: 'wrap' }}>
                                <div className="flex items-center gap-2">
                                    <span style={{ color: '#FBBF24' }}>⭐ 4.9/5</span>
                                    <span className="text-gray text-sm">from 2,000+ Reviews</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>🎓</span>
                                    <span className="text-gray text-sm">Industry Certificates</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>💼</span>
                                    <span className="text-gray text-sm">73% Career Advancement</span>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE: Visual */}
                        <div className="hero-visual fade-in-up delay-200" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
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
            </section>

            {/* Video Modal - Fixed Video Source & Aspect Ratio */}
            <div
                className={`modal-overlay ${videoOpen ? 'open' : ''}`}
                onClick={() => setVideoOpen(false)}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0,0,0,0.9)',
                    backdropFilter: 'blur(20px)',
                    zIndex: 9999,
                    display: videoOpen ? 'flex' : 'none',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem'
                }}
            >
                <div
                    onClick={e => e.stopPropagation()}
                    style={{
                        width: '100%',
                        maxWidth: '900px',
                        aspectRatio: '16/9',
                        background: 'black',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        position: 'relative',
                        boxShadow: '0 0 100px rgba(124, 58, 237, 0.3)',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}
                >
                    <button
                        onClick={() => setVideoOpen(false)}
                        style={{
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            zIndex: 20,
                            background: 'rgba(0,0,0,0.6)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            color: 'white',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '24px',
                            transition: 'all 0.2s'
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.6)'}
                    >
                        ×
                    </button>

                    {videoOpen && (
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/outcGtbnMuQ?autoplay=1&rel=0&modestbranding=1"
                            title="AI Automation Demo"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ display: 'block' }}
                        ></iframe>
                    )}
                </div>
            </div>
        </>
    );
};

export default Hero;
