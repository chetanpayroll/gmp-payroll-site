
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';
import { BreadcrumbSchema, LocalBusinessSchema } from '@/components/StructuredData';

export const metadata = {
    title: 'Contact Us | Get in Touch with AI Gravity Academy',
    description: 'Have questions about our AI courses? Contact AI Gravity Academy for course inquiries, corporate training, partnerships, or support. We respond within 24 hours.',
    keywords: ['contact AI Gravity', 'AI training inquiry', 'corporate AI training', 'course support'],
    openGraph: {
        title: 'Contact AI Gravity Academy',
        description: 'Get in touch for course inquiries, corporate training, or support. Response within 24 hours.',
        url: 'https://www.gmppayroll.org/contact',
    },
    twitter: {
        title: 'Contact AI Gravity Academy',
        description: 'Get in touch for AI training inquiries',
    },
    alternates: {
        canonical: 'https://www.gmppayroll.org/contact',
    },
};

// Inline Icons
const EmailIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);
const PhoneIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

export default function Contact() {
    const breadcrumbs = [
        { name: 'Home', url: 'https://www.gmppayroll.org' },
        { name: 'Contact', url: 'https://www.gmppayroll.org/contact' },
    ];

    return (
        <main className="min-h-screen bg-[#050B14]">
            <BreadcrumbSchema items={breadcrumbs} />
            <LocalBusinessSchema />

            <Navbar />

            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-cyan-600/10 blur-[100px] rounded-full" />
            </div>

            <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

                        {/* Left Side: Info */}
                        <div className="w-full lg:w-1/2 lg:sticky lg:top-32">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider mb-8">
                                <span>Contact Us</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                Let's Build Something <br />
                                <span className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">Extraordinary</span>
                            </h1>

                            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed mb-12 max-w-lg">
                                Ready to transform your career or business with AI? Reach out directly.
                                We typically respond within 2 hours.
                            </p>

                            <div className="space-y-6">
                                {/* Email Card */}
                                <a
                                    href="mailto:chetansharma@gmppayroll.com"
                                    className="
                                        group block p-6 sm:p-8
                                        bg-white/5 border border-white/10 rounded-2xl
                                        hover:bg-white/10 hover:border-white/20 hover:-translate-y-1
                                        transition-all duration-300
                                    "
                                >
                                    <div className="flex items-center gap-6">
                                        <div className="
                                            w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0
                                            rounded-full
                                            bg-gradient-to-br from-[#7C3AED] to-[#4F46E5]
                                            flex items-center justify-center
                                            text-white shadow-lg shadow-purple-500/30
                                        ">
                                            <EmailIcon className="w-8 h-8 sm:w-10 sm:h-10" />
                                        </div>
                                        <div className="min-w-0">
                                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 group-hover:text-purple-400 transition-colors">Email Directly</h4>
                                            <div className="text-lg sm:text-2xl font-bold text-white truncate group-hover:underline decoration-white/30 underline-offset-4">
                                                chetansharma@gmppayroll.com
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                {/* Phone Card */}
                                <a
                                    href="tel:+918619495587"
                                    className="
                                        group block p-6 sm:p-8
                                        bg-white/5 border border-white/10 rounded-2xl
                                        hover:bg-white/10 hover:border-white/20 hover:-translate-y-1
                                        transition-all duration-300
                                    "
                                >
                                    <div className="flex items-center gap-6">
                                        <div className="
                                            w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0
                                            rounded-full
                                            bg-gradient-to-br from-[#06B6D4] to-[#3B82F6]
                                            flex items-center justify-center
                                            text-white shadow-lg shadow-cyan-500/30
                                        ">
                                            <PhoneIcon className="w-8 h-8 sm:w-10 sm:h-10" />
                                        </div>
                                        <div className="min-w-0">
                                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 group-hover:text-cyan-400 transition-colors">Call / WhatsApp</h4>
                                            <div className="text-xl sm:text-2xl font-bold text-white truncate group-hover:underline decoration-white/30 underline-offset-4">
                                                +91 8619495587
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="w-full lg:w-1/2">
                            <ContactForm />
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
