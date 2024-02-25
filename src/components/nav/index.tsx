import Image from "next/image";
import React from "react";
import HeaderLogo from "@/assets/images/logo-bookmark.svg";
import { DrawerComponent } from "./drawer";
import { Button } from "../ui/button";
import Link from "next/link";

export const Nav = () => {
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
      id: 3,
      title: "contact",
    },
  ];

  return (
    <section className="py-5 px-6 m-auto lg: max-w-screen-xl lg: mb-10 lg:py-10">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image
            className="lg:w-[200px]"
            src={HeaderLogo}
            alt="Bookmark Logo"
          />
        </Link>
        <ul className="hidden lg:flex gap-5 uppercase items-center">
          {drawerItems.map((item) => (
            <div
              key={item.id}
              className="tracking-widest text-very-dark-blue border-custom-grey-lighter p-5 flex items-center justify-center hover:text-soft-red"
            >
              <Link href="#" className="text-center">
                {item.title}
              </Link>
            </div>
          ))}
          <Button className="uppercase bg-soft-red border-2 border-soft-red text-white tracking-widest px-10 hover:bg-transparent hover:text-soft-red">
            Login
          </Button>
        </ul>
        <DrawerComponent />
      </nav>
    </section>
  );
};
