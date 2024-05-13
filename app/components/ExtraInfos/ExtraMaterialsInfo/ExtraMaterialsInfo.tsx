"use client";
import MinusIcon from "@/assets/icons/MinusIcon";
import PlusIcon from "@/assets/icons/PlusIcon";
import { useState } from "react";
import FormFieldset from "../../Containers/FormFieldset/FormFieldset";
import InputGroup from "../../Containers/InputGroup/InputGroup";
import InputRow from "../../Containers/InputRow/InputRow";
import NumberInput from "../../Inputs/NumberInput/NumberInput";
import TextInput from "../../Inputs/TextInput/TextInput";

export default function ExtraMaterialsInfo() {
  const [infoCount, setInfoCount] = useState(1);
  return (
    <FormFieldset title="Użyte materiały">
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
            <p>{index + 1}</p>
            <TextInput
              placeholder="Wpisz część"
              label="Opis części"
              name={`materials.${index}.materialDescription`}
            />
            <NumberInput
              placeholder="Wpisz ilość"
              label="Ilość"
              name={`materials.${index}.materialAmount`}
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
    </FormFieldset>
  );
}
