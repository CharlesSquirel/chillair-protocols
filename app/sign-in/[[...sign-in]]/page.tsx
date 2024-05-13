"use client";

import EnvelopeIcon from "@/assets/icons/EnvelopeIcon";
import KeyIcon from "@/assets/icons/KeyIcon";
import logo from "@/assets/images/chillair_logo.png";
import LoginSubmitButton from "@/components/Buttons/LoginSubmitButton/LoginSubmitButton";
import LoginTextInput from "@/components/Inputs/LoginTextInput/LoginTextInput";
import { useSignIn } from "@clerk/nextjs";
import { isClerkAPIResponseError } from "@clerk/nextjs/errors";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function SignInForm() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLoaded) {
      return;
    }

    try {
      setPending(true);

      const completeSignIn = await signIn.create({
        identifier: email,
        password,
      });

      if (completeSignIn.status === "complete") {
        await setActive({ session: completeSignIn.createdSessionId });
        router.push("/dashboard");
        toast.success("Poprawnie zalogowano");
      }
    } catch (err: any) {
      if (isClerkAPIResponseError(err)) {
        switch (err.errors[0].code) {
          case "form_param_nil":
            toast.error("Wprowadź hasło!");
            break;
          case "form_param_format_invalid":
            toast.error("Nieprawidłowy email!");
            break;
          case "form_password_incorrect":
            toast.error("Nieprawidłowe hasło!");
            break;
          default:
            break;
        }
      }
      console.error(JSON.stringify(err, null, 2));
    } finally {
      setPending(false);
    }
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="mx-5 flex w-[600px] flex-col items-center gap-5 rounded-lg border border-secondary bg-secondary p-5 shadow-lg"
    >
      <Image src={logo} alt="Chillair logo" priority />

      <LoginTextInput placeholder="Email" name="email" onChange={setEmail}>
        <EnvelopeIcon />
      </LoginTextInput>

      <LoginTextInput
        type="password"
        placeholder="Hasło"
        name="password"
        onChange={setPassword}
      >
        <KeyIcon />
      </LoginTextInput>

      <LoginSubmitButton pending={pending} />
    </form>
  );
}
