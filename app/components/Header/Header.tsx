import Searchbar from "./Searchbar.tsx/Searchbar";
import UserInfo from "./UserInfo/UserInfo";

export default function Header() {
  return (
    <header className="fixed top-0 py-[90px] w-full flex justify-end px-4 items-center gap-5">
      <Searchbar />
      <UserInfo />
    </header>
  );
}
