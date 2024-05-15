"use client";

import MinusIcon from "@/assets/icons/MinusIcon";
import PlusIcon from "@/assets/icons/PlusIcon";
import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import InputGroup from "../../Containers/InputGroup/InputGroup";
import InputRow from "../../Containers/InputRow/InputRow";
import NumberInput from "../../Inputs/NumberInput/NumberInput";

interface ExtraChillerCircuitsProps {
  defaultValues?: any;
}

export default function ExtraChillerCircuits({
  defaultValues,
}: ExtraChillerCircuitsProps) {
  const { getValues, setValue } = useFormContext();
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (defaultValues) {
      setCount(defaultValues.length);
    }
  }, [defaultValues]);

  const handleOnMinus = () => {
    setCount(count - 1);
    if (defaultValues) {
      const circuitsBlocks = getValues("circuits").slice(0, count - 1);
      setValue("circuits", circuitsBlocks);
    }
  };

  const handleOnPlus = () => {
    setCount(count + 1);
  };

  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <React.Fragment key={index}>
          <InputGroup title={`Obieg ${index + 1}`}>
            <InputRow title="Parametry tłoczenia">
              <NumberInput
                name={`circuits.${index}.dischargePressure`}
                placeholder="Wpisz wartość"
                label="Ciśnienie tłoczenia (bar)"
                defaultValues={defaultValues}
              />
              <NumberInput
                name={`circuits.${index}.condensationTemperature`}
                placeholder="Wpisz wartość"
                label="Temperatura skraplania (°C)"
                defaultValues={defaultValues}
              />
            </InputRow>
            <InputRow>
              <NumberInput
                name={`circuits.${index}.subcooling`}
                placeholder="Wpisz wartość"
                label="Dochłodzenie (°C)"
                defaultValues={defaultValues}
              />
              <NumberInput
                name={`circuits.${index}.airTemperature`}
                placeholder="Wpisz wartość"
                label="Temperatura wylotowa powietrza (°C)"
                defaultValues={defaultValues}
              />
            </InputRow>
            <InputRow title="Parametry ssania">
              <NumberInput
                name={`circuits.${index}.suctionPressure`}
                placeholder="Wpisz wartość"
                label="Ciśnienie ssania (bar)"
                defaultValues={defaultValues}
              />
              <NumberInput
                name={`circuits.${index}.suctionTemperature`}
                placeholder="Wpisz wartość"
                label="Temperatura ssania (°C)"
                defaultValues={defaultValues}
              />
              <NumberInput
                name={`circuits.${index}.overHeat`}
                placeholder="Wpisz wartość"
                label="Przegrzanie (°C)"
                defaultValues={defaultValues}
              />
            </InputRow>
            <InputRow title="Parametry parownika (po stronie wody)">
              <NumberInput
                name={`circuits.${index}.inTemperature`}
                placeholder="Wpisz wartość"
                label="Temperatura wejściowa (°C)"
                defaultValues={defaultValues}
              />
              <NumberInput
                name={`circuits.${index}.outTemperature`}
                placeholder="Wpisz wartość"
                label="Temperatura wyjściowa (°C)"
                defaultValues={defaultValues}
              />
            </InputRow>
            <InputRow>
              <NumberInput
                name={`circuits.${index}.inWaterPressure`}
                placeholder="Wpisz wartość"
                label="Ciśnienie wody wejścia (bar)"
                defaultValues={defaultValues}
              />
              <NumberInput
                name={`circuits.${index}.outWaterPressure`}
                placeholder="Wpisz wartość"
                label="Ciśnienie wody wyjścia (bar)"
                defaultValues={defaultValues}
              />
            </InputRow>
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
