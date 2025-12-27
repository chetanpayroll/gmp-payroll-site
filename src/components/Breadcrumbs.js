"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumbs = () => {
    const pathname = usePathname();

    // Don't show on home page
    if (pathname === '/') return null;

    const pathSegments = pathname.split('/').filter(segment => segment);

    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        ...pathSegments.map((segment, index) => {
            const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
            const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
            const isLast = index === pathSegments.length - 1;
            return {
                label,
                href,
                isLast
            };
        })
    ];

    // Schema Markup
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbItems.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.label,
            "item": `https://www.aimgravity.com${item.href}` // Assuming domain or use placeholder
        }))
    };

    return (
        <div className="container" style={{ padding: '1rem 1.5rem', fontSize: '0.9rem', color: '#94A3B8' }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <nav aria-label="Breadcrumb">
                <ol style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', listStyle: 'none' }}>
                    {breadcrumbItems.map((item, index) => (
                        <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                            {index > 0 && <span style={{ margin: '0 0.5rem', color: '#64748B' }}>/</span>}
                            {item.isLast ? (
                                <span style={{ color: 'white' }} aria-current="page">{item.label}</span>
                            ) : (
                                <Link href={item.href} style={{ color: '#94A3B8', textDecoration: 'none' }} className="hover:text-white">
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    );
};

export default Breadcrumbs;
