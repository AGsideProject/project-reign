"use client"

import { useParams, useRouter, useSearchParams } from "next/navigation"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'styles/swiper.css';
//modules
import { Pagination, Navigation } from 'swiper/modules'
import Image from "next/image";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      {/* <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div> */}
    </div>
  );
};

const cards = [
  {
    url: "/image/5.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/image/6.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/image/7.JPG",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/image/8.JPEG",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/image/9.JPEG",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/image/10.JPG",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/image/11.JPG",
    title: "Title 7",
    id: 7,
  },
  {
    url: "/image/12.JPG",
    title: "Title 7",
    id: 8,
  },
  {
    url: "/image/13.JPG",
    title: "Title 7",
    id: 9,
  },
  {
    url: "/image/14.JPG",
    title: "Title 7",
    id: 10,
  },
  {
    url: "/image/15.jpg",
    title: "Title 7",
    id: 11,
  },
  {
    url: "/image/16.JPEG",
    title: "Title 7",
    id: 12,
  },
];


export default function ModelDetail({ _params }) {
  // console.log(_params, "_params")

  const router = useRouter();
  const paramas = useParams();
  const searchParams = useSearchParams()

  const url = searchParams.get("item")

  console.log(url, "< url")
  return (
    <>
      {/* <div className="my-[30px] flex justify-center">
        <div className="w-[85%] h-[65vh] bg-black">
          <img alt='model' src={url} className="w-full h-full object-cover" />
        </div>
      </div> */}

      <div className="flex flex-col justify-center items-center mb-1 mt-14">
        <div className="mb-6 animate-fade-right animate-once animate-duration-[3000ms] animate-ease-in-out">
          <p className="text-3xl font-medium">Model Name</p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center w-[85vw] sm:w-[95vw] lg:w-[85vw] sm:flex-row sm:items-center sm:justify-around sm:flex-wrap sm:h-[50px] lg:gap-0 text-sm">

          <div className="animate-fade-right animate-once animate-duration-[4000ms] animate-ease-in-out">
            <p> <span className="font-medium">HEIGHT</span>: 181 CM</p>
          </div>
          <div className="animate-fade-right animate-once animate-duration-[3500ms] animate-ease-in-out">
            <p> <span className="font-medium">BUST</span>: 81 CM</p>
          </div>
          <div className="animate-fade-right animate-once animate-duration-[3000ms] animate-ease-in-out">
            <p> <span className="font-medium">WAIST</span>: 62 CM</p>
          </div>
          <div className="animate-fade-right animate-once animate-duration-[2500ms] animate-ease-in-out">
            <p> <span className="font-medium">HIPS</span>: 91 CM</p>
          </div>
          <div className="animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out">
            <p> <span className="font-medium">SHOE</span>: 8 US</p>
          </div>
          <div className="animate-fade-right animate-once animate-duration-[1500ms] animate-ease-in-out">
            <p> <span className="font-medium ">HAIR</span>: DARK BROWN</p>
          </div>
          <div className="animate-fade-right animate-once animate-duration-[1000ms] animate-ease-in-out">
            <p> <span className="font-medium ">EYES</span>: BLUE</p>
          </div>
        </div>

        {/* <div className="flex items-center justify-around w-[85vw] h-[50px] text-sm">
          <p> <span className="font-medium">HEIGHT</span>: 181 CM</p>
          <p> <span className="font-medium">BUST</span>: 81 CM</p>
          <p> <span className="font-medium">WAIST</span>: 62 CM</p>
          <p> <span className="font-medium">HIPS</span>: 91 CM</p>
          <p> <span className="font-medium">SHOE</span>: 8 US</p>
          <p> <span className="font-medium">HAIR</span>: DARK BROWN</p>
          <p> <span className="font-medium">EYES</span>: BLUE</p>
        </div> */}

      </div>


      {/* //! main carousel */}
      <div className="flex justify-center">

        <div className="w-[85vw] h-[65vh] sm:w-[95vw] lg:w-[85vw] bg-black">
          <Swiper
            // spaceBetween={0} //! gap between photo
            slidesPerView={1}
            // slidespreview={3}
            navigation={false}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            scrollbar={{ draggable: true }}
            // className="mySwiper"
            loop={true}
            modules={[Pagination, Navigation]}
            breakpoints={{
              640: { // 640px is the default width for 'sm' in Tailwind CSS
                slidesPerView: 2, // Show 2 slides on screens 640px or wider
              },
            }}
          >
            <SwiperSlide>
              <div className="w-[100%] h-[65vh] bg-blue-400">
                <img
                  alt="mode"
                  src={url}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[100%] h-[65vh] bg-blue-400">
                <img
                  alt="mode"
                  src={"/image/1.JPG"}
                  className="w-full h-full object-cover "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[100%] h-[65vh] bg-blue-400">
                <img
                  alt="mode"
                  src={"/image/2.JPG"}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[100%] h-[65vh] bg-blue-400">
                <img
                  alt="mode"
                  src={"/image/3.jpg"}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[100%] h-[65vh] bg-blue-400">
                <img
                  alt="mode"
                  src={"/image/4.jpg"}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* //! main carousel */}

      <div className="flex justify-center animate-fade-right animate-once animate-duration-[3000ms] animate-ease-in-out">
        <div className="w-[85vw] h-[150px] sm:w-[95vw] lg:w-[85vw] flex justify-center items-center md:justify-start lg:h-[120px]">
          <div>
            <p className="text-xl font-medium ">POLAROIDS</p>
          </div>
        </div>
      </div>

      {/* //! fix phto mobile verison */}
      <div className="bg-black flex justify-center items-center flex-wrap gap-1 py-1 mb-[200px] md:hidden">
        <div className="w-[100vw] lg:w-[300px] md:w-[300px] h-[380px] mx-1 bg-blue-300">
          <img alt='model' src={url} className="w-full h-full object-cover" />
        </div>
        <div className="w-[100vw] lg:w-[300px] md:w-[300px] h-[380px] mx-1 bg-blue-300">
          <img alt='model' src={url} className="w-full h-full object-cover" />
        </div>
        <div className="w-[100vw] lg:w-[300px] md:w-[300px] h-[380px] mx-1 bg-blue-300">
          <img alt='model' src={url} className="w-full h-full object-cover" />
        </div>
        <div className="w-[100vw] lg:w-[300px] md:w-[300px] h-[380px] mx-1 bg-blue-300">
          <img alt='model' src={url} className="w-full h-full object-cover" />
        </div>
        <div className="w-[100vw] lg:w-[300px] md:w-[300px] h-[380px] mx-1 bg-blue-300">
          <img alt='model' src={url} className="w-full h-full object-cover" />
        </div>
      </div>
      {/* //! fix phto mobile verison */}

      <div className="lg:w-screen lg:h-[400px] hidden sm:block bg-black mb-10 ">
        <Swiper
          spaceBetween={0} //! gap between photo
          slidesPerView={1}
          navigation={false}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          scrollbar={{ draggable: true }}
          loop={true}
          modules={[Pagination, Navigation]}
          breakpoints={{
            // 640: { // 640px is the default width for 'sm' in Tailwind CSS
            //   slidesPerView: 5, // Show 2 slides on screens 640px or wider
            //   spaceBetween: 80
            // },
            640: { // 640px is the default width for 'sm' in Tailwind CSS
              slidesPerView: 5, // Show 2 slides on screens 640px or wider
              spaceBetween: 3
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 190
            },
            1440: {
              slidesPerView: 5, // Show 2 slides on screens 640px or wider
              spaceBetween: 80
            }
          }}
        >
          <SwiperSlide>
            <div className="lg:w-[300px] lg:h-[400px] bg-blue-400 flex justify-center items-center">
              <img
                alt="mode"
                src={"/image/5.jpg"}
                className="w-full h-full object-cover"
                onClick={() => console.log("test")}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:w-[300px] lg:h-[400px] bg-blue-400">
              <img
                alt="mode"
                src={"/image/6.jpg"}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:w-[300px] lg:h-[400px] bg-blue-400">
              <img
                alt="mode"
                src={"/image/7.JPG"}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:w-[300px] lg:h-[400px] bg-blue-400">
              <img
                alt="mode"
                src={"/image/8.JPEG"}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:w-[300px] lg:h-[400px] bg-blue-400">
              <img
                alt="mode"
                src={"/image/9.JPEG"}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:w-[300px] lg:h-[400px] bg-blue-400">
              <img
                alt="mode"
                src={"/image/10.JPG"}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:w-[300px] lg:h-[400px] bg-blue-400">
              <img
                alt="mode"
                src={"/image/11.JPG"}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:w-[300px] lg:h-[400px] bg-blue-400">
              <img
                alt="mode"
                src={"/image/12.JPG"}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:w-[300px] lg:h-[400px] bg-blue-400">
              <img
                alt="mode"
                src={"/image/13.JPG"}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:w-[300px] lg:h-[400px] bg-blue-400">
              <img
                alt="mode"
                src={"/image/14.JPG"}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:w-[300px] lg:h-[400px] bg-blue-400">
              <img
                alt="mode"
                src={"/image/15.jpg"}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:w-[300px] lg:h-[400px] bg-blue-400">
              <img
                alt="mode"
                src={"/image/16.JPEG"}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>



      {/* //! showcase carousell */}

      <Swiper
        slidesPerView={1}
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        scrollbar={{ draggable: true }}
        loop={true}
        modules={[Pagination, Navigation,]}

        breakpoints={{
          640: { // 640px is the default width for 'sm' in Tailwind CSS
            slidesPerView: 2, // Show 2 slides on screens 640px or wider
            slidesPerGroup: 2,
          },
        }}
        className="w-[75vw] bg-black"
      >


        <SwiperSlide >
          <div className="aspect-[3/4] bg-yellow-100">
            <img
              src={"/image/p1.jpg"}
              alt="mode"
              className="object-cover w-full h-full"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide >
          <div className="aspect-[3/4] bg-yellow-100">
            <img
              src={"/image/p2.jpg"}
              alt="mode"
              className="object-cover w-full h-full"
            />
          </div>
        </SwiperSlide>
        {/* //! LANDSCAPE */}
        <SwiperSlide
          style={{
            flex: "0 0 100%",
          }}
        >
          <div className="aspect-[16/10.65] bg-yellow-200">
            <img
              src={"/image/l1.jpg"}
              alt="special mode"
              className="object-cover w-full h-full"
            />
          </div>
        </SwiperSlide>
        {/* //! LANDSCAPE */}
        <SwiperSlide >
          <div className="aspect-[3/4] bg-yellow-100">
            <img
              src={"/image/p3.jpg"}
              alt="mode"
              className="object-cover w-full h-full"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* //! showcase carousell */}

      <div className="h-[10vh]"></div>
    </>
  )
}