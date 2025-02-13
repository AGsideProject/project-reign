"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "styles/swiper.css";

const CarouselAssets = ({ data }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div className="relative">
      <Swiper
        slidesPerView="auto"
        slidesPerGroup={1}
        navigation
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        scrollbar={{ draggable: true }}
        onSwiper={setSwiperInstance}
        onSlideChange={(event) => {
          if (!swiperInstance) return;
          const { activeIndex, swipeDirection } = event;
          const orCurrent = data[activeIndex]?.orientation;
          const orNext = data[activeIndex + 1]?.orientation;

          if (
            orCurrent === "portrait" &&
            orNext === "landscape" &&
            swipeDirection === "next"
          ) {
            swiperInstance.slideNext();
          }

          if (
            orCurrent === "portrait" &&
            orNext === "landscape" &&
            swipeDirection === "prev"
          ) {
            swiperInstance.slidePrev();
          }
        }}
        onNavigationNext={(swiper) => {
          if (!swiperInstance) return;
          const { activeIndex } = swiper;
          const orCurrent = data[activeIndex]?.orientation;
          const orNext = data[activeIndex + 1]?.orientation;

          if (orCurrent === "portrait" && orNext === "landscape") {
            swiperInstance.slideNext();
          }
        }}
        onNavigationPrev={(swiper) => {
          if (!swiperInstance) return;
          const { activeIndex } = swiper;
          const orCurrent = data[activeIndex]?.orientation;
          const orNext = data[activeIndex + 1]?.orientation;

          if (orCurrent === "portrait" && orNext === "landscape") {
            swiperInstance.slidePrev();
          }
        }}
        loop={false}
        modules={[Navigation, Pagination]}
        className="w-[85vw] sm:w-[55vw]"
      >
        {data.map((element, index) => (
          <SwiperSlide
            key={`carousel-assets-${index}`}
            style={{
              width: element.orientation === "portrait" ? "50%" : "100%",
              //! yang ini aman tapi kepotong dikit yang 3/4
              // aspectRatio: element.orientation === "portrait" ? "3/4" : "16/9",
              //! yang ini keliatan white blankspace tapi udh auto ngitung fotonya
              aspectRatio: "auto",
            }}
          >
            <div className="flex justify-center items-center xl:h-[73vh]">
              <img
                src={element.img_url}
                alt={`assets-model-${index}`}
                className="object-cover w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className="absolute top-1/2 -left-1 transform -translate-y-1/2 -translate-x-full flex items-center justify-center text-white z-50 rounded-full">

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left" ><path d="m15 18-6-6 6-6" /></svg>

      </div>

      <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 translate-x-full flex items-center justify-center text-white z-50 rounded-full">

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>

      </div> */}

    </div>
  );
};

export default CarouselAssets;
