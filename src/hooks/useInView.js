import { useEffect, useRef, useState } from 'react';

const useInView = (options = { threshold: 0.3 }) => {
  const ref = useRef(null);
  const [hasBeenInView, setHasBeenInView] = useState(false); // novo estado

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasBeenInView(true); // só seta true uma vez
      }
    }, options);

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return [ref, hasBeenInView]; // retorna "hasBeenInView"
};

export default useInView;
