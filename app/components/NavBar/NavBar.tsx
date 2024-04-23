"use client";

import MoreIcon from "@/assets/icons/MoreIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MobileNavbar from "../MobileNavbar/MobileNavbar";

export default function NavBar() {
  const [isMobileActive, setIsMobileActive] = useState(false);
  const pathname = usePathname();
  return (
    <nav className="relative lg:pl-[250px]">
      <ul className="flex items-center gap-7 px-8 text-[22px] text-secondary lg:px-0 lg:text-2xl">
        <Link
          href="/dashboard"
          className={`hover:text-primary ${pathname === "/dashboard" && "border-b font-semibold text-primary"}`}
        >
          Wszystkie
        </Link>
        <Link
          href="/dashboard/valves"
          className={`hover:text-primary ${pathname === "/dashboard/valves" && "border-b font-semibold text-primary"}`}
        >
          Zawory bezpieczeństwa
        </Link>
        <li
          className={`hover:text-primary ${pathname === "" && "border-b font-semibold text-primary"} `}
        >
          Awaria urządzenia
        </li>
        <li
          className={`hover:text-primary ${pathname === "" && "border-b font-semibold text-primary"} hidden md:list-item lg:hidden  min-[1170px]:list-item`}
        >
          Agregaty
        </li>
        <li
          className={`hover:text-primary ${pathname === "" && "border-b font-semibold text-primary"} hidden min-[1450px]:list-item`}
        >
          Centrale wentylacyjne
        </li>
        <li
          className={`hover:text-primary ${pathname === "" && "border-b font-semibold text-primary"} hidden min-[1640px]:list-item`}
        >
          Klimatyzatory
        </li>
        <Link
          href="/dashboard/humidifiers"
          className={`hover:text-primary ${pathname === "/dashboard/humidifiers" && "border-b font-semibold text-primary"} hidden min-[1790px]:list-item`}
        >
          Nawilżacze
        </Link>
        <li
          className={`hover:text-primary ${pathname === "" && "border-b font-semibold text-primary"} hidden min-[1880px]:list-item`}
        >
          Szafy
        </li>
        <li
          className={`hover:text-primary ${pathname === "" && "border-b font-semibold text-primary"} hidden min-[1980px]:list-item`}
        >
          Szczelność
        </li>
        <li
          className="min-[1980px]:hidden"
          onClick={() => setIsMobileActive(true)}
        >
          <MoreIcon />
        </li>
      </ul>
      {isMobileActive && <MobileNavbar onClick={setIsMobileActive} />}
    </nav>
  );
}
