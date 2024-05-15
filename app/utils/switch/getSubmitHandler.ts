import { createChiller } from "../actions/create/createChiller";
import { createFirma } from "../actions/create/createFirma";
import { createUser } from "../actions/create/createUser";
import { createValve } from "../actions/create/createValve";
import { editChiller } from "../actions/edit/editChiller";
import { editFirma } from "../actions/edit/editFirma";
import { editUser } from "../actions/edit/editUser";
import { editValve } from "../actions/edit/editValve";
import { FormType } from "../types/form";

export const getSubmitHandler = (formType: FormType) => {
  switch (formType) {
    case FormType.VALVE_ADD:
      return createValve as any;
    case FormType.VALVE_EDIT:
      return editValve as any;
    case FormType.CHILLER_ADD:
      return createChiller as any;
    case FormType.CHILLER_EDIT:
      return editChiller as any;
    case FormType.USER_ADD:
      return createUser as any;
    case FormType.USER_EDIT:
      return editUser as any;
    case FormType.FIRMA_ADD:
      return createFirma as any;
    case FormType.FIRMA_EDIT:
      return editFirma as any;
    default:
      throw new Error("Nieprawidłowy typ formularza");
  }
};
