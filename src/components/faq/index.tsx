import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";

export const FAQSection = () => {
  return (
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            autem odio vel eius dolor distinctio possimus tempora ex excepturi
            rem maxime error ea dolores, placeat fugiat eligendi architecto
            iste!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How can I request a new browser?</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            autem odio vel eius dolor distinctio possimus tempora ex excepturi
            rem maxime error ea dolores, placeat fugiat eligendi architecto
            iste!
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
  );
};
