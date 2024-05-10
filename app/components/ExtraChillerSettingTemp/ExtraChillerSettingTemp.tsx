"use client";

import React, { useState } from "react";
import InputRow from "../InputRow/InputRow";
import NumberInput from "../NumberInput/NumberInput";
import MinusIcon from "@/assets/icons/MinusIcon";
import PlusIcon from "@/assets/icons/PlusIcon";

export default function ExtraChillerSettingTemp() {
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
          <InputRow title="Temperatura nastaw">
            <NumberInput
              name={`settingsTemperature.${index}`}
              label={`Set ${index + 1} (°C)`}
              placeholder="Wpisz wartość"
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
        </React.Fragment>
      ))}
    </>
  );
}
