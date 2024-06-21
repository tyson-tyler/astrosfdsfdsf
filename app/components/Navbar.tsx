import React from "react";

import { DialogDemo } from "@/components/hleloo";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 z-[50] h-34 flex  items-center justify-between px-2 dark:bg-gray-900 dark:text-white shadow-md text-black">
      <div>
        <h1 className="text-bold m-4 text-[10px] font-bold sm:text-sm md:text-sm lg:text-lg">
          Tarot with Raman
        </h1>
      </div>
      {/* <div>
        <ul className="justify-around mx-2 items-center hidden md:flex">
          <li className="mx-2 cursor-pointer">Home</li>
          <li className="mx-2 cursor-pointer">About</li>
          <li className="mx-2 cursor-pointer">WhatsApp</li>
          <li className="mx-2 cursor-pointer">Pricing</li>
          <li className="mx-2 cursor-pointer">Contact</li>
        </ul>
      </div> */}
      <DialogDemo />
    </div>
  );
};

export default Navbar;
