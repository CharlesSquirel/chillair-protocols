"use client";

import MinusButton from "@/components/Buttons/MinusButton/MinusButton";
import PlusButton from "@/components/Buttons/PlusButton/PlusButton";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import InputGroup from "../../Containers/InputGroup/InputGroup";
import InputRow from "../../Containers/InputRow/InputRow";
import NumberInput from "../../Inputs/NumberInput/NumberInput";
import SelectInput from "../../Inputs/SelectInput/SelectInput";
import TextInput from "../../Inputs/TextInput/TextInput";
import TextareaInput from "../../Inputs/TextareaInput/TextareaInput";

interface ExtraValvesInfoProps {
  defaultValues?: any;
}

export default function ExtraValvesInfo({
  defaultValues,
}: ExtraValvesInfoProps) {
  const { getValues, setValue } = useFormContext();
  const [infoCount, setInfoCount] = useState(
    defaultValues ? defaultValues.length : 1,
  );

  const handleOnPlus = () => {
    setInfoCount(infoCount + 1);
  };

  useEffect(() => {
    if (defaultValues) {
      setInfoCount(defaultValues.length);
    }
  }, [defaultValues]);

  const handleOnMinus = () => {
    setInfoCount(infoCount - 1);
    if (defaultValues) {
      const infoBlocks = getValues("infoBlocks").slice(0, infoCount - 1);
      setValue("infoBlocks", infoBlocks);
    }
  };

  return (
    <>
      {Array.from({ length: infoCount }, (_, index) => (
        <InputGroup key={index}>
          {index !== 0 && (
            <MinusButton
              className="absolute right-3 top-2 size-6 md:right-4 md:top-4 md:size-7"
              onClick={handleOnMinus}
            />
          )}
          <InputRow>
            <TextInput
              label="Miejsce instalowania zaworu"
              name={`infoBlocks.${index}.valveLocation`}
              placeholder="Wpisz nazwę"
              defaultValues={defaultValues}
              arrayName="infoBlocks"
            />
            <SelectInput
              data={["Typ A", "Typ B"]}
              label="Typ"
              name={`infoBlocks.${index}.valveType`}
              placeholder="Wybierz typ"
              defaultValues={defaultValues}
              arrayName="infoBlocks"
            />
            <TextInput
              label="Nr fabryczny"
              name={`infoBlocks.${index}.valveSerialNumber`}
              placeholder="Wpisz nr"
              defaultValues={defaultValues}
              arrayName="infoBlocks"
            />
          </InputRow>
          <InputRow title="Ciśnienia (Bar)">
            <NumberInput
              label="Nastawa"
              name={`infoBlocks.${index}.pressureSetting`}
              placeholder="Bar"
              defaultValues={defaultValues}
              arrayName="infoBlocks"
            />
            <NumberInput
              label="Otwarcie"
              name={`infoBlocks.${index}.pressureOpen`}
              placeholder="Bar"
              defaultValues={defaultValues}
              arrayName="infoBlocks"
            />
            <NumberInput
              label="Zamknięcie"
              name={`infoBlocks.${index}.pressureClose`}
              placeholder="Bar"
              defaultValues={defaultValues}
              arrayName="infoBlocks"
            />
          </InputRow>
          <TextareaInput
            label="Uwagi"
            name={`infoBlocks.${index}.description`}
            placeholder="Wpisz swoje uwagi"
            defaultValues={defaultValues}
            arrayName="infoBlocks"
          />
        </InputGroup>
      ))}
      <PlusButton className="self-center" onClick={handleOnPlus} />
    </>
  );
}
