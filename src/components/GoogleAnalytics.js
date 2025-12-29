"use client";

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

// Replace with your actual GA4 Measurement ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

// Track page views
function GoogleAnalyticsTracker() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (pathname && window.gtag) {
            // Send page view
            window.gtag('config', GA_MEASUREMENT_ID, {
                page_path: pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ''),
                page_title: document.title,
            });
        }
    }, [pathname, searchParams]);

    return null;
}

export default function GoogleAnalytics() {
    return (
        <>
            {/* Google Analytics Script */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              cookie_flags: 'SameSite=None;Secure',
              anonymize_ip: true,
              allow_google_signals: true,
              allow_ad_personalization_signals: false,
            });

            // Enhanced E-commerce Configuration
            gtag('config', '${GA_MEASUREMENT_ID}', {
              custom_map: {
                dimension1: 'course_name',
                dimension2: 'user_type',
                dimension3: 'traffic_source',
                metric1: 'engagement_time',
              }
            });
          `,
                }}
            />

            {/* Page View Tracker */}
            <Suspense fallback={null}>
                <GoogleAnalyticsTracker />
            </Suspense>
        </>
    );
}

// ============================================
// CUSTOM EVENT TRACKING HELPERS
// ============================================

// Track custom events
export const trackEvent = (eventName, eventParams = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, eventParams);
    }
};

// Track course enrollment
export const trackEnrollment = (courseName, price, currency = 'INR') => {
    trackEvent('begin_checkout', {
        currency: currency,
        value: price,
        items: [
            {
                item_name: courseName,
                item_category: 'Course',
                price: price,
                quantity: 1,
            },
        ],
    });
};

// Track successful purchase
export const trackPurchase = (courseName, price, transactionId, currency = 'INR') => {
    trackEvent('purchase', {
        transaction_id: transactionId,
        currency: currency,
        value: price,
        items: [
            {
                item_name: courseName,
                item_category: 'Course',
                price: price,
                quantity: 1,
            },
        ],
    });
};

// Track form submissions
export const trackFormSubmit = (formName) => {
    trackEvent('form_submit', {
        form_name: formName,
    });
};

// Track button clicks
export const trackButtonClick = (buttonName, section) => {
    trackEvent('button_click', {
        button_name: buttonName,
        section: section,
    });
};

// Track video engagement
export const trackVideoWatch = (videoName, percentWatched) => {
    trackEvent('video_progress', {
        video_title: videoName,
        percent_watched: percentWatched,
    });
};

// Track scroll depth
export const trackScrollDepth = (depth) => {
    trackEvent('scroll_depth', {
        depth_percentage: depth,
    });
};

// Track outbound links
export const trackOutboundLink = (url) => {
    trackEvent('click', {
        event_category: 'outbound',
        event_label: url,
        transport_type: 'beacon',
    });
};

// Track search queries
export const trackSearch = (searchTerm) => {
    trackEvent('search', {
        search_term: searchTerm,
    });
};

// Track newsletter signup
export const trackNewsletterSignup = () => {
    trackEvent('newsletter_signup', {
        method: 'email',
    });
};

// Track course view
export const trackCourseView = (courseName, coursePrice) => {
    trackEvent('view_item', {
        currency: 'INR',
        value: coursePrice,
        items: [
            {
                item_name: courseName,
                item_category: 'Course',
                price: coursePrice,
            },
        ],
    });
};
