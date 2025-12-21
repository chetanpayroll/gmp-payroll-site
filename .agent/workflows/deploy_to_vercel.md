---
description: Deploy the GMP Payroll Next.js site to Vercel
---

# Deploying to Vercel

The GMP Payroll site is built with Next.js, which is optimized for deployment on Vercel.

## Prerequisites

1.  A [GitHub](https://github.com/) account.
2.  A [Vercel](https://vercel.com/) account (you can sign up with GitHub).

## Steps

1.  **Push your code to GitHub**
    *   Initialize a git repository if you haven't already:
        ```bash
        git init
        git add .
        git commit -m "Initial release of GMP Payroll site"
        ```
    *   Create a new repository on GitHub (e.g., `gmp-payroll-site`).
    *   Link and push:
        ```bash
        git remote add origin https://github.com/YOUR_USERNAME/gmp-payroll-site.git
        git branch -M main
        git push -u origin main
        ```

2.  **Import Project in Vercel**
    *   Go to your [Vercel Dashboard](https://vercel.com/dashboard).
    *   Click "Add New..." -> "Project".
    *   Import the `gmp-payroll-site` repository you just pushed.

3.  **Configure Project**
    *   **Framework Preset**: Next.js (should be auto-detected).
    *   **Root Directory**: `./` (default).
    *   **Build Command**: `next build` (default).
    *   **Install Command**: `npm install` (default).
    *   **Environment Variables**: No custom variables are currently needed for the static site.

4.  **Deploy**
    *   Click **Deploy**.
    *   Vercel will build your site and provide a live URL (e.g., `gmp-payroll-site.vercel.app`).

## Post-Deployment

*   **Custom Domain**: Go to Settings -> Domains in Vercel to add `www.gmppayroll.org` (from your brief).
*   **Analytics**: Enable Vercel Analytics to track visitor stats.
