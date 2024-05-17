import MinusIcon from "@/assets/icons/MinusIcon";
import { FormIncrementalButtonsProps } from "@/utils/types/buttons";

export default function MinusButton({
  className,
  onClick,
}: FormIncrementalButtonsProps) {
  return (
    <button className={className} type="button" onClick={onClick}>
      <MinusIcon />
    </button>
  );
}
