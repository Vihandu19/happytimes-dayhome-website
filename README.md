# HappyTimes Dayhome - Professional Marketing & Analytics Platform

A SEO-optimized full-stack web application built for a licensed childcare provider. This project goes beyond a simple landing page, implementing a full data pipeline and business intelligence suite to track customer acquisition.


## Technical Highlights

- **Frontend:** Built with **Next.js 14 (App Router)** and **Tailwind CSS** for a responsive, bento-style UI.
- **Analytics Pipeline:** Automated raw event export from **GA4 to BigQuery**, enabling deep-dive funnel analysis and user behavior tracking.
- **Performance:** Achieved **_ Lighthouse scores** through Next.js Image optimization and strategic asset loading.
- **Lead Generation:** Integrated server-side contact forms using **Resend**, protected by a custom-built **Honeypot anti-spam system**.
- **SEO & A11y:** Implemented **JSON-LD Schema Markup** for local business visibility and semantic HTML for screen-reader accessibility.

## Tech Stack

- **Framework:** Next.js (React)
- **Styling:** Tailwind CSS / Lucide Icons
- **Deployment:** Vercel (CI/CD)
- **Email:** Resend API
- **Data/Analytics:** Google Analytics 4, Google BigQuery, Google Looker Studio
- **Validation:** Zod

## Key Features

- **Honeypot Anti-Spam:** A zero-friction security implementation that blocks 95%+ of bot submissions without annoying CAPTCHAs.
- **Bento Grid Gallery:** A dynamic, responsive media gallery showcasing daycare facilities.
- **Custom Cookie Consent:** A GDPR-compliant client-side component with local storage persistence.
- **Data Funnel:** Tracking specific high-intent actions to optimize conversion rates.