import React from 'react';
import CityLandingPage from '../../components/CityLandingPage';
import { cities } from '../../data/cities';

export const metadata = {
    title: cities.gurgaon.metaTitle,
    description: cities.gurgaon.metaDesc,
    keywords: ['AI Gurgaon', 'AI courses in Gurgaon', 'AI institute in Gurugram', 'AI certification in Gurgaon', 'Data science course Gurgaon', 'AI coaching centers Gurgaon'],
    openGraph: {
        title: cities.gurgaon.metaTitle,
        description: cities.gurgaon.metaDesc,
        url: 'https://www.gmppayroll.org/ai-courses-in-gurgaon',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.gmppayroll.org/ai-courses-in-gurgaon',
    },
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AI Gravity Academy - Gurgaon",
    "url": "https://www.gmppayroll.org/ai-courses-in-gurgaon",
    "description": cities.gurgaon.metaDesc,
    "areaServed": {
        "@type": "City",
        "name": "Gurgaon"
    },
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Gurugram",
        "addressRegion": "Haryana",
        "addressCountry": "IN"
    },
    "offers": {
        "@type": "Course",
        "name": "Professional AI Certification Gurgaon",
        "description": "Advanced AI training for corporate professionals in Gurugram."
    }
};

export default function AIGurgaon() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <CityLandingPage cityData={cities.gurgaon} />
        </>
    );
}
