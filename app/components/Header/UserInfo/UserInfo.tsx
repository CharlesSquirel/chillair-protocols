import LogoutButton from "./LogoutButton/LogoutButton";

export default function UserInfo() {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col text-secondary ">
        <p className="text-lg">Witaj !</p>
        <p className="text-xl font-semibold">Jan Kowalski</p>
      </div>
      <LogoutButton />
    </div>
  );
}
