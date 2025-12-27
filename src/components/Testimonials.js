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
                <div className="mb-16 relative rounded-2xl overflow-hidden border border-white/10 bg-black aspect-video max-w-4xl mx-auto flex items-center justify-center group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                        <p className="text-xl md:text-2xl font-bold text-white mb-2">"This course helped me automate 10 hours of work weekly and land a $30K raise."</p>
                        <div className="flex items-center gap-4">
                            <div className="font-semibold text-cyan-400">Sarah Chen, Marketing Director</div>
                            <span className="badge badge-purple">Promoted</span>
                        </div>
                    </div>
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((t, i) => (
                        <div key={i} className="testimonial-card">
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

                {/* Stats Bar */}
                <div className="mt-16 py-8 border-y border-white/10 bg-white/5 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                        <div className="font-bold text-2xl">5,000+</div>
                        <div className="text-xs text-gray">Learners</div>
                    </div>
                    <div>
                        <div className="font-bold text-2xl">40+</div>
                        <div className="text-xs text-gray">Countries</div>
                    </div>
                    <div>
                        <div className="font-bold text-2xl">4.9/5</div>
                        <div className="text-xs text-gray">Average Rating</div>
                    </div>
                    <div>
                        <div className="font-bold text-2xl">73%</div>
                        <div className="text-xs text-gray">Career Growth</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
