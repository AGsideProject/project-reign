"use client";
import { useState } from "react";
import AssetsDetailModal from "./asset-modal";
import CarouselAssets from "./carousel-assets";
import CarouselModal from "./carousel-mobile";
import Image from "next/image";
import { useRouter } from "next/navigation";
import localFont from "next/font/local";

const resothoExtralight = localFont({
  src: "../../../public/fonts/ResothoExtralight-9YXJK.otf",
});

const ModelDetailComponent = ({ data }) => {
  // Initialize state
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("polaroid");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [photos, setPhotos] = useState(data?.polaroid || []);
  const handleViewAsset = (id) => {
    setCurrentIndex(id);
    setOpenModal(true);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setPhotos(tab === "polaroid" ? data.polaroid : data.instagram);
  };
  return (
    <div className={`mb-20 ${resothoExtralight.className}`}>
      {/* //! main carousel */}
      <div className="flex justify-center">
        {/* Desktop */}
        <div
          //className="hidden sm:block w-[90vw] h-[80vh] sm:w-[95vw] lg:w-[90vw] bg-black"
          className="hidden sm:block"
        >
          <CarouselAssets data={data.carousel} />
        </div>

        {/* Mobile */}
        <div className="grid sm:hidden w-[98vw] md:w-[75vw] min-h-[40vh]">
          <CarouselModal
            showIndicator={false}
            showPagination={true}
            curIndex={0}
            data={data.carousel}
            // data={photos}
            className="w-[98vw] md:w-[75vw]"
          />
        </div>
      </div>
      {/* //! main carousel */}

      {/* <div className="flex flex-col justify-center items-center my-10 md:hidden">
        <div className="flex flex-col gap-3 justify-center items-center  text-sm">
          <div className="">
            <p>
              <span className="font-medium">HEIGHT</span>: {data?.hight}
              CM
            </p>
          </div>
          <div className="bg-black h-[0.5px] w-full"></div>
          <div className="">
            <p>
              <span className="font-medium">BUST</span>: {data?.bust} CM
            </p>
          </div>
          <div className="bg-black h-[0.5px] w-full"></div>

          <div className="">
            <p>
              <span className="font-medium">WAIST</span>: {data?.waist} CM
            </p>
          </div>
          <div className="bg-black h-[0.5px] w-full"></div>

          <div className="">
            <p>
              <span className="font-medium">HIPS</span>: {data?.hips} CM
            </p>
          </div>
          <div className="bg-black h-[0.5px] w-full"></div>

          <div className="">
            <p>
              <span className="font-medium">SHOE</span>: {data?.shoe_size}
              US
            </p>
          </div>
          <div className="bg-black h-[0.5px] w-full"></div>

          <div className="">
            <p>
              <span className="font-medium ">EYES</span>: {data?.eyes}
            </p>
          </div>
          <div className="bg-black h-[0.5px] w-full"></div>

          <div className="">
            <p>
              <span className="font-medium ">HAIR</span>: {data?.hair}
            </p>
          </div>
          <div className="bg-black h-[0.5px] w-full"></div>
        </div>
      </div> */}
      <div className="md:hidden grid grid-cols-2 text-sm md:text-xs justify-items-center items-center w-1/2 m-auto my-10 gap-y-2">
        <div className="col-span-2 h-1"></div>
        <div>
          <p className="font-semibold">HEIGHT</p>
        </div>
        <div>
          <p className="font-medium">{data.hight} CM</p>
        </div>
        <div className="bg-black h-[0.5px] w-full col-span-2"></div>
        <div>
          <p className="font-semibold">BUST</p>
        </div>
        <div>
          <p className="font-medium">{data.bust} CM</p>
        </div>
        <div className="bg-black h-[0.5px] w-full col-span-2"></div>

        <div>
          <p className="font-semibold">WAIST</p>
        </div>
        <div>
          <p className="font-medium">{data.waist} CM</p>
        </div>
        <div className="bg-black h-[0.5px] w-full col-span-2"></div>

        <div>
          <p className="font-semibold">HIPS</p>
        </div>
        <div>
          <p className="font-medium">{data.hips} CM</p>
        </div>
        <div className="bg-black h-[0.5px] w-full col-span-2"></div>

        <div>
          <p className="font-semibold">SHOE</p>
        </div>
        <div>
          <p className="font-medium">{data.shoe_size} US</p>
        </div>
        <div className="bg-black h-[0.5px] w-full col-span-2"></div>

        <div>
          <p className="font-semibold">EYES</p>
        </div>
        <div>
          <p className="first-letter:uppercase font-medium text-center">{data.eyes}</p>
        </div>
        <div className="bg-black h-[0.5px] w-full col-span-2"></div>

        <div>
          <p className="font-semibold">HAIR</p>
        </div>
        <div>
          <p className="first-letter:uppercase font-medium text-center">{data.hair}</p>
        </div>
        <div className="bg-black h-[0.5px] w-full col-span-2"></div>
      </div>
      {/* START - Assets  */}
      <div className={`flex justify-center mt-10 mb-10 `}>
        <div className="w-[85vw] sm:w-[95vw] lg:w-[85vw]">
          {/* Tabs */}
          <div className="animate-fade-right animate-once animate-duration-[3000ms] animate-ease-in-out">
            <div className="grid sm:flex justify-center items-center md:justify-start gap-3 sm:gap-6">
              {["polaroid", "instagram"].map((el) => (
                <div
                  key={`assets-type-${el}`}
                  onClick={() => handleTabChange(el)}
                  className={`pb-2 sm:pb-[14px] border-b-[1px] sm:border-b-2 px-[20px] cursor-pointer transition-all duration-500 ${activeTab === el ? "border-black" : "border-white"
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
      <div className="mb-10 bg-black">
        {activeTab === "polaroid" && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 p-1">
            {photos.map((item, index) => (
              <div
                key={`assets-${index}`}
                className={`w-full bg-[#555555] flex justify-center items-center cursor-zoom-in ${item.orientation === "landscape"
                  ? "lg:col-span-2"
                  : "lg:col-span-1"
                  }`}
                onClick={() => handleViewAsset(index)}
              >
                <img
                  alt="mode"
                  src={item.img_url}
                  className={`w-full h-full ${item.orientation === "landscape"
                    ? "aspect-[16/9]"
                    : "aspect-[79/119]"
                    } object-cover`}
                />
              </div>
            ))}
          </div>
        )}
        {activeTab === "instagram" && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 p-1">
            {photos.map((item, index) => (
              <div
                key={`assets-${index}`}
                className={`relative w-full bg-[#555555] flex justify-center items-center aspect-[3/4]`}
              // onClick={(e) => {
              //   e.preventDefault();
              //   window.open(item.redirect, "_blank");
              // }}
              >
                <Image src={item.img_url} fill={true} objectFit="cover" />
                {/* <div className="w-full absolute bottom-0 bg-white/50">
                  <div className="flex flex-row justify-center gap-5">
                    Likes : {item.likes > 0 ? item.likes : "hidden"}
                    Comments : {item.comments}
                  </div>

                </div> */}
              </div>
            ))}
          </div>
        )}
      </div>
      {/* END - Content */}

      {/* Assets Detail Modal */}
      <AssetsDetailModal
        setCurIndex={setCurrentIndex}
        curIndex={currentIndex}
        // data={data.polaroid}
        data={photos}
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
};

export default ModelDetailComponent;
