"use client";

import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  label: string;
}

export default function SubmitFormButton({ label }: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn w-full self-end rounded-md bg-primary text-base text-white sm:btn-wide hover:border hover:border-primary hover:bg-white hover:text-primary md:text-lg"
    >
      {label}
      {pending && <p>...</p>}
    </button>
  );
}
