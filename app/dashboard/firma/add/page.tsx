"use client";

import FormContainer from "@/components/FormContainer/FormContainer";
import FormFieldset from "@/components/FormFieldset/FormFieldset";
import InputGroup from "@/components/InputGroup/InputGroup";
import InputRow from "@/components/InputRow/InputRow";
import NumberInput from "@/components/NumberInput/NumberInput";
import SubmitFormButton from "@/components/SubmitFormButton/SubmitFormButton";
import TextInput from "@/components/TextInput/TextInput";
import { createFirma } from "@/utils/actions/createFirma";
import { FirmaValidationSchema } from "@/utils/zod/firmaValidationSchema";

export default function FirmaAdd() {
  return (
    <FormContainer
      title="Stwórz nową siedzibę"
      validationSchema={FirmaValidationSchema}
      onSubmitForm={createFirma}
      closeUrl="/dashboard"
    >
      <FormFieldset title="Dane podstawowe">
        <InputGroup>
          <InputRow>
            <TextInput
              label="Nazwa siedziby"
              placeholder="Wpisz nazwę siedziby"
              name="name"
            />
            <TextInput
              label="Skrócona nazwa"
              placeholder="Wpisz skróconą nazwę siedziby"
              name="shortName"
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
            />
            <NumberInput
              label="Numer domu"
              placeholder="Wpisz numer domu siedziby"
              name="houseNumber"
            />
            <NumberInput
              label="Numer lokalu (opcjonalnie)"
              placeholder="Wpisz numer lokalu siedziby"
              name="localNumber"
            />
          </InputRow>
          <InputRow>
            <TextInput
              label="Kod pocztowy"
              placeholder="Wpisz kod pocztowy"
              name="postCode"
            />
            <TextInput
              label="Miasto"
              placeholder="Wpisz miasto siedziby"
              name="city"
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
            />
            <TextInput
              label="Email kontaktowy"
              placeholder="Wpisz email kontaktowy siedziby"
              name="contactEmail"
            />
          </InputRow>
        </InputGroup>
      </FormFieldset>
      <SubmitFormButton />
    </FormContainer>
  );
}
