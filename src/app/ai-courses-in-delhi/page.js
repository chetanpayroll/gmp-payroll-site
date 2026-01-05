import React from 'react';
import CityLandingPage from '../../components/CityLandingPage';
import { cities } from '../../data/cities';

export const metadata = {
    title: cities.delhi.metaTitle,
    description: cities.delhi.metaDesc,
    keywords: ['AI Delhi', 'AI courses in Delhi', 'AI institute in Delhi NCR', 'Best AI academy in Delhi', 'AI certification Delhi', 'Artificial Intelligence classes Delhi NCR'],
    openGraph: {
        title: cities.delhi.metaTitle,
        description: cities.delhi.metaDesc,
        url: 'https://www.gmppayroll.org/ai-courses-in-delhi',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.gmppayroll.org/ai-courses-in-delhi',
    },
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AI Gravity Academy - Delhi",
    "url": "https://www.gmppayroll.org/ai-courses-in-delhi",
    "description": cities.delhi.metaDesc,
    "areaServed": {
        "@type": "City",
        "name": "New Delhi"
    },
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "addressCountry": "IN"
    },
    "offers": {
        "@type": "Course",
        "name": "Master AI Course Delhi",
        "description": "Complete AI and Automation training program in Delhi NCR."
    }
};

export default function AIDelhi() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <CityLandingPage cityData={cities.delhi} />
        </>
    );
}
