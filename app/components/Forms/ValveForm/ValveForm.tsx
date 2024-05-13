import { getSubmitHandler } from "@/utils/switch/getSubmitHandler";
import { FormType } from "@/utils/types/form";
import { CreateValveCredentials } from "@/utils/types/valves";
import { ValvesValidationSchema } from "@/utils/zod/valvesValidationSchema";
import { ValvesInfoBlock } from "@prisma/client";
import { DefaultValues, FieldValues } from "react-hook-form";
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

interface ValveFormProps<T extends FieldValues> {
  defaultValues?: DefaultValues<T>;
  formType: FormType;
  id?: string;
  extraValvesDataEdit?: ValvesInfoBlock[];
}

export default function ValveForm<T extends FieldValues>({
  defaultValues,
  formType,
  id,
  extraValvesDataEdit,
}: ValveFormProps<T>) {
  const onSubmitForm = getSubmitHandler(formType);
  return (
    <FormContainer
      title="Protokół badania zaworów bezpieczeństwa"
      onSubmitForm={onSubmitForm}
      validationSchema={ValvesValidationSchema}
      closeUrl="/dashboard/valves"
      defaultValues={defaultValues as CreateValveCredentials}
      id={id}
      formType={formType}
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
        <ExtraValvesInfo extraValvesDataEdit={extraValvesDataEdit} />
      </FormFieldset>
      <FormFieldset>
        <InputGroup>
          <InputRow title="Uwagi">
            <TextareaInput
              placeholder="Wpisz swoje uwagi"
              label=""
              name="description"
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
