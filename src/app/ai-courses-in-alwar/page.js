import React from 'react';
import CityLandingPage from '../../components/CityLandingPage';
import { cities } from '../../data/cities';

export const metadata = {
    title: cities.alwar.metaTitle,
    description: cities.alwar.metaDesc,
    keywords: ['AI Alwar', 'AI courses in Alwar', 'AI institute in Alwar', 'Best AI classes in Alwar', 'AI training Alwar online', 'Artificial Intelligence course Alwar'],
    openGraph: {
        title: cities.alwar.metaTitle,
        description: cities.alwar.metaDesc,
        url: 'https://www.gmppayroll.org/ai-courses-in-alwar',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.gmppayroll.org/ai-courses-in-alwar',
    },
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AI Gravity Academy - Alwar",
    "url": "https://www.gmppayroll.org/ai-courses-in-alwar",
    "description": cities.alwar.metaDesc,
    "areaServed": {
        "@type": "City",
        "name": "Alwar"
    },
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Alwar",
        "addressRegion": "Rajasthan",
        "addressCountry": "IN"
    },
    "offers": {
        "@type": "Course",
        "name": "AI Certification Program Alwar",
        "description": "Comprehensive AI training in Alwar including ChatGPT, Automation, and Prompt Engineering."
    }
};

export default function AIAlwar() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <CityLandingPage cityData={cities.alwar} />
        </>
    );
}
