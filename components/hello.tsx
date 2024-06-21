import React from "react";
import { CardWithForm } from "./card";
import Pag from "./pag";

const Hello = () => {
  return (
    <div className="relative justify-around items-center container rounded-full flex flex-col md:flex-row h-full w-full">
      <div className="flex-col flex">
        <video
          autoPlay
          controls
          muted
          loop
          className="w-[300px] h-[600px] md:w-[400px] md:h-[600px] left-0 z-[1] object-cover"
        >
          <source src="/121.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Hello;
