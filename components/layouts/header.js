import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-6 px-6">
        <div className="flex items-center gap-8">
          <h2 className="text-sm font-medium cursor-pointer hover:text-[#c56502] transition-colors duration-300">
            FEMALE
          </h2>
          <h2 className="text-sm font-medium cursor-pointer hover:text-[#c56502] transition-colors duration-300">
            MALE
          </h2>
        </div>
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={160}
          height={32}
          priority
        />
        <h2 className="text-sm font-medium">BOOK A SHOOT</h2>
      </div>

      {/* Line */}
      <div className="border-t-[1.5px] border-t-[#e2e2e2] border-solid" />
    </div>
  );
};

export default Header;
