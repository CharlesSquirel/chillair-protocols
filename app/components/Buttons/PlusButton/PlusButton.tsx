import PlusIcon from "@/assets/icons/PlusIcon";
import { FormIncrementalButtonsProps } from "@/utils/types/buttons";

export default function PlusButton({
  onClick,
  className,
}: FormIncrementalButtonsProps) {
  return (
    <button className={className} type="button" onClick={onClick}>
      <PlusIcon className="size-10" />
    </button>
  );
}
