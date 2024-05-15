import {
  chillerFreonOptions,
  chillerGasMethods,
  chillerMethodOptions,
  chillerPollutionOptions,
  chillerSwitchOptions,
  chillerTermalInsulationOptions,
  chillerValidOptions,
  chillerWaterOptions,
} from "@/data/selectOptions";
import { getSubmitHandler } from "@/utils/switch/getSubmitHandler";
import { FormType } from "@/utils/types/form";
import { ChillerValidationSchema } from "@/utils/zod/chillerValidationSchema";
import { Circuit, PowerConsumption } from "@prisma/client";
import { DefaultValues, FieldValues } from "react-hook-form";
import SubmitFormButton from "../../Buttons/SubmitFormButton/SubmitFormButton";
import FormContainer from "../../Containers/FormContainer/FormContainer";
import FormFieldset from "../../Containers/FormFieldset/FormFieldset";
import InputGroup from "../../Containers/InputGroup/InputGroup";
import InputRow from "../../Containers/InputRow/InputRow";
import ExtraChillerCircuits from "../../ExtraInfos/ExtraChillerCircuits/ExtraChillerCircuits";
import ExtraChillerCollingCircuits from "../../ExtraInfos/ExtraChillerCollingCircuits/ExtraChillerCollingCircuits";
import ExtraChillerCurrentInfo from "../../ExtraInfos/ExtraChillerCurrentInfo/ExtraChillerCurrentInfo";
import ExtraChillerSettingTemp from "../../ExtraInfos/ExtraChillerSettingTemp/ExtraChillerSettingTemp";
import NumberInput from "../../Inputs/NumberInput/NumberInput";
import SelectInput from "../../Inputs/SelectInput/SelectInput";
import SelectWithNumberInput from "../../Inputs/SelectWithNumberInput/SelectWithNumberInput";
import TextInput from "../../Inputs/TextInput/TextInput";
import TextareaInput from "../../Inputs/TextareaInput/TextareaInput";

interface ChillerFormProps<T extends FieldValues> {
  defaultValues?: DefaultValues<T>;
  formType: FormType;
  id?: string;
  extraChillerPowerDataEdit?: PowerConsumption[];
  extraChillerCircuitsDataEdit?: Circuit[];
}

export default function ChillerForm<T extends FieldValues>({
  formType,
  defaultValues,
  extraChillerCircuitsDataEdit,
  extraChillerPowerDataEdit,
}: ChillerFormProps<T>) {
  const onSubmitForm = getSubmitHandler(formType);
  return (
    <FormContainer
      formType={formType}
      title="Protokół przegląd agregatu chłodniczego z kontrolą szczelności"
      closeUrl="/dashboard/chillers"
      validationSchema={ChillerValidationSchema}
      onSubmitForm={onSubmitForm}
      defaultValues={defaultValues}
    >
      <FormFieldset title="Informacje podstawowe">
        <InputGroup>
          <SelectInput
            name="firma"
            data={["Obiekt 1", "Obiekt 2", "Obiekt 3"]}
            placeholder="Wybierz obiekt"
            label="Obiekt"
            defaultValues={defaultValues}
          />
          <TextInput
            name="type"
            placeholder="Wpisz typ urządzenia"
            label="Typ"
            defaultValues={defaultValues}
          />
          <TextInput
            name="serialNumber"
            placeholder="Wpisz nr seryjny urządzenia"
            label="Nr seryjny"
            defaultValues={defaultValues}
          />
          <TextInput
            name="driverType"
            placeholder="Wpisz typ sterownika"
            label="Typ sterownika"
            defaultValues={defaultValues}
          />
        </InputGroup>
      </FormFieldset>

      <FormFieldset title="Informacje szczegółowe">
        <InputGroup title="Ocena jakości">
          <SelectInput
            name="pollution"
            data={chillerPollutionOptions}
            label="Stopień zanieczyszczenia powierzchni wymiany ciepła"
            placeholder="Wybierz stopień"
            defaultValues={defaultValues}
          />
          <SelectInput
            name="termalInsulation"
            data={chillerTermalInsulationOptions}
            label="Stan techniczny izolacji termicznej"
            placeholder="Wybierz stan"
            defaultValues={defaultValues}
          />
          <SelectInput
            name="termalAndPressureControl"
            data={chillerValidOptions}
            label="Kontrola podpór, drgań i przemieszczeń powodowanych temperaturą i ciśnieniem"
            placeholder="Wybierz opcję"
            defaultValues={defaultValues}
          />
          <SelectInput
            name="oilLevel"
            data={chillerValidOptions}
            label="Poziom oleju w sprężarkach"
            placeholder="Wybierz opcję"
            defaultValues={defaultValues}
          />
          <SelectInput
            name="indicatorColor"
            data={chillerValidOptions}
            label="Kolor wskaźnika wilgotności"
            placeholder="Wybierz opcję"
            defaultValues={defaultValues}
          />
          <SelectInput
            name="tightSystem"
            data={chillerValidOptions}
            label="Szczelność układu chłodniczego"
            placeholder="Wybierz opcję"
            defaultValues={defaultValues}
          />
          <SelectInput
            name="currentConsumption"
            data={chillerValidOptions}
            label="Pobór prądu przez sprężarki"
            placeholder="Wybierz opcję"
            defaultValues={defaultValues}
          />
          <SelectInput
            name="fansConsumption"
            data={chillerValidOptions}
            label="Pobór prądu przez wentylatory"
            placeholder="Wybierz opcję"
            defaultValues={defaultValues}
          />
        </InputGroup>

        <InputGroup title="Freon">
          <InputRow>
            <SelectInput
              name="freonType"
              data={chillerFreonOptions}
              label="Rodzaj freonu"
              placeholder="Wybierz opcję"
              defaultValues={defaultValues}
            />
            <NumberInput
              name="freonAmount"
              label="Ilość czynnika"
              placeholder="Wpisz wartość"
              defaultValues={defaultValues}
            />
          </InputRow>
        </InputGroup>

        <InputGroup>
          <NumberInput
            name="airTemperature"
            label="Temperatura powietrza zewnętrznego (°C)"
            placeholder="Wpisz wartość"
            defaultValues={defaultValues}
          />
        </InputGroup>

        <InputGroup title="Zmierzone napięcie">
          <InputRow>
            <NumberInput
              name="supplyVoltage"
              label="Napięcie zasilające (V)"
              placeholder="Wpisz wartość"
              defaultValues={defaultValues}
            />
            <NumberInput
              name="supplyPhase"
              label="Faz"
              placeholder="Wpisz wartość"
              defaultValues={defaultValues}
            />
          </InputRow>
          <InputRow>
            <NumberInput
              name="measuredVoltage_1"
              label="Napięcie L1-L2 (V)"
              placeholder="Wpisz wartość"
              defaultValues={defaultValues}
            />
            <NumberInput
              name="measuredVoltage_2"
              label="Napięcie L1-L (V)"
              placeholder="Wpisz wartość"
              defaultValues={defaultValues}
            />
            <NumberInput
              name="measuredVoltage_3"
              label="Napięcie L2-L3 (V)"
              placeholder="Wpisz wartość"
              defaultValues={defaultValues}
            />
          </InputRow>
          <SelectWithNumberInput
            selectName="interphaseOK"
            numberName="interphase"
            defaultValues={defaultValues}
          />
        </InputGroup>

        <InputGroup title="Wartości nastaw elementów zabezpieczających">
          <InputRow>
            <SelectInput
              name="highPressure"
              data={chillerSwitchOptions}
              label="Wyłącznik wysokiego ciśnienia"
              placeholder="Wybierz opcję"
              defaultValues={defaultValues}
            />
            <SelectInput
              name="lowPressure"
              data={chillerSwitchOptions}
              label="Wyłącznik niskiego ciśnienia"
              placeholder="Wybierz opcję"
              defaultValues={defaultValues}
            />
            <SelectInput
              name="antiFrezzeTermostat"
              data={chillerSwitchOptions}
              label="Termostat przeciwzamrożeniowy"
              placeholder="Wybierz opcję"
              defaultValues={defaultValues}
            />
          </InputRow>
        </InputGroup>

        <ExtraChillerCollingCircuits defaultValues={defaultValues} />

        <InputGroup title="System sterowania">
          <ExtraChillerSettingTemp defaultValues={defaultValues} />
          <SelectInput
            name="controlledParameter"
            data={chillerWaterOptions}
            label="Parametr kontrolowany temperatury"
            placeholder="Wybierz opcję"
            defaultValues={defaultValues}
          />
        </InputGroup>

        <InputGroup title="Zastosowana metoda">
          <InputRow>
            <SelectInput
              name="controlMethod"
              data={chillerMethodOptions}
              label="Zastosowana metoda kontroli szczelności"
              placeholder="Wybierz opcję"
              defaultValues={defaultValues}
            />
            <SelectInput
              name="leakGasTest"
              data={chillerGasMethods}
              label="Próba szczelności za pomocą gazu obojętnego"
              placeholder="Wybierz opcję"
              defaultValues={defaultValues}
            />
          </InputRow>
        </InputGroup>

        <InputGroup title="Ilość dodanego/odzyskanego gazu">
          <InputRow>
            <NumberInput
              name="gasAdded"
              label="Ilość dodanego gazu (kg)"
              placeholder="Wpisz ilość gazu"
              defaultValues={defaultValues}
            />
            <NumberInput
              name="gasRegain"
              label="Ilość odzyskanego gazu (kg)"
              placeholder="Wpisz ilość gazu"
              defaultValues={defaultValues}
            />
          </InputRow>
        </InputGroup>
      </FormFieldset>

      <FormFieldset title="Dane poboru prądu">
        <ExtraChillerCurrentInfo
          defaultValues={defaultValues}
          extraChillerPowerDataEdit={extraChillerPowerDataEdit}
        />
      </FormFieldset>

      <FormFieldset title="Parametry obiegów">
        <ExtraChillerCircuits
          extraChillerCircuitsDataEdit={extraChillerCircuitsDataEdit}
        />
      </FormFieldset>

      <InputGroup title="Uwagi (opcjonalnie)">
        <TextareaInput
          name="description"
          label=""
          placeholder="Wpisz swoje uwagi"
          defaultValues={defaultValues}
        />
      </InputGroup>

      <SubmitFormButton formType={formType} />
    </FormContainer>
  );
}
