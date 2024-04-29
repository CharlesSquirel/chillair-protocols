import { FormType } from "../types/form";

export const findToastFormType = (formType: FormType): string | undefined => {
  if (!formType) {
    throw Error("Brakuje formType w formContainer");
  }
  let toastFormType: string | undefined = formType.toLowerCase();
  switch (true) {
    case toastFormType.includes("firma"):
      toastFormType = "firma";
      break;
    case toastFormType.includes("user"):
      toastFormType = "users";
      break;
    case toastFormType.includes("valve"):
      toastFormType = "protocols";
      break;
    default:
      toastFormType = undefined;
      break;
  }
  return toastFormType;
};
