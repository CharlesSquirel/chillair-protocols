"use client";

import ExtraMaterialsInfo from "@/components/ExtraMaterialsInfo/ExtraMaterialsInfo";
import FormContainer from "@/components/FormContainer/FormContainer";
import FormFieldset from "@/components/FormFieldset/FormFieldset";
import InputGroup from "@/components/InputGroup/InputGroup";
import InputRow from "@/components/InputRow/InputRow";
import NumberInput from "@/components/NumberInput/NumberInput";
import SelectInput from "@/components/SelectInput/SelectInput";
import SubmitFormButton from "@/components/SubmitFormButton/SubmitFormButton";
import TextInput from "@/components/TextInput/TextInput";
import TextareaInput from "@/components/TextareaInput/TextareaInput";
import { createHumidifier } from "@/utils/actions/createHumidifier";
import { FormType } from "@/utils/types/form";
import { HumidifierValidationSchema } from "@/utils/zod/humidifierValidation";

export default function HumidifiersAdd() {
  return (
    <FormContainer
      title="Protokół przeglądu nawilżacza"
      onSubmitForm={createHumidifier}
      validationSchema={HumidifierValidationSchema}
      closeUrl="/dashboard/humidifiers"
      formType={FormType.HUMIDIFIER_ADD}
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
      <FormFieldset title="Parametry zasilania tabliczki znamionowej">
        <InputGroup>
          <InputRow>
            <NumberInput
              placeholder="Wpisz napięcie"
              label="Napięcie (V)"
              name="nameplateVoltage"
            />
            <NumberInput
              placeholder="Wpisz fazę(y)"
              label="Faza(y)"
              name="nameplatePhase"
            />
            <NumberInput
              placeholder="Wpisz pobór"
              label="Znamionowy pobór prądu (A)"
              name="nameplateCurrentDraw"
            />
          </InputRow>
        </InputGroup>
      </FormFieldset>
      <FormFieldset title="Parametry zasilania pomierzone">
        <InputGroup title="Napięcie">
          <InputRow title="Cylinder 1">
            <NumberInput
              placeholder="(V)"
              label="L1-L2"
              name="cylinders.0.voltage1"
            />
            <NumberInput
              placeholder="(V)"
              label="L1-L3"
              name="cylinders.0.voltage2"
            />
            <NumberInput
              placeholder="(V)"
              label="L2-L3"
              name="cylinders.0.voltage3"
            />
          </InputRow>
          <InputRow title="Cylinder 2">
            <NumberInput
              placeholder="(V)"
              label="L1-L2"
              name="cylinders.1.voltage1"
            />
            <NumberInput
              placeholder="(V)"
              label="L1-L3"
              name="cylinders.1.voltage2"
            />
            <NumberInput
              placeholder="(V)"
              label="L2-L3"
              name="cylinders.1.voltage3"
            />
          </InputRow>
        </InputGroup>
        <InputGroup title="Natężenie">
          <InputRow title="Cylinder 1">
            <NumberInput
              placeholder="(A)"
              label="L1"
              name="cylinders.0.amper1"
            />
            <NumberInput
              placeholder="(A)"
              label="L2"
              name="cylinders.0.amper2"
            />
            <NumberInput
              placeholder="(A)"
              label="L3"
              name="cylinders.0.amper3"
            />
          </InputRow>
          <InputRow title="Cylinder 2">
            <NumberInput
              placeholder="(A)"
              label="L1"
              name="cylinders.1.amper1"
            />
            <NumberInput
              placeholder="(A)"
              label="L2"
              name="cylinders.1.amper2"
            />
            <NumberInput
              placeholder="(A)"
              label="L3"
              name="cylinders.1.amper3"
            />
          </InputRow>
        </InputGroup>
      </FormFieldset>
      <FormFieldset title="Zabezpieczenie zasilania">
        <InputGroup>
          <InputRow>
            <TextInput
              placeholder="Wpisz typ zabezpieczenia"
              label="Typ zabezpieczenia"
              name="protectionType"
            />
            <NumberInput
              placeholder="(A)"
              label="Prąd znamionowy (A)"
              name="ratedCurrent"
            />
          </InputRow>
        </InputGroup>
      </FormFieldset>
      <FormFieldset>
        <InputGroup>
          <TextareaInput
            placeholder="Wpisz uwagi"
            label="Uwagi (opcjonalnie)"
            name="description"
          />
        </InputGroup>
      </FormFieldset>
      <ExtraMaterialsInfo />
      <SubmitFormButton />
    </FormContainer>
  );
}
