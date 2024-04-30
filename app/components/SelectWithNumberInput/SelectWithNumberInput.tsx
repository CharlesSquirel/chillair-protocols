"use client";

import InputRow from "../InputRow/InputRow";
import NumberInput from "../NumberInput/NumberInput";
import SelectInput from "../SelectInput/SelectInput";
import { chillerValidOptions } from "@/data/selectOptions";
import { useFormContext } from "react-hook-form";

interface SelectWithNumberInputProps {
  index: number;
}

export default function SelectWithNumberInput({
  index,
}: SelectWithNumberInputProps) {
  const { watch } = useFormContext();
  const selectValue = watch(`powerConsumptions.${index}.interphaseOk`);

  return (
    <InputRow>
      <SelectInput
        name={`powerConsumptions.${index}.interphaseOk`}
        label="Różnica międzyfazowa"
        placeholder="Wybierz opcję"
        data={chillerValidOptions}
      />
      {selectValue === "Niepoprawny" && (
        <NumberInput
          name={`powerConsumptions.${index}.interphase`}
          placeholder="Wpisz odchylenie"
          label="Odchylenie (%)"
        />
      )}
    </InputRow>
  );
}
