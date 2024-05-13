interface LoginSubmitButtonProps {
  pending: boolean;
}

export default function LoginSubmitButton({ pending }: LoginSubmitButtonProps) {
  return (
    <button
      disabled={pending}
      type="submit"
      className="btn btn-wide rounded-md border-primary bg-primary font-semibold uppercase text-white hover:bg-white hover:text-primary disabled:bg-primary disabled:text-white"
    >
      {pending ? "Logowanie..." : "Zaloguj się"}
    </button>
  );
}
