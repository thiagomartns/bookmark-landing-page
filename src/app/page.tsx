"use client";

import HeaderLogo from "@/assets/images/logo-bookmark.svg";
import HeroMainImg from "@/assets/images/illustration-hero.svg";
import LogoChrome from "@/assets/images/logo-chrome.svg";
import { Menu } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CustomTabs } from "@/components/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div>
      <div className="py-10 px-6">
        <nav className="flex justify-between items-center">
          <Image src={HeaderLogo} alt="Bookmark Logo" />
          <Menu size={30} className="text-very-dark-blue" />
        </nav>
      </div>
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
      <section className="mt-5 flex items-center justify-center flex-col p-10 gap-10">
        <h1 className="text-3xl capitalize text-very-dark-blue font-bold text-center">
          Features
        </h1>
        <p className="text-grayish-blue text-center">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
        <CustomTabs />
      </section>
      <section className="mt-5 flex items-center justify-center flex-col p-10 gap-10">
        <h1 className="text-3xl capitalize text-very-dark-blue font-bold text-center">
          Download the extension
        </h1>
        <p className="text-grayish-blue text-center">
          Download the extension We’ve got more browsers in the pipeline. Please
          do let us know if you’ve got a favourite you’d like us to prioritize.
        </p>
      </section>
      <section className="flex items-center justify-center flex-col p-10 gap-10">
        <Card className="p-10 flex flex-col items-center justify-center gap-5 shadow-lg">
          <CardContent className="flex flex-col items-center justify-center gap-5">
            <Image src={LogoChrome} alt="Google Chrome Logo" />
            <h2 className="text-2xl capitalize text-very-dark-blue font-bold text-center">
              Add to chrome
            </h2>
            <p className="text-grayish-blue text-center">Minimum version 62</p>
          </CardContent>
          <CardFooter>
            <Button
              className="bg-custom-purple hover:bg-custom-purple"
              size="lg"
            >
              {" "}
              Add & Install Extension
            </Button>
          </CardFooter>
        </Card>
      </section>
      <section className="flex items-center justify-center flex-col p-10 gap-10">
        <h1 className="text-3xl capitalize text-very-dark-blue font-bold text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-grayish-blue text-center">
          Frequently Asked Questions Here are some of our FAQs. If you have any
          other questions you’d like answered please feel free to email us.
        </p>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Bookmark?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam autem odio vel eius dolor distinctio possimus tempora
              ex excepturi rem maxime error ea dolores, placeat fugiat eligendi
              architecto iste!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How can I request a new browser?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam autem odio vel eius dolor distinctio possimus tempora
              ex excepturi rem maxime error ea dolores, placeat fugiat eligendi
              architecto iste!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Button
          className="bg-custom-purple hover:bg-custom-purple w-30 m-auto"
          size="lg"
        >
          {" "}
          More Info
        </Button>
      </section>
      <section className="flex items-center justify-center flex-col p-10 gap-10 bg-custom-purple text-white">
        <h3 className="tracking-widest">35,000+ ALREADY JOINED</h3>
        <h1 className="text-3xl font-bold text-center">
          Stay up-to-date with what we’re doing
        </h1>
        <form className="flex flex-col w-full items-center justify-center gap-4 px-10">
          <Input type="email" placeholder="Enter your email address" />
          <Button className="bg-soft-red hover:bg-soft-red w-full" size="lg">
            Contact Us
          </Button>
        </form>
      </section>
    </div>
  );
}
