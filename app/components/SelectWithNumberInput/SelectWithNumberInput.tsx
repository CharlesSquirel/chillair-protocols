"use client";

import InputRow from "../InputRow/InputRow";
import NumberInput from "../NumberInput/NumberInput";
import SelectInput from "../SelectInput/SelectInput";
import { chillerValidOptions } from "@/data/selectOptions";
import { useFormContext } from "react-hook-form";

interface SelectWithNumberInputProps {
  selectName: string;
  numberName: string;
}

export default function SelectWithNumberInput({
  selectName,
  numberName,
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
      />
      {selectValue === "Niepoprawny" && (
        <NumberInput
          name={numberName}
          placeholder="Wpisz odchylenie"
          label="Odchylenie (%)"
        />
      )}
    </InputRow>
  );
}
