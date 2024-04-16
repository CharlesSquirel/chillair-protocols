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
      className="btn btn-wide self-end rounded-md bg-primary text-lg text-white hover:border hover:border-primary hover:bg-white hover:text-primary"
    >
      {label}
      {pending && <p>...</p>}
    </button>
  );
}
