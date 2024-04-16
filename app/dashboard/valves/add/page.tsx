"use client";

import FormFieldset from "@/components/FormFieldset/FormFieldset";
import InputGroup from "@/components/InputGroup/InputGroup";
import TextInput from "@/components/TextInput/TextInput";
import FormContainer from "@/components/FormContainer/FormContainer";
import ExtraValvesInfo from "@/components/ExtraValvesInfo/ExtraValvesInfo";
import CheckboxInput from "@/components/CheckboxInput/CheckboxInput";
import SendClientEmail from "@/components/SendClientEmail/SendClientEmail";
import SubmitFormButton from "@/components/SubmitFormButton/SubmitFormButton";
import SelectInput from "@/components/SelectInput/SelectInput";
import { createValve } from "@/utils/actions/createValve";
import { ValvesValidationSchema } from "@/utils/zod/valvesValidationSchema";

export default function ValvesAdd() {
  return (
    <FormContainer
      title="Protokół badania zaworów bezpieczeństwa"
      onSubmitForm={createValve}
      validationSchema={ValvesValidationSchema}
    >
      <FormFieldset title="Informacje podstawowe">
        <InputGroup>
          <SelectInput
            placeholder="Wybierz obiekt"
            name="firma"
            label="Obiekt"
            data={["Obiekt 1", "Obiekt 2", "Obiekt 3"]}
            className="w-[520px]"
          />
          <TextInput
            placeholder="Wpisz typ urządzenia"
            name="type"
            label="Typ urządzenia"
          />
          <TextInput
            placeholder="Wpisz numer seryjny urządzenia"
            name="serialNumber"
            label="Numer seryjny"
          />
        </InputGroup>
      </FormFieldset>
      <FormFieldset title="Informacje dodatkowe">
        <ExtraValvesInfo />
      </FormFieldset>
      <FormFieldset title="Opcje wysyłki">
        <InputGroup>
          <CheckboxInput label="Wyślij do mnie" name="userEmailPerm" />
          <SendClientEmail />
        </InputGroup>
      </FormFieldset>
      <SubmitFormButton label="Utwórz i pobierz" />
    </FormContainer>
  );
}
