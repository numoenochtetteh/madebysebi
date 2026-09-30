"use client";

import { useEffect } from "react";

// Keep route content server-rendered while a small island handles reveal motion.
export function RevealOnScroll({ selector }: { selector: string }) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [selector]);

  return null;
}
