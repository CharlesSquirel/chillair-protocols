"use client";

import SubmitFormButton from "@/components/Buttons/SubmitFormButton/SubmitFormButton";
import FormContainer from "@/components/Containers/FormContainer/FormContainer";
import FormFieldset from "@/components/Containers/FormFieldset/FormFieldset";
import InputGroup from "@/components/Containers/InputGroup/InputGroup";
import InputRow from "@/components/Containers/InputRow/InputRow";
import NumberInput from "@/components/Inputs/NumberInput/NumberInput";
import TextInput from "@/components/Inputs/TextInput/TextInput";
import { getSubmitHandler } from "@/utils/switch/getSubmitHandler";
import { FirmaDTO } from "@/utils/types/firma";
import { FormProps } from "@/utils/types/form";
import { FirmaValidationSchema } from "@/utils/zod/firmaValidationSchema";

interface FirmaFormProps extends FormProps {
  defaultValues?: FirmaDTO;
  id?: string;
}

export default function FirmaForm({
  id,
  defaultValues,
  formType,
}: FirmaFormProps) {
  const onSubmitForm = getSubmitHandler(formType);
  return (
    <FormContainer
      title="Stwórz nową siedzibę"
      closeUrl="/dashboard/firma"
      onSubmitForm={onSubmitForm}
      defaultValues={defaultValues}
      validationSchema={FirmaValidationSchema}
      formType={formType}
      id={id}
    >
      <FormFieldset title="Dane podstawowe">
        <InputGroup>
          <InputRow>
            <TextInput
              label="Nazwa siedziby"
              placeholder="Wpisz nazwę siedziby"
              name="fullName"
              defaultValues={defaultValues}
            />
            <TextInput
              label="Skrócona nazwa"
              placeholder="Wpisz skróconą nazwę siedziby"
              name="shortName"
              defaultValues={defaultValues}
            />
          </InputRow>
        </InputGroup>
      </FormFieldset>
      <FormFieldset title="Dane adresowe">
        <InputGroup>
          <InputRow>
            <TextInput
              label="Adres siedziby"
              placeholder="Wpisz ulicę siedziby"
              name="street"
              defaultValues={defaultValues}
            />
            <NumberInput
              label="Numer domu"
              placeholder="Wpisz numer domu siedziby"
              name="houseNumber"
              defaultValues={defaultValues}
            />
            <NumberInput
              label="Numer lokalu (opcjonalnie)"
              placeholder="Wpisz numer lokalu siedziby"
              name="localNumber"
              defaultValues={defaultValues}
            />
          </InputRow>
          <InputRow>
            <TextInput
              label="Kod pocztowy"
              placeholder="Wpisz kod pocztowy"
              name="postCode"
              defaultValues={defaultValues}
            />
            <TextInput
              label="Miasto"
              placeholder="Wpisz miasto siedziby"
              name="city"
              defaultValues={defaultValues}
            />
          </InputRow>
        </InputGroup>
      </FormFieldset>
      <FormFieldset title="Dane kontaktowe">
        <InputGroup>
          <InputRow>
            <TextInput
              label="Telefon kontaktowy"
              placeholder="Wpisz telefon kontaktowy siedziby"
              name="tel"
              defaultValues={defaultValues}
            />
            <TextInput
              label="Email kontaktowy"
              placeholder="Wpisz email kontaktowy siedziby"
              name="contactEmail"
              defaultValues={defaultValues}
            />
          </InputRow>
        </InputGroup>
      </FormFieldset>
      <SubmitFormButton formType={formType} />
    </FormContainer>
  );
}
