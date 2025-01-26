"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "styles/swiper.css";
import { Pagination, Navigation } from "swiper/modules";
import AssetsDetailModal from "./asset-modal";

const ModelDetailComponent = () => {
  // Initialize state
  const [activeTab, setActiveTab] = useState("polaroid");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [display, setDisplay] = useState("");
  const url =
    "https://plus.unsplash.com/premium_photo-1664542157691-d0aa8ff453fd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const handleViewAsset = (url, id) => {
    setDisplay(url);
    setCurrentIndex(id);
    setOpenModal(true);
  };

  return (
    <>
      {/* //! main carousel */}
      <div className="flex justify-center">
        <div className="w-[90vw] h-[70vh] sm:w-[95vw] lg:w-[90vw] bg-black">
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
              640: {
                // 640px is the default width for 'sm' in Tailwind CSS
                slidesPerView: 2, // Show 2 slides on screens 640px or wider
              },
            }}
          >
            <SwiperSlide>
              <div className="w-[100%] h-[70vh] bg-blue-400">
                <img
                  alt="mode"
                  src={url}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[100%] h-[70vh] bg-blue-400">
                <img
                  alt="mode"
                  src={"/image/1.JPG"}
                  className="w-full h-full object-cover "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[100%] h-[70vh] bg-blue-400">
                <img
                  alt="mode"
                  src={"/image/2.JPG"}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[100%] h-[70vh] bg-blue-400">
                <img
                  alt="mode"
                  src={"/image/3.jpg"}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[100%] h-[70vh] bg-blue-400">
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

      {/* START - Assets  */}
      <div className="flex justify-center mt-20 mb-10">
        <div className="w-[85vw] sm:w-[95vw] lg:w-[85vw]">
          {/* Tabs */}
          <div className="animate-fade-right animate-once animate-duration-[3000ms] animate-ease-in-out">
            <div className="grid sm:flex justify-center items-center md:justify-start gap-3 sm:gap-6">
              {["polaroid", "instagram"].map((el) => (
                <div
                  key={`assets-type-${el}`}
                  onClick={() => setActiveTab(el)}
                  className={`pb-2 sm:pb-[14px] border-b-[1px] sm:border-b-2 px-[20px] cursor-pointer transition-all duration-500 ${
                    activeTab === el ? "border-black" : "border-white"
                  }`}
                >
                  <p className="font-thin uppercase tracking-[.25em] text-xl text-center sm:font-medium">
                    {el}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* START - Content */}
      <div className="mb-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {[...Array(17)].map((_, index) => (
            <div
              key={`assets-${index}`}
              className="w-full bg-[#555555] flex justify-center items-center cursor-zoom-in"
              onClick={() => handleViewAsset("/image/5.jpg", index)}
            >
              <img
                alt="mode"
                src={"/image/5.jpg"}
                className="w-full aspect-[79/119] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      {/* END - Content */}

      {/* Assets Detail Modal */}
      <AssetsDetailModal
        setCurIndex={setCurrentIndex}
        curIndex={currentIndex}
        data={[...Array(17)]}
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
};

export default ModelDetailComponent;
