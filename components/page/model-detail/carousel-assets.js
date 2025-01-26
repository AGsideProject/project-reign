"use client";
import React from "react";
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
}) => {
  const modules = [Navigation];
  if (showPagination) modules.push(Pagination);

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
        breakpoints={{
          640: {
            // 640px is the default width for 'sm' in Tailwind CSS
            slidesPerView: 2, // Show 2 slides on screens 640px or wider
            slidesPerGroup: 2,
          },
        }}
        className="w-[98vw] md:w-[75vw] bg-black"
      >
        {/* Portrait Image */}
        <SwiperSlide>
          <div className="h-[70vh] bg-yellow-100">
            <img
              src={"/image/p1.jpg"}
              alt="mode"
              className="object-cover w-full h-full"
            />
          </div>
        </SwiperSlide>

        {/* Portrait Image */}
        <SwiperSlide>
          <div className="h-[70vh] bg-yellow-100">
            <img
              src={"/image/p2.jpg"}
              alt="mode"
              className="object-cover w-full h-full"
            />
          </div>
        </SwiperSlide>

        {/* Landscape Image */}
        <SwiperSlide>
          <div className="h-[70vh] flex justify-center items-center bg-yellow-200">
            <img
              src={"/image/l1.jpg"}
              alt="special mode"
              className="object-contain w-full h-full"
            />
          </div>
        </SwiperSlide>

        {/* Portrait Image */}
        <SwiperSlide>
          <div className="h-[70vh] bg-yellow-100">
            <img
              src={"/image/p3.jpg"}
              alt="mode"
              className="object-cover w-full h-full"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      {showIndicator && (
        <p className="text-end text-[12px] text-[#CCCCCC]">1 / 17</p>
      )}
    </React.Fragment>
  );
};
export default CarouselAssets;
