"use client";

import { ErrorMessage } from "@hookform/error-message";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

interface SelectInputProps {
  label: string;
  placeholder?: string;
  name: string;
  data: string[];
  className?: string;
  defaultValues?: any;
  arrayName?: string;
}

export default function SelectInput({
  label,
  placeholder,
  name,
  data,
  className,
  defaultValues,
  arrayName,
}: SelectInputProps) {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

  useEffect(() => {
    if (defaultValues && arrayName) {
      const index = name.charAt(arrayName.length + 1);
      const restOfName = name.slice(name.indexOf(index) + 2);
      setValue(name, defaultValues[arrayName][index][restOfName]);
    } else if (defaultValues) {
      setValue(name, defaultValues[name]);
    }
  }, [setValue, name, defaultValues, arrayName]);

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="md:text-1 text-[14px] sm:text-[15px]">
        {label}
      </label>
      <select
        defaultValue=""
        {...register(name)}
        className={`flex h-[45px] w-[180px] flex-col gap-1 rounded-md border border-primary bg-inputBg p-3 text-placeholder placeholder:text-placeholder focus:border-green focus:bg-white focus:outline-none md:h-[50px] ${className}`}
      >
        <option value="" disabled>
          {`${placeholder}`}
        </option>
        {data.map((data) => (
          <option value={data} key={data}>
            {data}
          </option>
        ))}
      </select>
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
