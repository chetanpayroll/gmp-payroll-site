"use client";
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Link from 'next/link';

const CityLandingPage = ({ cityData }) => {
    return (
        <main className="min-h-screen bg-[#0A1628] text-white">
            <Navbar />
            <div className="pt-32 pb-20 container mx-auto px-4 max-w-4xl">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <span className={`inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-${cityData.colors.text} text-sm font-bold mb-4 tracking-wider`}>
                        {cityData.badge}
                    </span>
                    <h1
                        className="text-4xl md:text-5xl font-bold mb-6"
                        dangerouslySetInnerHTML={{ __html: cityData.title }}
                    />
                    <p
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                        dangerouslySetInnerHTML={{ __html: cityData.description }}
                    />
                </div>

                {/* Features & Testimonials Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:transform hover:scale-[1.02] transition-all duration-300">
                        <h2 className="text-2xl font-bold mb-4">Why {cityData.name} Students Choose AI Gravity</h2>
                        <ul className="space-y-4 text-gray-300">
                            {cityData.benefits.map((benefit, index) => (
                                <li key={index} className="flex gap-3 items-start">
                                    <span className={`text-${cityData.colors.text} font-bold mt-1`}>{benefit.icon}</span>
                                    <span>{benefit.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm flex flex-col justify-center hover:transform hover:scale-[1.02] transition-all duration-300">
                        <h3 className="text-xl font-bold mb-6 text-center">Student Success Stories</h3>
                        <blockquote className="italic text-gray-400 mb-6 text-center text-lg leading-relaxed">
                            "{cityData.testimonial.quote}"
                        </blockquote>
                        <div className="text-center">
                            <div className={`font-bold text-${cityData.colors.text} text-lg`}>- {cityData.testimonial.author}</div>
                            <div className="text-sm text-gray-500">{cityData.testimonial.role}</div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center bg-[#0F172A] rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Become an AI Expert in {cityData.name}</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">Start your journey with the region's top-rated AI program. Limited batches available this month.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/enroll" className="btn px-8 py-3 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white font-bold hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                            View Certifications
                        </Link>
                        <Link href="/contact" className="btn px-8 py-3 rounded-xl border border-white/20 hover:bg-white/5 transition-all">
                            Contact Admissions
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default CityLandingPage;
