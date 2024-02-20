import { Menu } from "lucide-react";
import Image from "next/image";
import React from "react";
import HeaderLogo from "@/assets/images/logo-bookmark.svg";

export const Nav = () => {
  return (
    <div className="py-10 px-6">
      <nav className="flex justify-between items-center">
        <Image src={HeaderLogo} alt="Bookmark Logo" />
        <Menu size={30} className="text-very-dark-blue" />
      </nav>
    </div>
  );
};
