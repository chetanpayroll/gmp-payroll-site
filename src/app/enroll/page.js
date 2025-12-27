"use client";
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Form Component
const EnrollForm = () => {
    const searchParams = useSearchParams();
    const course = searchParams.get('course') || 'AI Foundations Bootcamp';

    return (
        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Join <span className="text-gradient">{course}</span></h2>

            <form action="https://formsubmit.co/chetansharma@gmppayroll.com" method="POST" className="space-y-6">
                {/* Hidden Fields for FormSubmit configuration */}
                <input type="hidden" name="_subject" value={`New Enrollment: ${course}`} />
                <input type="hidden" name="_next" value="https://chetanpayroll.github.io/gmp-payroll-site/" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="Course Selected" value={course} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm text-gray mb-2">Full Name</label>
                        <input type="text" name="Name" required className="form-input" placeholder="e.g. John Doe" />
                    </div>
                    <div>
                        <label className="block text-sm text-gray mb-2">Phone Number</label>
                        <input type="tel" name="Phone" required className="form-input" placeholder="+1 (555) 000-0000" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm text-gray mb-2">Email Address</label>
                    <input type="email" name="Email" required className="form-input" placeholder="john@company.com" />
                </div>

                <div>
                    <label className="block text-sm text-gray mb-2">Current Role / Title</label>
                    <input type="text" name="Role" className="form-input" placeholder="e.g. Operations Manager" />
                </div>

                <div>
                    <label className="block text-sm text-gray mb-2">What is your main goal?</label>
                    <select name="Goal" className="form-select">
                        <option>Automate manual tasks</option>
                        <option>Start a new career in AI</option>
                        <option>Upskill my team</option>
                        <option>Start an agency</option>
                    </select>
                </div>

                <div className="pt-4">
                    <button type="submit" className="btn btn-primary w-full text-lg">
                        Complete Enrollment
                    </button>
                    <p className="text-xs text-center text-gray mt-4">
                        By clicking Enroll, you agree to receive course updates via email.
                    </p>
                </div>
            </form>
        </div>
    );
};

export default function Enroll() {
    return (
        <main className="min-h-screen bg-dark">
            <Navbar />
            <section className="section pt-32 pb-20">
                <div className="container">
                    <div className="text-center mb-10">
                        <div className="badge badge-green mb-4">SECURE YOUR SPOT</div>
                        <h1 className="text-4xl font-bold mb-4">Start Your Transformation</h1>
                        <p className="text-gray">Fill out the details below to receive your enrollment package.</p>
                    </div>

                    <Suspense fallback={<div className="text-center text-white">Loading form...</div>}>
                        <EnrollForm />
                    </Suspense>

                </div>
            </section>
            <Footer />
        </main>
    );
}
