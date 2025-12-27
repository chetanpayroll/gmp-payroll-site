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

            <div style={{ paddingTop: '100px' }}>
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
                            <div className="relative glass-card-enhanced p-2 inline-block">
                                <img
                                    src="/chetan-sharma.png"
                                    alt="Chetan Sharma"
                                    className="rounded-lg shadow-2xl relative z-10 w-full max-w-md mx-auto"
                                    style={{ borderRadius: '1rem' }}
                                />
                                <div className="absolute -bottom-6 -right-6 glass-badge glass-card-enhanced text-sm font-bold p-3">
                                    Founder & Lead Instructor
                                </div>
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
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="text-center mb-16">
                        <span className="badge badge-purple mb-4">OUR JOURNEY</span>
                        <h2 className="text-3xl font-bold">Key Milestones</h2>
                    </div>

                    <div className="timeline space-y-8 relative border-l border-gray-800 ml-4 md:ml-0 md:border-none">
                        {[
                            { year: '2011', title: 'Started Enterprise Operations', desc: 'Began career managing complex payroll systems.' },
                            { year: '2018', title: 'Discovered AI & Automation', desc: 'Built first automation workflow using early no-code tools.' },
                            { year: '2020', title: '1,000th Automation Built', desc: 'Scaled operations to 25+ countries with 99.8% accuracy.' },
                            { year: '2023', title: 'Launched AI Gravity Academy', desc: 'Started teaching others to replicate this success.' },
                            { year: '2024', title: 'Global Impact', desc: 'Reached 5,000+ students across 40+ countries.' },
                        ].map((item, i) => (
                            <div key={i} className={`flex md:items-center flex-col md:flex-row gap-4 md:gap-8 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`} style={{ marginBottom: '2rem' }}>
                                <div className="hidden md:block w-1/2 text-right">
                                    {i % 2 === 0 && (
                                        <>
                                            <div className="text-xl font-bold text-white">{item.year}</div>
                                            <div className="text-purple-400 font-bold mb-1">{item.title}</div>
                                            <div className="text-gray-400 text-sm">{item.desc}</div>
                                        </>
                                    )}
                                </div>
                                <div className="relative pl-8 md:pl-0 flex justify-center items-center">
                                    <div className="w-4 h-4 rounded-full bg-purple-500 absolute left-[-9px] md:relative md:left-auto shadow-lg shadow-purple-500/50"></div>
                                </div>
                                <div className="w-full md:w-1/2 md:text-left pl-8 md:pl-0 border-l border-gray-800 md:border-none pb-8 md:pb-0">
                                    {i % 2 !== 0 ? (
                                        <>
                                            <div className="text-xl font-bold text-white">{item.year}</div>
                                            <div className="text-cyan-400 font-bold mb-1">{item.title}</div>
                                            <div className="text-gray-400 text-sm">{item.desc}</div>
                                        </>
                                    ) : (
                                        <div className="md:hidden">
                                            <div className="text-xl font-bold text-white">{item.year}</div>
                                            <div className="text-purple-400 font-bold mb-1">{item.title}</div>
                                            <div className="text-gray-400 text-sm">{item.desc}</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 5: Core Values */}
            <section className="section">
                <div className="container">
                    <div className="text-center mb-12">
                        <span className="badge badge-green mb-4">WHAT WE BELIEVE</span>
                        <h2 className="text-3xl font-bold">Our Core Values</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: '🎯', title: 'Practical', desc: 'Every lesson includes hands-on projects. No abstract concepts.' },
                            { icon: '🌍', title: 'Accessible', desc: 'No coding required. If you can use a computer, you can master AI.' },
                            { icon: '🤝', title: 'Community', desc: 'Learning is better together. Our community supports and grows together.' },
                            { icon: '📈', title: 'Results', desc: 'We measure success by what you build and achieve.' }
                        ].map((val, i) => (
                            <div key={i} className="glass-card-enhanced p-6 text-center hover:bg-white/5 transition-colors">
                                <div className="text-4xl mb-4">{val.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{val.title}</h3>
                                <p className="text-sm text-gray-400">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 6: By the Numbers */}
            <section className="section bg-dark">
                <div className="container">
                    <div className="text-center mb-12">
                        <span className="badge badge-red mb-4">OUR IMPACT</span>
                        <h2 className="text-3xl font-bold">By The Numbers</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
                        {[
                            { label: 'Students Taught', val: 5000, suffix: '+' },
                            { label: 'Countries Reached', val: 40, suffix: '+' },
                            { label: 'Automations Built', val: 10000, suffix: '+' },
                            { label: 'Career Growth', val: 73, suffix: '%' },
                            { label: 'Average Rating', val: 4.9, suffix: '/5', decimals: 1 },
                            { label: 'Hours Saved', val: 50000, suffix: '+' },
                        ].map((stat, i) => (
                            <div key={i} className="glass-card-enhanced p-6">
                                <div className="text-3xl md:text-4xl font-bold gradient-text-anim mb-2">
                                    <CountUpStats end={stat.val} suffix={stat.suffix} decimals={stat.decimals || 0} />
                                </div>
                                <div className="text-sm text-gray-400 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
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
