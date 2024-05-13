import HamburgerButton from "../Buttons/HamburgerButton/HamburgerButton";
import MobileMenu from "../MobileMenu/MobileMenu";
import ProtocolTitle from "../Protocols/ProtocolTitle/ProtocolTitle";
import MobileMenuContext from "../Providers/MobileMenuContext/MobileMenuContext";
import UserInfo from "./UserInfo/UserInfo";

export default function Header() {
  return (
    <MobileMenuContext>
      <header className=" flex w-full items-start justify-between px-2 py-[30px] md:px-8 lg:py-[50px]">
        <MobileMenu />
        <ProtocolTitle />
        <div className="flex items-center gap-5">
          <UserInfo />
          <HamburgerButton />
        </div>
      </header>
    </MobileMenuContext>
  );
}
