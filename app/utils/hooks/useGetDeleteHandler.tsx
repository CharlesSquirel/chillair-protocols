import { usePathname } from "next/navigation";
import { deleteValve } from "../actions/deleteValve";
import { deleteChiller } from "../actions/deleteChiller";

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
