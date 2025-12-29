
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata = {
    title: 'AI Courses in Delhi NCR | Top AI Certification & Training',
    description: 'Enroll in the #1 AI Certification in Delhi NCR. Comprehensive Artificial Intelligence classes for students and professionals. Learn AI, ML, and Automation.',
    keywords: ['AI Delhi', 'AI courses in Delhi', 'AI institute in Delhi NCR', 'Best AI academy in Delhi', 'AI certification Delhi', 'Artificial Intelligence classes Delhi NCR'],
    openGraph: {
        title: 'Top AI Courses in Delhi NCR | AI Gravity Academy',
        description: 'Premier AI training institute in Delhi. Get certified in Artificial Intelligence.',
        url: 'https://www.gmppayroll.org/ai-courses-in-delhi',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.gmppayroll.org/ai-courses-in-delhi',
    },
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AI Gravity Academy - Delhi",
    "url": "https://www.gmppayroll.org/ai-courses-in-delhi",
    "description": "Leading AI Academy in Delhi NCR providing certification courses in Artifical Intelligence.",
    "areaServed": {
        "@type": "City",
        "name": "New Delhi"
    },
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "addressCountry": "IN"
    },
    "offers": {
        "@type": "Course",
        "name": "Master AI Course Delhi",
        "description": "Complete AI and Automation training program in Delhi NCR."
    }
};

export default function AIDelhi() {
    return (
        <main className="min-h-screen bg-[#0A1628] text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <Navbar />
            <div className="pt-32 pb-20 container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-bold mb-4">
                        DELHI NCR's BEST AI ACADEMY
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Leading <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">AI Courses in Delhi</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Join the most practical <strong>AI Institute in Delhi NCR</strong>. Master the future of technology with our comprehensive certification programs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                        <h2 className="text-2xl font-bold mb-4">Why Delhi Students Choose AI Gravity</h2>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex gap-2"><span className="text-indigo-400">✓</span> <strong>Expert Faculty:</strong> Learn from industry leaders based in NCR.</li>
                            <li className="flex gap-2"><span className="text-indigo-400">✓</span> <strong>Practical Approach:</strong> 100% project-based learning, no theory.</li>
                            <li className="flex gap-2"><span className="text-indigo-400">✓</span> <strong>Hybrid Learning:</strong> Online flexibility with local community meetups.</li>
                            <li className="flex gap-2"><span className="text-indigo-400">✓</span> <strong>Career Boost:</strong> Average 40% salary hike for graduates.</li>
                        </ul>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm flex flex-col justify-center">
                        <h3 className="text-xl font-bold mb-4 text-center">Delhi Student Stories</h3>
                        <blockquote className="italic text-gray-400 mb-4 text-center">
                            "Searching for AI courses in Delhi was confusing until I found AI Gravity. Their practical approach is exactly what I needed to switch careers."
                        </blockquote>
                        <div className="text-center">
                            <div className="font-bold text-white">- Amit K., New Delhi</div>
                            <div className="text-sm text-gray-500">Data Analyst</div>
                        </div>
                    </div>
                </div>

                <div className="text-center bg-[#0F172A] rounded-3xl p-8 border border-white/10">
                    <h2 className="text-2xl font-bold mb-4">Become an AI Expert in Delhi NCR</h2>
                    <p className="text-gray-400 mb-8">Start your journey with the capital's top-rated AI program.</p>
                    <div className="flex justify-center gap-4">
                        <Link href="/enroll" className="btn btn-primary px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 font-bold">
                            View Certifications
                        </Link>
                        <Link href="/contact" className="btn btn-secondary px-8 py-3 rounded-xl border border-white/20 hover:bg-white/5">
                            Contact Admissions
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
