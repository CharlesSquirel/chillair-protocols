"use client";

import MoreIcon from "@/assets/icons/MoreIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import { generateLinkClasses } from "@/utils/switch/generateNavLinkClasses";
import { navLinks } from "../../data/navLinks";

export default function NavBar() {
  const [isMobileActive, setIsMobileActive] = useState(false);
  const pathname = usePathname();
  return (
    <nav className="relative px-2 md:px-8 lg:pl-[225px]">
      <ul className="flex items-center justify-start gap-7 text-[22px] text-secondary lg:px-0 lg:text-2xl">
        {navLinks.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className={`${pathname === link.href && "border-b font-semibold text-primary"} ${generateLinkClasses(index)}`}
          >
            {link.text}
          </Link>
        ))}
        <li className="md:hidden" onClick={() => setIsMobileActive(true)}>
          <MoreIcon className="h-11 w-11" />
        </li>
      </ul>
      {isMobileActive && <MobileNavbar onClick={setIsMobileActive} />}
    </nav>
  );
}
