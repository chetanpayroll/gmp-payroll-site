"use client";
import React, { useState } from 'react';

import TiltCard from './TiltCard';

const Pricing = () => {
    const [annual, setAnnual] = useState(true);

    return (
        <section className="section bg-dark" id="pricing" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background Effects */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120%', height: '120%', background: 'radial-gradient(circle at center, rgba(124, 58, 237, 0.05) 0%, transparent 60%)', pointerEvents: 'none' }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <div className="text-center mb-16">
                    <div style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '50px', background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)', color: '#86efac', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '1rem', letterSpacing: '1px' }}>PRICING</div>
                    <h2 className="mb-4" style={{ fontSize: '3rem', fontWeight: 'bold' }}>Invest in Your <span className="gradient-text-anim">AI Future</span></h2>
                    <p className="text-gray" style={{ fontSize: '1.2rem' }}>Choose the plan that fits your career goals.</p>
                </div>

                {/* Toggle */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '4rem' }}>
                    <span
                        onClick={() => setAnnual(false)}
                        style={{ cursor: 'pointer', color: !annual ? 'white' : '#64748b', fontWeight: !annual ? 'bold' : 'normal', transition: '0.3s' }}
                    >Monthly</span>

                    <div
                        onClick={() => setAnnual(!annual)}
                        style={{
                            width: '60px',
                            height: '32px',
                            background: annual ? '#7c3aed' : 'rgba(255,255,255,0.1)',
                            borderRadius: '30px',
                            position: 'relative',
                            cursor: 'pointer',
                            transition: '0.3s'
                        }}
                    >
                        <div style={{
                            width: '24px',
                            height: '24px',
                            background: 'white',
                            borderRadius: '50%',
                            position: 'absolute',
                            top: '4px',
                            left: annual ? '32px' : '4px',
                            transition: '0.3s',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                        }}></div>
                    </div>

                    <span
                        onClick={() => setAnnual(true)}
                        style={{ cursor: 'pointer', color: annual ? 'white' : '#64748b', fontWeight: annual ? 'bold' : 'normal', transition: '0.3s' }}
                    >
                        Annual <span style={{ color: '#4ade80', fontSize: '0.8rem', marginLeft: '4px' }}> (Save 30%)</span>
                    </span>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem',
                    alignItems: 'stretch'
                }}>
                    {/* Starter Plan */}
                    <TiltCard className="glass-card-enhanced" style={{
                        padding: '2.5rem',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <h3 className="text-xl font-bold mb-2">Starter</h3>
                        <p className="text-sm text-gray mb-6 h-10">Perfect for AI-curious beginners starting their journey.</p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold">{annual ? '₹4,000' : '₹500'}</span>
                            <span className="text-gray text-sm">{annual ? '/year' : '/mo'}</span>
                        </div>
                        <ul className="space-y-4 mb-8 text-sm text-gray flex-grow">
                            <li className="flex gap-3">
                                <span style={{ color: '#4ade80' }}>✓</span> Access to Foundations Course
                            </li>
                            <li className="flex gap-3">
                                <span style={{ color: '#4ade80' }}>✓</span> 20+ Prompt Templates
                            </li>
                            <li className="flex gap-3">
                                <span style={{ color: '#4ade80' }}>✓</span> Community Access (Read-only)
                            </li>
                        </ul>
                        <button className="btn btn-secondary btn-hover-effect w-full" style={{ borderRadius: '12px', padding: '14px' }}>Start Learning</button>
                    </TiltCard>

                    {/* Professional Plan (Featured) */}
                    <TiltCard className="glass-card-enhanced" style={{
                        border: '1px solid #7c3aed',
                        padding: '2.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        boxShadow: '0 0 40px rgba(124, 58, 237, 0.15)',
                        zIndex: 10
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '-14px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            background: 'linear-gradient(90deg, #7c3aed, #06b6d4)',
                            color: 'white',
                            fontSize: '0.75rem',
                            fontWeight: 'bold',
                            padding: '6px 16px',
                            borderRadius: '50px',
                            whiteSpace: 'nowrap',
                            boxShadow: '0 4px 10px rgba(124, 58, 237, 0.4)'
                        }}>
                            MOST POPULAR
                        </div>

                        <h3 className="text-xl font-bold mb-2">Professional</h3>
                        <p className="text-sm text-gray mb-6 h-10">For serious career advancement and mastery.</p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold gradient-text-anim">{annual ? '₹8,000' : '₹1,000'}</span>
                            <span className="text-gray text-sm">{annual ? '/year' : '/mo'}</span>
                        </div>
                        <ul className="space-y-4 mb-8 text-sm flex-grow">
                            <li className="flex gap-3 font-semibold">
                                <span style={{ color: '#7c3aed' }}>✓</span> Everything in Starter
                            </li>
                            <li className="flex gap-3">
                                <span style={{ color: '#7c3aed' }}>✓</span> All Courses & Learning Paths
                            </li>
                            <li className="flex gap-3">
                                <span style={{ color: '#7c3aed' }}>✓</span> 100+ Automation Templates
                            </li>
                            <li className="flex gap-3">
                                <span style={{ color: '#7c3aed' }}>✓</span> Weekly Live Workshops
                            </li>
                            <li className="flex gap-3">
                                <span style={{ color: '#7c3aed' }}>✓</span> Blockchain-Verified Certificates
                            </li>
                        </ul>
                        <button className="btn btn-primary btn-glow btn-hover-effect w-full" style={{ borderRadius: '12px', padding: '14px' }}>Go Professional</button>
                    </TiltCard>

                    {/* Enterprise Plan */}
                    <TiltCard className="glass-card-enhanced" style={{
                        padding: '2.5rem',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                        <p className="text-sm text-gray mb-6 h-10">Team & corporate training for organizations.</p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold">Custom</span>
                        </div>
                        <ul className="space-y-4 mb-8 text-sm text-gray flex-grow">
                            <li className="flex gap-3">
                                <span style={{ color: '#06b6d4' }}>✓</span> Custom Training Programs
                            </li>
                            <li className="flex gap-3">
                                <span style={{ color: '#06b6d4' }}>✓</span> Dedicated Account Manager
                            </li>
                            <li className="flex gap-3">
                                <span style={{ color: '#06b6d4' }}>✓</span> Onsite/Virtual Workshops
                            </li>
                            <li className="flex gap-3">
                                <span style={{ color: '#06b6d4' }}>✓</span> Volume Licensing
                            </li>
                        </ul>
                        <button className="btn btn-secondary btn-hover-effect w-full" style={{ borderRadius: '12px', padding: '14px' }}>Contact Sales</button>
                    </TiltCard>
                </div>

                <div className="text-center mt-12 text-sm text-gray">
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.05)', padding: '8px 16px', borderRadius: '50px' }}>
                        🛡️ 30-Day Money-Back Guarantee • Try risk-free.
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
