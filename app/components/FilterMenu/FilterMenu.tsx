"use client";

import useOutsideClick from "@/utils/hooks/useOutsideClick";
import { SetStateAction, useRef } from "react";
import { useSearchContext } from "../Providers/SearchContext";
import FilterRadio from "./FilterRadio";

interface FilterMenuProps {
  onClick: React.Dispatch<SetStateAction<boolean>>;
}

export default function FilterMenu({ onClick }: FilterMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  useOutsideClick(containerRef, () => onClick(false));
  const { setOrder } = useSearchContext();
  return (
    <div
      className="bg-white absolute lg:right-6 md:right-8 right-2 border p-5 shadow-md text-black font-medium min-w-[300px] top-[74px] z-20 text-lg"
      ref={containerRef}
    >
      Sortuj wg
      <FilterRadio
        id="asc"
        label="Od najstarszego"
        onClick={() => setOrder("asc")}
      />
      <FilterRadio
        id="desc"
        label="Od najnowszego"
        checked
        onClick={() => setOrder("desc")}
      />
    </div>
  );
}
