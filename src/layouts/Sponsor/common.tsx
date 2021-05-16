import { useEffect, useRef, useState } from "react";

export interface ISponsorBlockProps {
  above?: boolean;
}

export interface SponsorProps extends ISponsorBlockProps {
  id: string;
}


export const useAbove = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shouldAbove, setShouldAbove] = useState(false);
  useEffect(() => {
    const listener = () => {
      if (window.scrollY >= (ref.current?.offsetTop ?? 0)) {
        !shouldAbove && setShouldAbove(true);
      } else {
        shouldAbove && setShouldAbove(false);
      }
    };
    window.addEventListener('scroll', listener);
    return () => window.removeEventListener('scroll', listener);
  }, [shouldAbove]);
  return { ref, shouldAbove };
};
