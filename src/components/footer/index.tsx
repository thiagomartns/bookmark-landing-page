import Image from "next/image";
import React from "react";
import IconFacebook from "@/assets/images/icon-facebook.svg";
import IconTwitter from "@/assets/images/icon-twitter.svg";
import FooterLogo from "@/assets/images/logo-bookmark-white.svg";

export const Footer = () => {
  return (
    <footer className="bg-very-dark-blue flex flex-col justify-items-center items-center p-10 gap-20 text-white uppercase">
      <Image width={250} src={FooterLogo} alt="Bookmark logo" />
      <div className="flex flex-col gap-8 text-xl">
        <h2 className="tracking-widest">features</h2>
        <h2 className="tracking-widest">pricing</h2>
        <h2 className="tracking-widest">contact</h2>
      </div>
      <div className="flex justify-center gap-10">
        <Image src={IconFacebook} alt="Facebook Logo" />
        <Image src={IconTwitter} alt="Twitter Logo" />
      </div>
    </footer>
  );
};
