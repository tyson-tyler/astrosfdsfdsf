import Image from "next/image";
import React from "react";

const Seven = () => {
  return (
    <div className="flex container mt-7 lg:justify-around flex-col justify-center md:flex-row-reverse items-center lg:flex">
      <div className="flex  object-cover">
        <Image
          src={"/4.jpg"}
          alt="hello"
          width={490}
          height={463}
          className="object-cover w-[300px] h-[300px] md:w-[400px] md:h-[400px]  rounded-full"
        />
      </div>
      <div>
        <section className="w-full flex-center flex-col mt-6 ">
          <h1 className="head_text text-center  dark:text-white text-black">
            <span className="dark:text-white text-center text-black">
              Tarot Reading
            </span>
            <br className="max-md:hidden" />
            <span className="usespan ml-2 text-center">With Raman</span>
          </h1>
        </section>
      </div>
    </div>
  );
};

export default Seven;
