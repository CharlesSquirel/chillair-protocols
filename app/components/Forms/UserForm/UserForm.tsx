"use client";

import FormContainer from "@/components/FormContainer/FormContainer";
import FormFieldset from "@/components/FormFieldset/FormFieldset";
import InputGroup from "@/components/InputGroup/InputGroup";
import InputRow from "@/components/InputRow/InputRow";
import SubmitFormButton from "@/components/SubmitFormButton/SubmitFormButton";
import TextInput from "@/components/TextInput/TextInput";
import { createUser } from "@/utils/actions/createUser";
import { FormProps } from "@/utils/types/form";
import { UserDTO } from "@/utils/types/user";
import { UserValidationSchema } from "@/utils/zod/userValidationSchema";

interface UserFormProps extends FormProps {
  defaultValues?: UserDTO;
  id?: string;
}

export default function UserForm({
  formType,
  defaultValues,
  id,
}: UserFormProps) {
  return (
    <FormContainer
      title="Dodaj nowego użytkownika"
      closeUrl="/dashboard/users"
      onSubmitForm={createUser}
      validationSchema={UserValidationSchema}
      formType={formType}
      defaultValues={defaultValues}
      id={id}
    >
      <FormFieldset>
        <InputGroup>
          <InputRow>
            <TextInput placeholder="Wpisz imię" name="firstName" label="Imię" />
            <TextInput
              placeholder="Wpisz nazwisko"
              name="lastName"
              label="Nazwisko"
            />
          </InputRow>
          <InputRow>
            <TextInput placeholder="Wpisz email" name="email" label="Email" />
            <TextInput
              placeholder="Wpisz uprawnienie"
              name="userSignature"
              label="Nr uprawnienia"
            />
          </InputRow>
        </InputGroup>
        <SubmitFormButton />
      </FormFieldset>
    </FormContainer>
  );
}
