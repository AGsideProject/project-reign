"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BookingModal from "./modals";

const Header = () => {
  const router = useRouter();

  // Initialize State
  const [gender, setGender] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);
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
      <div>
        <div className="flex justify-between items-center md:py-6 py-4 px-7">
          <div className="hidden items-center gap-8 md:flex">
            <h2
              className={`text-sm font-medium  cursor-pointer hover:text-[#FF8C00] transition-colors duration-300 ${
                gender === "female" ? "text-[#FF8C00]" : "text-black"
              }`}
              onClick={() => handleGander("female")}
            >
              FEMALE
            </h2>
            <h2
              className={`text-sm font-medium  cursor-pointer hover:text-[#FF8C00] transition-colors duration-300 ${
                gender === "male" ? "text-[#FF8C00]" : "text-black"
              }`}
              onClick={() => handleGander("male")}
            >
              MALE
            </h2>
          </div>

          <img
            src="/nextV2.svg"
            alt="Next.js logo"
            className="md:h-8 md:w-36 w-28 h-6"
            onClick={() => router.push("/")}
          />

          {/* START - Dropdown */}
          <div className="relative inline-block text-left md:hidden">
            <div>
              <button
                className="inline-flex w-24 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold hover:bg-gray-50"
                onClick={() => setOpenDropdown(!openDropdown)}
              >
                {gender === "female" ? "FEMALE" : "MALE"}
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
                  <p
                    className="block px-4 py-2 text-sm text-gray-700"
                    onClick={() => {
                      handleGander("male");
                      setOpenDropdown(false);
                    }}
                  >
                    MALE
                  </p>
                  <p
                    className="block px-4 py-2 text-sm text-gray-700"
                    onClick={() => {
                      handleGander("female");
                      setOpenDropdown(false);
                    }}
                  >
                    FEMALE
                  </p>
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
      <BookingModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};

export default Header;
