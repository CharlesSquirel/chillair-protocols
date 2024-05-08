import LogoutButton from "./LogoutButton/LogoutButton";
import { auth } from "auth";

export default async function UserInfo() {
  const session = await auth();
  if (!session?.user) {
    console.log("nie ma usera");
  } else {
    console.log(session.user);
  }
  return (
    <div className="flex gap-6">
      <div className="flex flex-col text-secondary">
        <p className="text-lg lg:text-2xl">Witaj !</p>
        <p className="text-xl font-semibold lg:text-2xl">Jan Kowalski</p>
      </div>
      <LogoutButton />
    </div>
  );
}
