"use client";

import { useState } from "react";
import InputGroup from "../InputGroup/InputGroup";
import InputRow from "../InputRow/InputRow";
import TextInput from "../TextInput/TextInput";
import PlusIcon from "@/assets/icons/PlusIcon";
import MinusIcon from "@/assets/icons/MinusIcon";
import TextareaInput from "../TextareaInput/TextareaInput";
import NumberInput from "../NumberInput/NumberInput";
import SelectInput from "../SelectInput/SelectInput";
import { ValvesInfoBlock } from "@prisma/client";
import { useFormContext } from "react-hook-form";

interface ExtraValvesInfoProps {
  extraValvesDataEdit?: ValvesInfoBlock[];
}

export default function ExtraValvesInfo({
  extraValvesDataEdit,
}: ExtraValvesInfoProps) {
  const { getValues, setValue } = useFormContext();
  const [infoCount, setInfoCount] = useState(
    extraValvesDataEdit ? extraValvesDataEdit.length : 1,
  );
  const handleOnMinus = () => {
    setInfoCount(infoCount - 1);
    if (extraValvesDataEdit) {
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
              className="absolute right-4 top-4 h-7 w-7"
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
            />
            <SelectInput
              data={["Typ A", "Typ B"]}
              label="Typ"
              name={`infoBlocks.${index}.valveType`}
              placeholder="Wybierz typ"
            />
            <TextInput
              label="Nr fabryczny"
              name={`infoBlocks.${index}.valveSerialNumber`}
              placeholder="Wpisz nr"
            />
          </InputRow>
          <InputRow title="Ciśnienia (Bar)">
            <NumberInput
              label="Nastawa"
              name={`infoBlocks.${index}.pressureSetting`}
              placeholder="Bar"
            />
            <NumberInput
              label="Otwarcie"
              name={`infoBlocks.${index}.pressureOpen`}
              placeholder="Bar"
            />
            <NumberInput
              label="Zamknięcie"
              name={`infoBlocks.${index}.pressureClose`}
              placeholder="Bar"
            />
          </InputRow>
          <TextareaInput
            label="Uwagi"
            name={`infoBlocks.${index}.description`}
            placeholder="Wpisz swoje uwagi"
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
