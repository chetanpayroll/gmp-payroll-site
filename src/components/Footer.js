import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                {/* Newsletter */}
                <div className="border-b border-white/10 pb-12 mb-12 text-center max-w-2xl mx-auto">
                    <h3 className="text-2xl font-bold mb-2">Stay Ahead of the AI Curve</h3>
                    <p className="text-gray mb-6">Weekly insights on AI tools, automation tips, and career opportunities.</p>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Enter your email address" />
                        <button className="btn btn-primary">Subscribe</button>
                    </form>
                    <p className="text-gray text-xs mt-4">Join 10,000+ subscribers.</p>
                </div>

                <div className="footer-grid">
                    {/* Brand */}
                    <div className="footer-brand">
                        <Link href="/" className="logo" style={{ marginBottom: '1.5rem' }}>
                            <div className="logo-icon"></div>
                            <span>AI Gravity</span>
                        </Link>
                        <p className="text-gray" style={{ marginBottom: '1.5rem', maxWidth: '300px' }}>
                            Practical AI education for business professionals who want results, not theory.
                        </p>
                        <div className="flex gap-4">
                            {/* Social placeholders */}
                            <div style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}>𝕏</div>
                            <div style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}>in</div>
                            <div style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}>YT</div>
                        </div>
                    </div>

                    {/* Learn */}
                    <div className="footer-links-col">
                        <h4>Learn</h4>
                        <ul>
                            <li><Link href="#courses">All Courses</Link></li>
                            <li><Link href="#paths">Learning Paths</Link></li>
                            <li><Link href="#free">Free Resources</Link></li>
                            <li><Link href="#certifications">Certifications</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="footer-links-col">
                        <h4>Resources</h4>
                        <ul>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/tools">AI Tools Directory</Link></li>
                            <li><Link href="/community">Community</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="footer-links-col">
                        <h4>Company</h4>
                        <ul>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="/privacy">Privacy Policy</Link></li>
                            <li><Link href="/terms">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid var(--color-glass-border)', paddingTop: '2rem', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-gray)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>&copy; {new Date().getFullYear()} AI Gravity Academy. All rights reserved.</div>
                    <div>Made with ❤️ for the AI-curious</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
