"use client";

import MinusIcon from "@/assets/icons/MinusIcon";
import PlusIcon from "@/assets/icons/PlusIcon";
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
            <button
              className="h-10 w-10 self-center md:absolute md:bottom-[6px] md:left-[525px]"
              type="button"
              onClick={handleOnPlus}
            >
              <PlusIcon />
            </button>
          )}
          {index !== 0 && (
            <button
              className="absolute right-0 top-0 h-6 w-6 md:right-4 md:top-4 md:h-7 md:w-7"
              type="button"
              onClick={handleOnMinus}
            >
              <MinusIcon />
            </button>
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
