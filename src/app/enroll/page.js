"use client";
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Form Component
const EnrollForm = () => {
    const searchParams = useSearchParams();
    const course = searchParams.get('course') || 'AI Foundations Bootcamp';

    // Mock pricing lookup based on course name matching - just for display
    let displayPrice = "₹2,000 INR";
    if (course.includes("Architect")) displayPrice = "₹3,000 INR";
    if (course.includes("Business")) displayPrice = "₹5,000 INR";
    if (course.includes("Corporate")) displayPrice = "Custom";

    const inputStyle = {
        width: '100%',
        padding: '16px',
        borderRadius: '12px',
        background: 'rgba(15, 23, 42, 0.6)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        color: 'white',
        outline: 'none',
        fontSize: '1rem',
        marginTop: '8px',
        transition: '0.3s'
    };

    const labelStyle = {
        color: '#94a3b8',
        fontSize: '0.9rem',
        fontWeight: '500'
    };

    return (
        <div className="enroll-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>

            {/* LEFT: Enrollment Details Grid */}
            <div style={{ order: 2 }}>
                <div style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '24px',
                    padding: '2.5rem',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #7c3aed, #06b6d4)' }}></div>

                    <h2 className="text-2xl font-bold mb-8 text-center" style={{ fontSize: '1.8rem' }}>Student <span className="text-gradient">Application</span></h2>

                    <form action="https://formsubmit.co/chetansharma@gmppayroll.com" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {/* Hidden Fields for FormSubmit configuration */}
                        <input type="hidden" name="_subject" value={`New Enrollment Application: ${course}`} />
                        <input type="hidden" name="_next" value="https://chetanpayroll.github.io/gmp-payroll-site/" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="Selected_Course" value={course} />
                        <input type="hidden" name="Course_Price" value={displayPrice} />

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <div>
                                <label style={labelStyle}>First Name *</label>
                                <input type="text" name="First_Name" required style={inputStyle} placeholder="Jane" />
                            </div>
                            <div>
                                <label style={labelStyle}>Last Name *</label>
                                <input type="text" name="Last_Name" required style={inputStyle} placeholder="Doe" />
                            </div>
                        </div>

                        <div>
                            <label style={labelStyle}>Email Address *</label>
                            <input type="email" name="Email" required style={inputStyle} placeholder="jane@company.com" />
                            <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '4px' }}>We'll send your login details here.</p>
                        </div>

                        <div>
                            <label style={labelStyle}>Phone Number *</label>
                            <input type="tel" name="Phone" required style={inputStyle} placeholder="+91 98765 43210" />
                        </div>

                        <div>
                            <label style={labelStyle}>Current Professional Role</label>
                            <input type="text" name="Role" style={inputStyle} placeholder="e.g. Operations Manager, Freelancer" />
                        </div>

                        <div>
                            <label style={labelStyle}>Primary Goal</label>
                            <select name="Goal" style={{ ...inputStyle, cursor: 'pointer' }}>
                                <option style={{ color: 'black' }} value="Automate Tasks">I want to automate boring tasks</option>
                                <option style={{ color: 'black' }} value="Career Shift">I want to switch to an AI career</option>
                                <option style={{ color: 'black' }} value="Freelancing">I want to start freelancing/agency</option>
                                <option style={{ color: 'black' }} value="Upskilling Team">I want to upskill my team</option>
                            </select>
                        </div>

                        <div style={{ marginTop: '1rem' }}>
                            <button
                                type="submit"
                                className="btn btn-primary btn-glow"
                                style={{ width: '100%', padding: '18px', fontSize: '1.1rem', borderRadius: '12px' }}
                            >
                                Complete Enrollment →
                            </button>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem', opacity: 0.6 }}>
                                <span style={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px' }}>🔒 SSL Secure</span>
                                <span style={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px' }}>⚡ Instant Access</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* RIGHT (or Top on mobile): Course Summary */}
            <div style={{ order: 1 }}>
                <div style={{ position: 'sticky', top: '100px' }}>
                    <div style={{
                        background: 'linear-gradient(145deg, rgba(124, 58, 237, 0.1), rgba(6, 182, 212, 0.05))',
                        border: '1px solid rgba(124, 58, 237, 0.3)',
                        borderRadius: '24px',
                        padding: '2rem'
                    }}>
                        <h3 className="text-gray" style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px', marginBottom: '1rem' }}>Order Summary</h3>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-2">{course}</h2>
                                <span className="badge badge-purple">Lifetime Access</span>
                            </div>
                            <div className="text-right">
                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{displayPrice}</div>
                            </div>
                        </div>

                        <ul style={{ spaceY: '1rem' }}>
                            {[
                                "Full Course Curriculum Access",
                                "Downloadable Automation Templates",
                                "Private Community Access",
                                "Certificate of Completion",
                                "30-Day Money Back Guarantee"
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', color: '#cbd5e1' }}>
                                    <div style={{ background: 'rgba(34, 197, 94, 0.2)', color: '#4ade80', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem' }}>✓</div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ fontSize: '2rem' }}>🛡️</div>
                                <div>
                                    <h4 style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>100% Risk-Free</h4>
                                    <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Try the course for 30 days. If you don't love it, get a full refund.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default function Enroll() {
    return (
        <main className="min-h-screen bg-dark">
            <Navbar />
            <section className="section pt-32 pb-20">
                <div className="container">
                    <div className="text-center mb-16">
                        <div style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '50px', background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)', color: '#86efac', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '1rem', letterSpacing: '1px' }}>SECURE CHECKOUT</div>
                        <h1 className="text-4xl font-bold mb-4">Final Step to <span className="text-gradient">Transformation</span></h1>
                        <p className="text-gray max-w-2xl mx-auto">You're just one step away from joining 5,000+ professionals mastering AI.</p>
                    </div>

                    <Suspense fallback={<div className="text-center text-white">Loading checkout...</div>}>
                        <EnrollForm />
                    </Suspense>

                </div>
            </section>
            <Footer />
        </main>
    );
}
