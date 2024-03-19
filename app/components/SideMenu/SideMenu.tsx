import Home from "./icons/Home";
import Local from "./icons/Local";
import User from "./icons/User";
import Signature from "./icons/Signature";

export default function SideMenu() {
  return (
    <aside className="h-screen bg-gray fixed left-0 flex flex-col shadow-lg w-[10%] py-[90px] px-4 gap-[60px] z-10">
      {/* <Image src={logo} alt="Chillair logo" /> */}
      <h1 className="text-primary  flex flex-col">
        <span className="uppercase font-bold text-4xl">Chillair</span>
        <span className="text-2xl">protocols</span>
      </h1>
      <ul className="flex flex-col gap-[15px] uppercase">
        <li className="cursor-pointer text-secondary text-lg hover:text-primary hover:font-medium flex gap-3">
          <Home /> Home
        </li>
        <li className="cursor-pointer text-secondary text-lg hover:text-primary hover:font-medium flex gap-3">
          <Local /> Siedziby
        </li>
        <li className="cursor-pointer text-secondary text-lg hover:text-primary hover:font-medium flex gap-3">
          <Signature /> Sygnatury
        </li>
        <li className="cursor-pointer text-secondary text-lg hover:text-primary hover:font-medium flex gap-3">
          <User /> Użytkownicy
        </li>
      </ul>
    </aside>
  );
}
