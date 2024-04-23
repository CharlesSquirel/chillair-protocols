import useOutsideClick from "@/utils/hooks/useOutsideClick";
import { SetStateAction, useRef } from "react";

interface MobileNavbarProps {
  onClick: React.Dispatch<SetStateAction<boolean>>;
}

export default function MobileNavbar({ onClick }: MobileNavbarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  useOutsideClick(containerRef, () => onClick(false));
  return (
    <div
      ref={containerRef}
      className="absolute right-8 top-0 z-10 flex min-w-[35%] flex-col items-center gap-6 rounded-md bg-white p-7 shadow-lg"
    >
      <ul className="flex flex-col gap-[15px]">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
