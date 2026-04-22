import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  image?: string;
}

export function SEO({ title, description, canonical, image = "https://www.muigaikamau.pro/LOGO.png" }: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="MK Consulting & Advisory" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Muigai Kamau Consulting & Advisory",
    "alternateName": "MK Co.",
    "url": "https://www.muigaikamau.pro",
    "logo": "https://www.muigaikamau.pro/LOGO.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+254757808808",
      "contactType": "customer service",
      "areaServed": "Africa",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    },
    "sameAs": ["https://www.linkedin.com/in/muigai-kamau"]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}