import UserForm from "@/components/Forms/UserForm/UserForm";
import { metaTitle } from "@/data/metaTitles";
import { FormType } from "@/utils/types/form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: metaTitle.USER_ADD,
};

export default function UserAdd() {
  return <UserForm formType={FormType.USER_ADD} />;
}
