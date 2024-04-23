import HomeIcon from "@/assets/icons/HomeIcon";
import LocalIcon from "@/assets/icons/LocalIcon";
import UserIcon from "@/assets/icons/UserIcon";
import Link from "next/link";

export default function SideMenu() {
  return (
    <aside className="absolute left-0 z-10  hidden h-screen flex-col gap-[60px] bg-white px-4 py-[90px] shadow-lg lg:flex lg:w-[200px]">
      {/* <Image src={logo} alt="Chillair logo" /> */}
      <h1 className="flex  flex-col text-primary">
        <span className="text-4xl font-bold uppercase">Chillair</span>
        <span className="text-2xl">protocols</span>
      </h1>
      <ul className="flex flex-col gap-[15px] uppercase">
        <li className="flex cursor-pointer gap-3 text-lg text-secondary hover:font-medium hover:text-primary">
          <HomeIcon /> Home
        </li>
        <Link
          href="/dashboard/firma/add"
          className="flex cursor-pointer gap-3 text-lg text-secondary hover:font-medium hover:text-primary"
        >
          <LocalIcon /> Obiekty
        </Link>
        {/* <li className="cursor-pointer text-secondary text-lg hover:text-primary hover:font-medium flex gap-3">
          <Signature /> Sygnatury
        </li> */}
        <li className="flex cursor-pointer gap-3 text-lg text-secondary hover:font-medium hover:text-primary">
          <UserIcon /> Użytkownicy
        </li>
      </ul>
    </aside>
  );
}
