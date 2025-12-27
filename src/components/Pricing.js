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

                <div className="flex flex-col gap-8 max-w-5xl mx-auto">
                    {/* Starter Plan */}
                    <TiltCard className="group glass-card-enhanced relative overflow-hidden p-8">
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-400 to-green-600"></div>
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            {/* Header */}
                            <div className="w-full md:w-1/4 text-center md:text-left">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌱</div>
                                <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                                <p className="text-sm text-gray-400">Perfect for beginners starting their AI journey.</p>
                            </div>

                            {/* Features */}
                            <div className="w-full md:w-1/2 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
                                <h4 className="text-xs font-bold text-green-400 uppercase tracking-widest mb-4">What's Included</h4>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300">
                                    <li className="flex gap-2 items-center"><span className="text-green-400">✓</span> Foundations Course</li>
                                    <li className="flex gap-2 items-center"><span className="text-green-400">✓</span> 20+ Prompt Templates</li>
                                    <li className="flex gap-2 items-center"><span className="text-green-400">✓</span> Community Access</li>
                                    <li className="flex gap-2 items-center"><span className="text-green-400">✓</span> Basic Assignments</li>
                                </ul>
                            </div>

                            {/* Price & CTA */}
                            <div className="w-full md:w-1/4 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
                                <div className="mb-4 text-center">
                                    <span className="text-3xl font-bold text-white">{annual ? '₹4,000' : '₹500'}</span>
                                    <span className="text-gray-400 text-sm block">{annual ? '/year' : '/mo'}</span>
                                </div>
                                <button className="btn btn-secondary btn-hover-effect w-full text-sm">Start Learning</button>
                            </div>
                        </div>
                    </TiltCard>

                    {/* Professional Plan (Featured) */}
                    <TiltCard className="group glass-card-enhanced relative overflow-hidden p-8 border border-purple-500/30">
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>
                        {/* Most Popular Badge */}
                        <div className="absolute top-0 right-0 bg-gradient-to-l from-purple-600 to-pink-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg shadow-lg">
                            MOST POPULAR 🚀
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            {/* Header */}
                            <div className="w-full md:w-1/4 text-center md:text-left">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
                                <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                                <p className="text-sm text-gray-400">For serious career advancement & mastery.</p>
                            </div>

                            {/* Features */}
                            <div className="w-full md:w-1/2 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
                                <h4 className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-4">Everything in Starter +</h4>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white font-medium">
                                    <li className="flex gap-2 items-center"><span className="text-purple-400">✓</span> All Learning Paths</li>
                                    <li className="flex gap-2 items-center"><span className="text-purple-400">✓</span> 100+ Automations</li>
                                    <li className="flex gap-2 items-center"><span className="text-purple-400">✓</span> Weekly Workshops</li>
                                    <li className="flex gap-2 items-center"><span className="text-purple-400">✓</span> Verified Certificates</li>
                                </ul>
                            </div>

                            {/* Price & CTA */}
                            <div className="w-full md:w-1/4 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
                                <div className="mb-4 text-center">
                                    <span className="text-4xl font-bold gradient-text-anim">{annual ? '₹8,000' : '₹1,000'}</span>
                                    <span className="text-gray-400 text-sm block">{annual ? '/year' : '/mo'}</span>
                                </div>
                                <button className="btn btn-primary btn-glow btn-hover-effect w-full text-sm shadow-lg shadow-purple-900/40">Go Professional</button>
                            </div>
                        </div>
                    </TiltCard>

                    {/* Enterprise Plan */}
                    <TiltCard className="group glass-card-enhanced relative overflow-hidden p-8">
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-600"></div>
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            {/* Header */}
                            <div className="w-full md:w-1/4 text-center md:text-left">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏢</div>
                                <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                                <p className="text-sm text-gray-400">Custom training for teams & organizations.</p>
                            </div>

                            {/* Features */}
                            <div className="w-full md:w-1/2 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
                                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-4">For Teams</h4>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300">
                                    <li className="flex gap-2 items-center"><span className="text-cyan-400">✓</span> Custom Curriculum</li>
                                    <li className="flex gap-2 items-center"><span className="text-cyan-400">✓</span> Dedicated Account Manager</li>
                                    <li className="flex gap-2 items-center"><span className="text-cyan-400">✓</span> Onsite/Virtual Workshops</li>
                                    <li className="flex gap-2 items-center"><span className="text-cyan-400">✓</span> Team Analytics</li>
                                </ul>
                            </div>

                            {/* Price & CTA */}
                            <div className="w-full md:w-1/4 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
                                <div className="mb-4 text-center">
                                    <span className="text-3xl font-bold text-white">Custom</span>
                                    <span className="text-gray-400 text-sm block">Contact for pricing</span>
                                </div>
                                <button className="btn btn-secondary btn-hover-effect w-full text-sm">Contact Sales</button>
                            </div>
                        </div>
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
