"use client";
import React, { useState } from 'react';

const Pricing = () => {
    const [annual, setAnnual] = useState(true);

    return (
        <section className="section bg-dark" id="pricing">
            <div className="container">
                <div className="text-center mb-12">
                    <div className="badge badge-green mb-4">PRICING</div>
                    <h2 className="mb-4">Invest in Your <span className="text-gradient">AI Future</span></h2>
                    <p className="text-gray">All plans include our 30-day money-back guarantee.</p>
                </div>

                <div className="pricing-toggle">
                    <span className={`cursor-pointer ${!annual ? 'text-white font-bold' : 'text-gray'}`} onClick={() => setAnnual(false)}>Monthly</span>
                    <div
                        className="w-14 h-8 rounded-full bg-white/10 relative cursor-pointer transition-colors hover:bg-white/20"
                        onClick={() => setAnnual(!annual)}
                    >
                        <div className={`w-6 h-6 rounded-full bg-white absolute top-1 transition-all ${annual ? 'right-1' : 'left-1'}`}></div>
                    </div>
                    <span className={`cursor-pointer ${annual ? 'text-white font-bold' : 'text-gray'}`} onClick={() => setAnnual(true)}>
                        Annual <span className="text-xs text-green-400 font-normal ml-1">(Save 30%)</span>
                    </span>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Starter */}
                    <div className="pricing-card">
                        <h3 className="text-xl font-bold mb-2">Starter</h3>
                        <p className="text-sm text-gray mb-6">Perfect for AI-curious beginners</p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold">{annual ? '$397' : '$47'}</span>
                            <span className="text-gray text-sm">{annual ? '/year' : '/mo'}</span>
                        </div>
                        <ul className="space-y-4 mb-8 text-sm text-gray-300">
                            <li className="flex gap-2"><span>✓</span> Access to Foundations Course</li>
                            <li className="flex gap-2"><span>✓</span> 20+ Prompt Templates</li>
                            <li className="flex gap-2"><span>✓</span> Community Access (Read-only)</li>
                        </ul>
                        <button className="btn btn-secondary w-full">Start Learning</button>
                    </div>

                    {/* Professional */}
                    <div className="pricing-card featured">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase">
                            Most Popular
                        </div>
                        <h3 className="text-xl font-bold mb-2">Professional</h3>
                        <p className="text-sm text-gray mb-6">For serious career advancement</p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-gradient">{annual ? '$797' : '$97'}</span>
                            <span className="text-gray text-sm">{annual ? '/year' : '/mo'}</span>
                        </div>
                        <ul className="space-y-4 mb-8 text-sm text-gray-300">
                            <li className="flex gap-2 text-white font-semibold"><span>✓</span> Everything in Starter</li>
                            <li className="flex gap-2"><span>✓</span> All Courses & Learning Paths</li>
                            <li className="flex gap-2"><span>✓</span> 100+ Automation Templates</li>
                            <li className="flex gap-2"><span>✓</span> Weekly Live Workshops</li>
                            <li className="flex gap-2"><span>✓</span> Blockchain-Verified Certificates</li>
                        </ul>
                        <button className="btn btn-primary btn-glow w-full">Go Professional</button>
                    </div>

                    {/* Enterprise */}
                    <div className="pricing-card">
                        <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                        <p className="text-sm text-gray mb-6">Team & corporate training</p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold">Custom</span>
                        </div>
                        <ul className="space-y-4 mb-8 text-sm text-gray-300">
                            <li className="flex gap-2"><span>✓</span> Custom Training Programs</li>
                            <li className="flex gap-2"><span>✓</span> Dedicated Account Manager</li>
                            <li className="flex gap-2"><span>✓</span> Onsite/Virtual Workshops</li>
                            <li className="flex gap-2"><span>✓</span> Volume Licensing</li>
                        </ul>
                        <button className="btn btn-secondary w-full">Contact Sales</button>
                    </div>
                </div>

                <div className="text-center mt-12 text-sm text-gray">
                    🛡️ 30-Day Money-Back Guarantee • Try risk-free.
                </div>
            </div>
        </section>
    );
};

export default Pricing;
