import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";

const questionList = [
  {
    id: 1,
    question: "What is Bookmark?",
  },
  {
    id: 2,
    question: "How can I request?",
  },
  {
    id: 3,
    question: "Is there a mobile app?",
  },
  {
    id: 4,
    question: "What about other Chromium browsers?",
  },
];

export const FAQSection = () => {
  return (
    <section className="flex items-center justify-center flex-col p-10 gap-10 m-auto lg:my-5 lg: max-w-screen-xl">
      <h1 className="text-3xl capitalize text-very-dark-blue font-bold text-center lg:text-4xl">
        Frequently Asked Questions
      </h1>
      <p className="text-grayish-blue text-center lg:w-[50ch]">
        Frequently Asked Questions Here are some of our FAQs. If you have any
        other questions you’d like answered please feel free to email us.
      </p>
      <Accordion type="single" className="w-full md:w-64 lg:w-96" collapsible>
        {questionList.map((question) => (
          <AccordionItem key={question.id} value={`item-${question.id}`}>
            <AccordionTrigger>{question.question}</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam autem odio vel eius dolor distinctio possimus tempora
              ex excepturi rem maxime error ea dolores, placeat fugiat eligendi
              architecto iste!
            </AccordionContent>
          </AccordionItem>
        ))}
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
