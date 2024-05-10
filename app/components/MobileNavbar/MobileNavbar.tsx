"use client";

import useOutsideClick from "@/utils/hooks/useOutsideClick";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SetStateAction, useRef } from "react";
import { navLinks } from "../../data/navLinks";

interface MobileNavbarProps {
  onClick: React.Dispatch<SetStateAction<boolean>>;
}

export default function MobileNavbar({ onClick }: MobileNavbarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  useOutsideClick(containerRef, () => onClick(false));
  const pathname = usePathname();
  return (
    <div
      ref={containerRef}
      className="absolute top-0 z-30 flex min-w-[330px] flex-col gap-6 rounded-md bg-white p-7 shadow-lg lg:right-[76px]"
    >
      <ul className="flex flex-col gap-[15px] text-[22px]">
        {navLinks.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className={`hover:text-primary ${pathname === link.href && "border-b font-semibold text-primary"}`}
            onClick={() => onClick(false)}
          >
            {link.text}
          </Link>
        ))}
      </ul>
    </div>
  );
}
