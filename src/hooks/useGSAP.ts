import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function useGSAP(
  fn: (context: gsap.Context) => void,
  deps: React.DependencyList = []
) {
  const fnRef = useRef(fn);

  useEffect(() => {
    fnRef.current = fn;
  }, [fn]);

  useEffect(() => {
    const ctx = gsap.context((self) => {
      fnRef.current(self);
    });
    return () => ctx.revert();
    // Consumers pass stable dependency lists for their animation lifecycle.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
