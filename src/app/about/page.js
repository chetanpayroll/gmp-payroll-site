import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function About() {
    return (
        <main className="min-h-screen bg-dark">
            <Navbar />
            <section className="section pt-32">
                <div className="container text-center">
                    <div className="badge badge-purple mb-4">OUR MISSION</div>
                    <h1 className="text-5xl font-bold mb-6">Democratizing <span className="text-gradient">AI Education</span></h1>
                    <p className="text-xl text-gray max-w-2xl mx-auto mb-12">
                        We believe that the power of Artificial Intelligence shouldn't be locked behind complex code or expensive degrees.
                        Our mission is to empower 1 million professionals to automate their work and reclaim their time.
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 text-left items-center mt-20">
                        <div className="relative">
                            <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-white/10 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-8xl">🚀</div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Built for Builders</h2>
                            <p className="text-gray mb-4">
                                AI Gravity Academy was founded by Chetan Sharma, an enterprise operations expert who saw a gap in the market:
                                Technology training was either too academic (theoretical) or too simplistic (surface level).
                            </p>
                            <p className="text-gray mb-4">
                                We bridge that gap. We teach "Engineering Grade" concepts using "No-Code" tools.
                                This unique approach allows business professionals to build systems that rival software engineering teams,
                                at a fraction of the time and cost.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                                    <div className="text-2xl font-bold text-gradient mb-1">5,000+</div>
                                    <div className="text-xs text-gray">Students Trained</div>
                                </div>
                                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                                    <div className="text-2xl font-bold text-gradient mb-1">40+</div>
                                    <div className="text-xs text-gray">Countries Reached</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
