import UserForm from "@/components/Forms/UserForm/UserForm";
import { FormType } from "@/utils/types/form";

export default function Page() {
  return <UserForm formType={FormType.USER_ADD} />;
}
