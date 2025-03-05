"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "styles/swiper.css";

const CarouselAssets = ({ data }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const isSwiping = useRef(false);

  const handleNext = () => {
    if (!swiperInstance || isSwiping.current) return;

    const { activeIndex } = swiperInstance;
    const currentOrientation = data[activeIndex]?.orientation;

    if (currentOrientation === "landscape") {
      swiperInstance.slideNext();
    } else {
      swiperInstance.slideTo(activeIndex + 2);
    }
  };

  const handlePrev = () => {
    if (!swiperInstance || isSwiping.current) return;

    const { activeIndex } = swiperInstance;
    const currentOrientation = data[activeIndex]?.orientation;

    if (data[activeIndex - 1]?.orientation === "landscape") {
      swiperInstance.slidePrev();
    } else {
      swiperInstance.slideTo(activeIndex - 2);
    }
  };

  const handleSwipe = (swiper) => {
    if (!swiperInstance || isSwiping.current) return;

    isSwiping.current = true;

    const { activeIndex } = swiper;
    const orientationNext = data[activeIndex - 1]?.orientation;
    const orientationprev = data[activeIndex]?.orientation;

    let targetIndex;
    if (swiper.swipeDirection === "next") {
      targetIndex =
        orientationNext === "landscape" ? activeIndex : activeIndex + 1;
    } else if (swiper.swipeDirection === "prev") {
      targetIndex =
        orientationprev === "landscape" ? activeIndex : activeIndex - 1;
    }

    if (targetIndex >= 0 && targetIndex < data.length) {
      swiperInstance.slideTo(targetIndex);
    }

    setTimeout(() => {
      isSwiping.current = false;
    }, 100);
  };

  return (
    <div className="relative">
      <Swiper
        slidesPerView="auto"
        slidesPerGroup={1}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        scrollbar={{ draggable: true }}
        onSwiper={setSwiperInstance}
        onSlideChange={handleSwipe}
        loop={false}
        modules={[Pagination]}
        className="lg:w-[55vw] sm:w-[65vw] w-[85vw]"
      >
        {data.map((element, index) => (
          <SwiperSlide
            key={`carousel-assets-${index}`}
            style={{
              width: element.orientation === "portrait" ? "50%" : "100%",
              aspectRatio: "auto",
            }}
          >
            <div className="flex justify-center items-center h-[38vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] xl:h-[73vh]">
              <img
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${element.img_url}`}
                alt={`assets-model-${index}`}
                className="object-cover w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        className="absolute top-1/2 -left-1 transform -translate-y-1/2 -translate-x-full flex items-center justify-center text-white z-50 rounded-full"
        onClick={handlePrev}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-left"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      <button
        className="absolute top-1/2 -right-1 transform -translate-y-1/2 translate-x-full flex items-center justify-center text-white z-50 rounded-full"
        onClick={handleNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-right"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  );
};

export default CarouselAssets;
