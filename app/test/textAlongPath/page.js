'use client'
// import Footer from "components/footer";
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

const Logos = ({scrollProgress}) => {

    const y = useTransform(scrollProgress, [0, 1], [-225, 0])

    return (

        <div className="h-[250px] bg-black overflow-hidden">

            <motion.div style={{y}} className="h-full bg-black flex justify-center gap-10 items-center p-10">

                {

                    [...Array(5)].map((_, i) => {

                        return <img key={`img_${i}`} className="w-[80px] h-[80px]" src={`/medias/${i+1}.jpg`} />

                    })

                }

            </motion.div>

        </div>

    )

}
const Footer = () => {
    const container = useRef();

    const { scrollYProgress } = useScroll({

        target: container,

        offset: ['start end', 'end end']

    })

    return (

        <div ref={container}>

        <svg className="w-full mb-40" viewBox="0 0 250 90">

            <path fill="none" id="curve" d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"/>

            <text className="text-[6px] uppercase" style={{fill: "red"}}>

                {

                    [...Array(3)].map((_, i) => {

                        return <textPath key={i} startOffset={i * 40 + "%"} href="#curve">Curabitur mattis efficitur velit</textPath>

                    })

                }

            </text>

        </svg>

        <Logos scrollProgress={scrollYProgress}/>

    </div>
    )
}

export default function TextAlongPath() {
    const container = useRef();

    const { scrollYProgress } = useScroll({

        target: container,

        offset: ['start end', 'end end']

    })
    
    return (

        <main>

            <div className="h-[100vh]"></div>

            <Footer />

        </main>

    );

}