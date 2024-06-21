import Image from "next/image";
import React from "react";

const Video = () => {
  return (
    <div className="flex container flex-col justify-center md:flex-row items-center lg:flex">
      <div className="flex  object-cover">
        <Image
          src={"/hand.avif"}
          alt="hello"
          width={490}
          height={463}
          className="object-cover   rounded-full"
        />
      </div>
      <div>
        <section className="w-full flex-center flex-col mt-6 ">
          <h1 className="head_text text-center  dark:text-white text-black">
            <span className="dark:text-white text-center text-black">
              Astrology & Idea
            </span>
            <br className="max-md:hidden" />
            <span className="usespan ml-2 text-center">
              Intuitive Tarot Reading Workshop
            </span>
          </h1>
        </section>
      </div>
    </div>
  );
};

export default Video;
