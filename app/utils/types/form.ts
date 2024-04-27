export enum FormType {
  VALVE_ADD = "valveAdd",
  VALVE_EDIT = "valveEdit",
  USER_ADD = "userAdd",
}

export type SubmitEditFunction<T> = (data: T, id?: string) => void;
export type SubmitFunction<T> = (data: T) => void;
export type SubmitHandlerType<T> = SubmitFunction<T> | SubmitEditFunction<T>;
