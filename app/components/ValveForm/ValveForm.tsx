import { ValvesValidationSchema } from "@/utils/zod/valvesValidationSchema";
import ExtraValvesInfo from "../ExtraValvesInfo/ExtraValvesInfo";
import FormContainer from "../FormContainer/FormContainer";
import FormFieldset from "../FormFieldset/FormFieldset";
import InputGroup from "../InputGroup/InputGroup";
import SelectInput from "../SelectInput/SelectInput";
import SendClientEmail from "../SendClientEmail/SendClientEmail";
import SubmitFormButton from "../SubmitFormButton/SubmitFormButton";
import TextInput from "../TextInput/TextInput";
import TextareaInput from "../TextareaInput/TextareaInput";
import { DefaultValues, FieldValues } from "react-hook-form";

type SubmitFunction<T> = (data: T) => void;

interface ValveFormProps<T extends FieldValues> {
  onSubmitForm: SubmitFunction<T>;
  defaultValues?: DefaultValues<T>;
}

export default function ValveForm<T extends FieldValues>({
  onSubmitForm,
  defaultValues,
}: ValveFormProps<T>) {
  return (
    <FormContainer
      title="Protokół badania zaworów bezpieczeństwa"
      onSubmitForm={onSubmitForm}
      validationSchema={ValvesValidationSchema}
      closeUrl="/dashboard/valves"
      defaultValues={defaultValues}
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
      <FormFieldset>
        <InputGroup title="Uwagi">
          <TextareaInput
            placeholder="Wpisz swoje uwagi"
            label=""
            name="description"
          />
        </InputGroup>
      </FormFieldset>
      <FormFieldset title="Opcje wysyłki">
        <InputGroup>
          <SendClientEmail />
        </InputGroup>
      </FormFieldset>
      <SubmitFormButton label="Utwórz i pobierz" />
    </FormContainer>
  );
}
