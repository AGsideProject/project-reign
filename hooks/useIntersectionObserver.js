import { useEffect, useState } from "react";

const useIntersectionObserver = (ref, options) => {
  const [state, setState] = useState({
    isIntersecting: false,
    hasExited: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setState({ isIntersecting: true, hasExited: false });
      } else {
        setState({ isIntersecting: false, hasExited: true });
      }
    }, options);

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return state;
};

export default useIntersectionObserver;