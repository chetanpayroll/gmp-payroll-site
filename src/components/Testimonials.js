
"use client";
import React, { useRef } from 'react';
import CountUpStats from './CountUpStats';

const Testimonials = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 420; // Card width + gap
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const testimonials = [
        {
            text: "This course completely transformed how I work. I automated 15+ hours of tasks weekly and got promoted within 3 months! Chetan's teaching style makes complex AI concepts so simple.",
            name: "Sarah Johnson",
            role: "Marketing Manager",
            company: "Fortune 500 Company",
            avatar: "S",
            result: "Promoted in 3 months",
        },
        {
            text: "As an HR director, I was skeptical about AI. But this course changed everything. Now I'm the go-to AI expert in my organization. The ROI is incredible.",
            name: "Raj Patel",
            role: "HR Director",
            company: "Tech Startup",
            avatar: "R",
            result: "Saved 20+ hours/week",
        },
        {
            text: "I went from knowing nothing about automation to building complex workflows for clients. Now I run my own AI consulting business earning 3x my previous salary!",
            name: "Maria Garcia",
            role: "AI Consultant",
            company: "Self-Employed",
            avatar: "M",
            result: "3x income increase",
        },
        {
            text: "The hands-on projects are what set this apart. Every lesson has practical applications I use daily. Best investment I've made in my career.",
            name: "David Kim",
            role: "Operations Manager",
            company: "E-commerce Brand",
            avatar: "D",
            result: "Automated 80% of tasks",
        },
        {
            text: "Chetan explains things in a way that just clicks. I've taken other courses, but this is the only one that actually got me building real tools.",
            name: "Anita Roy",
            role: "Product Owner",
            company: "Fintech",
            avatar: "A",
            result: "Build 5 Custom Tools",
        },
    ];

    return (
        <section className="testimonials-section py-24 relative bg-[#0F172A]" id="testimonials">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block py-2 px-6 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-bold tracking-widest uppercase mb-6">
                        ⭐ Success Stories
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Real Results from <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]">Real Professionals</span>
                    </h2>
                    <p className="text-xl text-gray-400">
                        Join thousands who transformed their careers with AI skills.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative max-w-[1400px] mx-auto">
                    {/* Navigation Buttons */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-20 w-14 h-14 rounded-full bg-[#0A1628]/80 backdrop-blur border border-white/10 text-white hover:bg-gradient-to-r hover:from-[#7C3AED] hover:to-[#06B6D4] transition-all flex items-center justify-center text-2xl shadow-xl hidden md:flex"
                    >
                        ←
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-20 w-14 h-14 rounded-full bg-[#0A1628]/80 backdrop-blur border border-white/10 text-white hover:bg-gradient-to-r hover:from-[#7C3AED] hover:to-[#06B6D4] transition-all flex items-center justify-center text-2xl shadow-xl hidden md:flex"
                    >
                        →
                    </button>

                    {/* Track */}
                    <div
                        ref={scrollRef}
                        className="testimonials-track flex gap-8 overflow-x-auto snap-x snap-mandatory pb-12 px-4 scroll-smooth"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {testimonials.map((t, i) => (
                            <div
                                key={i}
                                className="testimonial-card min-w-[350px] md:min-w-[400px] snap-center bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-2 hover:border-purple-500/30 transition-all duration-300 shadow-xl"
                            >
                                {/* Glow Effect */}
                                <div className="card-glow"></div>

                                <div className="text-6xl text-purple-500/20 font-serif leading-none mb-4">"</div>

                                <div className="flex gap-1 mb-4 text-yellow-400 text-sm">
                                    {'⭐⭐⭐⭐⭐'}
                                </div>

                                <p className="text-lg text-gray-300 italic mb-6 leading-relaxed relative z-10">
                                    "{t.text}"
                                </p>

                                {t.result && (
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-bold uppercase mb-6">
                                        📈 {t.result}
                                    </div>
                                )}

                                <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-6">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-xl font-bold text-white relative">
                                        {t.avatar}
                                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-[#0F172A] flex items-center justify-center text-[10px]">✓</div>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-white font-bold">{t.name}</h4>
                                        <p className="text-xs text-gray-400">{t.role}</p>
                                        <p className="text-[10px] text-gray-500 uppercase tracking-wider">{t.company}</p>
                                    </div>
                                    <div className="px-3 py-1 rounded bg-[#0A66C2]/20 border border-[#0A66C2]/30 text-[#0A66C2] text-xs font-bold flex items-center gap-1">
                                        in <span className="hidden sm:inline">Verified</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="mt-16 max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-white/10 lg:divide-x-0">
                        <div>
                            <div className="text-4xl font-extrabold text-white flex justify-center">
                                <CountUpStats end={5000} suffix="+" />
                            </div>
                            <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-2">Active Learners</div>
                        </div>
                        <div>
                            <div className="text-4xl font-extrabold text-white flex justify-center">
                                <CountUpStats end={40} suffix="+" />
                            </div>
                            <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-2">Countries</div>
                        </div>
                        <div>
                            <div className="text-4xl font-extrabold text-white flex justify-center">
                                <CountUpStats end={4.9} suffix="/5" decimals={1} />
                            </div>
                            <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-2">Average Rating</div>
                        </div>
                        <div>
                            <div className="text-4xl font-extrabold text-white flex justify-center">
                                <CountUpStats end={73} suffix="%" />
                            </div>
                            <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-2">Career Growth</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
