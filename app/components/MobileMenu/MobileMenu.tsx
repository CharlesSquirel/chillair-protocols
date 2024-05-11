"use client";

import HomeIcon from "@/assets/icons/HomeIcon";
import LocalIcon from "@/assets/icons/LocalIcon";
import UserIcon from "@/assets/icons/UserIcon";
import Link from "next/link";
import MobileMenuContainer from "../MobileMenuContainer/MobileMenuContainer";
import { useMobileContext } from "../MobileMenuContext/MobileMenuContext";
import LogoutMobileButton from "../LogoutMobileButton/LogoutMobileButton";

export default function MobileMenu() {
  const { isMobileActive, handleMobileClose } = useMobileContext();

  if (!isMobileActive) {
    return null;
  }
  return (
    <MobileMenuContainer onClick={handleMobileClose}>
      <li
        className="flex cursor-pointer items-center gap-3 pt-[1px] text-2xl text-secondary hover:text-primary"
        onClick={() => handleMobileClose}
      >
        <HomeIcon className="h-8 w-8" />
        <p className="pt-[2px]">Home</p>
      </li>
      <Link
        href="/dashboard/firma/add"
        className="flex cursor-pointer items-center gap-3 text-2xl text-secondary hover:text-primary"
        onClick={() => handleMobileClose}
      >
        <LocalIcon className="h-8 w-8" />
        <p className="pt-[2px]">Obiekty</p>
      </Link>
      <li
        className="flex cursor-pointer items-center gap-3 border-b pb-3 text-2xl text-secondary hover:text-primary"
        onClick={() => handleMobileClose}
      >
        <UserIcon className="h-8 w-8" />
        <p className="pt-[2px]">Użytkownicy</p>
      </li>
      <LogoutMobileButton />
    </MobileMenuContainer>
  );
}
