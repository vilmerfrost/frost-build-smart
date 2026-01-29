export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Frost Bygg",
  "description": "AI-driven projektverktyg för svenska byggföretag. ROT-automation, faktura-läsning, tidrapportering.",
  "url": "https://frostbygg.se",
  "logo": "https://frostbygg.se/favicon.ico",
  "sameAs": [
    "https://www.linkedin.com/company/frost-solutions",
    "https://twitter.com/frostbygg",
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "support@frostbygg.se",
    "url": "https://frostbygg.se/kontakt"
  }
};

export const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Frost Bygg",
  "applicationCategory": "BusinessApplication",
  "description": "AI-driven projektverktyg för svenska byggföretag med ROT-automation och faktura-läsning",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "499",
    "priceCurrency": "SEK",
    "priceValidUntil": "2025-12-31"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "42"
  }
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Vad är Frost Bygg?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Frost Bygg är ett AI-driven projektverktyg för svenska byggföretag som automatiserar ROT-ansökningar, läser fakturor med AI och hanterar tidrapportering."
      }
    },
    {
      "@type": "Question",
      "name": "Hur mycket kostar Frost Bygg?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Frost Bygg kostar 499 kr/månad. Du får 30 dagars gratis provperiod och kan avsluta när som helst utan bindningstid."
      }
    },
    {
      "@type": "Question",
      "name": "Hur lång tid tar det att komma igång?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Du kan komma igång på bara 2 minuter. Registrera dig, anslut dina byggen, och börja spara tid direkt."
      }
    },
    {
      "@type": "Question",
      "name": "Är det säkert att ansluta mina bankkonton?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, vi använder de senaste säkerhetsprotokollen och bank-grade encryption för alla anslutningar. Vi lagrar aldrig dina autentiseringsuppgifter."
      }
    }
  ]
};

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export function injectSchemaScript(schema: object) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}
