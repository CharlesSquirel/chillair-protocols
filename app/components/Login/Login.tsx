import Image from 'next/image';
import LoginSubmitButton from './LoginSubmitButton/LoginSubmitButton';
import LoginTextInput from './LoginTextInput/LoginTextInput';
import Envelope from './icons/Envelope';
import Key from './icons/Key';
import logo from '../../../public/chillair_logo.png';

const Login = () => {
  return (
    <form className="w-[450px] border flex flex-col gap-5 p-5 items-center rounded-lg shadow-lg bg-secondary border-secondary">
      <Image src={logo} alt="Chillair logo" />
      <LoginTextInput placeholder="Email">
        <Envelope />
      </LoginTextInput>
      <LoginTextInput type="password" placeholder="Hasło">
        <Key />
      </LoginTextInput>
      <LoginSubmitButton />
    </form>
  );
};

export default Login;
