"use client";

import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";

interface SelectInputProps {
  label: string;
  placeholder?: string;
  name: string;
  data: string[];
  className?: string;
}

export default function SelectInput({
  label,
  placeholder,
  name,
  data,
  className,
}: SelectInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <select
        defaultValue=""
        {...register(name)}
        className={`flex h-[50px] flex-col gap-1 rounded-md border border-primary bg-inputBg p-3 text-placeholder placeholder:text-placeholder focus:border-green focus:bg-white focus:outline-none ${className}`}
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
