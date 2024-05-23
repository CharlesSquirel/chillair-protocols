"use client";

import { chillerValidOptions } from "@/data/selectOptions";
import { useFormContext } from "react-hook-form";
import InputRow from "../../Containers/InputRow/InputRow";
import NumberInput from "../NumberInput/NumberInput";
import SelectInput from "../SelectInput/SelectInput";

interface SelectWithNumberInputProps {
  selectName: string;
  numberName: string;
  defaultValues?: any;
  arrayName?: string;
}

export default function SelectWithNumberInput({
  selectName,
  numberName,
  defaultValues,
  arrayName,
}: SelectWithNumberInputProps) {
  const { watch } = useFormContext();
  const selectValue = watch(selectName);

  return (
    <InputRow>
      <SelectInput
        name={selectName}
        label="Różnica międzyfazowa"
        placeholder="Wybierz opcję"
        data={chillerValidOptions}
        defaultValues={defaultValues}
        arrayName={arrayName}
      />
      {selectValue === "Niepoprawny" && (
        <NumberInput
          name={numberName}
          placeholder="Wpisz odchylenie"
          label="Odchylenie (%)"
          defaultValues={defaultValues}
          arrayName={arrayName}
        />
      )}
    </InputRow>
  );
}
