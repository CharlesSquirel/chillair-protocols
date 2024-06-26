"use client";

import { getSubmitHandler } from "@/utils/switch/getSubmitHandler";
import { FormProps } from "@/utils/types/form";
import { ValveDTO } from "@/utils/types/valves";
import { ValvesValidationSchema } from "@/utils/zod/valvesValidationSchema";
import SubmitFormButton from "../../Buttons/SubmitFormButton/SubmitFormButton";
import FormContainer from "../../Containers/FormContainer/FormContainer";
import FormFieldset from "../../Containers/FormFieldset/FormFieldset";
import InputGroup from "../../Containers/InputGroup/InputGroup";
import InputRow from "../../Containers/InputRow/InputRow";
import ExtraValvesInfo from "../../ExtraInfos/ExtraValvesInfo/ExtraValvesInfo";
import SelectInput from "../../Inputs/SelectInput/SelectInput";
import SendClientEmail from "../../Inputs/SendClientEmail/SendClientEmail";
import TextInput from "../../Inputs/TextInput/TextInput";
import TextareaInput from "../../Inputs/TextareaInput/TextareaInput";

interface ValveFormProps extends FormProps {
  defaultValues?: ValveDTO;
  firma: string[];
}

export default function ValveForm({
  defaultValues,
  formType,
  id,
  firma,
}: ValveFormProps) {
  const onSubmitForm = getSubmitHandler(formType);
  return (
    <FormContainer
      title="Protokół badania zaworów bezpieczeństwa"
      onSubmitForm={onSubmitForm}
      validationSchema={ValvesValidationSchema}
      closeUrl="/dashboard/valves"
      defaultValues={defaultValues}
      id={id}
      formType={formType}
    >
      <FormFieldset title="Informacje podstawowe">
        <InputGroup>
          <SelectInput
            placeholder="Wybierz obiekt"
            name="firma"
            label="Obiekt"
            data={firma}
            className="w-[520px]"
            defaultValues={defaultValues}
          />
          <TextInput
            placeholder="Wpisz typ urządzenia"
            name="type"
            label="Typ urządzenia"
            defaultValues={defaultValues}
          />
          <TextInput
            placeholder="Wpisz numer seryjny urządzenia"
            name="serialNumber"
            label="Numer seryjny"
            defaultValues={defaultValues}
          />
        </InputGroup>
      </FormFieldset>
      <FormFieldset title="Informacje dodatkowe">
        <ExtraValvesInfo defaultValues={defaultValues} />
      </FormFieldset>
      <FormFieldset>
        <InputGroup>
          <InputRow title="Uwagi">
            <TextareaInput
              placeholder="Wpisz swoje uwagi"
              label=""
              name="description"
              defaultValues={defaultValues}
            />
          </InputRow>
        </InputGroup>
      </FormFieldset>
      <FormFieldset title="Opcje wysyłki">
        <InputGroup>
          <SendClientEmail />
        </InputGroup>
      </FormFieldset>
      <SubmitFormButton formType={formType} />
    </FormContainer>
  );
}
