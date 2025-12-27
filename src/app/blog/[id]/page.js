import React from 'react';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

// Dummy data for end-to-end functionality
const articles = {
    'prompt-engineering-guide': {
        title: "The Ultimate Guide to Prompt Engineering in 2024 🚀",
        cat: "Guides",
        date: "Dec 15, 2024",
        gradient: "linear-gradient(135deg, #7c3aed, #4f46e5)",
        content: (
            <>
                <p className="lead text-xl text-gray-300 mb-8">Stop guessing. Learn the scientific framework for getting perfect outputs from ChatGPT and Claude every single time.</p>
                <h2 className="text-2xl font-bold text-white mb-4">Why Prompt Engineering Matters</h2>
                <p className="text-gray-400 mb-6">In the age of AI, the ability to communicate effectively with large language models is a superpower. It distinguishes between getting a generic, hallucinated response and a precise, actionable output that saves you hours of work.</p>
                <h2 className="text-2xl font-bold text-white mb-4">The 3-Step Framework</h2>
                <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
                    <li><strong>Context:</strong> Give the AI a persona (e.g., "Act as a Senior Python Developer").</li>
                    <li><strong>Task:</strong> Be specific about what you want (e.g., "Write a script to scrape pricing data").</li>
                    <li><strong>Constraints:</strong> Set boundaries (e.g., "Use BeautifulSoup, handle errors gracefully, and comment your code").</li>
                </ul>
                <p className="text-gray-400">By following this structure, you reduce ambiguity and force the model to focus on the specific parameters of your request.</p>
            </>
        )
    },
    'automation-agency-case-study': {
        title: "How I Built a $10k/Month Automation Agency 💰",
        cat: "Case Study",
        date: "Dec 10, 2024",
        gradient: "linear-gradient(135deg, #059669, #10b981)",
        content: (
            <>
                <p className="lead text-xl text-gray-300 mb-8">A step-by-step case study of how one student turned their new Make.com skills into a profitable service business.</p>
                <h2 className="text-2xl font-bold text-white mb-4">The Opportunity</h2>
                <p className="text-gray-400 mb-6">Every business has boring, repetitive tasks. Invoicing, lead data entry, social media posting. They hate doing it, but they don't know how to stop.</p>
                <h2 className="text-2xl font-bold text-white mb-4">The Solution: "AI Automation as a Service" (AAA)</h2>
                <p className="text-gray-400 mb-6">I started offering a simple package: "I will automate your lead follow-up system for $1,000." It took me 2 hours to build in Make.com.</p>
                <p className="text-gray-400">Within 3 months, I had 10 recurring clients on retainer for maintenance and new builds.</p>
            </>
        )
    },
    'zapier-vs-make-vs-n8n': {
        title: "Zapier vs Make vs n8n: Which Tool is Right for You? 🛠️",
        cat: "Tools",
        date: "Dec 05, 2024",
        gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)",
        content: (
            <>
                <p className="lead text-xl text-gray-300 mb-8">An honest comparison of the top 3 low-code automation platforms based on pricing, ease of use, and scalability.</p>
                <h2 className="text-2xl font-bold text-white mb-4">1. Zapier</h2>
                <p className="text-gray-400 mb-6"><strong>Best for:</strong> Beginners and simple linear integrations.<br /><strong>Pros:</strong> Massive integration library, very easy to use.<br /><strong>Cons:</strong> Expensive at scale.</p>
                <h2 className="text-2xl font-bold text-white mb-4">2. Make (formerly Integromat)</h2>
                <p className="text-gray-400 mb-6"><strong>Best for:</strong> Visual thinkers and complex workflows.<br /><strong>Pros:</strong> Visual visual builder, affordable, powerful logic.<br /><strong>Cons:</strong> Steeper learning curve than Zapier.</p>
                <h2 className="text-2xl font-bold text-white mb-4">3. n8n</h2>
                <p className="text-gray-400 mb-6"><strong>Best for:</strong> Developers and self-hosters.<br /><strong>Pros:</strong> Open source, self-hostable (free), extremely flexible.<br /><strong>Cons:</strong> Requires technical knowledge to set up self-hosted.</p>
            </>
        )
    }
};

export default function BlogPost({ params }) {
    // In a real app, we'd fetch data. Here we use the static map.
    // Ensure we handle 'undefined' params gracefully during static build checks
    const id = params?.id;
    const post = articles[id];

    if (!post) {
        return (
            <main className="min-h-screen bg-dark flex flex-col">
                <Navbar />
                <div className="flex-grow flex items-center justify-center pt-32">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
                        <Link href="/blog" className="btn btn-primary">Back to Blog</Link>
                    </div>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-dark">
            <Navbar />

            {/* Hero Header */}
            <div style={{ background: post.gradient, paddingTop: '140px', paddingBottom: '80px', position: 'relative' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <span className="bg-black/20 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block backdrop-blur-sm border border-white/10">{post.cat}</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{post.title}</h1>
                    <div className="flex items-center gap-4 text-white/80 font-medium">
                        <span>📅 {post.date}</span>
                        <span>•</span>
                        <span>⏱️ 5 min read</span>
                    </div>
                </div>
            </div>

            <article className="section py-20">
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-sm">
                        <div className="prose prose-invert max-w-none">
                            {post.content}
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center">
                            <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">← Back to Insights</Link>
                            <div className="flex gap-2">
                                <button className="text-gray-400 hover:text-white">Share 🔗</button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}

// Generate static params for static export
export function generateStaticParams() {
    return [
        { id: 'prompt-engineering-guide' },
        { id: 'automation-agency-case-study' },
        { id: 'zapier-vs-make-vs-n8n' },
    ];
}
