'use client';
import Lenis from 'lenis'
// import Intro from '@/components/Intro';
// import Description from '@/components/Description';
// import Section from '@/components/Section';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef,useEffect } from 'react';

const Description = () => {
    return (
        <div className='flex flex-col justify-center items-center my-40 gap-9'>
            {/* <p className='text-[7.5vw] uppercase text-center max-w-[50vw] leading-none'>The quick brown fox jumps over the lazy dog</p> */}
            <p className='text-[4vw] uppercase text-center max-w-[70vw] leading-none'>Sophia Rogan</p>
            <p className='text-[2vw] uppercase text-center max-w-[50vw] leading-none'>height : 181 cm</p>
            <p className='text-[2vw] uppercase text-center max-w-[50vw] leading-none'>bust : 81 cm</p>
            <p className='text-[2vw] uppercase text-center max-w-[50vw] leading-none'>waist : 62 cm</p>
            <p className='text-[2vw] uppercase text-center max-w-[50vw] leading-none'>hips : 92 cm</p>
            <p className='text-[2vw] uppercase text-center max-w-[50vw] leading-none'>shoe : 8 us</p>
            <p className='text-[2vw] uppercase text-center max-w-[50vw] leading-none'>hair : dark brown</p>
            <p className='text-[2vw] uppercase text-center max-w-[50vw] leading-none'>eyes : blue</p>
        </div>
    )
}

const Intro = () => {
    const container = useRef();
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end start']
    })
  
    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"])
  
    return (
      <div className='h-screen overflow-hidden'>
        <motion.div style={{y}} className='relative h-full'>
            {/* <Image src={'/image/home.JPEG'} fill alt="image" style={{objectFit: "cover"}}/> */}
            <div className="w-screen h-screen bg-cover bg-center relative"
                style={{backgroundImage: "url('/image/1.JPG')"}}
            ></div>
        </motion.div>
      </div>
    )
}

const Section = () => {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div
        ref={container} 
        className='relative flex items-center justify-center h-screen overflow-hidden'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
        <div className='relative z-10 p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between'>
            <p className='w-[50vw] text-[2vw] self-start uppercase mix-blend-difference'>Beauty and quality need the right time to be conceived and realised even in a world that is in too much of a hurry.</p>
            <p className='text-[5vw] uppercase mix-blend-difference'>Background Parallax</p>
        </div>
        <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
            <motion.div style={{y}} className='relative w-full h-full'>
                {/* <div>
                    <Image src={'/image/home.JPEG'} fill alt="image" />
                </div> */}
                <div 
                    className="w-screen h-screen bg-cover bg-center relative"
                    style={{backgroundImage: "url('/image/home.JPEG')"}}
                ></div>
            </motion.div>
        </div>
        </div>
    )
}

export default function BackgroundImageParallax() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <Intro />
      <Description />
      <Section />
       {/* <Intro/> */}
      {/* <div className='h-screen'></div> */}
    </main>
  );
}