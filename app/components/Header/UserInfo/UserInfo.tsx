import { currentUser } from "@clerk/nextjs/server";
import LogoutButton from "./LogoutButton/LogoutButton";

export default async function UserInfo() {
  const user = await currentUser();

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
