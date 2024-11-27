
'use client';

import Footer from "components/footer";
import Header from "components/header";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from 'framer-motion'

export default function page() {
  const [data, setData] = useState([]);
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView])

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (

    <>
      <Header />
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <section >
          <div className="flex flex-wrap gap-5 items-center justify-center">
            {
              data.map((item) => (
                <div ref={ref} key={item.id} className="bg-blue-200 w-[200px] h-[200px]">
                  <h2>{item.title}</h2>
                </div>
              ))
            }
          </div>
        </section>
      </motion.div >
    </>
  );
}
