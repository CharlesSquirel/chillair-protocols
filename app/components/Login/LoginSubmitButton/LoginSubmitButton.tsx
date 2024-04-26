"use client";

import { useFormStatus } from "react-dom";

const LoginSubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="btn btn-wide rounded-md border-primary bg-primary font-semibold uppercase text-white"
    >
      Zaloguj się
    </button>
  );
};

export default LoginSubmitButton;
