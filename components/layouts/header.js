"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BookingModal from "components/page/form-book";
import Image from "next/image";
import localFont from "next/font/local";

const butlerLightStencil = localFont({
  src: "../../public/fonts/Butler_Light_Stencil.otf",
});

const resothoExtralight = localFont({
  src: "../../public/fonts/ResothoExtralight-9YXJK.otf",
});

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [gender, setGender] = useState("");
  const modelName = pathname.split("model/")[1] || "";

  // Initialize State
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const storedGender = localStorage.getItem("gender") || "";
    console.log(storedGender, "<<storedGender");

    setGender(pathname.split("models/")[1] || storedGender);
  }, [pathname]);

  return (
    <>
      <div>
        <div className={`flex justify-between items-center md:py-5 py-4 px-7 ${resothoExtralight.className}`}>
          <div className={`hidden items-center gap-8 md:flex`}>
            {["female", "male"].map((el) => (
              <h2
                key={`item-head-${el}`}
                className={`uppercase text-sm font-medium  cursor-pointer hover:text-[#FF8C00] transition-colors duration-300 ${gender === el ? "text-[#FF8C00]" : "text-black"
                  }`}
                onClick={() => {
                  router.push(`/models/${el}`);
                  localStorage.setItem("gender", el);
                }}
              >
                {el}
              </h2>
            ))}
          </div>

          {/* <img
            src="/Reign-03-03.svg"
            alt="Reign logo"
            className="md:h-36 md:w-52 w-28 h-6 cursor-pointer"
            onClick={() => router.push("/")}
          /> */}
          <Image
            src="/Reign-03-03.svg"
            alt="Next.js logo"
            width={80}
            height={50}
            onClick={() => router.push("/")}
            priority
          />

          {/* START - Dropdown */}
          <div className="relative inline-block text-left md:hidden">
            <div>
              <button
                className="inline-flex w-24 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold hover:bg-gray-50 uppercase"
                onClick={() => setOpenDropdown(!openDropdown)}
              >
                {gender}
                <svg
                  className="-mr-1 size-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {openDropdown && (
              <div className="absolute right-0 z-10 mt-2 w-24 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div className="py-1" role="none">
                  {["female", "male"].map((el) => (
                    <p
                      key={`item-head-${el}`}
                      className="uppercase block px-4 py-2 text-sm text-gray-700"
                      onClick={() => {
                        router.push(`/models/${el}`);
                        localStorage.setItem("gender", el);
                        setOpenDropdown(false);
                      }}
                    >
                      {el}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* END - Dropdown */}

          <h2
            className="hidden md:inline-block text-sm font-medium cursor-pointer hover:text-[#FF8C00] transition-colors duration-300"
            onClick={() => setOpenModal(true)}
          >
            BOOK A SHOOT
          </h2>
        </div>

        {/* Line */}
        <div className="border-t-[1.5px] border-t-[#e2e2e2] border-solid" />
      </div>

      {/* Modals Book */}
      <BookingModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        modelName={modelName}
      />
    </>
  );
};

export default Header;
