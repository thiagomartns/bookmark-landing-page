import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import TabsPanelImg1 from "@/assets/images/illustration-features-tab-1.svg";
import TabsPanelImg2 from "@/assets/images/illustration-features-tab-2.svg";
import TabsPanelImg3 from "@/assets/images/illustration-features-tab-3.svg";

const featuresList = [
  {
    id: "1",
    feature: "Simple Bookmarking",
    img: TabsPanelImg1,
    title: "Bookmark in one click",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  {
    id: "2",
    feature: "Speeding Searching",
    img: TabsPanelImg2,
    title: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    id: "3",
    feature: "Easy Sharing",
    img: TabsPanelImg3,
    title: "Share your bookmarks",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];

export const CustomTabs = () => {
  return (
    <Tabs defaultValue="1" className="">
      <TabsList className="">
        {featuresList.map((feature) => (
          <TabsTrigger key={feature.id} value={feature.id}>
            {feature.feature}
          </TabsTrigger>
        ))}
      </TabsList>
      {featuresList.map((feature) => (
        <TabsContent
          key={feature.id}
          value={feature.id}
          className="flex flex-col gap-7"
        >
          <Image src={feature.img} alt="Bookmark in one click" />
          <h1 className="text-3xl capitalize text-very-dark-blue font-bold text-center">
            {feature.title}
          </h1>
          <p className="text-grayish-blue text-center">{feature.description}</p>
          <Button
            className="bg-custom-purple hover:bg-custom-purple w-30 m-auto"
            size="lg"
          >
            {" "}
            More Info
          </Button>
        </TabsContent>
      ))}
    </Tabs>
  );
};
