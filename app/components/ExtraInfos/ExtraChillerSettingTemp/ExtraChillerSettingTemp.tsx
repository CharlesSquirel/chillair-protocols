"use client";

import MinusButton from "@/components/Buttons/MinusButton/MinusButton";
import PlusButton from "@/components/Buttons/PlusButton/PlusButton";
import React, { useState } from "react";
import InputRow from "../../Containers/InputRow/InputRow";
import NumberInput from "../../Inputs/NumberInput/NumberInput";

interface ExtraChillerSettingTempProps {
  defaultValues?: any;
}

export default function ExtraChillerSettingTemp({
  defaultValues,
}: ExtraChillerSettingTempProps) {
  const [count, setCount] = useState(1);

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
          <InputRow title="Temperatura nastaw">
            <NumberInput
              name={`settingsTemperature.${index}`}
              label={`Set ${index + 1} (°C)`}
              placeholder="Wpisz wartość"
              defaultValues={defaultValues}
              arrayName="settingsTemperature"
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
        </React.Fragment>
      ))}
    </>
  );
}
