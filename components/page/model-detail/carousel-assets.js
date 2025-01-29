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
      slidesPerView={"auto"}
      slidesPerGroup={1}
      navigation={false}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      scrollbar={{ draggable: true }}
      onSwiper={setSwiperInstance}
      onActiveIndexChange={(event) => {
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
    >
      {data.map((element, index) => (
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
      ))}
    </Swiper>
  );
};

export default CarouselAssets;
