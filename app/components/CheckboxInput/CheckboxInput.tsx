"use client";

import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

interface CheckboxProps {
  name: string;
  label: string;
  onCheck?: () => void;
}

export default function CheckboxInput({ label, name, onCheck }: CheckboxProps) {
  const { register } = useFormContext();

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
