"use client";

import { useEffect, useRef } from 'react';

export function useScrollReveal(options = { threshold: 0.1, duration: 800 }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = `opacity ${options.duration}ms ease-out, transform ${options.duration}ms ease-out`;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
          observer.unobserve(element);
        }
      });
    }, { threshold: options.threshold });

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options.threshold, options.duration]);

  return ref;
}
