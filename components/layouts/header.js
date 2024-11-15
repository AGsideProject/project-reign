"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const router = useRouter();

  // Initialize State
  const [gender, setGender] = useState("");

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
    <div>
      <div className="flex justify-between items-center py-6 px-7">
        <div className="flex items-center gap-8">
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
        <Image
          src="/nextV2.svg"
          alt="Next.js logo"
          width={140}
          height={32}
          onClick={() => router.push("/")}
          style={{ cursor: "pointer" }}
          priority
        />
        <h2 className="text-sm font-medium cursor-pointer hover:text-[#FF8C00] transition-colors duration-300">
          BOOK A SHOOT
        </h2>
      </div>

      {/* Line */}
      <div className="border-t-[1.5px] border-t-[#e2e2e2] border-solid" />
    </div>
  );
};

export default Header;
