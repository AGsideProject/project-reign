"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, Youtube } from "lucide-react";
import BookingModal from "components/page/form-book";

import localFont from "next/font/local";

const butlerMedium = localFont({
  src: "../../public/fonts/Butler_Medium.otf",
});

const Footer = () => {
  const pathname = usePathname();
  const theRef = useRef(null);
  const waURL = `https://api.whatsapp.com/send/?phone=${process.env.NEXT_PUBLIC_API_CONTACT_NUMBER}&text=${process.env.NEXT_PUBLIC_API_MESSAGE_TEMPLETE}&type=phone_number&app_absent=0`;
  const modelName = pathname.split("model/")[1] || "";
  const initform = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  // Initialize State
  const [openModal, setOpenModal] = useState(false);
  const [isFix, setIsFixed] = useState(true);
  const [error, setError] = useState({});
  const [formData, setFormData] = useState(initform);

  const handleWaMe = () => {
    window.open(waURL, "_blank");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle cc email
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `Name: ${formData.name}\nEmail: ${formData.email}`;
    window.location.href = `mailto:${
      process.env.NEXT_PUBLIC_API_EMAIL_RECIPIENT || "reignmodelsmgt@gmail.com"
    }?subject=${formData.subject}&body=${body}\n${formData.message}`;
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
              <h2
                className={`font-semibold text-lg mb-4 ${butlerMedium.className}`}
              >
                REIGN MODELS MANAGEMENT
              </h2>
              <p>
                Welcome to Reign, we pride ourselves on our commitment to
                nurturing talent and we believe that beauty comes in all forms.
                Founded in 2025, our agency is dedicated to representing
                diverse, talented models across the globe. We specialize in
                connecting individuals with unique looks and inspiring stories
                to brands that appreciate and celebrate authenticity by
                collaborating with photographers, cinematographers, designers,
                and creative directors to create stunning campaigns.
              </p>
              <p className="mt-4">
                Our mission is to empower models to embrace their individuality
                while paving the way for the next generation of talent and Reign
                Model Management is here to bring your vision to life. Let’s
                collaborate!
              </p>
              <div className="mt-4">
                <a
                  // href="https://www.instagram.com/reignmodelsmgt"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://www.instagram.com/reignmodelsmgt",
                      "_blank"
                    );
                  }}
                >
                  <Instagram />
                </a>
              </div>
            </div>
            <div className="sm:hidden lg:grid"></div>
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
            <div className="sm:col-span-2 lg:col-span-1">
              <h3
                className={`font-semibold mb-4 text-lg md:mt-0 mt-4 ${butlerMedium.className}`}
              >
                Contact Us
              </h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 focus:outline-none focus:border-black transition-colors duration-300"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your e-mail"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 focus:outline-none focus:border-black transition-colors duration-300"
                    required
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 focus:outline-none focus:border-black transition-colors duration-300"
                  required
                />
                <textarea
                  placeholder="Message (include the URL of your portfolio if applying)"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 focus:outline-none focus:border-black transition-colors duration-300 h-24"
                  required
                />
                <button type="submit" className="bg-black text-white px-4 py-2">
                  SEND A MESSAGE
                </button>
              </form>
            </div>
          </div>

          {/* Floating Wa */}
          <button
            onClick={handleWaMe}
            className="fixed z-40 md:bottom-8 bottom-20 right-6 flex justify-center items-center h-[60px] w-[60px] rounded-full bg-[#0f110f] transition-all hover:shadow-lg"
          >
            <img
              alt="whatsapp"
              src="/whatsapp.svg"
              className="w-[27px] h-[27px]"
            />
          </button>

          {/* Floating Button */}
          <button
            className={`md:hidden fixed z-40 bottom-6 right-6 font-bold py-3 px-6 shadow-lg text-sm transition-transform transform hover:scale-110 ${
              isFix ? "bg-black text-white" : "bg-white text-black"
            }`}
            onClick={() => setOpenModal(true)}
          >
            BOOK A SHOOT
          </button>
        </div>

        {/* Black Section */}
        <div ref={theRef} className="bg-black">
          <p className="text-white text-sm py-3 text-center">
            Copyright © {new Date().getFullYear()} REIGN MODELS MANAGEMENT. All
            right reserved
          </p>
        </div>

        {/* Modals Book */}
        <BookingModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          modelName={modelName}
        />
      </div>
    </>
  );
};

export default Footer;
