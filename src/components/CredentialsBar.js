
"use client";
import React from 'react';
import CountUpStats from './CountUpStats';

const CredentialsBar = () => {
    return (
        <section className="credentials-bar py-10 relative overflow-hidden border-y border-white/5 bg-[#0F172A]">
            <div className="container mx-auto px-4">
                <div className="hidden md:flex justify-between items-center max-w-6xl mx-auto">
                    {[
                        { value: 13, suffix: '+', label: 'Years Experience', icon: '🏆' },
                        { value: 25, suffix: '+', label: 'Countries Implemented', icon: '🌍' },
                        { value: 10000, suffix: '+', label: 'Automations Built', icon: '⚡' },
                        { value: 99.8, suffix: '%', label: 'Success Rate', icon: '✅' },
                    ].map((stat, index) => (
                        <div key={index} className="flex items-center gap-4 group">
                            <div className="text-4xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                                {stat.icon}
                            </div>
                            <div>
                                <div className="text-4xl font-extrabold text-white flex items-baseline leading-none">
                                    <CountUpStats end={stat.value} decimals={stat.value % 1 !== 0 ? 1 : 0} />
                                    <span className="text-cyan-400 text-2xl ml-1">{stat.suffix}</span>
                                </div>
                                <div className="text-sm text-gray-400 font-bold uppercase tracking-wider mt-1">
                                    {stat.label}
                                </div>
                            </div>
                            {index < 3 && (
                                <div className="h-16 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent mx-8"></div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Grid */}
                <div className="md:hidden grid grid-cols-2 gap-8">
                    {[
                        { value: 13, suffix: '+', label: 'Exp', icon: '🏆' },
                        { value: 25, suffix: '+', label: 'Countries', icon: '🌍' },
                        { value: 10000, suffix: '+', label: 'Automations', icon: '⚡' },
                        { value: 99.8, suffix: '%', label: 'Success', icon: '✅' },
                    ].map((stat, index) => (
                        <div key={index} className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl border border-white/10">
                            <div className="text-3xl mb-2">{stat.icon}</div>
                            <div className="text-2xl font-bold text-white flex items-baseline">
                                <CountUpStats end={stat.value} decimals={stat.value % 1 !== 0 ? 1 : 0} />
                                <span className="text-cyan-400 text-lg ml-1">{stat.suffix}</span>
                            </div>
                            <div className="text-xs text-gray-400 uppercase font-bold mt-1 text-center">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CredentialsBar;
