"use client";

import CloseIcon from "@/assets/icons/CloseIcon";
import useOutsideClick from "@/utils/hooks/useOutsideClick";
import { SetStateAction, useRef } from "react";

interface MobileMenuContainerProps {
  children: React.ReactNode;
  onClick: React.Dispatch<SetStateAction<boolean>>;
}

export default function MobileMenuContainer({
  children,
  onClick,
}: MobileMenuContainerProps) {
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
      <ul className="flex flex-col gap-[15px] uppercase">{children}</ul>
    </div>
  );
}
