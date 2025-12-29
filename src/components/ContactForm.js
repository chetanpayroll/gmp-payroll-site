"use client";
import React, { useState } from 'react';

// Inline SVGs
const SendIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
);
const LoaderIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
);

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focusedField, setFocusedField] = useState(null);

    const handleSubmit = async (e) => {
        // We let the form submit naturally to FormSubmit, 
        // but we can add loading state for UX
        setIsSubmitting(true);
        // FormSubmit will redirect, so we don't need to reset
    };

    const inputClasses = (fieldName) => `
        w-full px-4 sm:px-5 py-3.5 sm:py-4
        bg-[#0F172A]/80 backdrop-blur-xl
        border border-white/10 rounded-xl
        text-white placeholder-gray-500
        outline-none transition-all duration-300
        ${focusedField === fieldName ? 'border-[#7C3AED] ring-1 ring-[#7C3AED] shadow-lg shadow-purple-500/20' : 'hover:border-white/20'}
    `;

    const labelClasses = "block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1";

    return (
        <div className="w-full max-w-xl mx-auto">
            <div className="
                relative
                bg-gradient-to-br from-white/5 to-transparent
                backdrop-blur-2xl
                border border-white/10
                rounded-3xl
                p-6 sm:p-10
                shadow-2xl
            ">
                <div className="mb-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Send a Message</h3>
                    <p className="text-gray-400 text-sm">We typically respond within 2 hours.</p>
                </div>

                <form
                    action="https://formsubmit.co/chetansharma@gmppayroll.com"
                    method="POST"
                    className="space-y-6"
                    onSubmit={handleSubmit}
                >
                    {/* FormSubmit Configuration */}
                    <input type="hidden" name="_subject" value="New Contact Form Submission" />
                    <input type="hidden" name="_next" value="https://chetanpayroll.github.io/gmp-payroll-site/" />
                    <input type="hidden" name="_captcha" value="false" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className={labelClasses}>First Name</label>
                            <input
                                type="text"
                                name="First Name"
                                required
                                placeholder="John"
                                className={inputClasses('firstName')}
                                onFocus={() => setFocusedField('firstName')}
                                onBlur={() => setFocusedField(null)}
                            />
                        </div>
                        <div>
                            <label className={labelClasses}>Last Name</label>
                            <input
                                type="text"
                                name="Last Name"
                                required
                                placeholder="Doe"
                                className={inputClasses('lastName')}
                                onFocus={() => setFocusedField('lastName')}
                                onBlur={() => setFocusedField(null)}
                            />
                        </div>
                    </div>

                    <div>
                        <label className={labelClasses}>Email Address</label>
                        <input
                            type="email"
                            name="Email"
                            required
                            placeholder="john@company.com"
                            className={inputClasses('email')}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                        />
                    </div>

                    <div>
                        <label className={labelClasses}>Phone (Optional)</label>
                        <input
                            type="tel"
                            name="Phone"
                            placeholder="+1 (555) 000-0000"
                            className={inputClasses('phone')}
                            onFocus={() => setFocusedField('phone')}
                            onBlur={() => setFocusedField(null)}
                        />
                    </div>

                    <div>
                        <label className={labelClasses}>Topic</label>
                        <div className="relative">
                            <select
                                name="Subject"
                                className={`${inputClasses('subject')} appearance-none cursor-pointer`}
                                onFocus={() => setFocusedField('subject')}
                                onBlur={() => setFocusedField(null)}
                            >
                                <option className="text-black" value="General Inquiry">General Inquiry</option>
                                <option className="text-black" value="Course Support">Course Support</option>
                                <option className="text-black" value="Partnership">Partnership</option>
                                <option className="text-black" value="Consulting">Consulting</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                ▼
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className={labelClasses}>Message</label>
                        <textarea
                            name="Message"
                            rows="4"
                            required
                            placeholder="How can we help you?"
                            className={`${inputClasses('message')} resize-y`}
                            onFocus={() => setFocusedField('message')}
                            onBlur={() => setFocusedField(null)}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`
                            w-full py-4 rounded-xl
                            bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]
                            text-white font-bold text-lg
                            shadow-lg shadow-purple-900/30
                            hover:shadow-purple-900/50 hover:scale-[1.01]
                            active:scale-[0.98]
                            disabled:opacity-70 disabled:cursor-not-allowed
                            transition-all duration-300
                            flex items-center justify-center gap-2
                        `}
                    >
                        {isSubmitting ? (
                            <>
                                <LoaderIcon className="w-5 h-5 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            <>
                                Send Message
                                <SendIcon className="w-5 h-5" />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
