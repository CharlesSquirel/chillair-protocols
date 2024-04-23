import CloseIcon from "@/assets/icons/CloseIcon";
import HomeIcon from "@/assets/icons/HomeIcon";
import LocalIcon from "@/assets/icons/LocalIcon";
import LogoutIcon from "@/assets/icons/LogoutIcon";
import UserIcon from "@/assets/icons/UserIcon";
import useOutsideClick from "@/utils/hooks/useOutsideClick";
import Link from "next/link";
import { SetStateAction, useRef } from "react";

interface MobileMenuProps {
  onClick: React.Dispatch<SetStateAction<boolean>>;
}

export default function MobileMenu({ onClick }: MobileMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  useOutsideClick(containerRef, () => onClick(false));
  return (
    <div
      ref={containerRef}
      className="absolute right-0 top-0 z-10 flex min-h-[250px] min-w-[35%] flex-col items-center gap-6 rounded-md bg-white p-7 shadow-lg"
    >
      <button className="absolute right-3 top-3" onClick={() => onClick(false)}>
        <CloseIcon className="h-9 w-9" />
      </button>
      <ul className="flex flex-col gap-[15px] uppercase">
        <li
          className="flex cursor-pointer items-center gap-3 pt-[1px] text-2xl text-secondary hover:text-primary"
          onClick={() => onClick(false)}
        >
          <HomeIcon className="h-8 w-8" />
          <p className="pt-[2px]">Home</p>
        </li>
        <Link
          href="/dashboard/firma/add"
          className="flex cursor-pointer items-center gap-3 text-2xl text-secondary hover:text-primary"
          onClick={() => onClick(false)}
        >
          <LocalIcon className="h-8 w-8" />
          <p className="pt-[2px]">Obiekty</p>
        </Link>
        <li
          className="flex cursor-pointer items-center gap-3 border-b pb-3 text-2xl text-secondary hover:text-primary"
          onClick={() => onClick(false)}
        >
          <UserIcon className="h-8 w-8" />
          <p className="pt-[2px]">Użytkownicy</p>
        </li>
        <button className="flex cursor-pointer items-center gap-3 text-2xl text-secondary  hover:text-primary">
          <LogoutIcon className="h-9 w-9" /> Wyloguj
        </button>
      </ul>
    </div>
  );
}
