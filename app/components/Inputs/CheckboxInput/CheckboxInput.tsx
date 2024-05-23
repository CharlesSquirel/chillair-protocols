"use client";

import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

interface CheckboxProps {
  name: string;
  label: string;
  onCheck?: () => void;
  defaultValues?: any;
}

export default function CheckboxInput({
  label,
  name,
  onCheck,
  defaultValues,
}: CheckboxProps) {
  const { register, setValue } = useFormContext();

  useEffect(() => {
    if (defaultValues) {
      setValue(name, defaultValues[name]);
    }
  }, [setValue, name, defaultValues]);

  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id={name}
        {...register(name)}
        className="h-[20px] w-[20px]"
        onClick={onCheck}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}
