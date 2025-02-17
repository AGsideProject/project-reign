import useKeypress from "react-use-keypress";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";
import CarouselModal from "./carousel-mobile";

const AssetsDetailModal = ({
  curIndex,
  data,
  isOpen,
  onClose,
  setCurIndex,
}) => {
  // Handle previous button
  const handlePrev = () => {
    if (curIndex > 0) setCurIndex((prev) => prev - 1);
  };

  // Handle next button
  const handleNext = () => {
    if (curIndex < data.length - 1) setCurIndex((prev) => prev + 1);
  };

  // Keyboard navigation
  useKeypress("ArrowRight", handleNext);
  useKeypress("ArrowLeft", handlePrev);
  useKeypress("Escape", onClose);

  // Prevent body scroll when modal is open
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

  // Determine aspect ratio based on orientation
  const currentAsset = data[curIndex];
  const isLandscape = currentAsset?.orientation === "landscape";
  const aspectRatioClass = isLandscape ? "aspect-[16/9]" : "aspect-[1/2]";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      {/* Desktop View */}
      <div className="hidden md:flex justify-between items-center w-full px-1 md:px-10 lg:px-20 2xl:max-w-[70vw]">
        {/* Left Button */}
        <button
          aria-label="Previous"
          className="flex justify-center items-center rounded-full text-gray-300 hover:text-white h-10 w-10 bg-black"
          onClick={handlePrev}
          disabled={curIndex === 0}
        >
          <ChevronLeft />
        </button>

        {/* The Asset */}
        <div className="relative">
          <div
            className={`flex shadow-lg w-[70vw] h-[70vh] md:w-[70vw] md:h-[90vh] lg:w-[52vw] xl:w-[40vw] 2xl:h-[80vh] 2xl:w-[35vw] ${aspectRatioClass}`}
          >
            <div>
              <img
                alt="mode"
                src={currentAsset.img_url}
                className="w-full h-full object-contain animate-fade-in"
              />
            </div>
            <button
              aria-label="Close"
              onClick={onClose}
              className="flex justify-center items-center rounded-full text-gray-300 hover:text-white text-2xl h-3 w-7"
            >
              &times;
            </button>
          </div>
          {/* Indicator */}
          <p className="text-end text-[12px] text-[#CCCCCC] mt-2">{`${
            curIndex + 1
          } / ${data.length}`}</p>
        </div>

        {/* Right Button */}
        <button
          aria-label="Next"
          className="flex justify-center items-center rounded-full text-gray-300 hover:text-white h-10 w-10 bg-black"
          onClick={handleNext}
          disabled={curIndex === data.length - 1}
        >
          <ChevronRight />
        </button>
      </div>

      {/* Mobile View */}
      <div className="grid md:hidden">
        <button
          aria-label="Close"
          onClick={onClose}
          className="text-gray-300 hover:text-white text-2xl justify-end text-right font-medium"
        >
          &times;
        </button>
        <CarouselModal
          showIndicator={true}
          showPagination={false}
          curIndex={curIndex}
          data={data}
          className="w-[98vw] md:w-[75vw]"
        />
      </div>
    </div>
  );
};

export default AssetsDetailModal;
