import HeaderLogo from "@/assets/images/logo-bookmark.svg";
import HeroMainImg from "@/assets/images/illustration-hero.svg";
import { Menu } from "lucide-react";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="py-10 px-6">
        <nav className="flex justify-between items-center">
          <Image src={HeaderLogo} alt="Bookmark Logo" />
          <Menu size={30} className="text-very-dark-blue" />
        </nav>
      </div>
      <div className="relative">
        <Image src={HeroMainImg} className="z-10" alt="Hero main image" />
        <div className="bg-clip-border p-6 bg-violet-600 border-4 border-violet-300 border-dashed absolute top-0 z-0"></div>
      </div>
    </div>
  );
}
