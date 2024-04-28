"use client";

import { FormType } from "@/utils/types/form";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  formType?: FormType;
}

export default function SubmitFormButton({ formType }: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn w-full self-end rounded-md bg-primary text-base text-white sm:btn-wide hover:border hover:border-primary hover:bg-white hover:text-primary md:text-lg"
    >
      {formType?.toLowerCase().includes("edit")
        ? "Zapisz"
        : formType?.toLowerCase().includes("add")
          ? "Utwórz i pobierz"
          : "Utwórz"}
      {pending && <p>...</p>}
    </button>
  );
}
