"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav className='pl-[300px]'>
      <ul className='flex gap-7 text-secondary text-2xl'>
        <Link
          href='/dashboard'
          className={`hover:text-primary ${pathname === "/dashboard" && "font-semibold text-primary border-b"}`}
        >
          Wszystkie
        </Link>
        <Link
          href='/dashboard/valves'
          className={`hover:text-primary ${pathname === "/dashboard/valves" && "font-semibold text-primary border-b"}`}
        >
          Zawory bezpieczeństwa
        </Link>
        <li
          className={`hover:text-primary ${pathname === "" && "font-semibold text-primary border-b"}`}
        >
          Awaria urządzenia
        </li>
        <li
          className={`hover:text-primary ${pathname === "" && "font-semibold text-primary border-b"}`}
        >
          Agregaty
        </li>
        <li
          className={`hover:text-primary ${pathname === "" && "font-semibold text-primary border-b"}`}
        >
          Centrale wentylacyjne
        </li>
        <li
          className={`hover:text-primary ${pathname === "" && "font-semibold text-primary border-b"}`}
        >
          Klimatyzatory
        </li>
        <li
          className={`hover:text-primary ${pathname === "" && "font-semibold text-primary border-b"}`}
        >
          Nawilżacze
        </li>
        <li
          className={`hover:text-primary ${pathname === "" && "font-semibold text-primary border-b"}`}
        >
          Szafy
        </li>
        <li
          className={`hover:text-primary ${pathname === "" && "font-semibold text-primary border-b"}`}
        >
          Szczelność
        </li>
      </ul>
    </nav>
  );
}
