"use client";

import { useState } from "react";
import InputGroup from "../InputGroup/InputGroup";
import InputRow from "../InputRow/InputRow";
import TextInput from "../TextInput/TextInput";
import PlusIcon from "@/assets/icons/PlusIcon";
import MinusIcon from "@/assets/icons/MinusIcon";

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
              name={`valveLocation_${index + 1}`}
              placeholder="Wpisz nazwę"
            />
            <TextInput
              label="Nr fabryczny"
              name={`fabricNumber_${index + 1}`}
              placeholder="Wpisz nr"
            />
          </InputRow>
          <InputRow title="Ciśnienia (MPa)">
            <TextInput
              label="Nastawa"
              name={`pressureSetting_${index + 1}`}
              placeholder="MPa"
            />
            <TextInput label="Otwarcie" name="pressureOpen" placeholder="MPa" />
            <TextInput
              label="Zamknięcie"
              name={`pressureClose_${index + 1}`}
              placeholder="MPa"
            />
          </InputRow>
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
