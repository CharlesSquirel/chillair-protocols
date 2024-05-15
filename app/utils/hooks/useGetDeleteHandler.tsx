import { usePathname } from "next/navigation";
import { deleteChiller } from "../actions/delete/deleteChiller";
import { deleteValve } from "../actions/delete/deleteValve";

export const useGetDeleteHandler = () => {
  const pathname = usePathname();

  switch (true) {
    case pathname.includes("valves"):
      return deleteValve;
    case pathname.includes("chiller"):
      return deleteChiller;

    default:
      throw new Error("Nie znaleziono rekordu");
  }
};
