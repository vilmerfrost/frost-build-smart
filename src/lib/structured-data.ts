const SITE_URL = 'https://frostsolutions.se';

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Frost Solutions",
  "description": "AI-driven projektverktyg för svenska byggföretag. ROT-automation, fakturatolkning, tidrapportering.",
  "url": SITE_URL,
  "logo": `${SITE_URL}/favicon.ico`,
  "sameAs": [
    "https://www.linkedin.com/company/frost-solutions",
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "vilmer.frost@gmail.com",
    "url": `${SITE_URL}/contact`
  }
};

export const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Frost Solutions",
  "applicationCategory": "BusinessApplication",
  "description": "AI-driven projektverktyg för svenska byggföretag med ROT-automation och fakturatolkning",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "499",
    "priceCurrency": "SEK",
    "priceValidUntil": "2026-12-31"
  }
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Vad är Frost Solutions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Frost Solutions är ett AI-drivet projektverktyg för svenska byggföretag som automatiserar ROT-ansökningar, läser fakturor med AI och hanterar tidrapportering."
      }
    },
    {
      "@type": "Question",
      "name": "Hur mycket kostar Frost Solutions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Frost Solutions kostar 499 kr/månad med obegränsade användare. Du får 14 dagars gratis provperiod och kan avsluta när som helst utan bindningstid."
      }
    },
    {
      "@type": "Question",
      "name": "Hur lång tid tar det att komma igång?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Du kan komma igång på 2 minuter. Registrera dig, lägg till ditt första projekt och börja spara tid direkt."
      }
    },
    {
      "@type": "Question",
      "name": "Fungerar Frost utan internet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, Frost har fullständigt offline-stöd via PWA. Alla ändringar synkas automatiskt när du får uppkoppling igen."
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
  const id = `ld-json-${JSON.stringify(schema).slice(0, 40)}`;
  if (document.getElementById(id)) return;
  const script = document.createElement('script');
  script.id = id;
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}
