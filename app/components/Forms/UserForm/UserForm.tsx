"use client";

import SubmitFormButton from "@/components/Buttons/SubmitFormButton/SubmitFormButton";
import FormContainer from "@/components/Containers/FormContainer/FormContainer";
import FormFieldset from "@/components/Containers/FormFieldset/FormFieldset";
import InputGroup from "@/components/Containers/InputGroup/InputGroup";
import InputRow from "@/components/Containers/InputRow/InputRow";
import TextInput from "@/components/Inputs/TextInput/TextInput";
import { getSubmitHandler } from "@/utils/switch/getSubmitHandler";
import { FormProps } from "@/utils/types/form";
import { UserDTO } from "@/utils/types/user";
import { UserValidationSchema } from "@/utils/zod/userValidationSchema";

interface UserFormProps extends FormProps {
  defaultValues?: UserDTO;
  id?: string;
}

export default function UserForm({
  formType,
  id,
  defaultValues,
}: UserFormProps) {
  const onSubmitForm = getSubmitHandler(formType);
  return (
    <FormContainer
      title="Dodaj nowego użytkownika"
      closeUrl="/dashboard/users"
      onSubmitForm={onSubmitForm}
      defaultValues={defaultValues}
      validationSchema={UserValidationSchema}
      formType={formType}
      id={id}
    >
      <FormFieldset>
        <InputGroup>
          <InputRow>
            <TextInput
              placeholder="Wpisz imię"
              name="firstName"
              label="Imię"
              defaultValues={defaultValues}
            />
            <TextInput
              placeholder="Wpisz nazwisko"
              name="lastName"
              label="Nazwisko"
              defaultValues={defaultValues}
            />
          </InputRow>
          <InputRow>
            <TextInput
              placeholder="Wpisz email"
              name="email"
              label="Email"
              defaultValues={defaultValues}
            />
            <TextInput
              placeholder="Wpisz uprawnienie"
              name="userSignature"
              label="Nr uprawnienia"
              defaultValues={defaultValues}
            />
          </InputRow>
        </InputGroup>
        <SubmitFormButton />
      </FormFieldset>
    </FormContainer>
  );
}
