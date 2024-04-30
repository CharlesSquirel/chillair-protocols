import { createChiller } from "../actions/createChiller";
import { createValve } from "../actions/createValve";
import { editValve } from "../actions/editValve";
import { FormType } from "../types/form";

export const getSubmitHandler = (formType: FormType) => {
  switch (formType) {
    case FormType.VALVE_ADD:
      return createValve as any;
    case FormType.VALVE_EDIT:
      return editValve as any;
    case FormType.CHILLER_ADD:
      return createChiller as any;
    default:
      throw new Error("Nieprawidłowy typ formularza");
  }
};
