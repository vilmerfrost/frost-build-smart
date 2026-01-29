import { useEffect, useRef } from 'react';

export function useLazyLoad<T extends HTMLElement>(
  callback?: () => void,
  options?: IntersectionObserverInit
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback?.();
        observer.unobserve(entry.target);
      }
    }, {
      rootMargin: '50px',
      ...options,
    });

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [callback, options]);

  return ref;
}
