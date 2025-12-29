"use client";
import React, { useState, useEffect } from 'react';

// Inline ArrowUp Icon
const ArrowUpIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
);

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled up to given distance
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // 100vh Fix for Mobile Browsers
    useEffect(() => {
        const setVh = () => {
            // We execute the same script as before
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        setVh();
        window.addEventListener('resize', setVh);

        return () => window.removeEventListener('resize', setVh);
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="
                        fixed z-40
                        bottom-6 right-6
                        p-3 sm:p-4
                        rounded-full
                        bg-[#7C3AED]/90 backdrop-blur-md
                        border border-white/20
                        text-white
                        shadow-lg shadow-purple-900/40
                        hover:bg-[#6D28D9] hover:scale-110
                        active:scale-95
                        transition-all duration-300
                        animate-fade-in-up
                        safe-area-bottom
                        group
                    "
                    aria-label="Scroll to top"
                >
                    <ArrowUpIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
            )}
        </>
    );
};

export default ScrollToTop;
