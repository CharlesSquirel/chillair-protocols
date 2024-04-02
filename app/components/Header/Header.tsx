import Searchbar from "../Searchbar/Searchbar";
import UserInfo from "./UserInfo/UserInfo";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-end gap-5 px-9 py-[90px]">
      <UserInfo />
    </header>
  );
}
