import Image from "next/image";
import React from "react";
import IconFacebook from "@/assets/images/icon-facebook.svg";
import IconTwitter from "@/assets/images/icon-twitter.svg";
import FooterLogo from "@/assets/images/logo-bookmark-white.svg";
import Link from "next/link";
import { FacebookIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-very-dark-blue lg:py-6">
      <div className="m-auto flex flex-col justify-between items-center p-10 gap-16 text-white uppercase lg:max-w-screen-xl lg:flex-row">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-24">
          <Image width={250} src={FooterLogo} alt="Bookmark logo" />
          <div className="flex flex-col gap-8 text-xl lg:flex-row lg:gap-16">
            <Link href="#" className="tracking-widest hover:text-soft-red">
              features
            </Link>
            <Link href="#" className="tracking-widest hover:text-soft-red">
              pricing
            </Link>
            <Link href="#" className="tracking-widest hover:text-soft-red">
              contact
            </Link>
          </div>
        </div>
        <div className="flex justify-center gap-10">
          <Image src={IconFacebook} alt="Facebook Logo" />
          <Image src={IconTwitter} alt="Twitter Logo" />
        </div>
      </div>
    </footer>
  );
};
