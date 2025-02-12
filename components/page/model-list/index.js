"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import reignLogo from "public/image/reignLogo.jpg";
import Loading from "./loading";
import useDeviceType from "hooks/use-device";
import localFont from "next/font/local";

const resothoExtralight = localFont({
  src: "../../../public/fonts/ResothoExtralight-9YXJK.otf",
});
const ModelListComponent = ({ modelGender }) => {
  const device = useDeviceType();
  const router = useRouter();
  const { ref } = useInView("model");

  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Initialize state
  const [listModel, setListModel] = useState(null);

  // Fetch data
  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/model?gender=${modelGender}`
      );

      const result = await response.json();
      setListModel(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [modelGender]);

  if (!listModel) return <Loading />;

  if (listModel.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center">
        {/* <Image
          src={reignLogo}
          alt="Placeholder Logo"
          width={150}
          height={150}
          className="mb-5"
        /> */}
        <h1 className="text-2xl font-semibold text-gray-700 mb-3">
          No Models Found
        </h1>
        <p className="text-gray-500 text-lg mb-6">
          It seems there are no models to display at the moment. Please check
          back later.
        </p>
        <button
          onClick={() => router.push("/")}
          className="bg-black text-white px-6 py-3 transition hover:bg-gray-800"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <React.Fragment>
      <section
        ref={ref}
        className={`grid ${device === "mobile" ? "grid-cols-1" : "grid-cols-2"} md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 p-5 md:p-10 gap-5`}
      >
        {/* {listModel.map((item, index) => {
          return (
            <motion.div
              onClick={() => router.push(`/model/${item.slug}`)}
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
                  initial="hidden"
                  // intial='visible'
                  whileHover="visible"
                  className="absolute w-full h-full bg-black/70 top-0 text-black flex flex-col justify-start items-start opacity-90 gap-3 md:gap-2 xl:gap-1 2xl:gap-8"
                >
                  <div className="grid grid-cols-2 text-sm md:text-xs justify-items-start gap-3 text-white ml-5 mt-5">
                    <div>
                      <p className="font-medium">HEIGHT</p>
                    </div>
                    <div>
                      <p className="font-light">{item.hight} CM</p>
                    </div>

                    <div>
                      <p className="font-medium">BUST</p>
                    </div>
                    <div>
                      <p className="font-light">{item.bust} CM</p>
                    </div>

                    <div>
                      <p className="font-medium">WAIST</p>
                    </div>
                    <div>
                      <p className="font-light">{item.waist} CM</p>
                    </div>

                    <div>
                      <p className="font-medium">HIPS</p>
                    </div>
                    <div>
                      <p className="font-light">{item.hips} CM</p>
                    </div>

                    <div>
                      <p className="font-medium">SHOE</p>
                    </div>
                    <div>
                      <p className="font-light">{item.shoe_size} US</p>
                    </div>
                    <div>
                      <p className="font-medium">EYES</p>
                    </div>
                    <div>
                      <p className="first-letter:uppercase font-light">{item.eyes}</p>
                    </div>

                    <div>
                      <p className="font-medium">HAIR</p>
                    </div>
                    <div>
                      <p className="first-letter:uppercase font-light">{item.hair}</p>
                    </div>

                  </div>

                  <div className="absolute bottom-0 mb-5 ml-5 border-white border-b-[1px]">
                    <p className="text-white text-xl">{item.name}</p>
                  </div>

                </motion.div>
              </div>

              <div className="sm:hidden flex items-center justify-center my-5 ">
                <p className="text-xl">{item.name}</p>
              </div>
            </motion.div>
          );
        })} */}
        {/* //! BARU */}

        {/* <div className="aspect-[4/5] bg-black sm:bg-red-500 md:bg-yellow-500 lg:bg-green-500 xl:bg-blue-500 2xl:bg-indigo-500 flex items-center justify-center">
          <p className="text-3xl uppercase">{device}</p>
        </div> */}
        {listModel.map((item, index) => {
          return (
            <motion.div
              onClick={() => router.push(`/model/${item.slug}`)}
              key={index}
              className="overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
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
                  placeholder="blur"
                  blurDataURL={item.cover_img}
                />

                <motion.div
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { duration: 0.5, ease: "easeInOut" },
                    },
                  }}
                  initial="hidden"
                  animate={hoveredIndex === index ? "visible" : "hidden"}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onTouchStart={() => setHoveredIndex(index)}
                  onTouchEnd={() => setHoveredIndex(null)}
                  className={`absolute w-full h-full bg-black/70 top-0 text-black flex flex-col justify-start items-start opacity-90 ${resothoExtralight.className}`}
                >
                  <div className="grid grid-cols-2 text-xs md:text-xs justify-items-start items-center gap-y-3 text-white ml-5 mt-5 w-[40%]">
                    <div><p className="font-medium">HEIGHT</p></div>
                    <div><p className="font-light">{item.hight} CM</p></div>
                    <div><p className="font-medium">BUST</p></div>
                    <div><p className="font-light">{item.bust} CM</p></div>
                    <div><p className="font-medium">WAIST</p></div>
                    <div><p className="font-light">{item.waist} CM</p></div>
                    <div><p className="font-medium">HIPS</p></div>
                    <div><p className="font-light">{item.hips} CM</p></div>
                    <div><p className="font-medium">SHOE</p></div>
                    <div><p className="font-light">{item.shoe_size} US</p></div>
                    <div><p className="font-medium">EYES</p></div>
                    <div><p className="first-letter:uppercase font-light">{item.eyes}</p></div>
                    <div><p className="font-medium">HAIR</p></div>
                    <div><p className="first-letter:uppercase font-light">{item.hair}</p></div>
                  </div>

                  <div className="absolute bottom-0 mb-5 ml-5 ">
                    <p className="text-white text-2xl">{item.name}</p>
                  </div>
                </motion.div>
              </div>

              {/* <div className="sm:hidden flex items-center justify-center my-5">
                <p className="text-xl">{item.name}</p>
              </div> */}
            </motion.div>
          );
        })}
      </section>
    </React.Fragment>
  );
};

export default ModelListComponent;
