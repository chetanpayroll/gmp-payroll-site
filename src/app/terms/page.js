
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
    title: 'Terms of Service | AI Gravity Academy',
    description: 'Read our terms of service for using AI Gravity Academy courses, community, and resources. Understand your rights and responsibilities.',
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: 'https://www.gmppayroll.org/terms',
    },
};

export default function Terms() {
    return (
        <main className="min-h-screen bg-dark">
            <Navbar />
            <section className="section pt-32">
                <div className="container max-w-3xl">
                    <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
                    <div className="prose prose-invert text-gray space-y-6">
                        <p>Last Updated: December 28, 2024</p>

                        <h3 className="text-white text-xl font-bold mt-8">1. Acceptance of Terms</h3>
                        <p>By accessing AI Gravity Academy, you agree to these Terms of Service. If you do not agree, please do not use our platform.</p>

                        <h3 className="text-white text-xl font-bold mt-8">2. Course Access & usage</h3>
                        <p>Purchasing a course grants you a non-exclusive, non-transferable license to access the content. Sharing login credentials is strictly prohibited.</p>

                        <h3 className="text-white text-xl font-bold mt-8">3. Refund Policy</h3>
                        <p>We offer a 30-day money-back guarantee on all courses. If you are not satisfied, contact support within 30 days of purchase for a full refund.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
