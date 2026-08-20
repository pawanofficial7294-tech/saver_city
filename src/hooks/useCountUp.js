/* Count-up animation hook.
 * Animates from 0 to `end` when the element scrolls into view.
 * Respects prefers-reduced-motion by jumping straight to the final value.
 */

import { useEffect, useRef, useState } from 'react';

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

export const useCountUp = (end, { duration = 2000, threshold = 0.3 } = {}) => {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const run = () => {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reducedMotion || typeof requestAnimationFrame === 'undefined') {
        setValue(end);
        return;
      }

      const startTime = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        setValue(Math.round(end * easeOutCubic(progress)));
        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };
      requestAnimationFrame(tick);
    };

    if (typeof IntersectionObserver === 'undefined') {
      run();
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            run();
            observer.disconnect();
          }
        });
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [end, duration, threshold]);

  return { ref, value };
};
