"use client";

import UserForm from "@/components/Forms/UserForm/UserForm";
import { useGetUser } from "@/utils/hooks/useGetUser";
import { FormEditProps } from "@/utils/types/common";
import { FormType } from "@/utils/types/form";

const UserEdit: React.FC<FormEditProps> = ({ id }) => {
  const userData = useGetUser(id);
  if (!userData) {
    throw Error("Nie znaleziono użytkownika o podanym id!");
  }
  const editValues = {
    firstName: userData?.firstName,
    lastName: userData?.lastName,
    userSignature: userData?.userSignature,
    email: userData?.email,
  };

  return (
    <UserForm
      defaultValues={editValues}
      formType={FormType.USER_EDIT}
      id={id}
    />
  );
};

export default UserEdit;
