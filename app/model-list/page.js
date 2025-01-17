"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, useInView, useAnimation, animate } from 'framer-motion'
import Image from "next/image";

import reignLogo from 'public/image/reignLogo.jpg'
import portrait1 from 'public/image/3.jpg'
// import portrait2 from 'public/image/4.jpg'
export default function models() {
  const [domLoaded, setDomLoaded] = useState(false);
  const [images, setImages] = useState([]);
  const [positions, setPositions] = useState([]);
  const [listModel, setListModel] = useState([])
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { ref } = useInView("model")

  async function fetchModel() {
    try {
      setLoading(true)
      const res = await fetch('https://reign-service.onrender.com/v1/model');
      const { data } = await res.json()
      setLoading(false)
      setListModel(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchModel()
  }, [])
  useEffect(() => {
    setDomLoaded(true);
    setImages([
      {
        url: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        url: "https://images.unsplash.com/photo-1498982261566-1c28c9cf4c02?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        url: "https://images.unsplash.com/photo-1467632499275-7a693a761056?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        url: "https://images.unsplash.com/photo-1515511624704-b8916dcc30ea?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        url: "https://images.unsplash.com/photo-1543096222-72de739f7917?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",


      },
      {
        url: "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",


      },
      {
        url: "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",


      },
      {
        url: "https://images.unsplash.com/photo-1541519481457-763224276691?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",


      },
      {
        url: "https://images.unsplash.com/photo-1465145498025-928c7a71cab9?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",


      },
      {
        url: "https://images.unsplash.com/photo-1536180931879-fd2d652efddc?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",


      },
      {
        url: "https://images.unsplash.com/photo-1594843310428-7eb6729555e9?q=80&w=2839&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        url: "https://images.unsplash.com/photo-1729116283190-518c3b8c1d1f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        url: "https://images.unsplash.com/photo-1701351382146-035bd68cdb6d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        url: "https://images.unsplash.com/photo-1639676994754-d3488a9e491a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ]);
    setPositions(new Array(14).fill({ x: 0, y: 0 }));
  }, []);
  // Avoid rendering if not loaded on client

  if (loading) return (<div className="h-screen w-screen bg-white backdrop-blur-glass"></div>);
  // if (!domLoaded ) return (<div className="h-screen w-screen bg-white backdrop-blur-glass"></div>);


  return (
    <>
      <section ref={ref} className="grid grid-cols-1 md:grid-cols-4 p-5 md:p-10 gap-5">

        {/* REIGN DATA */}
        {
          listModel.map((item, index) => {
            return (
              <motion.div
                onClick={() => router.push(`/model/detail?item=${item.slug}`)}
                key={index}
                className="overflow-hidden"
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{
                  once: true,
                }}
              >
                {/* IMAGE */}
                <div className="relative aspect-[4/5] bg-white">
                  <Image
                    src={reignLogo}
                    alt="Logo"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                    priority
                    placeholder="blur"
                  />

                  <Image
                    src={item.cover_img}
                    alt="model name"
                    layout="fill"
                    objectFit="cover"
                    // priority
                    placeholder="blur"
                    blurDataURL={item.cover_img}
                  />

                  {/* OVERLAY */}
                  <motion.div
                    variants={{
                      hidden: {
                        opacity: 0,
                      },
                      visible: {
                        opacity: 1,
                        transition: {
                          duration: 0.5,
                          ease: "easeInOut",
                        },
                      },
                    }}
                    initial='hidden'
                    whileHover="visible"
                    className="absolute w-full h-full bg-white/70 top-0 text-black flex flex-col justify-center items-center opacity-90 gap-3 md:gap-2 xl:gap-5 2xl:gap-8">

                    <p className="text-sm md:text-xs xl:text-base 2xl:text-2xl "> HEIGHT: {item.hight} CM</p>

                    <p className="text-sm md:text-xs xl:text-base 2xl:text-2xl "> BUST: {item.bust} CM</p>

                    <p className="text-sm md:text-xs xl:text-base 2xl:text-2xl "> WAIST: {item.waist} CM</p>

                    <p className="text-sm md:text-xs xl:text-base 2xl:text-2xl "> HIPS: {item.hips} CM</p>

                    <p className="text-sm md:text-xs xl:text-base 2xl:text-2xl "> SHOE: {item.shoe_size} US</p>

                    <p className="text-sm md:text-xs xl:text-base 2xl:text-2xl "> HAIR: {item.hair}</p>

                    <p className="text-sm md:text-xs xl:text-base 2xl:text-2xl "> EYES: {item.eyes}</p>

                  </motion.div>
                  {/* OVERLAY */}

                </div>
                {/* IMAGE */}

                <div className="flex items-center justify-center my-5 ">
                  <p className="text-xl">{item.name}</p>
                </div>
              </motion.div>
            )
          })
        }
        {/* REIGN DATA */}

        {/* DYNAMIC IMAGES */}
        {
          // images.map((item, index) => {
          //   return (
          //     <motion.div
          //       onClick={() => router.push(`/model/detail?item=${item.url}`)}
          //       key={index}
          //       className="overflow-hidden"
          //       variants={{
          //         hidden: { opacity: 0, y: 75 },
          //         visible: { opacity: 1, y: 0 },
          //       }}
          //       initial="hidden"
          //       whileInView="visible"
          //       transition={{ duration: 0.7, delay: index * 0.2 }}
          //       viewport={{
          //         once: true,
          //       }}
          //     >
          //       <div className="relative aspect-[3/4.53] bg-white">
          //         <Image
          //           src={reignLogo}
          //           alt="Logo"
          //           layout="fill"
          //           objectFit="contain"
          //           objectPosition="center"
          //           priority
          //           placeholder="blur"
          //         />

          //         <Image
          //           src={item.url}
          //           alt="model name"
          //           layout="fill"
          //           objectFit="cover"
          //           // priority
          //           placeholder="blur"
          //           blurDataURL={item.url}
          //         />

          //         <motion.div
          //           variants={{
          //             hidden: {
          //               opacity: 0,
          //             },
          //             visible: {
          //               opacity: 1,
          //               transition: {
          //                 duration: 0.5,
          //                 ease: "easeInOut",
          //               },
          //             },
          //           }}
          //           initial='hidden'
          //           whileHover="visible"
          //           className="absolute w-full h-full bg-white/70 top-0 text-black flex flex-col justify-center items-center opacity-90 gap-3 md:gap-2 xl:gap-5 2xl:gap-8">

          //           <p className="text-sm md:text-xs xl:text-base 2xl:text-2xl "> HEIGHT: 181 CM</p>

          //           <p className="text-sm md:text-xs xl:text-base 2xl:text-2xl "> BUST: 81 CM</p>

          //           <p className="text-sm md:text-xs xl:text-base 2xl:text-2xl "> WAIST: 62 CM</p>

          //           <p className="text-sm md:text-xs xl:text-base 2xl:text-2xl "> HIPS: 91 CM</p>

          //           <p className="text-sm md:text-xs xl:text-base 2xl:text-2xl "> SHOE: 8 US</p>

          //           <p className="text-sm md:text-xs xl:text-base 2xl:text-2xl "> HAIR: DARK BROWN</p>

          //           <p className="text-sm md:text-xs xl:text-base 2xl:text-2xl "> EYES: BLUE</p>

          //         </motion.div>

          //       </div>

          //       <div className="flex items-center justify-center my-5 ">
          //         <p className="text-xl">MODEL NAME</p>
          //       </div>
          //     </motion.div>
          //   )
          // })
        }
        {/* DYNAMIC IMAGES */}

        {/* FIX note: jangan di apus do*/}
        {/* <motion.div
          className="overflow-hidden">
          <div className="relative aspect-[3/4] bg-yellow-100 ">
            <Image
              src={portrait1}
              alt="1"
              objectFit="cover"
              priority
              placeholder="blur"
            />
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 0.9,
                  transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                  },
                },
              }}
              initial='hidden'
              whileHover="visible"
              className="absolute w-full h-full bg-white top-0 text-black flex flex-col justify-center items-center opacity-90 gap-3 md:gap-2 xl:gap-5 2xl:gap-8">

              <p className="text-sm md:text-xs xl:text-base 2xl:text-2xl "> HEIGHT: 181 CM</p>

              <p className="text-sm md:text-xs xl:text-base 2xl:text-2xl "> BUST: 81 CM</p>

              <p className="text-sm md:text-xs xl:text-base 2xl:text-2xl "> WAIST: 62 CM</p>

              <p className="text-sm md:text-xs xl:text-base 2xl:text-2xl "> HIPS: 91 CM</p>

              <p className="text-sm md:text-xs xl:text-base 2xl:text-2xl "> SHOE: 8 US</p>

              <p className="text-sm md:text-xs xl:text-base 2xl:text-2xl "> HAIR: DARK BROWN</p>

              <p className="text-sm md:text-xs xl:text-base 2xl:text-2xl "> EYES: BLUE</p>

            </motion.div>
          </div>

          <div className="flex items-center justify-center my-5 ">
            <p className="text-xl">MODEL NAME</p>
          </div>
        </motion.div> */}
        {/* FIX */}
      </section>
    </>
  );
}
