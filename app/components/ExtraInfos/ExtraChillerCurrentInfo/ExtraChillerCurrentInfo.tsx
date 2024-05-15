"use client";

import MinusIcon from "@/assets/icons/MinusIcon";
import PlusIcon from "@/assets/icons/PlusIcon";
import { chillerDeviceOptions } from "@/data/selectOptions";
import { PowerConsumption } from "@prisma/client";
import React, { useState } from "react";
import InputGroup from "../../Containers/InputGroup/InputGroup";
import InputRow from "../../Containers/InputRow/InputRow";
import NumberInput from "../../Inputs/NumberInput/NumberInput";
import SelectInput from "../../Inputs/SelectInput/SelectInput";
import SelectWithNumberInput from "../../Inputs/SelectWithNumberInput/SelectWithNumberInput";

interface ExtraChillerCurrentInfoProps {
  extraChillerPowerDataEdit?: PowerConsumption[];
  defaultValues?: any;
}

export default function ExtraChillerCurrentInfo({
  extraChillerPowerDataEdit,
  defaultValues,
}: ExtraChillerCurrentInfoProps) {
  const [count, setCount] = useState(
    extraChillerPowerDataEdit ? extraChillerPowerDataEdit.length : 1,
  );

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
              />
              <NumberInput
                name={`powerConsumptions.${index}.amperage_2`}
                placeholder="Wpisz wartość"
                label="L2 (A)"
                defaultValues={defaultValues}
              />
              <NumberInput
                name={`powerConsumptions.${index}.amperage_3`}
                placeholder="Wpisz wartość"
                label="L3 (A)"
                defaultValues={defaultValues}
              />
            </InputRow>
            <SelectWithNumberInput
              numberName={`powerConsumptions.${index}.interphase`}
              selectName={`powerConsumptions.${index}.interphaseOk`}
              defaultValues={defaultValues}
            />
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
