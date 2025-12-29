
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata = {
    title: 'AI Training in Jaipur | Best AI Institute in Rajasthan',
    description: 'Learn AI and Machine Learning in Jaipur. Best AI institute for students and professionals. Join the top-rated AI course in Rajasthan.',
    keywords: ['AI Jaipur', 'AI training in Jaipur', 'AI courses in Jaipur', 'Best AI institute Jaipur', 'Machine learning Jaipur', 'Artificial Intelligence coaching Jaipur'],
    openGraph: {
        title: 'Top AI Training Institute in Jaipur | AI Gravity Academy',
        description: 'Transform your career with the best AI course in Jaipur. Practical training, expert mentors.',
        url: 'https://www.gmppayroll.org/ai-courses-in-jaipur',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.gmppayroll.org/ai-courses-in-jaipur',
    },
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AI Gravity Academy - Jaipur",
    "url": "https://www.gmppayroll.org/ai-courses-in-jaipur",
    "description": "Premier AI training institute in Jaipur offering certification courses.",
    "areaServed": {
        "@type": "City",
        "name": "Jaipur"
    },
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "addressCountry": "IN"
    },
    "offers": {
        "@type": "Course",
        "name": "AI Mastery Jaipur",
        "description": "Advanced AI and Automation course for Jaipur professionals."
    }
};

export default function AIJaipur() {
    return (
        <main className="min-h-screen bg-[#0A1628] text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <Navbar />
            <div className="pt-32 pb-20 container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <span className="inline-block py-1 px-3 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-bold mb-4">
                        JAIPUR'S #1 AI LEARNING HUB
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Best <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">AI Courses in Jaipur</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        The Pink City's premier destination for <strong>Artificial Intelligence training</strong>. Master the skills of tomorrow with AI Gravity Academy in Jaipur.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                        <h2 className="text-2xl font-bold mb-4">AI Excellence in Rajasthan</h2>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex gap-2"><span className="text-pink-400">✓</span> <strong>Localized Curriculum:</strong> Examples relevant to Rajasthan's growing tech sector.</li>
                            <li className="flex gap-2"><span className="text-pink-400">✓</span> <strong>Hindi/English Support:</strong> Learn in the language you are comfortable with.</li>
                            <li className="flex gap-2"><span className="text-pink-400">✓</span> <strong>Startup Focus:</strong> Special modules for Jaipur's startup founders.</li>
                            <li className="flex gap-2"><span className="text-pink-400">✓</span> <strong>Community:</strong> Join the largest AI meetups in Jaipur.</li>
                        </ul>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm flex flex-col justify-center">
                        <h3 className="text-xl font-bold mb-4 text-center">Jaipur Community Voice</h3>
                        <blockquote className="italic text-gray-400 mb-4 text-center">
                            "Finally a world-class AI course in Jaipur. The instructors are amazing and the practical projects really helped me land a remote job."
                        </blockquote>
                        <div className="text-center">
                            <div className="font-bold text-white">- Neha R., Jaipur</div>
                            <div className="text-sm text-gray-500">Software Developer</div>
                        </div>
                    </div>
                </div>

                <div className="text-center bg-[#0F172A] rounded-3xl p-8 border border-white/10">
                    <h2 className="text-2xl font-bold mb-4">Launch Your AI Career in Jaipur</h2>
                    <p className="text-gray-400 mb-8">Be a part of Rajasthan's AI revolution.</p>
                    <div className="flex justify-center gap-4">
                        <Link href="/enroll" className="btn btn-primary px-8 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 font-bold">
                            Start Learning
                        </Link>
                        <Link href="/contact" className="btn btn-secondary px-8 py-3 rounded-xl border border-white/20 hover:bg-white/5">
                            Course Details
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
