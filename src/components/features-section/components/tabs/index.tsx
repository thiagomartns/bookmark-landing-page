import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import TabsPanelImg1 from "@/assets/images/illustration-features-tab-1.svg";

export const CustomTabs = () => {
  return (
    <Tabs defaultValue="simple">
      <TabsList className="w-full">
        <TabsTrigger value="simple">Simple Bookmarking</TabsTrigger>
        <TabsTrigger value="speeding">Speeding Searching</TabsTrigger>
        <TabsTrigger value="easy">Easy Sharing</TabsTrigger>
      </TabsList>
      <TabsContent value="simple" className="flex flex-col gap-5">
        <Image src={TabsPanelImg1} alt="Bookmark in one click" />
        <h1 className="text-3xl capitalize text-very-dark-blue font-bold text-center">
          Bookmark in one click
        </h1>
        <p className="text-grayish-blue text-center">
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.
        </p>
        <Button
          className="bg-custom-purple hover:bg-custom-purple w-30 m-auto"
          size="lg"
        >
          {" "}
          More Info
        </Button>
      </TabsContent>
      <TabsContent value="speeding">
        <Image src={TabsPanelImg1} alt="Bookmark in one click" />
        <h1 className="text-3xl capitalize text-very-dark-blue font-bold text-center">
          Bookmark in one click
        </h1>
        <p className="text-grayish-blue text-center">
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.
        </p>
        <Button className="bg-custom-purple hover:bg-custom-purple" size="lg">
          {" "}
          More Info
        </Button>
      </TabsContent>
      <TabsContent value="easy">
        <Image src={TabsPanelImg1} alt="Bookmark in one click" />
        <h1 className="text-3xl capitalize text-very-dark-blue font-bold text-center">
          Bookmark in one click
        </h1>
        <p className="text-grayish-blue text-center">
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.
        </p>
        <Button className="bg-custom-purple hover:bg-custom-purple" size="lg">
          {" "}
          More Info
        </Button>
      </TabsContent>
    </Tabs>
  );
};
