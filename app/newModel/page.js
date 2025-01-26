"use client";

import Footer from "components/layouts/footer";
import Header from "components/layouts/header";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function page() {
  // const [data, setData] = useState([]);

  // const container = useRef(null)
  // const ref = useRef(null)
  // const isInView = useInView(ref, { amount: "all" })

  // // const isInView = useInView(ref)

  // useEffect(() => {
  //   console.log("Element is in view: ", isInView)
  // }, [isInView])

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //     const data_local = await response.json();
  //     console.log(data_local, '<data json');
  //     setData(data_local);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      <Header />

      {/* <div ref={container} style={{ overflow: "scroll" }} className="flex flex-wrap gap-44 justify-center items-center my-40 px-6">

        {
          data.map((item, index) => (

            <div ref={ref} key={index} className="bg-yellow-100 w-[50vw] h-[200px]">
              {item.name}
            </div>

          ))
        }

        <div className="bg-yellow-100 w-[200px] h-[200px]">

        </div>
        <div className="bg-yellow-100 w-[200px] h-[200px]">

        </div>
        <div className="bg-yellow-100 w-[200px] h-[200px]">

        </div>
        <div className="bg-yellow-100 w-[200px] h-[200px]">

        </div>
        <div className="bg-yellow-100 w-[200px] h-[200px]">

        </div>
        <div className="bg-yellow-100 w-[200px] h-[200px]">

        </div>
        <div className="bg-yellow-100 w-[200px] h-[200px]">

        </div>

        <div className="bg-yellow-100 w-[200px] h-[200px]">

        </div>
        <div className="bg-yellow-100 w-[200px] h-[200px]">

        </div>
      </div> */}
      <div className="w-[50vw] h-[500px] mx-20 bg-slate-400">
        <Section>Animate</Section>
      </div>
      <div className="w-[50vw] h-[500px] mx-20 bg-slate-400">
        <Section>when</Section>
      </div>
      <div className="w-[50vw] h-[500px] mx-20 bg-slate-400">
        <Section>in</Section>
      </div>
      <div className="w-[50vw] h-[500px] mx-20 bg-slate-400">
        <Section>view!</Section>
      </div>
    </>
  );
}
