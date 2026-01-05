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

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* LEFT: Enrollment Details Grid */}
            <div className="order-2 lg:order-2">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 relative overflow-hidden backdrop-blur-sm">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7c3aed] to-[#06b6d4]"></div>

                    <h2 className="text-3xl font-bold mb-8 text-center text-white">Student <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]">Application</span></h2>

                    <form action="https://formsubmit.co/chetansharma@gmppayroll.com" method="POST" className="flex flex-col gap-6">
                        {/* Hidden Fields for FormSubmit configuration */}
                        <input type="hidden" name="_subject" value={`New Enrollment Application: ${course}`} />
                        <input type="hidden" name="_next" value="https://chetanpayroll.github.io/gmp-payroll-site/" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="Selected_Course" value={course} />
                        <input type="hidden" name="Course_Price" value={displayPrice} />

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="text-gray-400 text-sm font-medium block mb-2">First Name *</label>
                                <input type="text" name="First_Name" required className="w-full px-4 py-3 rounded-xl bg-[#0F172A]/60 border border-white/10 text-white outline-none focus:border-[#7C3AED] transition-colors" placeholder="Jane" />
                            </div>
                            <div>
                                <label className="text-gray-400 text-sm font-medium block mb-2">Last Name *</label>
                                <input type="text" name="Last_Name" required className="w-full px-4 py-3 rounded-xl bg-[#0F172A]/60 border border-white/10 text-white outline-none focus:border-[#7C3AED] transition-colors" placeholder="Doe" />
                            </div>
                        </div>

                        <div>
                            <label className="text-gray-400 text-sm font-medium block mb-2">Email Address *</label>
                            <input type="email" name="Email" required className="w-full px-4 py-3 rounded-xl bg-[#0F172A]/60 border border-white/10 text-white outline-none focus:border-[#7C3AED] transition-colors" placeholder="jane@company.com" />
                            <p className="text-xs text-gray-500 mt-1">We'll send your login details here.</p>
                        </div>

                        <div>
                            <label className="text-gray-400 text-sm font-medium block mb-2">Phone Number *</label>
                            <input type="tel" name="Phone" required className="w-full px-4 py-3 rounded-xl bg-[#0F172A]/60 border border-white/10 text-white outline-none focus:border-[#7C3AED] transition-colors" placeholder="+91 98765 43210" />
                        </div>

                        <div>
                            <label className="text-gray-400 text-sm font-medium block mb-2">Current Professional Role</label>
                            <input type="text" name="Role" className="w-full px-4 py-3 rounded-xl bg-[#0F172A]/60 border border-white/10 text-white outline-none focus:border-[#7C3AED] transition-colors" placeholder="e.g. Operations Manager, Freelancer" />
                        </div>

                        <div>
                            <label className="text-gray-400 text-sm font-medium block mb-2">Primary Goal</label>
                            <select name="Goal" className="w-full px-4 py-3 rounded-xl bg-[#0F172A]/60 border border-white/10 text-gray-300 outline-none focus:border-[#7C3AED] transition-colors cursor-pointer">
                                <option className="bg-[#0F172A]" value="Automate Tasks">I want to automate boring tasks</option>
                                <option className="bg-[#0F172A]" value="Career Shift">I want to switch to an AI career</option>
                                <option className="bg-[#0F172A]" value="Freelancing">I want to start freelancing/agency</option>
                                <option className="bg-[#0F172A]" value="Upskilling Team">I want to upskill my team</option>
                            </select>
                        </div>

                        <div className="mt-4">
                            <button
                                type="submit"
                                className="w-full py-4 text-lg font-bold rounded-xl btn-primary btn-glow bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white shadow-lg hover:shadow-purple-500/25 transition-all transform hover:-translate-y-1"
                            >
                                Complete Enrollment →
                            </button>
                            <div className="flex justify-center gap-4 mt-6 opacity-60 text-sm text-gray-400">
                                <span className="flex items-center gap-1">🔒 SSL Secure</span>
                                <span className="flex items-center gap-1">⚡ Instant Access</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* RIGHT: Course Summary */}
            <div className="order-1 lg:order-1">
                <div className="sticky top-28 bg-gradient-to-br from-[#7C3AED]/10 to-[#06B6D4]/5 border border-[#7C3AED]/30 rounded-3xl p-8">
                    <h3 className="text-gray-400 uppercase text-sm tracking-widest font-bold mb-6">Order Summary</h3>

                    <div className="flex justify-between items-start mb-8 pb-8 border-b border-white/10">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-2 leading-tight">{course}</h2>
                            <span className="inline-block px-3 py-1 bg-[#7C3AED]/20 text-[#c4b5fd] border border-[#7C3AED]/30 rounded-full text-xs font-bold uppercase tracking-wide">Lifetime Access</span>
                        </div>
                        <div className="text-right">
                            <div className="text-2xl font-bold text-white">{displayPrice}</div>
                        </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                        {[
                            "Full Course Curriculum Access",
                            "Downloadable Automation Templates",
                            "Private Community Access",
                            "Certificate of Completion",
                            "30-Day Money Back Guarantee"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                                <div className="w-5 h-5 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xs">✓</div>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 p-6 bg-white/5 rounded-2xl flex items-center gap-4">
                        <div className="text-3xl">🛡️</div>
                        <div>
                            <h4 className="font-bold text-white text-sm">100% Risk-Free</h4>
                            <p className="text-xs text-gray-400 mt-1">Try the course for 30 days. If you don't love it, get a full refund.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default function Enroll() {
    return (
        <main className="min-h-screen bg-[#050B14]">
            <Navbar />
            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-bold mb-4 tracking-widest">SECURE CHECKOUT</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Final Step to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]">Transformation</span></h1>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">You're just one step away from joining 5,000+ professionals mastering AI.</p>
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
