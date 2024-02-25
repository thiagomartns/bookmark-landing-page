import Image from "next/image";
import React from "react";
import HeroMainImg from "@/assets/images/illustration-hero.svg";
import { Button } from "../ui/button";

export const HeroComponent = () => {
  return (
    <section className="p-6 flex flex-col items-center m-auto xl:max-w-screen-xl xl:flex-row-reverse xl:pr-0">
      <Image
        src={HeroMainImg}
        alt="Hero main image"
        className="z-10 relative"
      />
      <div className="xl:ellipse-custom right-[-15%] bottom-[20%]"></div>
      <div className="flex items-center justify-center flex-col gap-10 z-10 lg:items-start">
        <h1 className="text-3xl capitalize text-very-dark-blue font-bold text-center lg:text-5xl lg:text-left">
          a simple bookmark manager
        </h1>
        <p className="text-grayish-blue text-center lg:w-[50ch] lg:text-left lg:text-lg">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex gap-5">
          <Button className="bg-custom-purple border-2 border-custom-purple shadow-2xl hover:bg-transparent hover:text-custom-purple lg:">
            Get in on Chrome
          </Button>
          <Button className="bg-white border-2 text-grayish-blue border-white shadow-2xl hover:border-grayish-blue hover:bg-transparent ">
            Get in on Firefox
          </Button>
        </div>
      </div>
    </section>
  );
};
