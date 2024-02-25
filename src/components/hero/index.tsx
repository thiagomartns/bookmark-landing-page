import Image from "next/image";
import React from "react";
import HeroMainImg from "@/assets/images/illustration-hero.svg";
import { ActionButton } from "../action-button";

export const HeroComponent = () => {
  return (
    <section className="p-6 flex flex-col m-auto lg:max-w-screen-xl lg:flex-row-reverse lg:pr-0">
      <Image
        src={HeroMainImg}
        alt="Hero main image"
        className="z-10 relative"
      />
      <div className="lg:ellipse-custom right-[-15%] bottom-[20%]     "></div>
      <div className="flex items-center justify-center flex-col gap-10 z-10 lg:items-start">
        <h1 className="text-3xl capitalize text-very-dark-blue font-bold text-center lg:text-5xl lg:text-left">
          a simple bookmark manager
        </h1>
        <p className="text-grayish-blue text-center lg:w-[50ch] lg:text-left">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex gap-5">
          <ActionButton size="xl" label="Get it on Chrome" />
          <ActionButton size="xl" color="white" label="Get it on Firefox" />
        </div>
      </div>
    </section>
  );
};
