interface LoginTextInputProps {
  children: React.ReactNode;
  type?: 'text' | 'password';
  placeholder: string;
  name: string;
}

const LoginTextInput = ({ children, type = 'text', placeholder, name }: LoginTextInputProps) => {
  return (
    <label className="input input-bordered border-2 flex items-center gap-2 focus:outline-none focus-within:outline-none w-full focus-within:border-primary">
      {children}
      <input type={type} className="grow" placeholder={placeholder} name={name} />
    </label>
  );
};

export default LoginTextInput;
