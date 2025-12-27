const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'public', 'sitemap.xml');
const outDir = path.join(__dirname, 'out');
const distDir = path.join(__dirname, 'dist');
const dest = path.join(outDir, 'sitemap.xml');

// Copy sitemap
if (fs.existsSync(src)) {
    if (!fs.existsSync(path.dirname(dest))) {
        fs.mkdirSync(path.dirname(dest), { recursive: true });
    }
    fs.copyFileSync(src, dest);
    console.log('✅ Success: public/sitemap.xml copied to out/sitemap.xml');
} else {
    console.warn('⚠️ Warning: public/sitemap.xml not found. Sitemap might be missing in production.');
}

// Rename out to dist
try {
    if (fs.existsSync(distDir)) {
        fs.rmSync(distDir, { recursive: true, force: true });
        console.log('Cleaned up existing dist/ folder');
    }

    if (fs.existsSync(outDir)) {
        fs.renameSync(outDir, distDir);
        console.log('✅ Success: Renamed out/ to dist/ for production deployment');
    } else {
        console.warn('⚠️ Warning: out/ folder not found. Build might have failed or output directory changed.');
    }
} catch (error) {
    console.error('❌ Error renaming directory:', error);
    process.exit(1);
}
