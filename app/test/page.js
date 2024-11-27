'use client';

import { useRef } from "react";
import useIntersectionObserver from "hooks/useIntersectionObserver";
const TestPage = () => {
  const animatedDivRef = useRef(null);
  const { isIntersecting, hasExited } = useIntersectionObserver(animatedDivRef, { threshold: 0.1 });

  return (
    <>
      
      <div className="mt-[1500px]"></div>

      <div className="flex justify-center items-center">
        <h1
          ref={animatedDivRef}
          className={`h-[100px] text-black text-3xl transition-opacity duration-700 ${
            isIntersecting
              ? "opacity-100 animate-fade-right animate-once animate-duration-[1000ms] animate-ease-in"
              : hasExited
              ? "opacity-100 animate-reverse animate-once animate-duration-[1000ms]"
              : "opacity-0"
          }`}
        >
          Retriggering Animations!
        </h1>
      </div>

      <div className="mt-[1500px]"></div>
    </>
  );
};

export default TestPage;
