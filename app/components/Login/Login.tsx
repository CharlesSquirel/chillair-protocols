import Image from "next/image";
import LoginSubmitButton from "./LoginSubmitButton/LoginSubmitButton";
import LoginTextInput from "./LoginTextInput/LoginTextInput";
import EnvelopeIcon from "@/assets/icons/EnvelopeIcon";
import KeyIcon from "@/assets/icons/KeyIcon";
import logo from "@/assets/images/chillair_logo.png";

interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  async function handleSubmit(formData: FormData) {
    "use server";
    const data: LoginFormData = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    console.log(data);
  }
  return (
    <form
      className="flex w-[450px] flex-col items-center gap-5 rounded-lg border border-secondary bg-secondary p-5 shadow-lg"
      action={handleSubmit}
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
