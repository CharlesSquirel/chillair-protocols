interface CheckboxProps {
  name: string;
  label: string;
  onCheck?: () => void;
}

export default function CheckboxInput({ label, name, onCheck }: CheckboxProps) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id={name}
        onClick={onCheck}
        className="h-[20px] w-[20px]"
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}
