"use client";
import React, { useState } from 'react';
import Link from 'next/link';

// Inline SVGs
const CheckIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="20 6 9 17 4 12"></polyline></svg>
);

const plans = [
    {
        name: "Starter",
        icon: "🌱",
        desc: "Perfect for beginners starting their AI journey.",
        price: { monthly: "₹500", annual: "₹4,000" },
        features: [
            "Foundations Course",
            "20+ Prompt Templates",
            "Community Access",
            "Basic Assignments"
        ],
        cta: "Start Learning",
        popular: false,
        color: "green"
    },
    {
        name: "Professional",
        icon: "🚀",
        desc: "For serious career advancement & mastery.",
        price: { monthly: "₹1,000", annual: "₹8,000" },
        features: [
            "All Learning Paths",
            "100+ Automations",
            "Weekly Workshops",
            "Verified Certificates"
        ],
        cta: "Go Professional",
        popular: true,
        color: "purple"
    },
    {
        name: "Enterprise",
        icon: "🏢",
        desc: "Custom training for teams & groups.",
        price: { monthly: "Custom", annual: "Custom" },
        features: [
            "Custom Curriculum",
            "Dedicated Account Manager",
            "Onsite/Virtual Workshops",
            "Team Analytics"
        ],
        cta: "Contact Sales",
        popular: false,
        color: "cyan"
    }
];

const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState('annual');

    return (
        <section id="pricing" className="py-20 sm:py-24 bg-[#0B1221] relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-[800px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider mb-6">
                        <span>Pricing</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        Invest in Your <span className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">AI Future</span>
                    </h2>
                    <p className="text-gray-400 text-lg sm:text-xl">
                        Choose the plan that fits your career goals.
                    </p>
                </div>

                {/* Billing Toggle - Touch Friendly */}
                <div className="flex justify-center mb-12 sm:mb-16">
                    <div className="bg-white/5 p-1.5 rounded-2xl border border-white/10 flex items-center relative">
                        {/* Sliding Background */}
                        <div
                            className={`
                                absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-xl bg-[#7C3AED] shadow-lg
                                transition-all duration-300 ease-in-out
                                ${billingCycle === 'monthly' ? 'left-1.5' : 'left-[calc(50%+3px)]'}
                            `}
                        />

                        <button
                            onClick={() => setBillingCycle('monthly')}
                            className={`
                                relative z-10 px-6 sm:px-8 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-300
                                ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400 hover:text-white'}
                            `}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle('annual')}
                            className={`
                                relative z-10 px-6 sm:px-8 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-300 flex items-center gap-2
                                ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400 hover:text-white'}
                            `}
                        >
                            Annual
                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded text-white ${billingCycle === 'annual' ? 'bg-white/20' : 'bg-[#7C3AED]'} hidden sm:inline-block`}>
                                -30%
                            </span>
                        </button>
                    </div>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => {
                        const isPopular = plan.popular;
                        return (
                            <div
                                key={index}
                                className={`
                                    relative group
                                    bg-[#0F172A]/60 backdrop-blur-xl border 
                                    ${isPopular ? 'border-[#7C3AED] shadow-2xl shadow-purple-900/20' : 'border-white/10 hover:border-white/20'}
                                    rounded-3xl overflow-hidden
                                    flex flex-col
                                    transition-all duration-300
                                    ${isPopular ? 'scale-105 md:scale-110 z-10' : 'hover:scale-[1.02]'}
                                `}
                            >
                                {/* Most Popular Badge */}
                                {isPopular && (
                                    <div className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white text-[10px] font-bold uppercase tracking-widest text-center py-1.5">
                                        Most Popular
                                    </div>
                                )}

                                <div className="p-8 flex flex-col h-full">
                                    {/* Plan Header */}
                                    <div className="mb-8">
                                        <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{plan.icon}</div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                        <p className="text-gray-400 text-sm">{plan.desc}</p>
                                    </div>

                                    {/* Price */}
                                    <div className="mb-8 p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
                                        <div className={`text-3xl sm:text-4xl font-bold ${isPopular ? 'text-white' : 'text-gray-200'}`}>
                                            {plan.price[billingCycle]}
                                        </div>
                                        {plan.price.monthly !== 'Custom' && (
                                            <div className="text-gray-500 text-sm mt-1">
                                                per {billingCycle === 'monthly' ? 'month' : 'year'}
                                            </div>
                                        )}
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-4 mb-8 flex-1">
                                        {plan.features.map((feature, i) => (
                                            <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                                <div className={`mt-0.5 p-0.5 rounded-full ${isPopular ? 'bg-purple-500/20 text-purple-400' : 'bg-green-500/20 text-green-400'}`}>
                                                    <CheckIcon className="w-3 h-3" />
                                                </div>
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <Link
                                        href={`/enroll?course=${encodeURIComponent(plan.name + " Plan")}`}
                                        className={`
                                            w-full py-4 rounded-xl font-bold text-sm block text-center
                                            transition-all duration-300 shadow-lg
                                            ${isPopular
                                                ? 'bg-[#7C3AED] text-white hover:bg-[#6D28D9] hover:shadow-purple-500/25'
                                                : 'bg-white text-black hover:bg-gray-100 hover:shadow-white/10'
                                            }
                                        `}
                                    >
                                        {plan.cta}
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Guarantee */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm backdrop-blur-sm">
                        <span className="text-xl">🛡️</span>
                        <span>30-Day Money-Back Guarantee • Try risk-free</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
