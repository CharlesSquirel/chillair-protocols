import toast from "react-hot-toast";

type ToastType = "success" | "error";
type FormType = "protocols" | "users" | "firma" | string;
type ActionType = "edit" | "add";

export const sendToast = (
  toastType: ToastType,
  formType?: FormType,
  actionType?: ActionType,
) => {
  if (toastType === "error") {
    return toast.error("Wystąpił problem z formularzem");
  }
  let toastMessage =
    actionType === "add" ? "Pomyślnie dodano" : "Pomyślnie zmieniono";
  toastMessage +=
    formType === "firma"
      ? " siedzibę"
      : formType === "users"
        ? " użytkownika"
        : " protokół";
  return toast.success(toastMessage);
};
