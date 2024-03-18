import LoginSubmitButton from './LoginSubmitButton/LoginSubmitButton';
import LoginTextInput from './LoginTextInput/LoginTextInput';
import Envelope from './icons/Envelope';
import Key from './icons/Key';

const Login = () => {
  return (
    <form className="w-[450px] border flex flex-col gap-5 p-5 items-center rounded-lg shadow-md">
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
