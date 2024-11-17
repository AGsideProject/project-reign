import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <div className="border-t border-t-[#8b8b8b] border-solid max-w-[1440px] mx-auto">
      {/* White Section */}
      <div className="p-10 grid grid-cols-4 gap-8 text-gray-700 text-sm">
        <div>
          <h2 className="font-semibold text-lg mb-4">REIGN MODEL AGENCY</h2>
          <p>
            Lorem ipsum is typically a corrupted version of De finibus bonorum
            et malorum, a 1st-century BC text by the Roman statesman and
            philosopher Cicero, with words altered, added, and removed to make
            it nonsensical and improper Latin. The first two words themselves
            are a truncation of dolorem <strong>Nonsensical</strong> aipsum
            bonorum. <strong>Improper</strong>,<strong>stylists</strong>,{" "}
            <strong>hair & makeup artists</strong> Lorem ipsum is typically a
            corrupted.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Corporate</h3>
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
        </div>

        <div>
          <h3 className="font-semibold mb-4">Our Office</h3>
          <p>
            Kawasan Sawangan,
            <br />
            Jl. Raya Nusa Dua Selatan, Benoa,
            <br /> Kec. Kuta Sel., Kabupaten Badung, <br /> Bali 80362 Indonesia
          </p>
          <a href="#" className="text-blue-600 hover:underline">
            (map)
          </a>
          <p className="mt-4">
            <strong>Phone:</strong>
            <br />
            +62(0)81353519946
          </p>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
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

      {/* Black Section */}
      <div className="bg-black text-white text-center py-5">
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
    </div>
  );
};

export default Footer;