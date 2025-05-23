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
  onClose,
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
            slidesPerView: 2,
          },
        }}
        className={className}
      >
        {data.map((element, index) => (
          <SwiperSlide key={`carousel-assets-${index}`}>
            <div className="max-h-[85vh] flex justify-center items-center">
              <div className="relative">
                <img
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${element.img_url}`}
                  alt={`assets-model-${index}`}
                  className="object-contain w-full h-full"
                />
              </div>
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
