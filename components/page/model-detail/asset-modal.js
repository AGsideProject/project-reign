import useKeypress from "react-use-keypress";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import CarouselAssets from "./carousel-assets";

const AssetsDetailModal = ({
  curIndex,
  data,
  isOpen,
  onClose,
  setCurIndex,
}) => {
  const [slideDirection, setSlideDirection] = useState("right"); // Track slide direction

  // Handle previous button
  const handlePrev = () => {
    if (curIndex !== 0) {
      setSlideDirection("left"); // Set direction to left
      setCurIndex((prev) => (prev -= 1));
    }
  };

  // Handle next button
  const handleNext = () => {
    if (curIndex !== data.length - 1) {
      setSlideDirection("right"); // Set direction to right
      setCurIndex((prev) => (prev += 1));
    }
  };

  useKeypress("ArrowRight", () => {
    handleNext();
  });

  useKeypress("ArrowLeft", () => {
    handlePrev();
  });

  useKeypress("Escape", () => {
    onClose();
  });

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      {/* START - On Desktop View */}
      <div className="hidden md:flex justify-between items-center w-full px-1 md:px-10 lg:px-20 2xl:max-w-[70vw]">
        {/* Left Button */}
        <button
          className="flex justify-center items-center rounded-full text-gray-300 hover:text-white h-10 w-10 bg-black"
          onClick={handlePrev}
        >
          <ChevronLeft />
        </button>

        {/* The Asset */}
        <div>
          <div className="flex relative bg-[#555555] shadow-lg w-[70vw] h-[70vh] md:w-[70vw] md:h-[90vh] lg:w-[52vw] xl:w-[40vw] 2xl:h-[80vh] 2xl:w-[35vw]">
            <button
              onClick={onClose}
              className="absolute flex justify-center items-center rounded-full top-[-16px] right-[-13px] text-gray-300 hover:text-white text-xl h-7 w-7 bg-black pb-1"
            >
              &times;
            </button>
            <img
              alt="mode"
              src={data[curIndex].img_url} // Use the current image from the data array
              className={`w-full aspect-[1/2] object-cover ${
                slideDirection === "right"
                  ? "animate-slide-in-right"
                  : "animate-slide-in-left"
              }`}
            />
          </div>
          {/* Indicator */}
          <p className="text-end text-[12px] text-[#CCCCCC]">{`${
            curIndex + 1
          } / ${data.length}`}</p>
        </div>

        {/* Right Button */}
        <button
          className="flex justify-center items-center rounded-full text-gray-300 hover:text-white h-10 w-10 bg-black"
          onClick={handleNext}
        >
          <ChevronRight />
        </button>
      </div>
      {/* END - On Desktop View */}

      {/* START - On Mobile View */}
      <div className="grid md:hidden">
        <button
          onClick={onClose}
          className="text-gray-300 hover:text-white text-2xl justify-end text-right font-medium"
        >
          &times;
        </button>
        <CarouselAssets showIndicator={true} showPagination={false} />
      </div>
      {/* END - On Mobile View */}
    </div>
  );
};

export default AssetsDetailModal;
