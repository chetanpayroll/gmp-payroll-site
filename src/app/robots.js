export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api/',
                    '/admin/',
                    '/private/',
                    '/*.json$',
                    '/checkout/',
                    '/dashboard/',
                ],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                crawlDelay: 0,
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
                crawlDelay: 1,
            },
        ],
        sitemap: 'https://www.gmppayroll.org/sitemap.xml',
        host: 'https://www.gmppayroll.org',
    };
}
