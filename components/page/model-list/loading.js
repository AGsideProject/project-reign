"use client";
import React from "react";

const LoadingSkeleton = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 p-5 md:p-10 gap-5">
      {/* Repeat skeleton cards for each grid item */}
      {[...Array(8)].map((_, index) => (
        <div key={index} className="overflow-hidden cursor-pointer group">
          {/* IMAGE CONTAINER SKELETON */}
          <div className="relative aspect-[4/5] bg-gray-200 overflow-hidden animate-pulse">
            {/* Placeholder for image */}
            <div className="absolute inset-0 bg-gray-300"></div>
          </div>

          {/* MODEL NAME SKELETON */}
          {/* <div className="flex items-center justify-center my-5">
            <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse"></div>
          </div> */}
        </div>
      ))}
    </section>
  );
};

export default LoadingSkeleton;
