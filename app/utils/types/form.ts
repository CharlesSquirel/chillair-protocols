export enum FormType {
  VALVE_ADD = "valveAdd",
  VALVE_EDIT = "valveEdit",
  FIRMA_ADD = "firmaAdd",
  FIRMA_EDIT = "firmaEdit",
  USER_ADD = "userAdd",
  USER_EDIT = "userEdit",
  CHILLER_ADD = "chillerAdd",
  CHILLER_EDIT = "chillerEdit",
  HUMIDIFIER_ADD = "humidifierAdd",
  HUMIDIFIER_EDIT = "humidifierEdit",
}

export type SubmitEditFunction<T> = (data: T, id?: string) => void;
export type SubmitFunction<T> = (data: T) => void;
export type SubmitHandlerType<T> = SubmitFunction<T> | SubmitEditFunction<T>;

export interface FormProps {
  formType: FormType;
  id?: string;
}
