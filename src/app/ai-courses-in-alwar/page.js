
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata = {
    title: 'AI Courses in Alwar | Best Artificial Intelligence Training Institute',
    description: 'Join the best AI courses in Alwar. Learn practical artificial intelligence, no-code automation, and ChatGPT. Get certified and job-ready with AI Gravity Academy.',
    keywords: ['AI Alwar', 'AI courses in Alwar', 'AI institute in Alwar', 'Best AI classes in Alwar', 'AI training Alwar online', 'Artificial Intelligence course Alwar'],
    openGraph: {
        title: 'Best AI Courses in Alwar | AI Gravity Academy',
        description: 'Master AI in Alwar. Practical training for students and professionals. No coding required.',
        url: 'https://www.gmppayroll.org/ai-courses-in-alwar',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.gmppayroll.org/ai-courses-in-alwar',
    },
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AI Gravity Academy - Alwar",
    "url": "https://www.gmppayroll.org/ai-courses-in-alwar",
    "description": "Top-rated AI courses and certification in Alwar. Providing practical AI training for beginners and professionals.",
    "areaServed": {
        "@type": "City",
        "name": "Alwar"
    },
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Alwar",
        "addressRegion": "Rajasthan",
        "addressCountry": "IN"
    },
    "offers": {
        "@type": "Course",
        "name": "AI Certification Program Alwar",
        "description": "Comprehensive AI training in Alwar including ChatGPT, Automation, and Prompt Engineering."
    }
};

export default function AIAlwar() {
    return (
        <main className="min-h-screen bg-[#0A1628] text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <Navbar />
            <div className="pt-32 pb-20 container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <span className="inline-block py-1 px-3 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-bold mb-4">
                        ALWAR'S #1 AI TRAINING
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Best <span className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">AI Courses in Alwar</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Transform your career with practical <strong>Artificial Intelligence training in Alwar</strong>. Learn to build automations, master ChatGPT, and get certified without writing code.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                        <h2 className="text-2xl font-bold mb-4">Why Choose AI Gravity Academy in Alwar?</h2>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex gap-2"><span className="text-green-400">✓</span> <strong>Job-Ready Curriculum:</strong> Focus on real-world skills used by top Alwar businesses.</li>
                            <li className="flex gap-2"><span className="text-green-400">✓</span> <strong>No Coding Required:</strong> Perfect for beginners and working professionals in Rajasthan.</li>
                            <li className="flex gap-2"><span className="text-green-400">✓</span> <strong>Live Mentorship:</strong> Direct guidance from Chetan Sharma, industry expert.</li>
                            <li className="flex gap-2"><span className="text-green-400">✓</span> <strong>Certificate:</strong> Recognized AI certification to boost your resume.</li>
                        </ul>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm flex flex-col justify-center">
                        <h3 className="text-xl font-bold mb-4 text-center">Student Success in Alwar</h3>
                        <blockquote className="italic text-gray-400 mb-4 text-center">
                            "I am from Alwar and was looking for a good AI institute. AI Gravity helped me understand automation tools perfectly. I now save 10 hours a week!"
                        </blockquote>
                        <div className="text-center">
                            <div className="font-bold text-white">- Rahul V., Alwar</div>
                            <div className="text-sm text-gray-500">Marketing Manager</div>
                        </div>
                    </div>
                </div>

                <div className="text-center bg-[#0F172A] rounded-3xl p-8 border border-white/10">
                    <h2 className="text-2xl font-bold mb-4">Ready to Start Learning AI in Alwar?</h2>
                    <p className="text-gray-400 mb-8">Join the growing community of AI professionals in Rajasthan.</p>
                    <div className="flex justify-center gap-4">
                        <Link href="/enroll" className="btn btn-primary px-8 py-3 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] font-bold">
                            Enroll Now
                        </Link>
                        <Link href="/contact" className="btn btn-secondary px-8 py-3 rounded-xl border border-white/20 hover:bg-white/5">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
