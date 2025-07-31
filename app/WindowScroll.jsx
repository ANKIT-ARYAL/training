'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function WindowScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const target = document.querySelector(hash);

      window.history.replaceState(null, '', window.location.pathname);

      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [pathname]); // Include pathname so it runs on route changes

  return null; // Important: no UI output
}

export default WindowScroll;
