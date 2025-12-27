import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Privacy() {
    return (
        <main className="min-h-screen bg-dark">
            <Navbar />
            <section className="section pt-32">
                <div className="container max-w-3xl">
                    <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
                    <div className="prose prose-invert text-gray space-y-6">
                        <p>Last Updated: December 28, 2024</p>
                        <p>At AI Gravity Academy, we take your privacy seriously. This policy describes how we collect, use, and handle your information.</p>

                        <h3 className="text-white text-xl font-bold mt-8">1. Information We Collect</h3>
                        <p>We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or purchase a course. This includes name, email address, and payment information.</p>

                        <h3 className="text-white text-xl font-bold mt-8">2. How We Use Your Information</h3>
                        <p>We use your information to provide our services, process transactions, send you updates, and improve your learning experience.</p>

                        <h3 className="text-white text-xl font-bold mt-8">3. Data Security</h3>
                        <p>We implement industry-standard security measures to protect your personal information.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
