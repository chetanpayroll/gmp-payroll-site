
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata = {
    title: 'AI Training in Gurgaon | Best AI Institute & Certification',
    description: 'Top-rated AI training in Gurgaon. Learn practical AI, generative tools, and automation. Join the best AI institute in Gurugram for professionals.',
    keywords: ['AI Gurgaon', 'AI courses in Gurgaon', 'AI institute in Gurugram', 'AI certification in Gurgaon', 'Data science course Gurgaon', 'AI coaching centers Gurgaon'],
    openGraph: {
        title: 'Best AI Training in Gurgaon | AI Gravity Academy',
        description: 'Master AI in Gurgaon. Professional certification for career growth.',
        url: 'https://www.gmppayroll.org/ai-courses-in-gurgaon',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.gmppayroll.org/ai-courses-in-gurgaon',
    },
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AI Gravity Academy - Gurgaon",
    "url": "https://www.gmppayroll.org/ai-courses-in-gurgaon",
    "description": "Leading AI institute in Gurgaon offering professional courses in Artificial Intelligence and Automation.",
    "areaServed": {
        "@type": "City",
        "name": "Gurgaon"
    },
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Gurugram",
        "addressRegion": "Haryana",
        "addressCountry": "IN"
    },
    "offers": {
        "@type": "Course",
        "name": "Professional AI Certification Gurgaon",
        "description": "Advanced AI training for corporate professionals in Gurugram."
    }
};

export default function AIGurgaon() {
    return (
        <main className="min-h-screen bg-[#0A1628] text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <Navbar />
            <div className="pt-32 pb-20 container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold mb-4">
                        GURGAON'S PREMIER AI INSTITUTE
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Best <span className="bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] bg-clip-text text-transparent">AI Training in Gurgaon</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Accelerate your career in Cyber City with our <strong>AI courses in Gurgaon</strong>. Designed for working professionals to master GenAI and Automation.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                        <h2 className="text-2xl font-bold mb-4">Strategic AI Skills for Gurugram Professionals</h2>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex gap-2"><span className="text-cyan-400">✓</span> <strong>Corporate-Ready:</strong> Curriculum aligned with Gurgaon's MNC requirements.</li>
                            <li className="flex gap-2"><span className="text-cyan-400">✓</span> <strong>Weekend Batches:</strong> Flexible schedules for working professionals.</li>
                            <li className="flex gap-2"><span className="text-cyan-400">✓</span> <strong>Networking:</strong> Connect with peers from top Gurgaon companies.</li>
                            <li className="flex gap-2"><span className="text-cyan-400">✓</span> <strong>Placement Support:</strong> Guidance for AI roles in NCR tech hubs.</li>
                        </ul>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm flex flex-col justify-center">
                        <h3 className="text-xl font-bold mb-4 text-center">Reviews from Gurgaon</h3>
                        <blockquote className="italic text-gray-400 mb-4 text-center">
                            "The best AI training I've found in Gurgaon. It's practical and bypasses all the complex coding theory. Highly recommended for managers."
                        </blockquote>
                        <div className="text-center">
                            <div className="font-bold text-white">- Priya S., Gurugram</div>
                            <div className="text-sm text-gray-500">Product Lead</div>
                        </div>
                    </div>
                </div>

                <div className="text-center bg-[#0F172A] rounded-3xl p-8 border border-white/10">
                    <h2 className="text-2xl font-bold mb-4">Upskill with AI in Gurgaon Today</h2>
                    <p className="text-gray-400 mb-8">Join the elite league of AI-ready professionals in NCR.</p>
                    <div className="flex justify-center gap-4">
                        <Link href="/enroll" className="btn btn-primary px-8 py-3 rounded-xl bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] font-bold">
                            Join Waiting List
                        </Link>
                        <Link href="/contact" className="btn btn-secondary px-8 py-3 rounded-xl border border-white/20 hover:bg-white/5">
                            Request Syllabus
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
