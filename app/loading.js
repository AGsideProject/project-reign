"use client";
const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-white z-50">
      {/* Spinner Icon */}
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute inset-0 rounded-full border-4 border-black border-t-transparent animate-spin"></div>
        <div className="absolute inset-4 rounded-full border-4 border-black border-b-transparent animate-spin animate-reverse"></div>
      </div>

      {/* Animated Text */}
      <div className="text-black text-2xl font-bold animate-pulse">
        Loading<span className="animate-bounce">.</span>
        <span className="animate-bounce delay-100">.</span>
        <span className="animate-bounce delay-200">.</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
