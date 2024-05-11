"use client";

import { SetStateAction } from "react";

interface LoginTextInputProps {
  children: React.ReactNode;
  type?: "text" | "password";
  placeholder: string;
  name: string;
  onChange: React.Dispatch<SetStateAction<string>>;
}

const LoginTextInput = ({
  children,
  type = "text",
  placeholder,
  name,
  onChange,
}: LoginTextInputProps) => {
  return (
    <label className="input input-bordered flex w-full items-center gap-2 border-2 focus-within:border-primary focus-within:outline-none focus:outline-none">
      {children}
      <input
        type={type}
        className="grow"
        placeholder={placeholder}
        name={name}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};

export default LoginTextInput;
