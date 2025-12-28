"use client";
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';
import CountUpStats from '../../components/CountUpStats';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-dark">
            <Navbar />

            {/* Top Spacing Adjusted - Removed explicit padding to pull content up */}
            <div className="pt-24 pb-4 px-4 bg-dark">
                <Breadcrumbs />
            </div>

            {/* Section 1: Hero */}
            <section className="section" style={{ paddingBottom: '3rem' }}>
                <div className="container text-center">
                    <span className="badge badge-purple mb-4">OUR STORY</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-anim">
                        Empowering Professionals to Master AI
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        From one consultant's automation journey to a global academy transforming
                        <span className="text-white font-bold mx-1">
                            <CountUpStats end={5000} suffix="+" />
                        </span>
                        careers across
                        <span className="text-white font-bold mx-1">
                            <CountUpStats end={40} suffix="+" />
                        </span>
                        countries.
                    </p>
                </div>
            </section>

            {/* Section 2: Mission Statement */}
            <section className="section" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="container text-center">
                    <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">OUR MISSION</h2>
                    <blockquote className="text-2xl md:text-4xl font-bold leading-tight" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        "To democratize AI education and make practical automation skills accessible to every business professional, regardless of technical background."
                    </blockquote>
                </div>
            </section>

            {/* Section 3: Founder Story */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="relative group">
                                {/* Premium Image Container */}
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 w-full h-full">
                                    <img
                                        src="/chetan-sharma-new.png"
                                        alt="Chetan Sharma"
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>

                                    {/* Badge Integrated on Image */}
                                    <div className="absolute bottom-4 left-4 right-4 text-center">
                                        <div className="glass-badge backdrop-blur-md bg-white/10 border-white/20 text-white px-6 py-3 rounded-xl inline-block font-semibold tracking-wide shadow-lg">
                                            Founded by Chetan Sharma
                                        </div>
                                    </div>
                                </div>
                                {/* Decorative backing blob */}
                                <div className="absolute -z-10 top-4 -left-4 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl"></div>
                            </div>
                        </div>
                        <div>
                            <span className="badge badge-cyan mb-4">MEET THE FOUNDER</span>
                            <h2 className="text-3xl font-bold mb-6">Chetan Sharma</h2>

                            <div className="space-y-6 text-gray-400">
                                <p>
                                    For 13+ years, I managed complex payroll operations across 25+ countries for Fortune 500 companies. The work was rewarding but exhausting—endless spreadsheets, manual data entry, and repetitive tasks that consumed 60+ hours every week.
                                </p>
                                <p>
                                    Then I discovered AI and automation. Not the complex engineering kind—but practical, no-code tools that anyone could learn. Within months, I automated 15+ hours of weekly tasks, achieved 99.8% accuracy, and earned 5 promotions in 4 years.
                                </p>
                                <p>
                                    I realized these skills shouldn't be gatekept by expensive bootcamps or engineering degrees. Every professional deserves access to the same tools transforming my career. That's why I created AI Gravity Academy—to make AI accessible, practical, and immediately applicable.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Timeline */}
            <section className="section bg-animated">
                <div className="container">
                    <div className="text-center mb-20">
                        <span className="badge badge-purple mb-4">OUR JOURNEY</span>
                        <h2 className="text-3xl font-bold">Key Milestones</h2>
                    </div>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[20px] left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-cyan-500 to-green-500 rounded opacity-50"></div>

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                            {[
                                { year: '2011', title: 'Started Enterprise Operations', desc: 'Began career managing complex payroll systems.', color: 'from-purple-500 to-indigo-600', dot: '#9333ea' },
                                { year: '2018', title: 'Discovered AI & Automation', desc: 'Built first automation workflow using early no-code tools.', color: 'from-blue-500 to-cyan-600', dot: '#2563eb' },
                                { year: '2020', title: '1,000th Automation Built', desc: 'Scaled operations to 25+ countries with 99.8% accuracy.', color: 'from-cyan-400 to-teal-500', dot: '#06b6d4' },
                                { year: '2023', title: 'Launched AI Gravity Academy', desc: 'Started teaching others to replicate this success.', color: 'from-teal-400 to-emerald-500', dot: '#10b981' },
                                { year: '2024', title: 'Global Impact', desc: 'Reached 5,000+ students across 40+ countries.', color: 'from-green-400 to-lime-500', dot: '#4ade80' },
                            ].map((item, i) => (
                                <div key={i} className="group relative pt-16 md:pt-16 text-center md:text-left">
                                    {/* Glowing Node */}
                                    <div className="absolute top-0 left-1/2 md:left-8 transform -translate-x-1/2 md:translate-x-0 z-10">
                                        <div
                                            className="w-10 h-10 rounded-full border-4 border-[#0a1628] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-125"
                                            style={{ background: item.dot, boxShadow: `0 0 20px ${item.dot}80` }}
                                        >
                                            <div className="w-3 h-3 bg-white rounded-full"></div>
                                        </div>
                                    </div>

                                    {/* Vertical Line Connector (Mobile Only) */}
                                    <div className="md:hidden absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-800 -translate-x-1/2 z-0"></div>

                                    {/* Card */}
                                    <div
                                        className="glass-card-enhanced p-6 h-full relative z-10 transition-all duration-300 hover:-translate-y-2"
                                        style={{ borderTop: `4px solid ${item.dot}` }}
                                    >
                                        <div className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, white, ${item.dot})` }}>
                                            {item.year}
                                        </div>
                                        <h3 className="text-md font-bold text-white mb-2 leading-tight">{item.title}</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed opacity-90">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Core Values */}
            <section className="section">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="badge badge-green mb-4">WHAT WE BELIEVE</span>
                        <h2 className="text-3xl font-bold">Our Core Values</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        {[
                            { icon: '🎯', title: 'Practical', desc: 'Real projects only.', color: 'from-green-400 to-emerald-600' },
                            { icon: '🌍', title: 'Accessible', desc: 'No coding required.', color: 'from-blue-400 to-cyan-600' },
                            { icon: '🤝', title: 'Community', desc: 'Grow together.', color: 'from-purple-400 to-pink-600' },
                            { icon: '📈', title: 'Results', desc: 'Build & achieve.', color: 'from-orange-400 to-red-600' }
                        ].map((val, i) => (
                            <div key={i} className="glass-card-enhanced p-8 text-center group transition-all hover:-translate-y-2" style={{ position: 'relative', overflow: 'hidden' }}>
                                {/* Top Gradient Line */}
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${val.color}`}></div>

                                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{val.icon}</div>
                                <h3 className="text-xl font-bold mb-3 text-white">{val.title}</h3>
                                <p className="text-sm text-gray-400">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 6: By the Numbers */}
            <section className="section bg-dark">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="badge badge-red mb-4">OUR IMPACT</span>
                        <h2 className="text-3xl font-bold">By The Numbers</h2>
                    </div>
                    {/* Horizontal Strip Layout */}
                    <div className="glass-card-enhanced p-8 md:p-12">
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                            gap: '3rem',
                            alignItems: 'center'
                        }}>
                            {[
                                { label: 'Students', val: 5000, suffix: '+', color: '#4ade80' },
                                { label: 'Countries', val: 40, suffix: '+', color: '#60a5fa' },
                                { label: 'Automations', val: 10000, suffix: '+', color: '#a78bfa' },
                                { label: 'Growth', val: 73, suffix: '%', color: '#f472b6' },
                                { label: 'Rating', val: 4.9, suffix: '/5', decimals: 1, color: '#fbbf24' },
                                { label: 'Hours Saved', val: 50000, suffix: '+', color: '#22d3ee' },
                            ].map((stat, i) => (
                                <div key={i} className="text-center flex-1 min-w-[140px]">
                                    <div className="text-4xl md:text-5xl font-extrabold mb-2" style={{ color: stat.color, textShadow: `0 0 20px ${stat.color}40` }}>
                                        <CountUpStats end={stat.val} suffix={stat.suffix} decimals={stat.decimals || 0} />
                                    </div>
                                    <div className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-[2px]">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 7: CTA */}
            <section className="section border-t border-white/10">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your AI Journey?</h2>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        Join 5,000+ professionals who transformed their careers.
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <Link href="/#courses" className="btn btn-primary btn-hover-effect text-white">Explore Courses →</Link>
                        <Link href="/contact" className="btn btn-secondary btn-hover-effect">Book Consultation</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
