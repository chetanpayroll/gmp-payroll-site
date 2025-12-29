
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';
import CountUpStats from '../../components/CountUpStats';
import Link from 'next/link';
import { BreadcrumbSchema, PersonSchema } from '@/components/StructuredData';

export const metadata = {
    title: 'About Chetan Sharma | Founder of AI Gravity Academy',
    description: 'Meet Chetan "Champ" Sharma - Fortune 500 consultant with 13+ years experience across 25+ countries, now helping 5,000+ professionals master AI and automation without coding.',
    keywords: ['Chetan Sharma', 'AI Gravity founder', 'AI instructor', 'automation expert', 'global payroll expert'],
    openGraph: {
        title: 'About Chetan Sharma | AI Gravity Academy Founder',
        description: 'From managing Fortune 500 payroll across 25+ countries to training 5,000+ professionals in AI.',
        url: 'https://www.gmppayroll.org/about',
        images: [
            {
                url: 'https://www.gmppayroll.org/about-og.png',
                width: 1200,
                height: 630,
                alt: 'Chetan Sharma - Founder of AI Gravity Academy',
            },
        ],
    },
    twitter: {
        title: 'About Chetan Sharma | AI Gravity Academy',
        description: 'Meet the founder who helps professionals master AI without coding',
    },
    alternates: {
        canonical: 'https://www.gmppayroll.org/about',
    },
};

export default function AboutPage() {
    const breadcrumbs = [
        { name: 'Home', url: 'https://www.gmppayroll.org' },
        { name: 'About', url: 'https://www.gmppayroll.org/about' },
    ];

    return (
        <main className="min-h-screen bg-dark">
            <BreadcrumbSchema items={breadcrumbs} />
            <PersonSchema />

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

            {/* Section 3: Founder Story - Full Width Immersive */}
            <section className="relative w-full py-0 border-y border-white/5 overflow-hidden">
                <div className="flex flex-col lg:flex-row min-h-[700px] bg-[#0B1221]">
                    {/* Left Column: Immersive Image (Cover) */}
                    <div className="relative w-full lg:w-1/2 h-[450px] md:h-[600px] lg:h-auto min-h-[450px] lg:min-h-full">
                        <img
                            src="/chetan-sharma-new.png"
                            alt="Chetan Sharma - Founder of AI Gravity Academy"
                            className="absolute inset-0 w-full h-full object-cover object-top shadow-2xl"
                        />
                        {/* Gradient Overlays for smooth transitions */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221] via-transparent to-transparent lg:hidden"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0B1221] hidden lg:block"></div>
                    </div>

                    {/* Right Column: Premium Content */}
                    <div className="w-full lg:w-1/2 bg-[#0B1221] flex flex-col justify-center p-8 md:p-14 lg:p-20 relative">
                        {/* Background Effects */}
                        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
                            <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]"></div>
                            <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px]"></div>
                        </div>

                        <div className="relative z-10 max-w-2xl mx-auto lg:mx-0">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-[3px] mb-8 uppercase shadow-lg backdrop-blur-md">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                Meet The Founder
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight tracking-tight drop-shadow-lg">
                                Chetan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Sharma</span>
                            </h2>

                            <div className="text-gray-300 space-y-6 font-light leading-relaxed text-lg lg:text-xl">
                                <p>
                                    <strong className="text-white font-semibold text-2xl block mb-2">13+ years.</strong>
                                    That's how long I spent managing complex payroll operations for Fortune 500s. High stakes, prestigious clients, but 60-hour weeks buried in spreadsheets.
                                </p>
                                <p>
                                    Then I discovered <span className="text-cyan-400 font-medium">Automation</span>. Not the complex code kind, but smart tools anyone can use.
                                </p>
                                <p className="border-l-4 border-blue-500/50 pl-4 py-1 italic text-white/90 bg-white/5 rounded-r-lg">
                                    "In months, I automated 15 hours of my weekly workload, reclaimed my time, and skyrocketed my career."
                                </p>
                                <p>
                                    I founded <span className="text-white font-medium">AI Gravity Academy</span> with one mission: To pass this torch. No fluff. No jargon. Just practical, career-defining skills.
                                </p>
                            </div>

                            {/* Enhanced Stats Row */}
                            <div className="mt-12 flex flex-wrap gap-6 border-t border-white/10 pt-8">
                                <div className="flex-1 min-w-[140px] p-5 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors group">
                                    <div className="text-3xl lg:text-4xl font-bold text-white mb-1 group-hover:scale-105 transition-transform origin-left">
                                        <CountUpStats end={5000} suffix="+" />
                                    </div>
                                    <div className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Active Students</div>
                                </div>
                                <div className="flex-1 min-w-[140px] p-5 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors group">
                                    <div className="text-3xl lg:text-4xl font-bold text-white mb-1 group-hover:scale-105 transition-transform origin-left">Top 1%</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Udemy Instructor</div>
                                </div>
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
