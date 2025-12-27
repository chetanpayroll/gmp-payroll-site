import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Blog() {
    const posts = [
        {
            title: "The Ultimate Guide to Prompt Engineering in 2024",
            excerpt: "Stop guessing. Learn the scientific framework for getting perfect outputs from ChatGPT and Claude every single time.",
            cat: "Guides",
            date: "Dec 15, 2024"
        },
        {
            title: "How I Built a $10k/Month Automation Agency",
            excerpt: "A step-by-step case study of how one student turned their new Make.com skills into a profitable service business.",
            cat: "Case Study",
            date: "Dec 10, 2024"
        },
        {
            title: "Zapier vs Make vs n8n: Which Tool is Right for You?",
            excerpt: "An honest comparison of the top 3 low-code automation platforms based on pricing, ease of use, and scalability.",
            cat: "Tools",
            date: "Dec 05, 2024"
        }
    ];

    return (
        <main className="min-h-screen bg-dark">
            <Navbar />
            <section className="section pt-32">
                <div className="container">
                    <div className="text-center mb-16">
                        <div className="badge badge-green mb-4">THE BLOG</div>
                        <h1 className="text-4xl font-bold mb-4">Latest <span className="text-gradient">Insights</span></h1>
                        <p className="text-gray">Deep dives into AI, Automation, and the Future of Work</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {posts.map((post, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all group cursor-pointer">
                                <div className="h-48 bg-gray-800 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-blue-900/40 group-hover:scale-110 transition-transform duration-500"></div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between text-xs text-gray-400 mb-3">
                                        <span className="text-cyan-400 font-semibold">{post.cat}</span>
                                        <span>{post.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">{post.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                                    <span className="text-sm font-semibold border-b border-purple-500/50 pb-0.5">Read Article →</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button className="btn btn-secondary">Load More Articles</button>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
