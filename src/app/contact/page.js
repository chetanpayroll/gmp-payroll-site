"use client";
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Contact() {
    return (
        <main className="min-h-screen bg-dark">
            <Navbar />

            {/* Background Effects */}
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', top: '10%', right: '10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, transparent 70%)' }}></div>
                <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)' }}></div>
            </div>

            <section className="section pt-32 pb-20" style={{ position: 'relative', zIndex: 1 }}>
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-20 items-center">

                        {/* Left Side: Info */}
                        <div className="fade-in-up">
                            <div className="badge badge-purple mb-6">CONTACT US</div>
                            <h1 className="text-5xl font-bold mb-6" style={{ lineHeight: 1.1 }}>Let's Build Something <br /><span className="text-gradient">Extraordinary</span></h1>
                            <p className="text-gray mb-12 text-lg">
                                Ready to transform your career or business with AI? Reach out directly.
                                We typically respond within 2 hours.
                            </p>

                            <div className="space-y-8">
                                <div className="contact-card p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">
                                        📧
                                    </div>
                                    <div>
                                        <h4 className="text-gray text-sm uppercase tracking-wider mb-1">Email Directly</h4>
                                        <a href="mailto:chetansharma@gmppayroll.com" className="text-2xl font-bold text-white hover:text-purple-400 transition-colors">
                                            chetansharma@gmppayroll.com
                                        </a>
                                    </div>
                                </div>

                                <div className="contact-card p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">
                                        📱
                                    </div>
                                    <div>
                                        <h4 className="text-gray text-sm uppercase tracking-wider mb-1">Call / WhatsApp</h4>
                                        <a href="tel:+918619495587" className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors">
                                            +91 8619495587
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Advanced Form */}
                        <div className="fade-in-up delay-200">
                            <div style={{
                                background: 'rgba(15, 23, 42, 0.6)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '24px',
                                padding: '3rem',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                            }}>
                                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                                <form action="https://formsubmit.co/chetansharma@gmppayroll.com" method="POST" className="space-y-6">
                                    {/* FormSubmit Config */}
                                    <input type="hidden" name="_subject" value="New Contact Form Submission" />
                                    <input type="hidden" name="_next" value="https://chetanpayroll.github.io/gmp-payroll-site/" />
                                    <input type="hidden" name="_captcha" value="false" />

                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs uppercase text-gray mb-2 font-bold tracking-wider">First Name</label>
                                            <input type="text" name="First Name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="John" required />
                                        </div>
                                        <div>
                                            <label className="block text-xs uppercase text-gray mb-2 font-bold tracking-wider">Last Name</label>
                                            <input type="text" name="Last Name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="Doe" required />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs uppercase text-gray mb-2 font-bold tracking-wider">Email Address</label>
                                        <input type="email" name="Email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="john@company.com" required />
                                    </div>

                                    <div>
                                        <label className="block text-xs uppercase text-gray mb-2 font-bold tracking-wider">Topic</label>
                                        <select name="Subject" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors cursor-pointer appearance-none">
                                            <option style={{ color: 'black' }} value="General Inquiry">General Inquiry</option>
                                            <option style={{ color: 'black' }} value="Course Support">Course Support</option>
                                            <option style={{ color: 'black' }} value="Partnership">Partnership</option>
                                            <option style={{ color: 'black' }} value="Consulting">Consulting</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs uppercase text-gray mb-2 font-bold tracking-wider">Message</label>
                                        <textarea name="Message" rows="4" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="How can we help you?" required></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-primary w-full py-4 text-lg font-bold shadow-lg hover:shadow-purple-500/25 transition-all transform hover:-translate-y-1">
                                        Send Message →
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
