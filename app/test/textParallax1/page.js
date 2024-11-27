'use client'
import { useScroll, useTransform, motion } from 'framer-motion';
// import Picture1 from 'public/image/1.JPG'
// import Picture2 from 'public/image/2.JPG'
// import Picture3 from 'public/image/3.JPG'
import Lenis from 'lenis';
import Image from 'next/image';
import { useEffect, useRef } from 'react';


const Slide = (props) => {

    const direction = props.direction == 'left' ? -1 : 1;

    const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction])



    return (

        <motion.div style={{x: translateX, left: props.left}} className="relative flex whitespace-nowrap">

            <Phrase src={props.src}/>

            <Phrase src={props.src}/>

            <Phrase src={props.src}/>

        </motion.div>

    )
  
}
  
const Phrase = ({src}) => {

    return (

        <div className={'px-5 flex gap-5 items-center'}>

        <p className='text-[7.5vw]'>Reign Models</p>

        <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">

            <Image style={{objectFit: "cover"}} src={src} alt="image" fill/>

        </span>

        </div>

    )

}


export default function TextParallax1() {


    const container = useRef();

    const { scrollYProgress } = useScroll({

        target: container,

        offset: ['start end', 'end start']

    })

    useEffect( () => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (

        <main className="overflow-hidden">

            <div className='h-[25vh]'/>

            <div ref={container}>

            <Slide src={"/image/1.JPG"} direction={'left'} left={"-40%"} progress={scrollYProgress}/>

            <Slide src={"/image/2.JPG"} direction={'right'} left={"-25%"} progress={scrollYProgress}/>

            <Slide src={"/image/3.jpg"} direction={'left'}  left={"-75%"} progress={scrollYProgress}/>

            </div>

            <div className='h-[25vh]' />

        </main>
    );
}