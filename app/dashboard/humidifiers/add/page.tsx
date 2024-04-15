import Close from "@/assets/icons/Close";
import FormFieldset from "@/components/FormFieldset/FormFieldset";
import InputGroup from "@/components/InputGroup/InputGroup";
import InputRow from "@/components/InputRow/InputRow";
import SelectInput from "@/components/SelectInput/SelectInput";
import SubmitFormButton from "@/components/SubmitFormButton/SubmitFormButton";
import TextInput from "@/components/TextInput/TextInput";
import { HumidifierDTO } from "@/utils/types/humidifier";
import Link from "next/link";

export default function HumidifiersAdd() {
  async function handleSubmit(formData: FormData) {
    "use server";
    const data = {
      firma: formData.get("firma") as string,
      type: formData.get("type") as string,
      serialNumber: formData.get("serialNumber") as string,
      nameplateVoltage: formData.get("nameplateVoltage") as string,
      nameplatePhase: formData.get("nameplatePhase") as string,
      nameplateCurrentDraw: formData.get("nameplateCurrentDraw") as string,
    };
    console.log(data);
  }
  return (
    <form
      className="absolute left-[50%] top-[90px] z-10 flex w-[1844px] translate-x-[-50%] flex-col gap-6 rounded-md bg-white p-6 shadow-md"
      action={handleSubmit}
    >
      <h2 className="relative block text-3xl font-bold text-primary after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-[40%] after:bg-primary after:content-['']">
        Protokół przeglądu nawilżacza
      </h2>
      <Link href="/dashboard" className="absolute right-6 top-6 z-10">
        <Close />
      </Link>
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
            <TextInput
              placeholder="Wpisz napięcie"
              label="Napięcie (V)"
              name="nameplateVoltage"
            />
            <TextInput
              placeholder="Wpisz fazę(y)"
              label="Faza(y)"
              name="nameplatePhase"
            />
            <TextInput
              placeholder="Wpisz pobór"
              label="Znamionowy pobór prądu (A)"
              name="nameplateCurrentDraw"
            />
          </InputRow>
        </InputGroup>
      </FormFieldset>
      <SubmitFormButton label="Utwórz" />
    </form>
  );
}
