import React from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import DrawerLogo from "@/assets/images/logo-bookmark-white.svg";
import { useDisclosure } from "@mantine/hooks";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "../../ui/drawer";
import IconFacebook from "@/assets/images/icon-facebook.svg";
import IconTwitter from "@/assets/images/icon-twitter.svg";
import { Button } from "../../ui/button";
import Link from "next/link";

export const DrawerComponent = () => {
  const drawerItems = [
    {
      id: 1,
      title: "features",
    },
    {
      id: 2,
      title: "pricing",
    },
    {
      id: 1,
      title: "contact",
    },
  ];

  const [opened, { open }] = useDisclosure(false);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Menu
          onClick={open}
          size={30}
          className="text-very-dark-blue hover:cursor-pointer"
        />
      </DrawerTrigger>

      <DrawerContent className="h-full opacity-80 bg-very-dark-blue">
        <div className="px-5 py-10 flex justify-between">
          <Image src={DrawerLogo} width={200} alt="Bookmark Logo" />
          <DrawerClose className="text-white">
            <X size={30} />
          </DrawerClose>
        </div>
        <DrawerHeader className="h-full uppercase">
          <DrawerDescription className="p-10">
            <div className="flex flex-col text-xl mb-10 first: border-t-2">
              {drawerItems.map((item) => (
                <Link
                  key={item.id}
                  href="#"
                  className="tracking-widest border-b-2 text-white border-custom-grey-lighter p-5 "
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <Button className="w-full border-2 uppercase text-lg py-5 tracking-widest bg-transparent">
              login
            </Button>
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <div className="flex justify-center items-center w-full gap-10 py-10">
            <Image src={IconFacebook} alt="Facebook Logo" />
            <Image src={IconTwitter} alt="Facebook Logo" />
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
