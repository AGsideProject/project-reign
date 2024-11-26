'use client'
import styles from './page.module.scss' 
import ZoomParallax from '../zoomParallax/components/index';
import { useEffect } from 'react';
import Lenis from 'lenis'

export default function Home() {

    useEffect( () => {
        const lenis = new Lenis()
       
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    },[])

    return (
        <main 
            className={styles.main}
            >
            <ZoomParallax />
        </main>
    )
}

