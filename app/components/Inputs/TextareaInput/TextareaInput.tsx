"use client";

import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

interface TextareaInputProps {
  label: string;
  name: string;
  placeholder: string;
  defaultValues?: any;
}

export default function TextareaInput({
  label,
  name,
  placeholder,
  defaultValues,
}: TextareaInputProps) {
  const { register, setValue } = useFormContext();

  useEffect(() => {
    if (defaultValues) {
      setValue(name, defaultValues[name]);
    }
  }, [setValue, name, defaultValues]);

  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={name} className="md:text-1 text-[14px] sm:text-[15px]">
        {label}
      </label>
      <textarea
        id={name}
        placeholder={placeholder}
        {...register(name)}
        className="min-h-[200px] w-full resize-none rounded-md border border-primary bg-inputBg p-3 placeholder:text-placeholder focus:border-green focus:bg-white focus:outline-none md:w-[75%] min-[1680px]:w-[50%]"
      />
    </div>
  );
}
