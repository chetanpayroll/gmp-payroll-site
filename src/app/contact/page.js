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

            <section className="section" style={{ position: 'relative', zIndex: 1, padding: '8rem 0' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>

                    {/* Enterprise Flex Layout */}
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '4rem' }}>

                        {/* Left Side: Info */}
                        <div style={{ flex: '1 1 500px', maxWidth: '600px' }}>
                            <div className="badge badge-purple mb-6" style={{ display: 'inline-block' }}>CONTACT US</div>
                            <h1 className="text-5xl font-bold mb-6" style={{ lineHeight: 1.1, fontSize: '3.5rem' }}>Let's Build Something <br /><span className="text-gradient">Extraordinary</span></h1>
                            <p className="text-gray mb-12 text-lg" style={{ lineHeight: 1.6, fontSize: '1.2rem', maxWidth: '500px' }}>
                                Ready to transform your career or business with AI? Reach out directly.
                                We typically respond within 2 hours.
                            </p>

                            <div className="space-y-6">
                                {/* Email Card */}
                                <a href="mailto:chetansharma@gmppayroll.com" className="group" style={{ textDecoration: 'none' }}>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '24px',
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid rgba(255,255,255,0.05)',
                                        padding: '2rem',
                                        borderRadius: '20px',
                                        transition: 'all 0.3s'
                                    }} className="hover:bg-white/5 hover:border-white/20 hover:-translate-y-1">
                                        <div style={{
                                            width: '64px',
                                            height: '64px',
                                            borderRadius: '50%',
                                            background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '1.8rem',
                                            boxShadow: '0 10px 20px rgba(124, 58, 237, 0.3)'
                                        }}>
                                            📧
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', color: '#94a3b8', marginBottom: '4px' }}>Email Directly</h4>
                                            <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'white', wordBreak: 'break-all' }}>chetansharma@gmppayroll.com</div>
                                        </div>
                                    </div>
                                </a>

                                {/* Phone Card */}
                                <a href="tel:+918619495587" className="group" style={{ textDecoration: 'none' }}>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '24px',
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid rgba(255,255,255,0.05)',
                                        padding: '2rem',
                                        borderRadius: '20px',
                                        transition: 'all 0.3s'
                                    }} className="hover:bg-white/5 hover:border-white/20 hover:-translate-y-1">
                                        <div style={{
                                            width: '64px',
                                            height: '64px',
                                            borderRadius: '50%',
                                            background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '1.8rem',
                                            boxShadow: '0 10px 20px rgba(6, 182, 212, 0.3)'
                                        }}>
                                            📱
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', color: '#94a3b8', marginBottom: '4px' }}>Call / WhatsApp</h4>
                                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>+91 8619495587</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Right Side: Advanced Form */}
                        <div style={{ flex: '1 1 500px', maxWidth: '550px' }}>
                            <div style={{
                                background: 'rgba(15, 23, 42, 0.8)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(124, 58, 237, 0.3)',
                                borderRadius: '24px',
                                padding: '3rem',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                            }}>
                                <h3 className="text-2xl font-bold mb-8 text-white">Send a Message</h3>
                                <form action="https://formsubmit.co/chetansharma@gmppayroll.com" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    {/* FormSubmit Config */}
                                    <input type="hidden" name="_subject" value="New Contact Form Submission" />
                                    <input type="hidden" name="_next" value="https://chetanpayroll.github.io/gmp-payroll-site/" />
                                    <input type="hidden" name="_captcha" value="false" />

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '1px' }}>First Name</label>
                                            <input type="text" name="First Name" style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', background: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'white', outline: 'none', fontSize: '1rem' }} placeholder="John" required />
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '1px' }}>Last Name</label>
                                            <input type="text" name="Last Name" style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', background: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'white', outline: 'none', fontSize: '1rem' }} placeholder="Doe" required />
                                        </div>
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '1px' }}>Email Address</label>
                                        <input type="email" name="Email" style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', background: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'white', outline: 'none', fontSize: '1rem' }} placeholder="john@company.com" required />
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '1px' }}>Topic</label>
                                        <div style={{ position: 'relative' }}>
                                            <select name="Subject" style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', background: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'white', outline: 'none', fontSize: '1rem', appearance: 'none', cursor: 'pointer' }}>
                                                <option style={{ color: 'black' }} value="General Inquiry">General Inquiry</option>
                                                <option style={{ color: 'black' }} value="Course Support">Course Support</option>
                                                <option style={{ color: 'black' }} value="Partnership">Partnership</option>
                                                <option style={{ color: 'black' }} value="Consulting">Consulting</option>
                                            </select>
                                            <div style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#94a3b8' }}>▼</div>
                                        </div>
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '1px' }}>Message</label>
                                        <textarea name="Message" rows="4" style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', background: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'white', outline: 'none', fontSize: '1rem', resize: 'vertical' }} placeholder="How can we help you?" required></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '16px', fontSize: '1.1rem', fontWeight: 'bold', borderRadius: '12px', marginTop: '1rem', boxShadow: '0 10px 25px -5px rgba(124, 58, 237, 0.5)', border: 'none', cursor: 'pointer', transition: 'all 0.3s' }}>
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
