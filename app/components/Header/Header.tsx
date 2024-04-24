"use client";

import HamburgerIcon from "@/assets/icons/HamburgerIcon";
import UserInfo from "./UserInfo/UserInfo";
import ProtocolTitle from "../ProtocolTitle/ProtocolTitle";
import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function Header() {
  const [isMobileActiv, setIsMobileActive] = useState(false);
  return (
    <header className=" flex w-full items-start justify-between px-2 py-[30px] md:px-8 lg:py-[50px]">
      {isMobileActiv && <MobileMenu onClick={() => setIsMobileActive(false)} />}
      <ProtocolTitle />
      <div className="flex items-center gap-5">
        <UserInfo />
        <button className="lg:hidden" onClick={() => setIsMobileActive(true)}>
          <HamburgerIcon />
        </button>
      </div>
    </header>
  );
}
