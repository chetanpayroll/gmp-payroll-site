import React from 'react';
import Link from 'next/link';

import CountUpStats from './CountUpStats';

const SolutionSection = () => {
    return (
        <section className="section bg-animated" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background Decor */}
            <div style={{ position: 'absolute', top: '20%', left: '-10%', width: '400px', height: '400px', background: 'rgba(124, 58, 237, 0.1)', borderRadius: '50%', filter: 'blur(100px)' }}></div>
            <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: '300px', height: '300px', background: 'rgba(6, 182, 212, 0.1)', borderRadius: '50%', filter: 'blur(80px)' }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div className="text-center mb-16">
                    <div className="badge badge-cyan mb-6" style={{ boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)' }}>THE SOLUTION</div>
                    <h2 className="mb-6" style={{ fontSize: '3rem' }}>Become the AI Expert <span className="gradient-text-anim">Everyone Needs</span></h2>
                    <p className="text-gray max-w-2xl mx-auto" style={{ fontSize: '1.2rem' }}>Our hands-on, project-based training system takes you from confused to confident in weeks, not years.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'stretch' }}>

                    {/* BEFORE CARD */}
                    <div className="glass-card-enhanced" style={{
                        background: 'rgba(15, 23, 42, 0.6)',
                        border: '1px solid rgba(239, 68, 68, 0.2)',
                        padding: '3rem',
                        position: 'relative'
                    }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'rgba(239, 68, 68, 0.5)', borderRadius: '24px 24px 0 0' }}></div>
                        <h3 className="text-xl font-bold mb-8 text-center" style={{ color: '#fca5a5', letterSpacing: '2px' }}>THE OLD WAY</h3>

                        <div className="space-y-6">
                            {[
                                "Confused by endless AI terminology",
                                "Wasting hours on manual data entry",
                                "Fear of being replaced by tech",
                                "Feeling stuck in your current role",
                                "Watching competitors get ahead"
                            ].map((item, i) => (
                                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <div style={{ minWidth: '32px', height: '32px', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem' }}>✕</div>
                                    <p style={{ color: '#94a3b8', fontSize: '1rem', margin: 0 }}>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* AFTER CARD */}
                    <div className="glass-card-enhanced" style={{
                        background: 'linear-gradient(145deg, rgba(124, 58, 237, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)',
                        border: '1px solid rgba(124, 58, 237, 0.4)',
                        padding: '3rem',
                        position: 'relative',
                        boxShadow: '0 20px 50px -10px rgba(124, 58, 237, 0.15)'
                    }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #7c3aed, #06b6d4)', borderRadius: '24px 24px 0 0' }}></div>
                        <h3 className="text-xl font-bold mb-8 text-center" style={{ color: '#c4b5fd', letterSpacing: '2px' }}>THE AI GRAVITY WAY</h3>

                        <div className="space-y-6">
                            {[
                                "Speaking AI fluently with confidence",
                                "Automating 90% of boring tasks",
                                "Leading AI strategy at your company",
                                "Building & selling automation services",
                                "Commanding premium rates for skills"
                            ].map((item, i) => (
                                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <div style={{ minWidth: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', boxShadow: '0 4px 10px rgba(124, 58, 237, 0.3)' }}>✓</div>
                                    <p style={{ fontSize: '1.05rem', margin: 0, fontWeight: '500' }}>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center mt-16">
                    <Link href="/enroll" className="btn btn-primary btn-glow btn-hover-effect" style={{ padding: '1.2rem 3rem', fontSize: '1.2rem' }}>See How It Works →</Link>
                </div>

                {/* VISUALLY FORCED HORIZONTAL LAYOUT FOR STATS */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '4rem',
                    marginTop: '6rem',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '3rem'
                }}>
                    <div style={{ textAlign: 'center', minWidth: '150px' }}>
                        <div className="gradient-text-anim" style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '0.5rem', lineHeight: 1 }}>
                            <CountUpStats end={13} suffix="+" />
                        </div>
                        <div style={{ color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Years Experience</div>
                    </div>
                    <div style={{ textAlign: 'center', minWidth: '150px' }}>
                        <div className="gradient-text-anim" style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '0.5rem', lineHeight: 1 }}>
                            <CountUpStats end={25} suffix="+" />
                        </div>
                        <div style={{ color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Countries Implemented</div>
                    </div>
                    <div style={{ textAlign: 'center', minWidth: '150px' }}>
                        <div className="gradient-text-anim" style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '0.5rem', lineHeight: 1 }}>
                            <CountUpStats end={10000} suffix="+" />
                        </div>
                        <div style={{ color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Automations Built</div>
                    </div>
                    <div style={{ textAlign: 'center', minWidth: '150px' }}>
                        <div className="gradient-text-anim" style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '0.5rem', lineHeight: 1 }}>
                            <CountUpStats end={99.8} decimals={1} suffix="%" />
                        </div>
                        <div style={{ color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Success Rate</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
