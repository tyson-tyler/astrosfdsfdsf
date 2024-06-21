import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Banner = () => {
  return (
    <>
      <div className="w-full rounded-lg overflow-hidden flex flex-col mt-14 mb-6">
        <section className="w-full flex-center flex-col mt-6 mb-[30px] h-[500px] bg-no-repeat bg-contain bg-[url('https://cdn.pixabay.com/photo/2019/10/26/10/39/tarot-4579147_640.jpg')]">
          {/* 
          <p className="desc text-center text-gray-600 mt-5 px-3">
            Join us in this thorough 2-days free online workshop to dive deep
            into the ageless knowledge of Tarot and learn the secrets of the
            cards.
          </p> */}
          {/* <div className="flex justify-center items-center mt-5 gap-3 mb-20">
            <Link href={"/"}>
              <Button className="p-5 justify-center flex" size={"lg"}>
                Try it Now
              </Button>
            </Link>
            <a href={"https://inter-main.vercel.app"}>
              <Button
                className="p-5 justify-center flex"
                size={"lg"}
                variant={"ghost"}
              >
                Community
              </Button>
            </a>
          </div> */}
        </section>
        <h1 className="head_text text-center  dark:text-white text-black">
          <span className="dark:text-white text-center text-black lg:text-[100px]  md:text-4xl sm:text-2xl ">
            Tarot
          </span>
          <br className="max-md:hidden" />
          <h1 className="w-full p-3 text-center head_text usespan mb-10">
            Card Reading Free Workshop
          </h1>
        </h1>
      </div>
    </>
  );
};

export default Banner;
