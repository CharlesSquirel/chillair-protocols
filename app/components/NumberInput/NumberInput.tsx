import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";

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
  const {
    register,
    formState: { errors },
  } = useFormContext();
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
        step={0.1}
        className="h-[50px] w-[520px] rounded-md border border-primary bg-inputBg p-3 placeholder:text-placeholder focus:border-green focus:bg-white focus:outline-none"
        {...register(name)}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <p role="alert" className="text-error">
            {message}
          </p>
        )}
      />
    </div>
  );
}