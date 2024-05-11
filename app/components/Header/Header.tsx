import UserInfo from "./UserInfo/UserInfo";
import ProtocolTitle from "../ProtocolTitle/ProtocolTitle";
import MobileMenu from "../MobileMenu/MobileMenu";
import MobileMenuContext from "../MobileMenuContext/MobileMenuContext";
import HamburgerButton from "../HamburgerButton/HamburgerButton";

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
