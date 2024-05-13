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
import { ChillerDTO } from "@/utils/types/chiller";
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
      defaultValues={defaultValues as ChillerDTO}
    >
      <FormFieldset title="Informacje podstawowe">
        <InputGroup>
          <SelectInput
            name="firma"
            data={["Obiekt 1", "Obiekt 2", "Obiekt 3"]}
            placeholder="Wybierz obiekt"
            label="Obiekt"
          />
          <TextInput
            name="type"
            placeholder="Wpisz typ urządzenia"
            label="Typ"
          />
          <TextInput
            name="serialNumber"
            placeholder="Wpisz nr seryjny urządzenia"
            label="Nr seryjny"
          />
          <TextInput
            name="driverType"
            placeholder="Wpisz typ sterownika"
            label="Typ sterownika"
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
          />
          <SelectInput
            name="termalInsulation"
            data={chillerTermalInsulationOptions}
            label="Stan techniczny izolacji termicznej"
            placeholder="Wybierz stan"
          />
          <SelectInput
            name="termalAndPressureControl"
            data={chillerValidOptions}
            label="Kontrola podpór, drgań i przemieszczeń powodowanych temperaturą i ciśnieniem"
            placeholder="Wybierz opcję"
          />
          <SelectInput
            name="oilLevel"
            data={chillerValidOptions}
            label="Poziom oleju w sprężarkach"
            placeholder="Wybierz opcję"
          />
          <SelectInput
            name="indicatorColor"
            data={chillerValidOptions}
            label="Kolor wskaźnika wilgotności"
            placeholder="Wybierz opcję"
          />
          <SelectInput
            name="tightSystem"
            data={chillerValidOptions}
            label="Szczelność układu chłodniczego"
            placeholder="Wybierz opcję"
          />
          <SelectInput
            name="currentConsumption"
            data={chillerValidOptions}
            label="Pobór prądu przez sprężarki"
            placeholder="Wybierz opcję"
          />
          <SelectInput
            name="fansConsumption"
            data={chillerValidOptions}
            label="Pobór prądu przez wentylatory"
            placeholder="Wybierz opcję"
          />
        </InputGroup>

        <InputGroup title="Freon">
          <InputRow>
            <SelectInput
              name="freonType"
              data={chillerFreonOptions}
              label="Rodzaj freonu"
              placeholder="Wybierz opcję"
            />
            <NumberInput
              name="freonAmount"
              label="Ilość czynnika"
              placeholder="Wpisz wartość"
            />
          </InputRow>
        </InputGroup>

        <InputGroup>
          <NumberInput
            name="airTemperature"
            label="Temperatura powietrza zewnętrznego (°C)"
            placeholder="Wpisz wartość"
          />
        </InputGroup>

        <InputGroup title="Zmierzone napięcie">
          <InputRow>
            <NumberInput
              name="supplyVoltage"
              label="Napięcie zasilające (V)"
              placeholder="Wpisz wartość"
            />
            <NumberInput
              name="supplyPhase"
              label="Faz"
              placeholder="Wpisz wartość"
            />
          </InputRow>
          <InputRow>
            <NumberInput
              name="measuredVoltage_1"
              label="Napięcie L1-L2 (V)"
              placeholder="Wpisz wartość"
            />
            <NumberInput
              name="measuredVoltage_2"
              label="Napięcie L1-L (V)"
              placeholder="Wpisz wartość"
            />
            <NumberInput
              name="measuredVoltage_3"
              label="Napięcie L2-L3 (V)"
              placeholder="Wpisz wartość"
            />
          </InputRow>
          <SelectWithNumberInput
            selectName="interphaseOK"
            numberName="interphase"
          />
        </InputGroup>

        <InputGroup title="Wartości nastaw elementów zabezpieczających">
          <InputRow>
            <SelectInput
              name="highPressure"
              data={chillerSwitchOptions}
              label="Wyłącznik wysokiego ciśnienia"
              placeholder="Wybierz opcję"
            />
            <SelectInput
              name="lowPressure"
              data={chillerSwitchOptions}
              label="Wyłącznik niskiego ciśnienia"
              placeholder="Wybierz opcję"
            />
            <SelectInput
              name="antiFrezzeTermostat"
              data={chillerSwitchOptions}
              label="Termostat przeciwzamrożeniowy"
              placeholder="Wybierz opcję"
            />
          </InputRow>
        </InputGroup>

        <ExtraChillerCollingCircuits />

        <InputGroup title="System sterowania">
          <ExtraChillerSettingTemp />
          <SelectInput
            name="controlledParameter"
            data={chillerWaterOptions}
            label="Parametr kontrolowany temperatury"
            placeholder="Wybierz opcję"
          />
        </InputGroup>

        <InputGroup title="Zastosowana metoda">
          <InputRow>
            <SelectInput
              name="controlMethod"
              data={chillerMethodOptions}
              label="Zastosowana metoda kontroli szczelności"
              placeholder="Wybierz opcję"
            />
            <SelectInput
              name="leakGasTest"
              data={chillerGasMethods}
              label="Próba szczelności za pomocą gazu obojętnego"
              placeholder="Wybierz opcję"
            />
          </InputRow>
        </InputGroup>

        <InputGroup title="Ilość dodanego/odzyskanego gazu">
          <InputRow>
            <NumberInput
              name="gasAdded"
              label="Ilość dodanego gazu (kg)"
              placeholder="Wpisz ilość gazu"
            />
            <NumberInput
              name="gasRegain"
              label="Ilość odzyskanego gazu (kg)"
              placeholder="Wpisz ilość gazu"
            />
          </InputRow>
        </InputGroup>
      </FormFieldset>

      <FormFieldset title="Dane poboru prądu">
        <ExtraChillerCurrentInfo
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
        />
      </InputGroup>

      <SubmitFormButton formType={formType} />
    </FormContainer>
  );
}
