import React from 'react';

const testimonials = [
    {
        name: "Marcus Williams",
        role: "Sales Manager",
        text: "I went from being intimidated by AI to building automations for my entire sales team. The ROI was immediate.",
        result: "40% More Deals Closed",
        stars: 5
    },
    {
        name: "Priya Patel",
        role: "Operations Lead",
        text: "Finally, an AI course that respects my time. Practical, no-fluff content I could implement the same day.",
        result: "15 Hours/Week Saved",
        stars: 5
    },
    {
        name: "David Thompson",
        role: "Freelance Consultant",
        text: "I built my first automation within the first week. Now I'm offering AI consulting services on the side.",
        result: "$3K/Month Side Income",
        stars: 5
    },
    {
        name: "Jennifer Martinez",
        role: "HR Manager",
        text: "As a complete non-technical person, I was skeptical. But the step-by-step approach made everything click.",
        result: "Zero to Expert in 60 Days",
        stars: 5
    }
];

const Testimonials = () => {
    return (
        <section className="section bg-dark">
            <div className="container">
                <div className="text-center mb-12">
                    <div className="badge badge-green mb-4">SUCCESS STORIES</div>
                    <h2 className="mb-4">Real Results from <span className="text-gradient">Real Learners</span></h2>
                    <p className="text-gray">Join thousands who transformed their careers with AI skills</p>
                </div>

                {/* Featured Video Placeholder */}
                <div className="mb-16 relative rounded-2xl overflow-hidden border border-white/10 bg-black aspect-video max-w-4xl mx-auto flex items-center justify-center group cursor-pointer shadow-2xl">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/5iMh9hV9j3o?rel=0&modestbranding=1"
                        title="Student Success Story"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((t, i) => (
                        <div key={i} className="testimonial-card" style={{
                            background: '#0f172a',
                            border: '1px solid rgba(255,255,255,0.05)',
                            borderRadius: '16px',
                            padding: '1.5rem',
                            transition: 'all 0.3s'
                        }}>
                            <div className="flex gap-1 text-yellow-400 mb-4">{'★'.repeat(t.stars)}</div>
                            <p className="text-gray-300 mb-6 text-sm leading-relaxed">"{t.text}"</p>
                            <div className="border-t border-white/5 pt-4">
                                <div className="font-bold text-white">{t.name}</div>
                                <div className="text-xs text-gray-500 mb-2">{t.role}</div>
                                <span className="badge badge-green" style={{ fontSize: '0.65rem' }}>{t.result}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Bar - Refactored to Enterprise Grid/Horizontal Layout */}
                <div className="mt-20">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '2rem',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '20px',
                        padding: '3rem',
                        backdropFilter: 'blur(10px)'
                    }}>
                        <div style={{ textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.1)' }} className="stat-item">
                            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>5,000+</div>
                            <div style={{ fontSize: '0.9rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>Active Learners</div>
                        </div>
                        <div style={{ textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.1)' }} className="stat-item">
                            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>40+</div>
                            <div style={{ fontSize: '0.9rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>Countries</div>
                        </div>
                        <div style={{ textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.1)' }} className="stat-item">
                            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fbbf24', marginBottom: '0.5rem' }}>4.9/5</div>
                            <div style={{ fontSize: '0.9rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>Average Rating</div>
                        </div>
                        <div style={{ textAlign: 'center' }} className="stat-item">
                            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#4ade80', marginBottom: '0.5rem' }}>73%</div>
                            <div style={{ fontSize: '0.9rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>Report Career Growth</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
