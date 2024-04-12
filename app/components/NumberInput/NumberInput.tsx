interface NumberInputProps {
  label: string;
  placeholder: string;
  name: string;
}

export default function NumberInput({
  label,
  placeholder,
  name,
}: NumberInputProps) {
  return (
    <div className="h-min-[106px] flex flex-col gap-1">
      {label && (
        <label htmlFor={name} className="">
          {label}
        </label>
      )}
      <input
        type="number"
        placeholder={placeholder}
        id={name}
        className="w-[520px] rounded-md border border-primary bg-inputBg p-3 placeholder:text-placeholder focus:border-green focus:bg-white focus:outline-none"
      />
      <p role="alert" className="text-error">
        Nieprawidłowy {label}!
      </p>
    </div>
  );
}
