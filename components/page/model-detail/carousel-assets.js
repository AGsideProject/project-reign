"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "styles/swiper.css";

const CarouselAssets = ({
  showNavigation,
  showPagination = true,
  showIndicator,
  curIndex,
  data,
  className,
}) => {
  const modules = [Navigation];
  if (showPagination) modules.push(Pagination);

  // Initialize state
  const [crrentIndex, setCurIndex] = useState(curIndex || 0);

  return (
    <React.Fragment>
      <Swiper
        slidesPerView={1}
        navigation={showNavigation}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        scrollbar={{ draggable: true }}
        loop={true}
        modules={modules}
        initialSlide={curIndex}
        onSlideChange={(swiper) => setCurIndex(swiper.realIndex)}
        breakpoints={{
          640: {
            // 640px is the default width for 'sm' in Tailwind CSS
            slidesPerView: 2, // Show 2 slides on screens 640px or wider
            // slidesPerGroup: 2,
          },
        }}
        className={className}
      >
        {data.map((element, index) => (
          <SwiperSlide key={`carousel-assets-${index}`}>
            <div className="h-[70vh] flex justify-center items-center">
              <img
                src={element.img_url}
                alt={`assets-model-${index}`}
                className={`${
                  element.orientation === "landscape"
                    ? "object-contain"
                    : "object-cover"
                } w-full h-full`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {showIndicator && (
        <p className="text-end text-[12px] text-[#CCCCCC]">
          {crrentIndex + 1} / {data.length}
        </p>
      )}
    </React.Fragment>
  );
};
export default CarouselAssets;
