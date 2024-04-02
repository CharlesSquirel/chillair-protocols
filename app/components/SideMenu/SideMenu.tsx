import Home from "@/icons/Home";
import Local from "@/icons/Local";
import User from "@/icons/User";

export default function SideMenu() {
  return (
    <aside className="absolute left-0 z-10 flex h-screen w-[10%] flex-col gap-[60px] bg-white px-4 py-[90px] shadow-lg">
      {/* <Image src={logo} alt="Chillair logo" /> */}
      <h1 className="flex  flex-col text-primary">
        <span className="text-4xl font-bold uppercase">Chillair</span>
        <span className="text-2xl">protocols</span>
      </h1>
      <ul className="flex flex-col gap-[15px] uppercase">
        <li className="flex cursor-pointer gap-3 text-lg text-secondary hover:font-medium hover:text-primary">
          <Home /> Home
        </li>
        <li className="flex cursor-pointer gap-3 text-lg text-secondary hover:font-medium hover:text-primary">
          <Local /> Obiekty
        </li>
        {/* <li className="cursor-pointer text-secondary text-lg hover:text-primary hover:font-medium flex gap-3">
          <Signature /> Sygnatury
        </li> */}
        <li className="flex cursor-pointer gap-3 text-lg text-secondary hover:font-medium hover:text-primary">
          <User /> Użytkownicy
        </li>
      </ul>
    </aside>
  );
}
