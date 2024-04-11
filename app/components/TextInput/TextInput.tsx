interface TextInputProps {
  placeholder: string;
  label: string;
  name: string;
}

export default function TextInput({
  placeholder,
  name,
  label,
}: TextInputProps) {
  return (
    <div className="h-min-[106px] flex flex-col gap-1">
      <label htmlFor={name} className="">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        id={name}
        className="placeholder:text-placeholder bg-inputBg focus:border-green w-[520px] rounded-md border border-primary p-3 focus:bg-white focus:outline-none"
      />
      <p role="alert" className="text-error">
        Nieprawidłowy {label}!
      </p>
    </div>
  );
}
