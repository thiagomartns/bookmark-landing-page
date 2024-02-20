import React from "react";
import { Input } from "@/components/ui/input";
import { ActionButton } from "../action-button";

export const CallToAction = () => {
  return (
    <section className="flex items-center justify-center flex-col p-10  gap-10 bg-custom-purple text-white">
      <h3 className="tracking-widest">35,000+ ALREADY JOINED</h3>
      <h1 className="text-3xl font-bold text-center">
        Stay up-to-date with what we’re doing
      </h1>
      <form className="flex flex-col w-full items-center justify-center gap-4 px-10">
        <Input type="email" placeholder="Enter your email address" />
        <ActionButton className="w-full " label="Contact us" color="red" />
      </form>
    </section>
  );
};
