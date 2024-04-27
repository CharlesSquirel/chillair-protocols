"use client";

import { UserValidationSchema } from "@/utils/zod/userValidationSchema";
import FormContainer from "../FormContainer/FormContainer";
import FormFieldset from "../FormFieldset/FormFieldset";
import InputGroup from "../InputGroup/InputGroup";
import InputRow from "../InputRow/InputRow";
import TextInput from "../TextInput/TextInput";
import SubmitFormButton from "../SubmitFormButton/SubmitFormButton";
import { FormType } from "@/utils/types/form";
import { createUser } from "@/utils/actions/createUser";

interface UserFormProps {
  formType?: FormType;
}

export default function UserForm({ formType }: UserFormProps) {
  return (
    <FormContainer
      title="Dodaj nowego użytkownika"
      closeUrl="/dashboard"
      onSubmitForm={createUser}
      validationSchema={UserValidationSchema}
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
              placeholder="Wpisz hasło"
              name="password"
              label="Hasło"
              type="password"
            />
          </InputRow>
          <TextInput
            placeholder="Wpisz uprawnienie"
            name="userSignature"
            label="Nr uprawnienia"
          />
        </InputGroup>
        <SubmitFormButton label="Utwórz użytkownika" />
      </FormFieldset>
    </FormContainer>
  );
}
