"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { href: '/services', label: 'Services' },
        { href: '/expertise', label: 'Expertise' },
        { href: '/case-studies', label: 'Case Studies' },
        { href: '/about', label: 'About' },
    ];

    return (
        <nav className="fixed w-full z-50 transition-all duration-300" style={{
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'white',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
            boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.05)' : 'none'
        }}>
            <div className="container flex justify-between items-center">
                <Link href="/" style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-navy)', letterSpacing: '-0.5px' }}>
                    GMP Payroll
                </Link>

                <div className="flex items-center gap-8">
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
                                className="hover:text-teal-600 transistion-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <Link href="/contact" className="btn btn-primary" style={{ height: '44px', fontSize: '15px', padding: '0 24px' }}>
                        Book Consultation
                    </Link>
                </div>
            </div>
        </nav>
    );
}
