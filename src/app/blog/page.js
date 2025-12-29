
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/StructuredData';

export const metadata = {
    title: 'AI & Automation Blog | Tips, Tutorials & Industry Insights',
    description: 'Explore our blog for practical AI tips, automation tutorials, prompt engineering guides, and industry insights. Learn from real-world examples and expert advice.',
    keywords: ['AI blog', 'automation tutorials', 'ChatGPT tips', 'prompt engineering guide', 'AI for business'],
    openGraph: {
        title: 'AI Gravity Academy Blog',
        description: 'Practical AI tips, automation tutorials, and industry insights',
        url: 'https://www.gmppayroll.org/blog',
    },
    alternates: {
        canonical: 'https://www.gmppayroll.org/blog',
    },
};

export default function Blog() {
    const posts = [
        {
            id: 'prompt-engineering-guide',
            title: "The Ultimate Guide to Prompt Engineering in 2024 🚀",
            excerpt: "Stop guessing. Learn the scientific framework for getting perfect outputs from ChatGPT and Claude every single time. 🧠",
            cat: "Guides",
            date: "Dec 15, 2024",
            gradient: "linear-gradient(135deg, #7c3aed, #4f46e5)"
        },
        {
            id: 'automation-agency-case-study',
            title: "How I Built a $10k/Month Automation Agency 💰",
            excerpt: "A step-by-step case study of how one student turned their new Make.com skills into a profitable service business. 📈",
            cat: "Case Study",
            date: "Dec 10, 2024",
            gradient: "linear-gradient(135deg, #059669, #10b981)"
        },
        {
            id: 'zapier-vs-make-vs-n8n',
            title: "Zapier vs Make vs n8n: Which Tool is Right for You? 🛠️",
            excerpt: "An honest comparison of the top 3 low-code automation platforms based on pricing, ease of use, and scalability. ⚖️",
            cat: "Tools",
            date: "Dec 05, 2024",
            gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)"
        }
    ];

    const breadcrumbs = [
        { name: 'Home', url: 'https://www.gmppayroll.org' },
        { name: 'Blog', url: 'https://www.gmppayroll.org/blog' },
    ];

    return (
        <main className="min-h-screen bg-dark">
            <BreadcrumbSchema items={breadcrumbs} />
            <Navbar />
            {/* Background Effects */}
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', top: '10%', right: '10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 70%)' }}></div>
                <div style={{ position: 'absolute', bottom: '20%', left: '5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)' }}></div>
            </div>

            <section className="section pt-32 pb-20" style={{ position: 'relative', zIndex: 1 }}>
                <div className="container">
                    <div className="text-center mb-16">
                        <div className="badge badge-green mb-4">THE BLOG</div>
                        <h1 className="text-4xl font-bold mb-4">Latest <span className="text-gradient">Insights</span></h1>
                        <p className="text-gray">Deep dives into AI, Automation, and the Future of Work</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {posts.map((post, i) => (
                            <Link href={`/blog/${post.id}`} key={i} className="group" style={{ textDecoration: 'none' }}>
                                <div style={{
                                    background: 'rgba(15, 23, 42, 0.6)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'transform 0.3s, box-shadow 0.3s'
                                }} className="hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10 hover:border-white/20">

                                    {/* Thumbnail Area */}
                                    <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                                        <div style={{
                                            position: 'absolute',
                                            inset: 0,
                                            background: post.gradient,
                                            opacity: 0.8
                                        }} className="group-hover:scale-105 transition-transform duration-500"></div>
                                        <div style={{ position: 'absolute', bottom: '1rem', left: '1rem' }}>
                                            <span style={{
                                                background: 'rgba(0,0,0,0.5)',
                                                backdropFilter: 'blur(5px)',
                                                color: 'white',
                                                fontSize: '0.75rem',
                                                padding: '4px 10px',
                                                borderRadius: '50px',
                                                border: '1px solid rgba(255,255,255,0.2)',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px'
                                            }}>{post.cat}</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '1rem' }}>
                                            <span>{post.date}</span>
                                            <span>5 min read</span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">{post.title}</h3>
                                        <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">{post.excerpt}</p>

                                        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#38bdf8', fontWeight: 'bold', fontSize: '0.9rem' }}>
                                            Read Article <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <button className="btn btn-secondary" style={{ padding: '12px 32px', borderRadius: '50px' }}>Load More Articles</button>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
