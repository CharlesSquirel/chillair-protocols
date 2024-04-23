import HamburgerIcon from "@/assets/icons/HamburgerIcon";
import UserInfo from "./UserInfo/UserInfo";
import ProtocolTitle from "../ProtocolTitle/ProtocolTitle";

export default function Header() {
  return (
    <header className=" flex w-full items-start justify-between px-9 py-[90px]">
      <ProtocolTitle />
      <div className="flex items-center gap-5">
        <UserInfo />
        <button className="lg:hidden">
          <HamburgerIcon />
        </button>
      </div>
    </header>
  );
}
