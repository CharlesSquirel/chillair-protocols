"use client";

import Image from "next/image";
import logoImg from "@/assets/images/chillair-print.png";
import ProtocolTitle from "../ProtocolTitle/ProtocolTitle";
import MoreIcon from "@/assets/icons/MoreIcon";
import { useState } from "react";
import ProtocolMobileMenu from "../ProtocolMobileMenu/ProtocolMobileMenus";

interface ProtocolHeaderProps {
  title: string;
  id: string;
}

export default function ProtocolHeader({ title, id }: ProtocolHeaderProps) {
  const [isMobileActive, setIsMobileActive] = useState(false);
  return (
    <header className="relative mr-0 flex items-center justify-between md:mr-[170px] print:mr-0">
      <Image
        src={logoImg}
        alt="Chillair logo"
        className="h-[94px] w-[256px] scale-[0.8] min-[770px]:scale-[.9] lg:scale-100 print:scale-100"
      />
      <ProtocolTitle title={title} />
      <button
        className="md:hidden print:hidden"
        onClick={() => setIsMobileActive(true)}
      >
        <MoreIcon className="h-11 w-11" />
      </button>
      {isMobileActive && (
        <ProtocolMobileMenu onClick={() => setIsMobileActive(false)} id={id} />
      )}
    </header>
  );
}
