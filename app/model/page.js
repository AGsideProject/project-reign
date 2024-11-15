"use client";
import { useEffect, useState } from "react";

export default function model() {
  const [domLoaded, setDomLoaded] = useState(false);
  const [images, setImages] = useState([]);
  const [positions, setPositions] = useState([]);

  async function fetchImage() {
    try {
      const response = await fetch(
        "https://dummyjson.com/image/400x200/FFFFFF"
      );
      const blob = await response.blob();
      console.log("Fetched image blob:", blob);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  }

  //! paralax
  // State to store mouse position for each image

  // Function to handle mouse movement for a specific image
  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 40; // Adjust multiplier for stronger effect
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 40; // Adjust multiplier for stronger effect

    // Update the position for the specific image using its index
    setPositions((prevPositions) => {
      const newPositions = [...prevPositions];
      newPositions[index] = { x, y };
      return newPositions;
    });
  };

  // Reset position when hover ends
  const handleMouseLeave = (index) => {
    setPositions((prevPositions) => {
      const newPositions = [...prevPositions];
      newPositions[index] = { x: 0, y: 0 }; // Reset the position for the specific image
      return newPositions;
    });
  };
  //! paralax

  useEffect(() => {
    setDomLoaded(true);
    setImages([
      {
        url: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        url: "https://images.unsplash.com/photo-1498982261566-1c28c9cf4c02?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        url: "https://images.unsplash.com/photo-1467632499275-7a693a761056?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        url: "https://images.unsplash.com/photo-1515511624704-b8916dcc30ea?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        url: "https://images.unsplash.com/photo-1543096222-72de739f7917?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        url: "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        url: "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        url: "https://images.unsplash.com/photo-1541519481457-763224276691?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        url: "https://images.unsplash.com/photo-1465145498025-928c7a71cab9?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        url: "https://images.unsplash.com/photo-1536180931879-fd2d652efddc?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        url: "https://images.unsplash.com/photo-1594843310428-7eb6729555e9?q=80&w=2839&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        url: "https://images.unsplash.com/photo-1729116283190-518c3b8c1d1f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        url: "https://images.unsplash.com/photo-1701351382146-035bd68cdb6d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        url: "https://images.unsplash.com/photo-1639676994754-d3488a9e491a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ]);
    setPositions(new Array(14).fill({ x: 0, y: 0 }));
  }, []);

  // Avoid rendering if not loaded on client
  if (!domLoaded) return null;

  return (
    <>
      <div className="flex justify-center flex-wrap gap-10 lg:gap-0 my-10">
        {images.map((item, index) => {
          return (
            //! standard
            <div className="w-3/4 md:w-72 lg:w-72 lg:mx-5 lg:mb-10" key={index}>
              <div className="w-full h-[75vh] lg:h-96  bg-blue-500 overflow-hidden inline-block hover:shadow-custom-lg transition-shadow	duration-300 shadow-black">
                <img
                  className="w-full h-full object-cover hover:scale-125 shadow-lg transition-transform duration-300 ease-in-out  "
                  src={item.url}
                  alt="model1"
                />
              </div>
              <div className="text-center mt-2">
                <span className="text-lg ">model name</span>
              </div>
            </div>
            //! standard

            //! parallax
            // <div
            //   className="w-3/4 h-[75vh] bg-blue-500 overflow-hidden inline-block hover:shadow-custom-lg transition-shadow duration-300 shadow-black relative"
            //   onMouseMove={(e) => handleMouseMove(e, index)} // Pass index to handleMouseMove
            //   onMouseLeave={() => handleMouseLeave(index)} // Pass index to handleMouseLeave
            //   key={index}
            // >
            //   <img
            //     className="w-full h-full object-cover shadow-lg transition-transform duration-300 ease-in-out"
            //     src={item.url}
            //     alt={`model-${index}`}
            //     style={{
            //       transform: `translate(${positions[index].x}px, ${positions[index].y}px) scale(1.2)`, // Apply zoom (scale) and parallax (translate)
            //     }}
            //   />
            //   <div className="text-center mt-2">
            //     <span className="text-lg text-rose-600 z-50">model name</span>
            //   </div>
            // </div>
            //! parallax
          );
        })}
      </div>
    </>
  );
}
