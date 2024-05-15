"use client";

import { FormType } from "@/utils/types/form";

interface SubmitButtonProps {
  formType?: FormType;
}

export default function SubmitFormButton({ formType }: SubmitButtonProps) {
  const findButtonText = (formType: FormType | undefined) => {
    if (typeof formType === "undefined") {
      return;
    }
    const type = formType.toLowerCase();
    switch (true) {
      case type.includes("add") &&
        (type.includes("user") || type.includes("firma")):
        return "Utwórz";
      case type.includes("edit"):
        return "Zapisz";
      case type.includes("add"):
        return "Utwórz i pobierz";
      default:
        return "Utwórz";
    }
  };
  return (
    <button
      type="submit"
      className="btn w-full self-end rounded-md bg-primary text-base text-white sm:btn-wide hover:border hover:border-primary hover:bg-white hover:text-primary md:text-lg"
    >
      {findButtonText(formType)}
    </button>
  );
}
