"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav className="pl-[300px]">
      <ul className="flex gap-7 text-2xl text-secondary">
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
          className={`hover:text-primary ${pathname === "" && "border-b font-semibold text-primary"}`}
        >
          Awaria urządzenia
        </li>
        <li
          className={`hover:text-primary ${pathname === "" && "border-b font-semibold text-primary"}`}
        >
          Agregaty
        </li>
        <li
          className={`hover:text-primary ${pathname === "" && "border-b font-semibold text-primary"}`}
        >
          Centrale wentylacyjne
        </li>
        <li
          className={`hover:text-primary ${pathname === "" && "border-b font-semibold text-primary"}`}
        >
          Klimatyzatory
        </li>
        <Link
          href="/dashboard/humidifiers"
          className={`hover:text-primary ${pathname === "/dashboard/humidifiers" && "border-b font-semibold text-primary"}`}
        >
          Nawilżacze
        </Link>
        <li
          className={`hover:text-primary ${pathname === "" && "border-b font-semibold text-primary"}`}
        >
          Szafy
        </li>
        <li
          className={`hover:text-primary ${pathname === "" && "border-b font-semibold text-primary"}`}
        >
          Szczelność
        </li>
      </ul>
    </nav>
  );
}
