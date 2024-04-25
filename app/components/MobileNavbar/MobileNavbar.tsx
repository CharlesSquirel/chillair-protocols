"use client";

import useOutsideClick from "@/utils/hooks/useOutsideClick";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SetStateAction, useRef } from "react";

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
      className="absolute right-[55px] top-0 z-30 flex min-w-[330px] flex-col gap-6 rounded-md bg-white p-7 shadow-lg lg:right-[76px]"
    >
      <ul className="flex flex-col gap-[15px] text-[22px]">
        <Link
          href="/dashboard"
          className={`hover:text-primary ${pathname === "/dashboard" && "border-b font-semibold text-primary"}`}
          onClick={() => onClick(false)}
        >
          Wszystkie
        </Link>
        <Link
          href="/dashboard/valves"
          className={`hover:text-primary ${pathname === "/dashboard/valves" && "border-b font-semibold text-primary"}`}
          onClick={() => onClick(false)}
        >
          Zawory bezpieczeństwa
        </Link>
        <li
          className={`hover:text-primary ${pathname === "" && "border-b font-semibold text-primary"} `}
          onClick={() => onClick(false)}
        >
          Awaria urządzenia
        </li>
        <li
          className={`hover:text-primary ${pathname === "" && "border-b font-semibold text-primary"}`}
          onClick={() => onClick(false)}
        >
          Agregaty
        </li>
        <li
          className={`hover:text-primary ${pathname === "" && "border-b font-semibold text-primary"}`}
          onClick={() => onClick(false)}
        >
          Centrale wentylacyjne
        </li>
        <li
          className={`hover:text-primary ${pathname === "" && "border-b font-semibold text-primary"} `}
          onClick={() => onClick(false)}
        >
          Klimatyzatory
        </li>
        <Link
          href="/dashboard/humidifiers"
          className={`hover:text-primary ${pathname === "/dashboard/humidifiers" && "border-b font-semibold text-primary"} `}
          onClick={() => onClick(false)}
        >
          Nawilżacze
        </Link>
        <li
          className={`hover:text-primary ${pathname === "" && "border-b font-semibold text-primary"} `}
          onClick={() => onClick(false)}
        >
          Szafy
        </li>
        <li
          className={`hover:text-primary ${pathname === "" && "border-b font-semibold text-primary"} `}
          onClick={() => onClick(false)}
        >
          Szczelność
        </li>
      </ul>
    </div>
  );
}
