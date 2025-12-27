"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                {/* Logo */}
                <Link href="/" className="logo">
                    <div className="logo-icon"></div>
                    <span>AI Gravity</span>
                </Link>

                {/* Desktop Links */}
                <div className="nav-links">
                    <Link href="#courses">Courses</Link>
                    <Link href="#methodology">Methodology</Link>
                    <Link href="#mentors">Mentors</Link>
                    <Link href="#pricing">Pricing</Link>
                </div>

                {/* CTA */}
                <div className="cta-desktop">
                    <Link href="#join" className="btn btn-primary">
                        Start Learning
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="mobile-toggle">
                    ☰
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
