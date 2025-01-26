"use client";
import { useState } from "react";
import AssetsDetailModal from "./asset-modal";
import CarouselAssets from "./carousel-assets";
import CarouselModal from "./carousel-mobile";

const ModelDetailComponent = ({ data }) => {
  // Initialize state
  const [activeTab, setActiveTab] = useState("polaroid");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleViewAsset = (id) => {
    setCurrentIndex(id);
    setOpenModal(true);
  };

  return (
    <div className="mb-20">
      {/* //! main carousel */}
      <div className="flex justify-center">
        {/* Desktop */}
        <div className="hidden sm:block w-[90vw] h-[80vh] sm:w-[95vw] lg:w-[90vw] bg-black">
          <CarouselAssets data={data.carousel} />
        </div>

        {/* Mobile */}
        <div className="grid sm:hidden w-[98vw] md:w-[75vw] min-h-[40vh]">
          <CarouselModal
            showIndicator={false}
            showPagination={true}
            curIndex={0}
            data={data.carousel}
            className="w-[98vw] md:w-[75vw]"
          />
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
                  <p className="font-thin uppercase tracking-[.25em] text-xl text-center sm:font-normal">
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
          {data.polaroid.map((item, index) => (
            <div
              key={`assets-${index}`}
              className={`w-full bg-[#555555] flex justify-center items-center cursor-zoom-in ${
                item.orientation === "landscape"
                  ? "lg:col-span-2"
                  : "lg:col-span-1"
              }`}
              onClick={() => handleViewAsset(index)}
            >
              <img
                alt="mode"
                src={item.img_url}
                className={`w-full h-full ${
                  item.orientation === "landscape"
                    ? "aspect-[16/9]"
                    : "aspect-[79/119]"
                } object-cover`}
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
        data={data.polaroid}
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
};

export default ModelDetailComponent;
