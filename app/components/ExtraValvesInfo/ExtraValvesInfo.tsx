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

export default function ExtraValvesInfo() {
  const [infoCount, setInfoCount] = useState(1);
  return (
    <>
      {Array.from({ length: infoCount }, (_, index) => (
        <InputGroup key={index}>
          {index !== 0 && (
            <button
              className="absolute right-4 top-4 h-7 w-7"
              type="button"
              onClick={() => setInfoCount(infoCount - 1)}
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
              name={`infoBlocks.${index}.type`}
              placeholder="Wybierz typ"
            />
            <TextInput
              label="Nr fabryczny"
              name={`infoBlocks.${index}.fabricNumber`}
              placeholder="Wpisz nr"
            />
          </InputRow>
          <InputRow title="Ciśnienia (MPa)">
            <NumberInput
              label="Nastawa"
              name={`infoBlocks.${index}.pressureSetting`}
              placeholder="MPa"
            />
            <NumberInput
              label="Otwarcie"
              name={`infoBlocks.${index}.pressureOpen`}
              placeholder="MPa"
            />
            <NumberInput
              label="Zamknięcie"
              name={`infoBlocks.${index}.pressureClose`}
              placeholder="MPa"
            />
          </InputRow>
          <TextareaInput
            label="Uwagi"
            name={`infoBlocks.${index}.valvesInfo`}
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
