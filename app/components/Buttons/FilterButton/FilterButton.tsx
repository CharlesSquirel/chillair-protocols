import FilterIcon from "@/assets/icons/FilterIcon";
import { MouseEventHandler } from "react";

interface FilterButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function FilterButton({ onClick }: FilterButtonProps) {
  return (
    <button
      className="min-h-[40px] border-none bg-transparent hover:opacity-70"
      onClick={onClick}
    >
      <FilterIcon className="size-8" />
    </button>
  );
}
