import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import LogoChrome from "@/assets/images/logo-chrome.svg";
import Image from "next/image";
import { Button } from "../ui/button";

export const DownloadsSection = () => {
  return (
    <section>
      <div className="mt-5 flex items-center justify-center flex-col p-10 gap-10">
        <h1 className="text-3xl capitalize text-very-dark-blue font-bold text-center">
          Download the extension
        </h1>
        <p className="text-grayish-blue text-center">
          Download the extension We’ve got more browsers in the pipeline. Please
          do let us know if you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
      <div className="flex items-center justify-center flex-col p-10 gap-10">
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
      </div>
    </section>
  );
};
