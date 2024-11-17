"use client"

import { useParams, useRouter, useSearchParams } from "next/navigation"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//modules
import { Pagination, Navigation } from 'swiper/modules'
import Image from "next/image";

export default function ModelDetail({ _params }) {
  // console.log(_params, "_params")

  const router = useRouter();
  const paramas = useParams();
  const searchParams = useSearchParams()

  const url = searchParams.get("item")

  console.log(url, "< url")

  /*
    - vscode 
    - node js
    - i term2 

    - git ( extra )
    - html basic and css basic
    - javascript basic - [mid] -  advanced
    - frontend framework = [
      - next ( top )
      - angular 
      - vue
      - react 
      - nuxt 
      - svelte

      - css framework = [
        - tailwind (top)
        - bootstrap (second)
        - bulma
        - materialize
      ]
    ]
  
  */
  return (
    <>
      {/* <div className="my-[30px] flex justify-center">
        <div className="w-[85%] h-[65vh] bg-black">
          <img alt='model' src={url} className="w-full h-full object-cover" />
        </div>
      </div> */}

      {/* //! main carousel */}
      <div className="my-[30px] flex justify-center">
        <div className="w-[85vw] h-[65vh] bg-black">

          <Swiper
            // spaceBetween={0} //! gap between photo
            slidesPerView={1}
            // slidespreview={3}
            navigation={false}
            pagination={{ clickable: true }}
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
                  src={url}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
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
                  src={url}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[100%] h-[65vh] bg-blue-400">
                <img
                  alt="mode"
                  src={url}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* //! main carousel */}

      {/* //! fix phto */}
      <div className="bg-black flex justify-center items-center flex-wrap gap-2 py-2">
        <div className="w-[100vw] lg:w-[300px] md:w-[300px] h-[380px] mx-2 bg-blue-300">
          <img alt='model' src={url} className="w-full h-full object-cover" />

        </div>
        <div className="w-[100vw] lg:w-[300px] md:w-[300px] h-[380px] mx-2 bg-blue-300">
          <img alt='model' src={url} className="w-full h-full object-cover" />

        </div>
        <div className="w-[100vw] lg:w-[300px] md:w-[300px] h-[380px] mx-2 bg-blue-300">
          <img alt='model' src={url} className="w-full h-full object-cover" />

        </div>
        <div className="w-[100vw] lg:w-[300px] md:w-[300px] h-[380px] mx-2 bg-blue-300">
          <img alt='model' src={url} className="w-full h-full object-cover" />

        </div>
        <div className="w-[100vw] lg:w-[300px] md:w-[300px] h-[380px] mx-2 bg-blue-300">
          <img alt='model' src={url} className="w-full h-full object-cover" />

        </div>
        <div className="w-[100vw] lg:w-[300px] md:w-[300px] h-[380px] mx-2 bg-blue-300">
          <img alt='model' src={url} className="w-full h-full object-cover" />

        </div>
      </div>
      {/* //! fix phto */}

      <div className="my-10 w-full h-[300px] bg-blue-500">
        <div>
          <h1
            className="denisheading1"
          // style={{ fontWeight: "100" }}
          >Bio</h1>
          <p>ini bisaodiadioh aoidh oaidhaosidhasoidhaodihasoidhaodihasdoihsadoiah oihdoiashdaoidhaoih</p>
        </div>

      </div>

      <Swiper
        // spaceBetween={10}
        slidesPerView={2}
        // slidespreview={3}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // className="mySwiper"
        loop={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <Image alt="mode" src={url} width={300} height={300} />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="mode" src={url} width={300} height={300} />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="mode" src={url} width={300} height={300} />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="mode" src={url} width={300} height={300} />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="mode" src={url} width={300} height={300} />
        </SwiperSlide>
      </Swiper>



    </>
  )
}