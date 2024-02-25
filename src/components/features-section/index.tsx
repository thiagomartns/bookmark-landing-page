import React from "react";
import { CustomTabs } from "./components/tabs";

export const FeaturesSection = () => {
  return (
    <section className="mt-5 flex items-center m-auto justify-center flex-col p-10 gap-10 lg:max-w-screen-xl lg:py-10 ">
      <h1 className="text-3xl capitalize text-very-dark-blue font-bold text-center lg:text-4xl">
        Features
      </h1>
      <p className="text-grayish-blue text-center lg:w-[50ch]">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <CustomTabs />
    </section>
  );
};
