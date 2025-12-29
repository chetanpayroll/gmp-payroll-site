"use client";

import Script from 'next/script';

// Replace with your actual GTM Container ID
const GTM_ID = 'GTM-XXXXXXX';

export function GoogleTagManagerHead() {
    return (
        <Script
            id="gtm-head"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `,
            }}
        />
    );
}

export function GoogleTagManagerBody() {
    return (
        <noscript>
            <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
                title="Google Tag Manager"
            />
        </noscript>
    );
}

// ============================================
// DATA LAYER PUSH HELPERS
// ============================================

// Push data to GTM dataLayer
export const pushToDataLayer = (data) => {
    if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(data);
    }
};

// User identification
export const identifyUser = (userId, userProperties = {}) => {
    pushToDataLayer({
        event: 'user_identify',
        user_id: userId,
        ...userProperties,
    });
};

// E-commerce: View Item
export const gtmViewItem = (item) => {
    pushToDataLayer({
        event: 'view_item',
        ecommerce: {
            items: [item],
        },
    });
};

// E-commerce: Add to Cart
export const gtmAddToCart = (item) => {
    pushToDataLayer({
        event: 'add_to_cart',
        ecommerce: {
            items: [item],
        },
    });
};

// E-commerce: Begin Checkout
export const gtmBeginCheckout = (items, value) => {
    pushToDataLayer({
        event: 'begin_checkout',
        ecommerce: {
            currency: 'INR',
            value: value,
            items: items,
        },
    });
};

// E-commerce: Purchase
export const gtmPurchase = (transactionId, items, value) => {
    pushToDataLayer({
        event: 'purchase',
        ecommerce: {
            transaction_id: transactionId,
            currency: 'INR',
            value: value,
            items: items,
        },
    });
};

// Custom Events
export const gtmCustomEvent = (eventName, eventData = {}) => {
    pushToDataLayer({
        event: eventName,
        ...eventData,
    });
};
