import CloseIcon from "@/assets/icons/CloseIcon";
import HomeIcon from "@/assets/icons/HomeIcon";
import LocalIcon from "@/assets/icons/LocalIcon";
import LogoutIcon from "@/assets/icons/LogoutIcon";
import UserIcon from "@/assets/icons/UserIcon";
import Link from "next/link";
import { SetStateAction } from "react";
import MobileMenuContainer from "../MobileMenuContainer/MobileMenuContainer";

interface MobileMenuProps {
  onClick: React.Dispatch<SetStateAction<boolean>>;
}

export default function MobileMenu({ onClick }: MobileMenuProps) {
  return (
    <MobileMenuContainer onClick={() => onClick(false)}>
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
    </MobileMenuContainer>
  );
}
