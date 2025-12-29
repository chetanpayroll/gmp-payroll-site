"use client";
import React from 'react';
import Link from 'next/link';

// Inline SVGs
const TwitterIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zl-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
);
const LinkedinIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.22-.44-2-1.52-2-1.16 0-1.78.8-2 1.56v5.18h-3v-9h3v1.27a3.56 3.56 0 013-1.6c2.3 0 3.52 1.5 3.52 4.3z" /></svg>
);
const YoutubeIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M21.582 5.09a2.71 2.71 0 00-1.92-1.91C17.965 2.5 12 2.5 12 2.5s-5.965 0-7.662.68a2.74 2.74 0 00-1.92 1.91C1.75 6.78 1.75 12 1.75 12s0 5.22.668 6.91a2.72 2.72 0 001.92 1.91c1.697.68 7.662.68 7.662.68s5.965 0 7.662-.68a2.72 2.72 0 001.92-1.91c.668-1.69.668-6.91.668-6.91s0-5.22-.668-6.91zM9.9 15.15l-.06-6.3 6 3.12z" /></svg>
);
const ArrowRightIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);

const Footer = () => {
    return (
        <footer className="bg-[#050B14] pt-20 pb-12 border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Newsletter Section - Mobile Optimized */}
                <div className="
                    max-w-4xl mx-auto mb-20
                    bg-gradient-to-br from-white/5 to-transparent
                    backdrop-blur-xl border border-white/10
                    rounded-3xl p-8 sm:p-12
                    text-center
                ">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                        Stay Ahead of the <span className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">AI Curve</span>
                    </h3>
                    <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                        Weekly insights on AI tools, automation tips, and career opportunities. Join 10,000+ subscribers.
                    </p>

                    <form
                        action="https://formsubmit.co/chetansharma@gmppayroll.com"
                        method="POST"
                        className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
                    >
                        <input type="hidden" name="_subject" value="New Newsletter Subscriber" />
                        <input type="hidden" name="_next" value="https://chetanpayroll.github.io/gmp-payroll-site/" />
                        <input type="hidden" name="_captcha" value="false" />

                        <div className="flex-1 relative">
                            <input
                                type="email"
                                name="Email"
                                placeholder="Enter your email"
                                required
                                className="
                                    w-full px-6 py-3.5
                                    rounded-full
                                    bg-black/40 border border-white/10
                                    text-white placeholder-gray-500
                                    focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED]
                                    transition-all
                                "
                            />
                        </div>
                        <button
                            type="submit"
                            className="
                                px-8 py-3.5 rounded-full
                                bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]
                                text-white font-bold text-sm
                                hover:shadow-lg hover:shadow-purple-500/25
                                transform hover:scale-105
                                transition-all duration-300
                                whitespace-nowrap
                            "
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Footer Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8 mb-16 border-b border-white/5 pb-16">
                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] flex items-center justify-center text-white font-bold text-xl">
                                AI
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight">Gravity</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Practical AI education for business professionals who want results, not theory.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                                <TwitterIcon className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                                <LinkedinIcon className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                                <YoutubeIcon className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Learn</h4>
                        <ul className="space-y-4">
                            {['All Courses', 'Learning Paths', 'Free Resources', 'Certifications'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1 group">
                                        <ArrowRightIcon className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Resources</h4>
                        <ul className="space-y-4">
                            {['Blog', 'AI Tools Directory', 'Community', 'Success Stories'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1 group">
                                        <ArrowRightIcon className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Contact', 'Privacy Policy', 'Terms of Service'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1 group">
                                        <ArrowRightIcon className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} AI Gravity Academy. All rights reserved.</p>
                    <div className="flex items-center gap-2">
                        <span>Made with</span>
                        <span className="text-red-500 animate-pulse">❤️</span>
                        <span>for the AI-curious</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
