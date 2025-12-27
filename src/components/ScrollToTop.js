"use client";
import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

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

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    style={{
                        position: 'fixed',
                        bottom: '24px',
                        right: '24px',
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
                        border: 'none',
                        color: 'white',
                        boxShadow: '0 4px 15px rgba(124, 58, 237, 0.4)',
                        cursor: 'pointer',
                        zIndex: 1000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        transition: 'all 0.3s ease',
                        animation: 'fadeInUp 0.3s ease-out'
                    }}
                    className="btn-hover-effect"
                    aria-label="Scroll to top"
                >
                    ↑
                </button>
            )}
        </>
    );
};

export default ScrollToTop;
