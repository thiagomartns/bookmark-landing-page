import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import LogoChrome from "@/assets/images/logo-chrome.svg";
import LogoFirefox from "@/assets/images/logo-firefox.svg";
import LogoOpera from "@/assets/images/logo-opera.svg";
import Image from "next/image";
import { ActionButton } from "../action-button";

const browserList = [
  {
    id: 1,
    title: "Chrome",
    minimumVersion: 62,
    logo: LogoChrome,
  },
  {
    id: 2,
    title: "Firefox",
    minimumVersion: 55,
    logo: LogoFirefox,
  },
  {
    id: 3,
    title: "Opera",
    minimumVersion: 46,
    logo: LogoOpera,
  },
];

export const DownloadsSection = () => {
  return (
    <section className="flex items-center justify-center flex-col p-10 gap-5 mt-5 m-auto lg:max-w-screen-xl">
      <div className="flex flex-col gap-10">
        <h1 className="text-3xl capitalize text-very-dark-blue font-bold text-center lg:text-4xl">
          Download the extension
        </h1>
        <p className="text-grayish-blue text-center lg:w-[50ch] lg:text-lg">
          Download the extension We’ve got more browsers in the pipeline. Please
          do let us know if you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
      <div className="flex items-center justify-center flex-col gap-10 xl:[&>*:nth-child(3)]:mt-32 xl:[&>*:nth-child(2)]:mt-16 xl:flex-row">
        {browserList.map((card) => (
          <Card
            key={card.id}
            className="p-10 flex flex-col items-center justify-center gap-5 shadow-lg"
          >
            <CardContent className="flex flex-col items-center justify-center gap-5">
              <Image src={card.logo} alt={`${card.title} Logo`} />
              <h2 className="text-2xl capitalize text-very-dark-blue font-bold text-center">
                Add to {card.title}
              </h2>
              <p className="text-grayish-blue text-center">
                Minimum version {card.minimumVersion}
              </p>
            </CardContent>
            <CardFooter>
              <ActionButton label="Add & Install Extension" size="xl" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
