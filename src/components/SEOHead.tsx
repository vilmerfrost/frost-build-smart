import { useEffect } from 'react';
import {
  organizationSchema,
  productSchema,
  faqSchema,
  injectSchemaScript
} from '@/lib/structured-data';

export function SEOHead() {
  useEffect(() => {
    injectSchemaScript(organizationSchema);
    injectSchemaScript(productSchema);
    injectSchemaScript(faqSchema);
  }, []);

  return null;
}
