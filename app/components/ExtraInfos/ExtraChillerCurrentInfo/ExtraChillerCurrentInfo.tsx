"use client";

import MinusButton from "@/components/Buttons/MinusButton/MinusButton";
import PlusButton from "@/components/Buttons/PlusButton/PlusButton";
import { chillerDeviceOptions } from "@/data/selectOptions";
import React, { useEffect, useState } from "react";
import InputGroup from "../../Containers/InputGroup/InputGroup";
import InputRow from "../../Containers/InputRow/InputRow";
import NumberInput from "../../Inputs/NumberInput/NumberInput";
import SelectInput from "../../Inputs/SelectInput/SelectInput";
import SelectWithNumberInput from "../../Inputs/SelectWithNumberInput/SelectWithNumberInput";

interface ExtraChillerCurrentInfoProps {
  defaultValues?: any;
}

export default function ExtraChillerCurrentInfo({
  defaultValues,
}: ExtraChillerCurrentInfoProps) {
  const [count, setCount] = useState(defaultValues ? defaultValues.length : 1);

  useEffect(() => {
    if (defaultValues) {
      setCount(defaultValues.powerConsumptions.length);
    }
  }, [defaultValues]);

  const handleOnMinus = () => {
    setCount(count - 1);
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
              arrayName="powerConsumptions"
              label="Typ urządzenia"
              placeholder="Wybierz typ"
              data={chillerDeviceOptions}
              defaultValues={defaultValues}
            />
            <InputRow>
              <NumberInput
                name={`powerConsumptions.${index}.amperage_1`}
                placeholder="Wpisz wartość"
                label="L1 (A)"
                defaultValues={defaultValues}
                arrayName="powerConsumptions"
              />
              <NumberInput
                name={`powerConsumptions.${index}.amperage_2`}
                placeholder="Wpisz wartość"
                label="L2 (A)"
                defaultValues={defaultValues}
                arrayName="powerConsumptions"
              />
              <NumberInput
                name={`powerConsumptions.${index}.amperage_3`}
                placeholder="Wpisz wartość"
                label="L3 (A)"
                defaultValues={defaultValues}
                arrayName="powerConsumptions"
              />
            </InputRow>
            <SelectWithNumberInput
              numberName={`powerConsumptions.${index}.interphase`}
              selectName={`powerConsumptions.${index}.interphaseOk`}
              defaultValues={defaultValues}
              arrayName="powerConsumptions"
            />
            {index !== 0 && (
              <MinusButton
                className="absolute right-4 top-4 size-6 md:size-7"
                onClick={handleOnMinus}
              />
            )}
          </InputGroup>
          {index === count - 1 && (
            <PlusButton className="self-center" onClick={handleOnPlus} />
          )}
        </React.Fragment>
      ))}
    </>
  );
}
