import LogoutIcon from "@/assets/icons/LogoutIcon";
import { SignOutButton } from "@clerk/nextjs";

export default function LogoutMobileButton() {
  return (
    <SignOutButton>
      <button className="flex cursor-pointer items-center gap-3 text-2xl text-secondary  hover:text-primary">
        <LogoutIcon className="h-9 w-9" /> Wyloguj
      </button>
    </SignOutButton>
  );
}
