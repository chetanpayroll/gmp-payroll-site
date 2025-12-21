"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when pathname changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    const links = [
        { href: '/services', label: 'Services' },
        { href: '/expertise', label: 'Expertise' },
        { href: '/case-studies', label: 'Case Studies' },
        { href: '/about', label: 'About' },
    ];

    return (
        <>
            <nav className="fixed w-full z-50 transition-all duration-300" style={{
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: (scrolled || mobileMenuOpen) ? 'rgba(255, 255, 255, 0.98)' : 'white',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                borderBottom: (scrolled || mobileMenuOpen) ? '1px solid var(--color-border)' : '1px solid transparent',
                boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.05)' : 'none'
            }}>
                <div className="container flex justify-between items-center">
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        <Image
                            src="/logo.svg"
                            width={240}
                            height={40}
                            alt="GMP Payroll"
                            style={{ height: '40px', width: 'auto' }}
                            priority
                        />
                    </Link>

                    {/* Desktop Links */}
                    <div className="nav-links-desktop flex items-center gap-8">
                        <div className="flex gap-6">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    style={{
                                        fontWeight: 500,
                                        color: pathname.startsWith(link.href) ? 'var(--color-teal)' : 'var(--color-navy)',
                                        position: 'relative'
                                    }}
                                    className="hover:text-teal-600 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        <Link href="/contact" className="btn btn-primary" style={{ height: '44px', fontSize: '15px', padding: '0 24px' }}>
                            Book Consultation
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="mobile-nav-toggle"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        <span style={{ transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
                        <span style={{ opacity: mobileMenuOpen ? 0 : 1 }}></span>
                        <span style={{ transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        style={{
                            fontSize: '24px',
                            fontWeight: 600,
                            color: pathname.startsWith(link.href) ? 'var(--color-teal)' : 'var(--color-navy)',
                        }}
                    >
                        {link.label}
                    </Link>
                ))}
                <Link href="/contact" className="btn btn-primary" style={{ marginTop: '20px' }}>
                    Book Consultation
                </Link>
            </div>
        </>
    );
}
