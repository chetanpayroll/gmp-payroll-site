"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Search from './Search';
import ThemeToggle from './ThemeToggle';

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
                <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <Link href="/about">About</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/#courses">Courses</Link>
                    <Link href="/#pricing">Pricing</Link>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden md:block">
                        <Search />
                    </div>
                    <ThemeToggle />

                    {/* CTA */}
                    <div className="cta-desktop">
                        <Link href="/enroll" className="btn btn-primary btn-hover-effect">
                            Start Learning
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="mobile-toggle">
                        ☰
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
