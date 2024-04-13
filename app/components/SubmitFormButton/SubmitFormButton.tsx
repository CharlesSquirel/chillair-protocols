import { useFormContext } from "react-hook-form";

interface SubmitButtonProps {
  label: string;
}

export default function SubmitFormButton({ label }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className="btn btn-wide self-end rounded-md bg-primary text-lg text-white hover:border hover:border-primary hover:bg-white hover:text-primary"
    >
      {label}
    </button>
  );
}
