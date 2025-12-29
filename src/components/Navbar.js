'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

// Inline SVGs
const MenuIcon = ({ size = 24, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
);
const XIcon = ({ size = 24, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);
const SearchIcon = ({ size = 24, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    // Close menu on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setIsMenuOpen(false);
                setIsSearchOpen(false);
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, []);

    const navLinks = [
        { href: '/#courses', label: 'Courses' },
        { href: '/#methodology', label: 'Methodology' },
        { href: '/#instructor', label: 'Mentor' },
        { href: '/#pricing', label: 'Pricing' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <>
            {/* Header */}
            <header
                className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300 ease-in-out
          ${isScrolled
                        ? 'bg-[#0A1628]/95 backdrop-blur-lg shadow-lg py-2'
                        : 'bg-transparent py-4'
                    }
          safe-area-top
        `}
            >
                <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-14 sm:h-16">

                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center space-x-2 z-50"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">
                                AI Gravity
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Desktop CTA & Actions */}
                        <div className="hidden lg:flex items-center space-x-4">
                            {/* Search Button */}
                            <button
                                className="p-2 text-gray-400 hover:text-white transition-colors"
                                onClick={() => setIsSearchOpen(!isSearchOpen)}
                                aria-label="Search"
                            >
                                <SearchIcon size={20} />
                            </button>

                            {/* CTA Button */}
                            <Link
                                href="/#courses"
                                className="
                  px-6 py-2.5 rounded-lg font-semibold text-white text-sm
                  bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]
                  hover:shadow-lg hover:shadow-purple-500/30
                  transform hover:scale-105 transition-all duration-300
                "
                            >
                                Start Learning
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="
                lg:hidden p-2 -mr-2
                text-white hover:text-[#7C3AED]
                transition-colors duration-200
                min-w-[44px] min-h-[44px]
                flex items-center justify-center
                z-50
              "
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`
          lg:hidden fixed inset-0 z-40
          transition-all duration-300 ease-in-out
          ${isMenuOpen
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'
                    }
        `}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    onClick={() => setIsMenuOpen(false)}
                />

                {/* Menu Panel */}
                <div
                    className={`
            absolute top-0 right-0 h-full w-full sm:w-80
            bg-[#0A1628]/98 backdrop-blur-xl
            transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            safe-area-all
            flex flex-col
          `}
                >
                    {/* Menu Header */}
                    <div className="flex items-center justify-between p-4 pt-6 border-b border-white/10">
                        <span className="text-xl font-bold bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">
                            AI Gravity
                        </span>
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="p-2 text-gray-400 hover:text-white min-w-[44px] min-h-[44px] flex items-center justify-center"
                            aria-label="Close menu"
                        >
                            <XIcon size={24} />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-1 overflow-y-auto py-6">
                        <ul className="space-y-1 px-4">
                            {navLinks.map((link, index) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="
                      block py-4 px-4 rounded-lg
                      text-lg font-medium text-gray-300
                      hover:text-white hover:bg-white/5
                      transition-all duration-200
                      min-h-[56px] flex items-center
                      border-b border-white/5
                    "
                                        style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Menu Footer with CTA */}
                    <div className="p-4 pb-8 border-t border-white/10 safe-area-bottom">
                        <Link
                            href="/#courses"
                            onClick={() => setIsMenuOpen(false)}
                            className="
                block w-full py-4 px-6 rounded-xl
                text-center text-lg font-bold text-white
                bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]
                hover:shadow-lg hover:shadow-purple-500/30
                transform active:scale-95 transition-all duration-200
              "
                        >
                            🚀 Start Your Free AI Journey
                        </Link>

                        <p className="text-center text-gray-500 text-sm mt-4">
                            Join 5,000+ learners worldwide
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
