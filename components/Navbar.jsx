import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex absolute top-0 w-full z-0">
      <div className="px-4 py-2">
        <ul className="flex justify-between items-center mb-[10px]">
          <li className="text-[25px] tracking-wide font-bold text-white hover:text-gray-300/80 transition-all duration-500 ease-in-out">
            <Link href="/">AdameK</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
