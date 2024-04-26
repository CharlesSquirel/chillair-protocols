"use client";
import Image from "next/image";
import LoginSubmitButton from "./LoginSubmitButton/LoginSubmitButton";
import LoginTextInput from "./LoginTextInput/LoginTextInput";
import EnvelopeIcon from "@/assets/icons/EnvelopeIcon";
import KeyIcon from "@/assets/icons/KeyIcon";
import logo from "@/assets/images/chillair_logo.png";
import { handleSignIn } from "@/utils/actions/handleSignIn";

const Login = () => {
  return (
    <form
      className="mx-5 flex w-[600px] flex-col items-center gap-5 rounded-lg border border-secondary bg-secondary p-5 shadow-lg"
      onSubmit={() => handleSignIn()}
    >
      <Image src={logo} alt="Chillair logo" />
      <LoginTextInput placeholder="Email" name="email">
        <EnvelopeIcon />
      </LoginTextInput>
      <LoginTextInput type="password" placeholder="Hasło" name="password">
        <KeyIcon />
      </LoginTextInput>
      <LoginSubmitButton />
    </form>
  );
};

export default Login;
