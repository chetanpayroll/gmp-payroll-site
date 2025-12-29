
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FAQAccordion from '../../components/FAQAccordion';
import { BreadcrumbSchema } from '@/components/StructuredData';

export const metadata = {
    title: 'Frequently Asked Questions | AI Gravity Academy',
    description: 'Find answers to common questions about our AI courses, certificates, pricing, and corporate training. Get the clarity you need to start your AI journey.',
    keywords: ['AI course FAQ', 'AI Gravity support', 'refund policy', 'certification questions'],
    openGraph: {
        title: 'FAQ - AI Gravity Academy',
        description: 'Answers to your questions about mastering AI.',
        url: 'https://www.gmppayroll.org/faq',
    },
    alternates: {
        canonical: 'https://www.gmppayroll.org/faq',
    },
};

export default function FAQ() {
    const breadcrumbs = [
        { name: 'Home', url: 'https://www.gmppayroll.org' },
        { name: 'FAQ', url: 'https://www.gmppayroll.org/faq' },
    ];

    return (
        <main className="min-h-screen bg-[#0A1628]">
            <BreadcrumbSchema items={breadcrumbs} />
            <Navbar />

            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden footer-bg-z-index">
                <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-cyan-600/10 blur-[100px] rounded-full" />
            </div>

            <div className="pt-32 pb-20 px-4 relative z-10">
                <div className="container mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="inline-block py-2 px-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6">
                            ❓ Support Center
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]">Questions</span>
                        </h1>
                        <p className="text-xl text-gray-400">
                            Everything you need to know about our academy, courses, and platform.
                        </p>
                    </div>

                    <FAQAccordion />

                    <div className="mt-20 text-center">
                        <p className="text-gray-400 mb-6">Still have questions?</p>
                        <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white font-bold hover:shadow-lg hover:shadow-purple-500/25 transition-all transform hover:-translate-y-1">
                            Contact Support
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
