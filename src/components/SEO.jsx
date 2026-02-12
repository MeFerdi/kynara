import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, path = "" }) => {
    const siteUrl = "https://kynara.io";
    const fullUrl = `${siteUrl}${path}`;
    const defaultTitle = "Kynara Product Lab";
    const defaultDescription = "Kynara Product Lab delivers engineered software, automation systems, and design-driven solutions for growing businesses.";

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={title || defaultTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullUrl} />
            <meta name="twitter:title" content={title || defaultTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
            <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />
        </Helmet>
    );
};

export default SEO;
