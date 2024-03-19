import LoginTextInput from "../Login/LoginTextInput/LoginTextInput";
import Searchbar from "./Searchbar.tsx/Searchbar";
import

export default function Header() {
  return (
    <header className="fixed top-0 py-[90px] border w-full flex justify-end px-4">
      <Searchbar />
      <LoginTextInput>
        <Search/>
      </LoginTextInput>
    </header>
  );
}
