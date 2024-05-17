"use client";

import MinusButton from "@/components/Buttons/MinusButton/MinusButton";
import PlusButton from "@/components/Buttons/PlusButton/PlusButton";
import { chillerRefrigerationOptions } from "@/data/selectOptions";
import { useState } from "react";
import InputGroup from "../../Containers/InputGroup/InputGroup";
import InputRow from "../../Containers/InputRow/InputRow";
import NumberInput from "../../Inputs/NumberInput/NumberInput";
import SelectInput from "../../Inputs/SelectInput/SelectInput";

interface ExtraChillerCollingCircuitsProps {
  defaultValues?: any;
}

export default function ExtraChillerCollingCircuits({
  defaultValues,
}: ExtraChillerCollingCircuitsProps) {
  const [count, setCount] = useState(1);

  const handleOnMinus = () => {
    setCount(count - 1);
  };

  const handleOnPlus = () => {
    setCount(count + 1);
  };

  return (
    <InputGroup>
      {Array.from({ length: count }, (_, index) => (
        <InputRow key={index} title={`Obieg chłodniczy ${index + 1}`}>
          <NumberInput
            name={`refrigerationCircuits.${index}`}
            arrayName="refrigerationCircuits"
            placeholder="Wpisz wartość"
            label={`Obieg ${index + 1}`}
            defaultValues={defaultValues}
          />

          {index === count - 1 && (
            <PlusButton className="self-end pb-2" onClick={handleOnPlus} />
          )}
          {index !== 0 && (
            <MinusButton
              className="absolute right-0 top-0 size-6 md:right-4 md:top-4 md:size-7"
              onClick={handleOnMinus}
            />
          )}
        </InputRow>
      ))}
      <SelectInput
        name="refrigerant"
        label="Czynnik chłodzony"
        placeholder="Wybierz czynnik"
        data={chillerRefrigerationOptions}
        defaultValues={defaultValues}
      />
    </InputGroup>
  );
}
