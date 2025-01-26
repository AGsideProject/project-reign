"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import reignLogo from "public/image/reignLogo.jpg";
import Loading from "./loading";

const ModelListComponent = ({ modelGender }) => {
  const router = useRouter();
  const { ref } = useInView("model");

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
        <Image
          src={reignLogo}
          alt="Placeholder Logo"
          width={150}
          height={150}
          className="mb-5"
        />
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
        className="grid grid-cols-1 md:grid-cols-4 p-5 md:p-10 gap-5"
      >
        {/* REIGN DATA */}
        {listModel.map((item, index) => {
          return (
            <motion.div
              onClick={() => {
                router.push(`/model/${item.slug}`);
                localStorage.setItem("gender", item.gender);
              }}
              key={index}
              className="overflow-hidden cursor-pointer group"
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
              {/* IMAGE CONTAINER */}
              <div className="relative aspect-[4/5] bg-white overflow-hidden">
                {/* BACKGROUND IMAGE */}
                <Image
                  src={item.cover_img}
                  alt="model name"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={item.cover_img}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* MODEL DETAILS OVERLAY */}
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
                  whileHover="visible"
                  className="absolute w-full h-full bg-white/70 top-0 text-black flex flex-col justify-center items-center opacity-90 gap-3 md:gap-2 xl:gap-5 2xl:gap-8"
                >
                  <p className="text-sm md:text-xs xl:text-base 2xl:text-2xl text-center font-light">
                    Height: <span className="font-thin">{item.hight} CM</span>
                    <br />
                    Bust: <span className="font-thin">{item.bust} CM</span>
                    <br />
                    Waist: <span className="font-thin">{item.waist} CM</span>
                    <br />
                    Hips: <span className="font-thin">{item.hips} CM</span>
                    <br />
                    Shoe size:{" "}
                    <span className="font-thin">{item.shoe_size}</span>
                  </p>
                </motion.div>
                ;
              </div>

              {/* MODEL NAME */}
              <div className="flex items-center justify-center my-4">
                <p className="text-xl font-medium transition-colors duration-300 group-hover:text-gray-600">
                  {item.name}
                </p>
              </div>
            </motion.div>
          );
        })}
      </section>
    </React.Fragment>
  );
};

export default ModelListComponent;
