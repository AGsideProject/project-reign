"use client";
import Image from "next/image";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-white z-50 gap-0">
      <div className="w-[150px] h-[60px] sm:w-[250px] sm:h-[85px] sm:mb-2 mb-2 relative">
        <Image
          src="/Reign-03-03.svg"
          alt="Placeholder Logo loading"
          fill
          priority
        />
      </div>
      <div className="loaderv2 animate-pulse hidden sm:block" />
      <div className="loaderv3 animate-pulse sm:hidden block" />
    </div>
  );
};

export default LoadingSpinner;
