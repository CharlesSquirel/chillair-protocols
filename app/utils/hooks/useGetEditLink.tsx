import { usePathname } from "next/navigation";

export const useGetEditLink = () => {
  const pathname = usePathname();
  switch (true) {
    case pathname.includes("valves"):
      return `/dashboard/valves/edit/`;
    default:
      throw new Error("Nie można odnaleźć ścieżki");
  }
};
