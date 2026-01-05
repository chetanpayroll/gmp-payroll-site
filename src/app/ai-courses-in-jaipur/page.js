import React from 'react';
import CityLandingPage from '../../components/CityLandingPage';
import { cities } from '../../data/cities';

export const metadata = {
    title: cities.jaipur.metaTitle,
    description: cities.jaipur.metaDesc,
    keywords: ['AI Jaipur', 'AI training in Jaipur', 'AI courses in Jaipur', 'Best AI institute Jaipur', 'Machine learning Jaipur', 'Artificial Intelligence coaching Jaipur'],
    openGraph: {
        title: cities.jaipur.metaTitle,
        description: cities.jaipur.metaDesc,
        url: 'https://www.gmppayroll.org/ai-courses-in-jaipur',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.gmppayroll.org/ai-courses-in-jaipur',
    },
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AI Gravity Academy - Jaipur",
    "url": "https://www.gmppayroll.org/ai-courses-in-jaipur",
    "description": cities.jaipur.metaDesc,
    "areaServed": {
        "@type": "City",
        "name": "Jaipur"
    },
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "addressCountry": "IN"
    },
    "offers": {
        "@type": "Course",
        "name": "AI Mastery Jaipur",
        "description": "Advanced AI and Automation course for Jaipur professionals."
    }
};

export default function AIJaipur() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <CityLandingPage cityData={cities.jaipur} />
        </>
    );
}
