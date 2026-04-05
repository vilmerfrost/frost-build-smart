import { useEffect } from 'react';

interface SEOConfig {
  title: string;
  description: string;
  path?: string;
}

const BASE_TITLE = 'Frost Solutions';
const SITE_URL = 'https://frostsolutions.se';

export function useSEO({ title, description, path }: SEOConfig) {
  useEffect(() => {
    const fullTitle = title === BASE_TITLE ? title : `${title} — ${BASE_TITLE}`;
    document.title = fullTitle;

    const setMeta = (attr: string, key: string, value: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    setMeta('name', 'description', description);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'twitter:title', fullTitle);
    setMeta('property', 'twitter:description', description);

    if (path) {
      const url = `${SITE_URL}${path}`;
      setMeta('property', 'og:url', url);
      setMeta('property', 'twitter:url', url);

      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = url;
    }

    return () => {
      document.title = `${BASE_TITLE} — AI-projektverktyg för byggföretag`;
    };
  }, [title, description, path]);
}
