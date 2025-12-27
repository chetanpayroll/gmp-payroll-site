"use client";
import React, { useEffect, useState } from 'react';

const PageLoader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500); // 1.5s display time

        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className="page-loader">
            <div className="loader-logo">
                {/* Use the existing SVG logo if available or a text rep */}
                <h1 style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: '800',
                    fontSize: '3rem',
                    background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textAlign: 'center'
                }}>
                    AI Gravity
                </h1>
            </div>
            <p style={{ marginTop: '1rem', color: '#94A3B8', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
                Loading your AI journey...
            </p>
        </div>
    );
};

export default PageLoader;
