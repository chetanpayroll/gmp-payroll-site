import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-dark pt-20 pb-10" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                {/* Newsletter Section */}
                <div style={{
                    textAlign: 'center',
                    maxWidth: '600px',
                    margin: '0 auto 5rem auto',
                    background: 'rgba(255,255,255,0.02)',
                    padding: '3rem',
                    borderRadius: '24px',
                    border: '1px solid rgba(255,255,255,0.05)'
                }}>
                    <h3 className="text-2xl font-bold mb-3">Stay Ahead of the <span className="text-gradient">AI Curve</span></h3>
                    <p className="text-gray mb-8">Weekly insights on AI tools, automation tips, and career opportunities.</p>
                    <form action="https://formsubmit.co/chetansharma@gmppayroll.com" method="POST" className="flex gap-4 max-w-md mx-auto">
                        <input type="hidden" name="_subject" value="New Newsletter Subscriber" />
                        <input type="hidden" name="_next" value="https://chetanpayroll.github.io/gmp-payroll-site/" />
                        <input type="hidden" name="_captcha" value="false" />

                        <input
                            type="email"
                            name="Email"
                            placeholder="Enter your email address"
                            required
                            style={{
                                flex: 1,
                                padding: '12px 20px',
                                borderRadius: '50px',
                                background: 'rgba(0,0,0,0.3)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: 'white',
                                outline: 'none'
                            }}
                        />
                        <button type="submit" className="btn btn-primary" style={{ borderRadius: '50px', padding: '12px 30px' }}>Subscribe</button>
                    </form>
                    <p className="text-gray text-xs mt-4 opacity-60">Join 10,000+ subscribers. No spam.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '4rem',
                    marginBottom: '4rem'
                }}>
                    {/* Brand */}
                    <div style={{ maxWidth: '300px' }}>
                        <Link href="/" className="logo flex items-center gap-2" style={{ marginBottom: '1.5rem', textDecoration: 'none' }}>
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 shadow-lg"></div>
                            <span className="text-xl font-bold text-white">AI Gravity</span>
                        </Link>
                        <p className="text-gray text-sm leading-relaxed mb-6">
                            Practical AI education for business professionals who want results, not theory. Master the tools of tomorrow, today.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons with Links */}
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors pointer-events-none opacity-50">𝕏</a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors pointer-events-none opacity-50">in</a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors pointer-events-none opacity-50">YT</a>
                        </div>
                    </div>

                    {/* Learn */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Learn</h4>
                        <ul className="space-y-4 text-sm text-gray">
                            <li><Link href="#courses" className="hover:text-cyan-400 transition-colors">All Courses</Link></li>
                            <li><Link href="#paths" className="hover:text-cyan-400 transition-colors">Learning Paths</Link></li>
                            <li><Link href="#free" className="hover:text-cyan-400 transition-colors">Free Resources</Link></li>
                            <li><Link href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Resources</h4>
                        <ul className="space-y-4 text-sm text-gray">
                            <li><Link href="/blog" className="hover:text-cyan-400 transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-cyan-400 transition-colors pointer-events-none">AI Tools Directory</Link></li>
                            <li><Link href="#" className="hover:text-cyan-400 transition-colors pointer-events-none">Community</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-gray">
                            <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
                            <li><Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    fontSize: '0.85rem',
                    color: '#64748b'
                }}>
                    <div>&copy; {new Date().getFullYear()} AI Gravity Academy. All rights reserved.</div>
                    <div className="flex items-center gap-2">
                        <span>Made with</span>
                        <span className="text-red-500">❤️</span>
                        <span>for the AI-curious</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
