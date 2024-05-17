import UserEdit from "@/components/Forms/UserForm/UserEdit";
import { metaTitle } from "@/data/metaTitles";
import { FormEditPropsAsParams } from "@/utils/types/common";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: metaTitle.USER_EDIT,
};

export default function UserEdition({ params: { id } }: FormEditPropsAsParams) {
  return <UserEdit id={id} />;
}
