/* Hook to observe when an element enters the viewport.
 * Uses IntersectionObserver for performance; falls back to always-visible
 * when the browser does not support it or reduced motion is preferred.
 */

import { useEffect, useRef, useState } from 'react';

export const useInView = (options = {}) => {
  const { threshold = 0.15, once = true, rootMargin = '0px 0px -40px 0px' } = options;
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, once, rootMargin]);

  return { ref, inView };
};
