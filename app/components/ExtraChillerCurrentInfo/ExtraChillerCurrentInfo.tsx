"use client";

import React, { useState } from "react";
import InputGroup from "../InputGroup/InputGroup";
import SelectInput from "../SelectInput/SelectInput";
import {
  chillerDeviceOptions,
  chillerValidOptions,
} from "@/data/selectOptions";
import PlusIcon from "@/assets/icons/PlusIcon";
import MinusIcon from "@/assets/icons/MinusIcon";
import InputRow from "../InputRow/InputRow";
import NumberInput from "../NumberInput/NumberInput";
import SelectWithNumberInput from "../SelectWithNumberInput/SelectWithNumberInput";

export default function ExtraChillerCurrentInfo() {
  const [count, setCount] = useState(1);

  const handleOnMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleOnPlus = () => {
    setCount(count + 1);
  };
  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <React.Fragment key={index}>
          <InputGroup title={`Urządzenie ${index + 1}`}>
            <SelectInput
              name={`powerConsumptions.${index}.deviceType`}
              label="Typ urządzenia"
              placeholder="Wybierz typ"
              data={chillerDeviceOptions}
            />
            <InputRow>
              <NumberInput
                name={`powerConsumptions.${index}.amperage_1`}
                placeholder="Wpisz wartość"
                label="L1 (A)"
              />
              <NumberInput
                name={`powerConsumptions.${index}.amperage_2`}
                placeholder="Wpisz wartość"
                label="L2 (A)"
              />
              <NumberInput
                name={`powerConsumptions.${index}.amperage_2`}
                placeholder="Wpisz wartość"
                label="L3 (A)"
              />
            </InputRow>
            <SelectWithNumberInput index={index} />
            {index !== 0 && (
              <button
                className="absolute right-4 top-4 h-6 w-6 md:h-7 md:w-7"
                type="button"
                onClick={handleOnMinus}
              >
                <MinusIcon />
              </button>
            )}
          </InputGroup>
          {index === count - 1 && (
            <button
              className="h-10 w-10 self-center "
              type="button"
              onClick={handleOnPlus}
            >
              <PlusIcon />
            </button>
          )}
        </React.Fragment>
      ))}
    </>
  );
}
