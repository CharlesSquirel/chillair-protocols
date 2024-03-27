import Searchbar from './Searchbar/Searchbar';
import UserInfo from './UserInfo/UserInfo';

export default function Header() {
  return (
    <header className="py-[90px] w-full flex justify-end px-9 items-center gap-5">
      <Searchbar />
      <UserInfo />
    </header>
  );
}
