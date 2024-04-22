import { usePathname } from "next/navigation";
import { deleteValve } from "../actions/deleteValve";

export const useGetDeleteHandler = () => {
  const pathname = usePathname();

  switch (true) {
    case pathname.includes("valves"):
      return deleteValve;

    default:
      throw new Error("Nie znaleziono rekordu");
  }
};
