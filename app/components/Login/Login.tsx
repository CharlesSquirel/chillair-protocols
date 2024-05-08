"use client";
import Image from "next/image";
import LoginSubmitButton from "./LoginSubmitButton/LoginSubmitButton";
import LoginTextInput from "./LoginTextInput/LoginTextInput";
import EnvelopeIcon from "@/assets/icons/EnvelopeIcon";
import KeyIcon from "@/assets/icons/KeyIcon";
import logo from "@/assets/images/chillair_logo.png";
import { logIn } from "@/utils/actions/logIn";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { UserLoginDTO } from "@/utils/types/user";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const methods = useForm<UserLoginDTO>();
  const onSubmit: SubmitHandler<UserLoginDTO> = async (data) => {
    try {
      await logIn(data);
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className="mx-5 flex w-[600px] flex-col items-center gap-5 rounded-lg border border-secondary bg-secondary p-5 shadow-lg"
        onSubmit={methods.handleSubmit(onSubmit)}
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
    </FormProvider>
  );
};

export default Login;
