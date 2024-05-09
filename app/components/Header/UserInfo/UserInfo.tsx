"use client";
import { useUser } from "@clerk/nextjs";
import LogoutButton from "./LogoutButton/LogoutButton";
import { SignOutButton } from "@clerk/nextjs";

export default function UserInfo() {
  const { user } = useUser();
  console.log(user);
  return (
    <div className="flex gap-6">
      <div className="flex flex-col text-secondary">
        <p className="text-lg lg:text-2xl">Witaj !</p>
        <p className="text-xl font-semibold lg:text-2xl">
          {user?.firstName} {user?.lastName}
        </p>
      </div>

      <LogoutButton />
    </div>
  );
}
