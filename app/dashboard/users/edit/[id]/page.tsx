"use client";

import UserForm from "@/components/Forms/UserForm/UserForm";
import { useGetUser } from "@/utils/hooks/useGetUser";
import { FormType } from "@/utils/types/form";

interface UserEditProps {
  params: {
    id: string;
  };
}

const UserEdit: React.FC<UserEditProps> = ({ params: { id } }) => {
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
      formType={FormType.VALVE_EDIT}
      id={id}
    />
  );
};

export default UserEdit;
