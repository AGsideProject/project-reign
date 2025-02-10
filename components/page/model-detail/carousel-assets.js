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
      loop={false}
      modules={[Navigation, Pagination]}
      className="w-[55vw]"
    >
      {/* {data.map((element, index) => (
        <SwiperSlide
          key={`carousel-assets-${index}`}
          style={{
            width: element.orientation === "portrait" ? "50%" : "100%",
          }}
        >
          <div className="h-[80vh] flex justify-center items-center">
            <img
              src={element.img_url}
              alt={`assets-model-${index}`}
              className="object-cover w-full h-full"
            />
          </div>
        </SwiperSlide>
      ))} */}
      {data.map((element, index) => (
        <SwiperSlide
          key={`carousel-assets-${index}`}
          style={{
            width: element.orientation === "portrait" ? "50%" : "100%",
            //! yang ini aman tapi kepotong dikit yang 3/4
            aspectRatio: element.orientation === "portrait" ? "3/4" : "16/9",
            //! yang ini keliatan white blankspace tapi udh auto ngitung fotonya
            // aspectRatio: 'auto',
          }}
        >
          <div className="flex justify-center items-center">
            <img src={element.img_url} alt={`assets-model-${index}`} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselAssets;
