"use client";
import { ErrorMessage } from "@hookform/error-message";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

interface TextInputProps {
  placeholder: string;
  label?: string;
  name: string;
  disabled?: boolean;
  defaultValues?: any;
  arrayName?: string;
}

export default function TextInput({
  placeholder,
  name,
  label,
  disabled,
  defaultValues,
  arrayName,
}: TextInputProps) {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();
  useEffect(() => {
    if (defaultValues && arrayName) {
      const index = name.charAt(arrayName.length + 1);
      if (defaultValues[arrayName][index]) {
        const restOfName = name.slice(name.indexOf(index) + 2);
        setValue(name, defaultValues[arrayName][index][restOfName]);
      }
    } else if (defaultValues) {
      setValue(name, defaultValues[name]);
    }
  }, [setValue, name, defaultValues, arrayName]);

  return (
    <div className="h-min-[106px] flex flex-col gap-1">
      {label && (
        <label htmlFor={name} className="md:text-1 text-[14px] sm:text-[15px]">
          {label}
        </label>
      )}
      <input
        type="text"
        placeholder={placeholder}
        id={name}
        className="h-[45px] w-full rounded-md border border-primary bg-inputBg p-3 placeholder:text-placeholder focus:border-green focus:bg-white focus:outline-none disabled:opacity-50 md:h-[50px] md:w-[520px]"
        disabled={disabled}
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
