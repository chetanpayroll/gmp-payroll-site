import React from 'react';
import Link from 'next/link';

const stats = [
    { label: "Years Experience", value: "13+" },
    { label: "Countries Implemented", value: "25+" },
    { label: "Automations Built", value: "10,000+" },
    { label: "Success Rate", value: "99.8%" },
];

const SolutionSection = () => {
    return (
        <section className="section bg-animated">
            <div className="container">
                <div className="text-center mb-12">
                    <div className="badge badge-cyan mb-4">THE SOLUTION</div>
                    <h2 className="mb-4">Become the AI Expert <span className="text-gradient">Everyone Needs</span></h2>
                    <p className="text-gray max-w-2xl mx-auto">Our hands-on, project-based training system takes you from confused to confident in weeks, not years.</p>
                </div>

                <div className="comparison-grid">
                    {/* BEFORE */}
                    <div className="compare-col" style={{ borderColor: 'rgba(239, 68, 68, 0.3)' }}>
                        <h3 className="text-xl font-bold mb-6 text-center text-red-400" style={{ color: '#f87171' }}>BEFORE</h3>
                        <div className="compare-item">
                            <span>❌</span>
                            <p className="text-gray text-sm">Confused by AI terminology and rapid changes</p>
                        </div>
                        <div className="compare-item">
                            <span>❌</span>
                            <p className="text-gray text-sm">Hours wasted on manual repetitive tasks</p>
                        </div>
                        <div className="compare-item">
                            <span>❌</span>
                            <p className="text-gray text-sm">Watching from the sidelines with anxiety</p>
                        </div>
                        <div className="compare-item">
                            <span>❌</span>
                            <p className="text-gray text-sm">Imposter syndrome about technology skills</p>
                        </div>
                        <div className="compare-item">
                            <span>❌</span>
                            <p className="text-gray text-sm">Falling behind competitors who use AI</p>
                        </div>
                    </div>

                    {/* AFTER */}
                    <div className="compare-col" style={{ borderColor: 'var(--color-secondary)', background: 'rgba(124, 58, 237, 0.05)' }}>
                        <h3 className="text-xl font-bold mb-6 text-center" style={{ color: '#a78bfa' }}>AFTER</h3>
                        <div className="compare-item">
                            <span>✅</span>
                            <p className="text-white text-sm">Speaking AI fluently with confidence</p>
                        </div>
                        <div className="compare-item">
                            <span>✅</span>
                            <p className="text-white text-sm">Automated workflows saving 10+ hours weekly</p>
                        </div>
                        <div className="compare-item">
                            <span>✅</span>
                            <p className="text-white text-sm">Leading AI initiatives at your company</p>
                        </div>
                        <div className="compare-item">
                            <span>✅</span>
                            <p className="text-white text-sm">Building and selling AI-powered services</p>
                        </div>
                        <div className="compare-item">
                            <span>✅</span>
                            <p className="text-white text-sm">Commanding premium rates for AI skills</p>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <Link href="#courses" className="btn btn-primary btn-glow">See How It Works →</Link>
                </div>

                <div className="stats-row">
                    {stats.map((stat, index) => (
                        <div key={index}>
                            <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                            <div className="text-sm text-gray uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
