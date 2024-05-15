"use client";

import MinusIcon from "@/assets/icons/MinusIcon";
import PlusIcon from "@/assets/icons/PlusIcon";
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
            <button
              className="absolute right-3 top-2 h-6 w-6 md:right-4 md:top-4 md:h-7 md:w-7"
              type="button"
              onClick={handleOnMinus}
            >
              <MinusIcon />
            </button>
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
            />
            <TextInput
              label="Nr fabryczny"
              name={`infoBlocks.${index}.valveSerialNumber`}
              placeholder="Wpisz nr"
              defaultValues={defaultValues}
            />
          </InputRow>
          <InputRow title="Ciśnienia (Bar)">
            <NumberInput
              label="Nastawa"
              name={`infoBlocks.${index}.pressureSetting`}
              placeholder="Bar"
              defaultValues={defaultValues}
            />
            <NumberInput
              label="Otwarcie"
              name={`infoBlocks.${index}.pressureOpen`}
              placeholder="Bar"
              defaultValues={defaultValues}
            />
            <NumberInput
              label="Zamknięcie"
              name={`infoBlocks.${index}.pressureClose`}
              placeholder="Bar"
              defaultValues={defaultValues}
            />
          </InputRow>
          <TextareaInput
            label="Uwagi"
            name={`infoBlocks.${index}.description`}
            placeholder="Wpisz swoje uwagi"
            defaultValues={defaultValues}
          />
        </InputGroup>
      ))}
      <button
        className="h-10 w-10 self-center"
        type="button"
        onClick={() => setInfoCount(infoCount + 1)}
      >
        <PlusIcon />
      </button>
    </>
  );
}
