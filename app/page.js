"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import BookingModal from "components/modals";

const Home = () => {
  const router = useRouter();

  // Initialize State
  const [gender, setGender] = useState("");
  const [openModal, setOpenModal] = useState(false);

  // Handle gender
  const handleGander = (gen) => {
    if (gender === gen) {
      localStorage.removeItem("gender");
      setGender("");
    } else {
      localStorage.setItem("gender", gen);
      setGender(gen);
      router.push("/model");
    }
  };

  useEffect(() => {
    const storedValue = localStorage.getItem("gender");
    if (storedValue) {
      setGender(storedValue);
    }
  }, []);

  return (
    <>
      <div
        className="w-screen h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/image/home.JPEG')",
        }}
      >
        <div className="flex justify-between items-center py-8 px-6">
          <div className="flex items-center  md:gap-8 gap-4">
            <h2
              className={`text-sm font-medium  cursor-pointer hover:text-black transition-colors duration-300 ${gender === "female" ? "text-black" : "text-white"
                }`}
              onClick={() => handleGander("female")}
            >
              FEMALE
            </h2>
            <h2
              className={`text-sm font-medium  cursor-pointer hover:text-black transition-colors duration-300 ${gender === "male" ? "text-black" : "text-white"
                }`}
              onClick={() => handleGander("male")}
            >
              MALE
            </h2>
          </div>
          <h2
            onClick={() => setOpenModal(true)}
            className="text-sm font-medium text-white cursor-pointer hover:text-[#e01b1b] transition-colors duration-500"
          >
            BOOK A SHOOT
          </h2>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-fade animate-once animate-duration-[5500ms] animate-ease-in-out">
          <Image
            src="/reign_white.svg"
            alt="Next.js logo"
            width={460}
            height={32}
            priority
          />
        </div>
      </div>

      {/* Modals Book */}
      <BookingModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};

export default Home;
