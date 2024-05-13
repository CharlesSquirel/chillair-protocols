"use client";

import MinusIcon from "@/assets/icons/MinusIcon";
import PlusIcon from "@/assets/icons/PlusIcon";
import { ValvesInfoBlock } from "@prisma/client";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import InputGroup from "../../Containers/InputGroup/InputGroup";
import InputRow from "../../Containers/InputRow/InputRow";
import NumberInput from "../../Inputs/NumberInput/NumberInput";
import SelectInput from "../../Inputs/SelectInput/SelectInput";
import TextInput from "../../Inputs/TextInput/TextInput";
import TextareaInput from "../../Inputs/TextareaInput/TextareaInput";

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
