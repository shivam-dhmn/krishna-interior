"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const siblingGroups = new Map<HTMLElement, HTMLElement[]>();

    elements.forEach((element) => {
      const parent = element.parentElement;
      if (!parent) return;

      const group = siblingGroups.get(parent) ?? [];
      group.push(element);
      siblingGroups.set(parent, group);
    });

    siblingGroups.forEach((group) => {
      group.forEach((element, index) => {
        element.style.setProperty(
          "--reveal-delay",
          `${Math.min(index, 4) * 80}ms`,
        );
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    document.documentElement.classList.add("reveal-active");
    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-active");
    };
  }, []);

  return null;
}
