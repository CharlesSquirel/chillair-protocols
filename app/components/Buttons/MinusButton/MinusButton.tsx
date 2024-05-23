import MinusIcon from "@/assets/icons/MinusIcon";
import { FormIncrementalButtonsProps } from "@/utils/types/common";

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
