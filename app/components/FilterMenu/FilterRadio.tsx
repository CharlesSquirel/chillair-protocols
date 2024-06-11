import { SetStateAction } from "react";
import { Order } from "../Providers/SearchContext";

interface FilterRadioProps {
  id: Order;
  label: string;
  checked?: boolean;
  onClick: React.Dispatch<SetStateAction<Order>>;
}

export default function FilterRadiobox({
  id,
  label,
  checked,
  onClick,
}: FilterRadioProps) {
  return (
    <div className="flex items-center gap-2 font-normal">
      <input
        type="radio"
        id={id}
        name="chronos"
        className="h-[20px] w-[20px]"
        defaultChecked={checked}
        onClick={() => onClick(id)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
