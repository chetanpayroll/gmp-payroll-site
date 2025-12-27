import React from 'react';

const features = [
    {
        title: "Hands-on Projects",
        description: "Don't just watch. Build real AI agents, automation workflows, and custom GPTs from Day 1.",
        icon: "🛠️"
    },
    {
        title: "No Code Required",
        description: "Designed for business leaders and creatives. leverage low-code tools to build enterprise-grade solutions.",
        icon: "⚡"
    },
    {
        title: "Career Transformation",
        description: "Get certified and access our exclusive job board for AI strategist roles and freelance gigs.",
        icon: "📈"
    },
    {
        title: "Community Access",
        description: "Join 5,000+ alumni in our private Discord. Network, collaborate, and grow together.",
        icon: "🌐"
    }
];

const Features = () => {
    return (
        <section className="section" id="methodology">
            <div className="container">
                <div className="text-center mb-8" style={{ maxWidth: '600px', margin: '0 auto 4rem auto' }}>
                    <h2 className="mb-4">Why <span className="text-gradient">AI Gravity?</span></h2>
                    <p className="text-gray">
                        We bridge the gap between complex AI technology and practical business application.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="card">
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                                {feature.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{feature.title}</h3>
                            <p className="text-gray" style={{ fontSize: '0.9rem' }}>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
