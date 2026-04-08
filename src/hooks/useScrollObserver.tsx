"use client";
import { useEffect, useRef } from 'react';

interface UseScrollObserverProps {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollObserver({ threshold = 0.15, rootMargin = '0px' }: UseScrollObserverProps = {}) {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    // Oculta warnings do typescript no filter
    const currentElements = elementsRef.current.filter((el): el is HTMLElement => el !== null);

    currentElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      currentElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [threshold, rootMargin]);

  // Função para registrar refs no JSX
  const setRef = (index: number) => (el: HTMLElement | null) => {
    elementsRef.current[index] = el;
  };

  return { setRef };
}
