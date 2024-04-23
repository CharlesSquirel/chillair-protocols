import LogoutButton from "./LogoutButton/LogoutButton";

export default function UserInfo() {
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
