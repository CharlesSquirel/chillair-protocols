import LogoutIcon from "@/assets/icons/LogoutIcon";

export default function LogoutButton() {
  return (
    <button type="button" className="hidden border-0 bg-transparent lg:block">
      <LogoutIcon className="h-11 w-11" />
    </button>
  );
}
