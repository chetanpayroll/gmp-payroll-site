import React from 'react';

const painPoints = [
    {
        icon: "😵",
        title: "Overwhelmed by AI Noise",
        desc: "New tools launch daily. ChatGPT, Claude, Gemini... You don't know where to start or which skills actually matter for your career."
    },
    {
        icon: "⏰",
        title: "No Time for Long Courses",
        desc: "You're busy. Traditional 40-hour courses don't fit your schedule. You need practical skills you can apply immediately."
    },
    {
        icon: "💸",
        title: "Expensive or Low Quality",
        desc: "Premium courses cost $2,000+. Free content is scattered and outdated. There's no middle ground that respects your budget."
    },
    {
        icon: "🤖",
        title: "Fear of Being Replaced",
        desc: "AI anxiety is real. You want to be the person who leverages AI, not the one replaced by it."
    }
];

const ProblemSection = () => {
    return (
        <section className="section bg-dark">
            <div className="container">
                <div className="text-center mb-8">
                    <div className="badge badge-purple mb-4">THE CHALLENGE</div>
                    <h2 className="mb-4">AI Is Transforming Everything. <br /> <span className="text-gradient">Are You Keeping Up?</span></h2>
                </div>

                <div className="features-grid">
                    {painPoints.map((point, index) => (
                        <div key={index} className="pain-point-card">
                            <div className="text-4xl mb-4">{point.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                            <p className="text-gray text-sm">{point.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-xl text-gray">What if there was a better way? A practical, hands-on approach that actually works...</p>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
