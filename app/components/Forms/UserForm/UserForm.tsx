"use client";

import FormContainer from "@/components/FormContainer/FormContainer";
import FormFieldset from "@/components/FormFieldset/FormFieldset";
import InputGroup from "@/components/InputGroup/InputGroup";
import InputRow from "@/components/InputRow/InputRow";
import SubmitFormButton from "@/components/SubmitFormButton/SubmitFormButton";
import TextInput from "@/components/TextInput/TextInput";
import { createUser } from "@/utils/actions/createUser";
import { FormProps } from "@/utils/types/form";
import { UserValidationSchema } from "@/utils/zod/userValidationSchema";

export default function UserForm({ formType }: FormProps) {
  return (
    <FormContainer
      title="Dodaj nowego użytkownika"
      closeUrl="/dashboard"
      onSubmitForm={createUser}
      validationSchema={UserValidationSchema}
      formType={formType}
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
