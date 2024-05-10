"use client";

import React, { useEffect, useState } from "react";
import InputGroup from "../InputGroup/InputGroup";
import InputRow from "../InputRow/InputRow";
import NumberInput from "../NumberInput/NumberInput";
import MinusIcon from "@/assets/icons/MinusIcon";
import PlusIcon from "@/assets/icons/PlusIcon";
import { Circuit } from "@prisma/client";
import { useFormContext } from "react-hook-form";

interface ExtraChillerCircuitsProps {
  extraChillerCircuitsDataEdit?: Circuit[];
}

export default function ExtraChillerCircuits({
  extraChillerCircuitsDataEdit,
}: ExtraChillerCircuitsProps) {
  const { getValues, setValue } = useFormContext();
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (extraChillerCircuitsDataEdit) {
      setCount(extraChillerCircuitsDataEdit.length);
    }
  }, [extraChillerCircuitsDataEdit]);

  const handleOnMinus = () => {
    setCount(count - 1);
    if (extraChillerCircuitsDataEdit) {
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
              />
              <NumberInput
                name={`circuits.${index}.condensationTemperature`}
                placeholder="Wpisz wartość"
                label="Temperatura skraplania (°C)"
              />
            </InputRow>
            <InputRow>
              <NumberInput
                name={`circuits.${index}.subcooling`}
                placeholder="Wpisz wartość"
                label="Dochłodzenie (°C)"
              />
              <NumberInput
                name={`circuits.${index}.airTemperature`}
                placeholder="Wpisz wartość"
                label="Temperatura wylotowa powietrza (°C)"
              />
            </InputRow>
            <InputRow title="Parametry ssania">
              <NumberInput
                name={`circuits.${index}.suctionPressure`}
                placeholder="Wpisz wartość"
                label="Ciśnienie ssania (bar)"
              />
              <NumberInput
                name={`circuits.${index}.suctionTemperature`}
                placeholder="Wpisz wartość"
                label="Temperatura ssania (°C)"
              />
              <NumberInput
                name={`circuits.${index}.overHeat`}
                placeholder="Wpisz wartość"
                label="Przegrzanie (°C)"
              />
            </InputRow>
            <InputRow title="Parametry parownika (po stronie wody)">
              <NumberInput
                name={`circuits.${index}.inTemperature`}
                placeholder="Wpisz wartość"
                label="Temperatura wejściowa (°C)"
              />
              <NumberInput
                name={`circuits.${index}.outTemperature`}
                placeholder="Wpisz wartość"
                label="Temperatura wyjściowa (°C)"
              />
            </InputRow>
            <InputRow>
              <NumberInput
                name={`circuits.${index}.inWaterPressure`}
                placeholder="Wpisz wartość"
                label="Ciśnienie wody wejścia (bar)"
              />
              <NumberInput
                name={`circuits.${index}.outWaterPressure`}
                placeholder="Wpisz wartość"
                label="Ciśnienie wody wyjścia (bar)"
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
