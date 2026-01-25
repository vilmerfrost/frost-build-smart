import { useEffect } from 'react';

// Simple dark-mode only hook - no light mode support
export function useTheme() {
  useEffect(() => {
    // Always ensure dark mode is set
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
  }, []);

  return { 
    theme: 'dark' as const, 
    resolvedTheme: 'dark' as const 
  };
}
