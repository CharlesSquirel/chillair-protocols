import FormFieldset from "@/components/FormFieldset/FormFieldset";
import InputGroup from "@/components/InputGroup/InputGroup";
import InputRow from "@/components/InputRow/InputRow";
import TextInput from "@/components/TextInput/TextInput";
import FormContainer from "@/components/forms/FormContainer";

export default function ValvesAdd() {
  return (
    <FormContainer title="Protokół badania zaworów bezpieczeństwa">
      <FormFieldset title="Informacje podstawowe">
        <InputGroup>
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
        <InputGroup>
          <InputRow>
            <TextInput
              label="Miejsce instalowania zaworu"
              name="valveLocation"
              placeholder="Wpisz nazwę"
            />
            <TextInput
              label="Nr fabryczny"
              name="fabricNumber"
              placeholder="Wpisz nr"
            />
          </InputRow>
          <InputRow title="Ciśnienia (MPa)">
            <TextInput
              label="Nastawa"
              name="pressureSetting"
              placeholder="MPa"
            />
            <TextInput label="Otwarcie" name="pressureOpen" placeholder="MPa" />
            <TextInput
              label="Zamknięcie"
              name="pressureClose"
              placeholder="MPa"
            />
          </InputRow>
        </InputGroup>
      </FormFieldset>
    </FormContainer>
  );
}
