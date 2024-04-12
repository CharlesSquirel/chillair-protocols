interface TextInputProps {
  placeholder: string;
  label?: string;
  name: string;
  disabled?: boolean;
}

export default function TextInput({
  placeholder,
  name,
  label,
  disabled,
}: TextInputProps) {
  return (
    <div className="h-min-[106px] flex flex-col gap-1">
      {label && (
        <label htmlFor={name} className="">
          {label}
        </label>
      )}
      <input
        type="text"
        placeholder={placeholder}
        id={name}
        className="h-[50px] w-[520px] rounded-md border border-primary bg-inputBg p-3 placeholder:text-placeholder focus:border-green focus:bg-white focus:outline-none disabled:opacity-50"
        disabled={disabled}
      />
      <p role="alert" className="text-error">
        Nieprawidłowy {label}!
      </p>
    </div>
  );
}
