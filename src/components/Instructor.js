import React from 'react';

const credentials = [
    "🏆 5x Annual Award Winner",
    "🌍 25+ Countries Experience",
    "💼 Fortune 500 Clients",
    "🎯 99.8% Accuracy Rate",
    "⚡ 10,000+ Automations Built",
    "📈 1,500+ Successful Implementations"
];

const Instructor = () => {
    return (
        <section className="section bg-animated" id="mentors">
            <div className="container">
                <div className="instructor-grid">
                    {/* Left: Image */}
                    <div className="instructor-img-container text-center">
                        <div style={{ width: 300, height: 300, background: '#1e293b', borderRadius: '50%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid var(--color-secondary)', position: 'relative' }}>
                            <span style={{ fontSize: '5rem' }}>👨‍🏫</span>
                            {/* Floating Badges */}
                            <div className="cred-badge" style={{ top: '10%', right: '-10%' }}>25+ Countries Implemented</div>
                            <div className="cred-badge" style={{ bottom: '15%', left: '-10%' }}>Fortune 500 Consultant</div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div>
                        <div className="badge badge-purple mb-4">MEET YOUR INSTRUCTOR</div>
                        <h2 className="mb-2">Hi, I'm Chetan 'Champ' Sharma</h2>
                        <h4 className="text-gray mb-6 font-normal">From Managing Global Payroll Operations to Teaching AI Automation</h4>

                        <div className="space-y-4 text-gray mb-8">
                            <p>After 13+ years managing complex enterprise operations across 25+ countries, I discovered something powerful: AI and automation aren't just for engineers—they're career multipliers for anyone willing to learn.</p>
                            <p>I've built automation systems that eliminated 15+ manual hours weekly, achieved 99.8% accuracy across 1,500+ processes, and earned 5 promotions in 4 years. Now I'm on a mission to share these skills with you.</p>
                            <p className="italic border-l-4 border-purple-500 pl-4 py-2 bg-white/5 rounded-r">"My goal isn't to impress you with complexity—it's to simplify AI so you can actually use it."</p>
                        </div>

                        <div className="cred-grid">
                            {credentials.map((cred, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm font-semibold">
                                    {cred}
                                </div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <a href="#" className="font-bold text-gradient hover:underline">Learn My Full Story →</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Instructor;
