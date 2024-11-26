'use client';
import BackgroundImageParallax from "../backgroundImageParallax/page";
import SmoothScrollHero from "../smoothScrollHero/page";
import SmoothScrollParallax from "../SmoothParallaxScroll/page";
import TextParallax1 from "../textParallax1/page";

import {
    motion,
    useScroll,
    useVelocity,
    useTransform,
    useSpring,
  } from "framer-motion";
  import React, { useRef } from "react"
import ZoomParallax from "../zoomParallax/components";
import ParallaxCarousel from "../parallaxCarousel/page";

const ModelDetail = () => {
    return (
        <>
        
        <BackgroundImageParallax/>
        {/* <SmoothScrollHero /> */}
        <ZoomParallax />
        <TextParallax1/>
        
        <SmoothScrollParallax/>
        
        <ParallaxCarousel />
        {/* <VelocityText/> */}
        </>
    )
}
const VelocityText = () => {
    const targetRef = useRef(null);
  
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start start", "end start"],
    });
  
    const scrollVelocity = useVelocity(scrollYProgress);
  
    const skewXRaw = useTransform(
      scrollVelocity,
      [-0.5, 0.5],
      ["45deg", "-45deg"]
    );
    const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });
  
    const xRaw = useTransform(scrollYProgress, [0, 1], [0, -4000]);
    const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });
  
    return (
      <section
        ref={targetRef}
        className="h-[200vh] bg-neutral-50 text-neutral-950"
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.p
            style={{ skewX, x }}
            className="origin-bottom-left whitespace-nowrap text-5xl font-black uppercase leading-[0.85] md:text-7xl md:leading-[0.85]"
          >
            Nothing in this world can take the place of persistence. Talent will
            not;
          </motion.p>
        </div>
      </section>
    );
  };
export default ModelDetail;