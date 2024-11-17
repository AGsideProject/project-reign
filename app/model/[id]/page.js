"use client"

import { useParams, useRouter, useSearchParams } from "next/navigation"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//modules
import { Pagination, Navigation } from 'swiper/modules'

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
      <div className="my-[30px] flex justify-center">
        <div className="w-[85%] h-[65vh] bg-black">
          <img alt='model' src={url} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* //! fix phto */}
      <div className="bg-black flex justify-center items-center flex-wrap gap-2 py-2">
        <div className="w-[100vw] h-[380px] mx-2 bg-blue-300">
          <img alt='model' src={url} className="w-full h-full object-cover" />

        </div>
        <div className="w-[100vw] h-[380px] mx-2 bg-blue-300">
          <img alt='model' src={url} className="w-full h-full object-cover" />

        </div>
        <div className="w-[100vw] h-[380px] mx-2 bg-blue-300">
          <img alt='model' src={url} className="w-full h-full object-cover" />

        </div>
        <div className="w-[100vw] h-[380px] mx-2 bg-blue-300">
          <img alt='model' src={url} className="w-full h-full object-cover" />

        </div>
        <div className="w-[100vw] h-[380px] mx-2 bg-blue-300">
          <img alt='model' src={url} className="w-full h-full object-cover" />

        </div>
        <div className="w-[100vw] h-[380px] mx-2 bg-blue-300">
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
        spaceBetween={30}
        slidespreview={5}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // className="mySwiper"
        loop={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </>
  )
}