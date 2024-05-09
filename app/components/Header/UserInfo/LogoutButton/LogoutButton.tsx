import LogoutIcon from "@/assets/icons/LogoutIcon";
import { SignOutButton } from "@clerk/nextjs";

export default function LogoutButton() {
  return (
    <SignOutButton redirectUrl="/sign-in">
      <button className="hidden border-0 bg-transparent lg:block">
        <LogoutIcon className="size-11" />
      </button>
    </SignOutButton>
  );
}
