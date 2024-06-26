"use client";

import MoreIcon from "@/assets/icons/MoreIcon";
import logoImg from "@/assets/images/chillair-print.svg";
import Image from "next/image";
import { useState } from "react";
import ProtocolMobileMenu from "../ProtocolMobileMenu/ProtocolMobileMenus";
import ProtocolTitle from "../ProtocolTitle/ProtocolTitle";

interface ProtocolHeaderProps {
  title: string;
  id: string;
}

export default function ProtocolHeader({ title, id }: ProtocolHeaderProps) {
  const [isMobileActive, setIsMobileActive] = useState(false);
  return (
    <header className="relative mr-0 flex items-center justify-between md:mr-[170px] print:mr-0">
      <ProtocolTitle title={title} />
      <Image
        priority
        src={logoImg}
        alt="Chillair logo"
        className="h-[94px] w-[256px] scale-[0.8] min-[770px]:scale-[.9] lg:scale-100 print:translate-x-[50px] print:scale-50"
      />
      <button
        className="md:hidden print:hidden"
        onClick={() => setIsMobileActive(true)}
      >
        <MoreIcon className="size-11" />
      </button>
      {isMobileActive && (
        <ProtocolMobileMenu onClick={() => setIsMobileActive(false)} id={id} />
      )}
    </header>
  );
}
