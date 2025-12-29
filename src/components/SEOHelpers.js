"use client";

import { useEffect } from 'react';

// ============================================
// SCROLL DEPTH TRACKING
// ============================================
export function ScrollDepthTracker() {
    useEffect(() => {
        const depths = [25, 50, 75, 100];
        const tracked = new Set();

        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100);

            depths.forEach(depth => {
                if (scrollPercent >= depth && !tracked.has(depth)) {
                    tracked.add(depth);
                    if (window.gtag) {
                        window.gtag('event', 'scroll_depth', {
                            depth_percentage: depth,
                            page_path: window.location.pathname,
                        });
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return null;
}

// ============================================
// TIME ON PAGE TRACKING
// ============================================
export function TimeOnPageTracker() {
    useEffect(() => {
        const startTime = Date.now();
        const milestones = [30, 60, 120, 300]; // seconds
        const tracked = new Set();

        const interval = setInterval(() => {
            const timeSpent = Math.floor((Date.now() - startTime) / 1000);

            milestones.forEach(milestone => {
                if (timeSpent >= milestone && !tracked.has(milestone)) {
                    tracked.add(milestone);
                    if (window.gtag) {
                        window.gtag('event', 'time_on_page', {
                            seconds: milestone,
                            page_path: window.location.pathname,
                        });
                    }
                }
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return null;
}

// ============================================
// OUTBOUND LINK TRACKING
// ============================================
export function OutboundLinkTracker() {
    useEffect(() => {
        const handleClick = (e) => {
            const link = e.target.closest('a');
            if (link && link.hostname !== window.location.hostname) {
                if (window.gtag) {
                    window.gtag('event', 'outbound_click', {
                        event_category: 'outbound',
                        event_label: link.href,
                        transport_type: 'beacon',
                    });
                }
            }
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    return null;
}

// ============================================
// CANONICAL URL COMPONENT
// ============================================
export function CanonicalUrl({ path }) {
    const baseUrl = 'https://www.gmppayroll.org';
    const canonicalUrl = path ? `${baseUrl}${path}` : baseUrl;

    return (
        <link rel="canonical" href={canonicalUrl} />
    );
}

// ============================================
// HREFLANG TAGS COMPONENT
// ============================================
export function HreflangTags({ path = '' }) {
    const baseUrl = 'https://www.gmppayroll.org';

    return (
        <>
            <link rel="alternate" hrefLang="en" href={`${baseUrl}${path}`} />
            <link rel="alternate" hrefLang="en-US" href={`${baseUrl}${path}`} />
            <link rel="alternate" hrefLang="en-IN" href={`${baseUrl}${path}`} />
            <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${path}`} />
        </>
    );
}

// ============================================
// PRELOAD CRITICAL RESOURCES
// ============================================
export function PreloadResources() {
    return (
        <>
            {/* Preload critical fonts */}
            <link
                rel="preload"
                href="/fonts/inter-var.woff2"
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
            />

            {/* Preload hero image */}
            <link
                rel="preload"
                href="/hero-image.webp"
                as="image"
                type="image/webp"
            />

            {/* Preconnect to external services */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="preconnect" href="https://www.googletagmanager.com" />

            {/* DNS prefetch for non-critical resources */}
            <link rel="dns-prefetch" href="https://www.google-analytics.com" />
            <link rel="dns-prefetch" href="https://www.youtube.com" />
        </>
    );
}
