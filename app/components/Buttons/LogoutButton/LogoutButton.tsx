"use client";

import LogoutIcon from "@/assets/icons/LogoutIcon";
import { SignOutButton, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LogoutButton() {
  const router = useRouter();
  const { signOut } = useClerk();
  const handleSignOut = () => {
    signOut();
    router.push("/sign-in");
    toast.success("Pomyślnie wylogowano!");
  };
  return (
    <SignOutButton redirectUrl="/sign-in">
      <button
        className="hidden border-0 bg-transparent lg:block"
        onClick={handleSignOut}
      >
        <LogoutIcon className="size-11" />
      </button>
    </SignOutButton>
  );
}
