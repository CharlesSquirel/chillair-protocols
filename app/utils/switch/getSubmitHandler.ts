import { createValve } from "../actions/createValve";

export const getSubmitHandler = (formType: "valveAdd" | "valveEdit") => {
  switch (formType) {
    case "valveAdd":
      return createValve;
    case "valveEdit":
      return createValve;
    default:
      throw new Error("Nieprawidłowy typ formularza");
  }
};
