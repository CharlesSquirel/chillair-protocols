"use client";

import { useFormContext } from "react-hook-form";

interface TextareaInputProps {
  label: string;
  name: string;
  placeholder: string;
}

export default function TextareaInput({
  label,
  name,
  placeholder,
}: TextareaInputProps) {
  const { register } = useFormContext();
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
        placeholder={placeholder}
        {...register(name)}
        className="min-h-[200px] w-[50%] resize-none rounded-md border border-primary bg-inputBg p-3 placeholder:text-placeholder focus:border-green focus:bg-white focus:outline-none"
      />
    </div>
  );
}