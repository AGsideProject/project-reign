"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import BookingModal from "components/page/form-book";
import Link from "next/link";

const Home = () => {
  // Initialize State
  const [openModal, setOpenModal] = useState(false);
  const [homeImg, setHomeImg] = useState("/image/cover-home.JPEG");
  const fetchLandingPageImg = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/assets/landingpage`
      );
      const result = await response.json();

      setHomeImg(result.data.img_url);
      return result;
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchLandingPageImg();
  }, []);
  return (
    <>
      <div
        className="w-screen h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: `url('${homeImg}')`,
        }}
      >
        <div className="flex justify-between items-center py-8 px-6">
          <div className="flex items-center  md:gap-8 gap-4">
            {["female", "male"].map((type, index) => (
              <Link
                href={`/models/${type}`}
                key={`${type}-${index}`}
                onClick={() => localStorage.setItem("gender", type)}
              >
                <h2
                  key={`model-${type}-${index}`}
                  className="uppercase text-sm font-medium cursor-pointer hover:text-black transition-colors duration-300 text-white"
                >
                  {type}
                </h2>
              </Link>
            ))}
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
            src="/next.svg"
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
