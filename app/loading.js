"use client";
const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-white z-50 gap-0">
      <div className="w-[150px] h-[90px] sm:w-[250px] sm:h-[85px] sm:mb-1 mb-2 relative">
        <img
          src="/image/reignLogo.jpg"
          alt="Placeholder Logo loading"
          className="sm:w-full sm:h-full sm:object-cover object-contain"
        />
      </div>
      <div className="loaderv2 animate-pulse hidden sm:block" />
      <div className="loaderv3 animate-pulse sm:hidden block" />
    </div>
  );
};

export default LoadingSpinner;
