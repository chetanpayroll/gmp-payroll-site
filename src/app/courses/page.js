
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LearningPaths from '../../components/LearningPaths';
import { BreadcrumbSchema } from '@/components/StructuredData';

export const metadata = {
    title: 'AI Courses & Learning Paths | AI Gravity Academy',
    description: 'Explore our comprehensive AI training programs. From beginner to enterprise, master AI automation, ChatGPT, and more with practical, hands-on courses.',
    keywords: ['AI courses', 'learn AI', 'ChatGPT training', 'automation mastery', 'AI certification'],
    openGraph: {
        title: 'AI Courses & Learning Paths',
        description: 'Master AI and Automation with our expert-led courses.',
        url: 'https://www.gmppayroll.org/courses',
    },
    alternates: {
        canonical: 'https://www.gmppayroll.org/courses',
    },
};

export default function Courses() {
    const breadcrumbs = [
        { name: 'Home', url: 'https://www.gmppayroll.org' },
        { name: 'Courses', url: 'https://www.gmppayroll.org/courses' },
    ];

    return (
        <main className="min-h-screen bg-[#0A1628]">
            <BreadcrumbSchema items={breadcrumbs} />
            <Navbar />

            <div className="pt-24">
                <LearningPaths />
            </div>

            {/* Additional CTA Section for Courses page */}
            <section className="py-20 bg-[#0F172A] border-t border-white/5">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Not sure where to start?</h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        Book a free 15-minute consultation to find the perfect learning path for your career goals.
                    </p>
                    <a href="/contact" className="inline-block px-8 py-4 rounded-xl bg-white/10 text-white font-bold border border-white/10 hover:bg-white/20 transition-all">
                        Talk to an Advisor
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
