import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import HeroMainImg from "@/assets/images/illustration-hero.svg";

export const HeroComponent = () => {
  return (
    <>
      <section className="flex justify-center items-center">
        <Image src={HeroMainImg} alt="Hero main image" />
      </section>
      <section className="mt-5 flex items-center justify-center flex-col p-10 gap-10">
        <h1 className="text-3xl capitalize text-very-dark-blue font-bold text-center">
          a simple bookmark manager
        </h1>
        <p className="text-grayish-blue text-center">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex gap-5">
          <Button className="bg-custom-purple hover:bg-custom-purple" size="lg">
            Get it on Chrome
          </Button>
          <Button
            className="bg-custom-grey-lighter text-very-dark-blue hover:bg-custom-grey-lighter shadow-lg"
            size="lg"
          >
            Get it on Firefox
          </Button>
        </div>
      </section>
    </>
  );
};