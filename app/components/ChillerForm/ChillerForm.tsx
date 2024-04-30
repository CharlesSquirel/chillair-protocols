import { FormType } from "@/utils/types/form";
import FormContainer from "../FormContainer/FormContainer";
import { ChillerValidationSchema } from "@/utils/zod/chillerValidationSchema";
import FormFieldset from "../FormFieldset/FormFieldset";
import InputGroup from "../InputGroup/InputGroup";
import SelectInput from "../SelectInput/SelectInput";
import TextInput from "../TextInput/TextInput";
import SubmitFormButton from "../SubmitFormButton/SubmitFormButton";
import InputRow from "../InputRow/InputRow";
import {
  chillerGasMethods,
  chillerMethodOptions,
  chillerPollutionOptions,
  chillerSwitchOptions,
  chillerTermalInsulationOptions,
  chillerValidOptions,
  chillerWaterOptions,
} from "@/data/selectOptions";
import ExtraChillerSettingTemp from "../ExtraChillerSettingTemp/ExtraChillerSettingTemp";
import NumberInput from "../NumberInput/NumberInput";
import TextareaInput from "../TextareaInput/TextareaInput";
import ExtraChillerCurrentInfo from "../ExtraChillerCurrentInfo/ExtraChillerCurrentInfo";
import ExtraChillerCircuits from "../ExtraChillerCircuits/ExtraChillerCircuits";
import { getSubmitHandler } from "@/utils/switch/getSubmitHandler";

interface ChillerFormProps {
  formType: FormType;
}

export default function ChillerForm({ formType }: ChillerFormProps) {
  const onSubmitForm = getSubmitHandler(formType);
  return (
    <FormContainer
      formType={formType}
      title="Protokół przegląd agregatu chłodniczego z kontrolą szczelności"
      closeUrl="/dashboard/chillers"
      validationSchema={ChillerValidationSchema}
      onSubmitForm={onSubmitForm}
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
        <ExtraChillerCurrentInfo />
      </FormFieldset>
      <FormFieldset title="Parametry obiegów">
        <ExtraChillerCircuits />
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
