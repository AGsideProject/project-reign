"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, Youtube } from "lucide-react";
import BookingModal from "components/page/form-book";

import localFont from "next/font/local";

const butlerMedium = localFont({
  src: "../../public/fonts/Butler_Medium.otf",
})

const Footer = () => {
  const pathname = usePathname();
  const theRef = useRef(null);
  const waURL = `https://api.whatsapp.com/send/?phone=${process.env.NEXT_PUBLIC_API_CONTACT_NUMBER}&text=${process.env.NEXT_PUBLIC_API_MESSAGE_TEMPLETE}&type=phone_number&app_absent=0`;
  const modelName = pathname.split("model/")[1] || "";
  // Initialize State
  const [openModal, setOpenModal] = useState(false);
  const [isFix, setIsFixed] = useState(true);

  const handleWaMe = () => {
    window.open(waURL, "_blank");
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsFixed(!entry.isIntersecting);
    });
    observer.observe(theRef.current);
  }, []);

  return (
    <>
      <div className="border-t border-t-[#8b8b8b] border-solid relative">
        <div className="max-w-[1440px] mx-auto">
          {/* White Section */}
          <div className="p-10 grid md:grid-cols-4 gap-8 text-gray-700 text-sm">
            <div className="md:col-span-2">
              <h2 className={`font-semibold text-lg mb-4 ${butlerMedium.className}`}>REIGN MODELS MANAGEMENT</h2>
              <p>
                Welcome to Reign, we pride ourselves on our commitment to nurturing talent and we believe that beauty comes in all forms. Founded in 2025, our agency is dedicated to representing diverse, talented models across the globe. We specialize in connecting individuals with unique looks and inspiring stories to brands that appreciate and celebrate authenticity by collaborating with photographers, cinematographers, designers, and creative directors to create stunning campaigns.
              </p>
              <p className="mt-4">
                Our mission is to empower models to embrace their individuality while paving the way for the next generation of talent and Reign Model Management is here to bring your vision to life. Let’s collaborate!
              </p>
              <div className="mt-4">
                <a href="#">
                  <Instagram />
                </a>
              </div>
            </div>
            <div></div>
            {/* <div>
              <h3 className="font-semibold mb-4 text-lg md:mt-0 mt-4">
                Social
              </h3>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Be a model
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a href="#">
                  <Facebook />
                </a>
                <a href="#">
                  <Instagram />
                </a>
                <a href="#">
                  <Youtube />
                </a>
              </div>
            </div> */}

            {/* <div>
              <h3 className="font-semibold mb-4 text-lg md:mt-0 mt-4">
                Our Office
              </h3>
              <p>
                Kawasan Sawangan,
                <br />
                Jl. Raya Nusa Dua Selatan, Benoa,
                <br /> Kec. Kuta Sel., Kabupaten Badung, <br /> Bali 80362
                Indonesia
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                (map)
              </a>
              <p className="mt-4">
                <strong>Phone:</strong>
                <br />
                +62(0)81353519946
              </p>
            </div> */}

            {/* Contact Form */}
            <div>
              <h3 className={`font-semibold mb-4 text-lg md:mt-0 mt-4 ${butlerMedium.className}`}>
                Contact Us
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="border p-2 w-full"
                  />
                  <input
                    type="email"
                    placeholder="Your e-mail"
                    className="border p-2 w-full"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="border p-2 w-full"
                />
                <textarea
                  placeholder="Message (include the URL of your portfolio if applying)"
                  className="border p-2 w-full h-24"
                ></textarea>
                <button type="submit" className="bg-black text-white px-4 py-2">
                  SEND A MESSAGE
                </button>
              </form>
            </div>
          </div>

          {/* Floating Wa */}
          <button
            onClick={handleWaMe}
            className="fixed z-40 md:bottom-8 bottom-20 right-6 flex justify-center items-center h-[60px] w-[60px] rounded-full bg-[#4CD140] transition-all hover:shadow-lg"
          >
            <img
              alt="whatsapp"
              src="/whatsapp.svg"
              className="w-[27px] h-[27px]"
            />
          </button>

          {/* Floating Button */}
          <button
            className={`md:hidden fixed z-40 bottom-6 right-6 font-bold py-3 px-6 shadow-lg text-sm transition-transform transform hover:scale-110 ${isFix ? "bg-black text-white" : "bg-white text-black"
              }`}
            onClick={() => setOpenModal(true)}
          >
            BOOK A SHOOT
          </button>
        </div>

        {/* Black Section */}
        <div ref={theRef} className="bg-black text-white text-center py-5">
          <p>
            Reign Model Agency Lorem ipsum is typically a corrupted version of{" "}
            <a href="#" className="underline">
              Youtube
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Amazone Group
            </a>
            , a Bali-based business development group.
          </p>
          <p>Copyright © 2024. All rights reserved</p>
        </div>

        {/* Modals Book */}
        <BookingModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          modelName={modelName}
        />
      </div >
    </>
  );
};

export default Footer;
