const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'public', 'sitemap.xml');
const dest = path.join(__dirname, 'out', 'sitemap.xml');

if (fs.existsSync(src)) {
    if (!fs.existsSync(path.dirname(dest))) {
        fs.mkdirSync(path.dirname(dest), { recursive: true });
    }
    fs.copyFileSync(src, dest);
    console.log('✅ Success: public/sitemap.xml copied to out/sitemap.xml');
} else {
    console.warn('⚠️ Warning: public/sitemap.xml not found. Sitemap might be missing in production.');
}
