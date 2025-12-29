"use client";
import React, { useState, useEffect } from 'react';
import CountUpStats from './CountUpStats';

// Inline SVGs
const QuoteIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path></svg>
);
const ChevronLeftIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="15 18 9 12 15 6"></polyline></svg>
);
const ChevronRightIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="9 18 15 12 9 6"></polyline></svg>
);
const PlayIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
);

const testimonials = [
    {
        name: "Marcus Williams",
        role: "Sales Manager",
        text: "I went from being intimidated by AI to building automations for my entire sales team. The ROI was immediate.",
        result: "40% More Deals Closed",
        stars: 5,
        image: null // Placeholder if images are added later
    },
    {
        name: "Priya Patel",
        role: "Operations Lead",
        text: "Finally, an AI course that respects my time. Practical, no-fluff content I could implement the same day.",
        result: "15 Hours/Week Saved",
        stars: 5
    },
    {
        name: "David Thompson",
        role: "Freelance Consultant",
        text: "I built my first automation within the first week. Now I'm offering AI consulting services on the side.",
        result: "$3K/Month Side Income",
        stars: 5
    },
    {
        name: "Jennifer Martinez",
        role: "HR Manager",
        text: "As a complete non-technical person, I was skeptical. But the step-by-step approach made everything click.",
        result: "Zero to Expert in 60 Days",
        stars: 5
    }
];

const Testimonials = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const videoId = "outcGtbnMuQ";

    // Carousel Logic
    const nextSlide = () => {
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    // Auto-advance
    useEffect(() => {
        const interval = setInterval(nextSlide, 8000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    // Touch Handling for Swipe
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) nextSlide();
        if (isRightSwipe) prevSlide();

        setTouchEnd(0);
        setTouchStart(0);
    };

    return (
        <section className="py-20 sm:py-24 bg-[#0A1628] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-cyan-900/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-900/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider mb-6">
                        <span>Success Stories</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        Real Results from <span className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">Real Learners</span>
                    </h2>
                    <p className="text-gray-400 text-lg sm:text-xl">
                        Join thousands who transformed their careers with AI skills
                    </p>
                </div>

                {/* Video Section - Preserved */}
                <div className="mb-20 max-w-4xl mx-auto px-0 sm:px-4">
                    <div
                        className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 group bg-black aspect-video"
                        onClick={() => setIsPlaying(true)}
                    >
                        {!isPlaying ? (
                            <>
                                {/* Thumbnail Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 z-10 transition-opacity duration-500 group-hover:opacity-90"></div>
                                <img
                                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                                    alt="Video Thumbnail"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                                />

                                {/* Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center z-20">
                                    <div className="
                                        w-16 h-16 sm:w-20 sm:h-20 
                                        rounded-full bg-white/10 backdrop-blur-md border border-white/30 
                                        flex items-center justify-center 
                                        group-hover:scale-110 transition-all duration-300 
                                        shadow-[0_0_30px_rgba(255,255,255,0.2)]
                                    ">
                                        <PlayIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-current ml-1" />
                                    </div>
                                </div>

                                {/* Text Overlay */}
                                <div className="absolute bottom-0 left-0 p-6 sm:p-8 z-20 w-full text-left">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                                        <span className="text-xs font-bold tracking-widest uppercase text-white/80">Featured Story</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                                        Possible: See what AI can actually do.
                                    </h3>
                                    <p className="text-gray-300 text-sm md:text-base max-w-xl hidden sm:block">
                                        Watch how our methodology changes the way professionals work, communicate, and create value.
                                    </p>
                                </div>
                            </>
                        ) : (
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                                title="AI Success Story"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                            ></iframe>
                        )}
                    </div>
                </div>

                {/* Mobile Testimonial Carousel */}
                <div
                    className="relative max-w-5xl mx-auto"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Testimonial Cards */}
                    <div className="overflow-hidden relative min-h-[400px] sm:min-h-[350px]">
                        {testimonials.map((t, i) => {
                            // Calculate position relevant to active index
                            let position = 'translate-x-full opacity-0 pointer-events-none';
                            if (i === activeIndex) {
                                position = 'translate-x-0 opacity-100 z-10';
                            } else if (i === (activeIndex - 1 + testimonials.length) % testimonials.length) {
                                position = '-translate-x-full opacity-0 pointer-events-none'; // Previous
                            }

                            return (
                                <div
                                    key={i}
                                    className={`
                                        absolute inset-0 w-full h-full
                                        transition-all duration-500 ease-in-out
                                        ${position}
                                    `}
                                >
                                    <div className="
                                        bg-[#0F172A]/60 backdrop-blur-xl border border-white/10
                                        rounded-3xl p-6 sm:p-10 md:p-12
                                        flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start
                                        max-w-4xl mx-auto h-full justify-center
                                    ">
                                        {/* Avatar (Initials or Image) */}
                                        <div className="flex-shrink-0">
                                            <div className="
                                                w-20 h-20 sm:w-24 sm:h-24 rounded-full
                                                bg-gradient-to-br from-[#7C3AED] to-[#06B6D4]
                                                flex items-center justify-center
                                                text-3xl font-bold text-white
                                                shadow-lg shadow-purple-500/20
                                            ">
                                                {t.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 text-center md:text-left space-y-6">
                                            <div className="text-[#7C3AED]">
                                                <QuoteIcon className="w-10 h-10 sm:w-12 sm:h-12 opacity-50 mx-auto md:mx-0" />
                                            </div>

                                            <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed font-light italic">
                                                "{t.text}"
                                            </p>

                                            <div className="space-y-2">
                                                <div className="font-bold text-white text-lg">{t.name}</div>
                                                <div className="text-gray-400 text-sm">{t.role}</div>
                                                <div className="inline-block px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold border border-green-500/20 mt-2">
                                                    {t.result}
                                                </div>
                                            </div>

                                            <div className="flex justify-center md:justify-start gap-1">
                                                {[...Array(t.stars)].map((_, i) => (
                                                    <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Controls */}
                    <div className="flex justify-center items-center gap-6 mt-8">
                        <button
                            onClick={prevSlide}
                            className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white transition-all shadow-md active:scale-95 touch-target"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeftIcon className="w-6 h-6" />
                        </button>

                        <div className="flex gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveIndex(i)}
                                    className={`
                                        w-2.5 h-2.5 rounded-full transition-all duration-300
                                        ${i === activeIndex ? 'bg-white w-8' : 'bg-white/20 hover:bg-white/40'}
                                    `}
                                    aria-label={`Go to slide ${i + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white transition-all shadow-md active:scale-95 touch-target"
                            aria-label="Next testimonial"
                        >
                            <ChevronRightIcon className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Stats Bar - Preserved/Adapted */}
                <div className="mt-20 sm:mt-24">
                    <div className="
                        grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4
                        bg-white/5 backdrop-blur-md rounded-3xl
                        p-8 sm:p-12
                        border border-white/10
                    ">
                        <div className="text-center md:border-r border-white/10 last:border-0">
                            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                                <CountUpStats end={5000} suffix="+" />
                            </div>
                            <div className="text-sm font-medium text-gray-400 uppercase tracking-widest">Active Learners</div>
                        </div>
                        <div className="text-center md:border-r border-white/10 last:border-0">
                            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                                <CountUpStats end={40} suffix="+" />
                            </div>
                            <div className="text-sm font-medium text-gray-400 uppercase tracking-widest">Countries</div>
                        </div>
                        <div className="text-center md:border-r border-white/10 last:border-0">
                            <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">
                                <CountUpStats end={4.9} decimals={1} suffix="/5" />
                            </div>
                            <div className="text-sm font-medium text-gray-400 uppercase tracking-widest">Average Rating</div>
                        </div>
                        <div className="text-center md:border-r border-white/10 last:border-0">
                            <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2">
                                <CountUpStats end={73} suffix="%" />
                            </div>
                            <div className="text-sm font-medium text-gray-400 uppercase tracking-widest">Career Growth</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
