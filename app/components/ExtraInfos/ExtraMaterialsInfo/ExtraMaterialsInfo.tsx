"use client";

import MinusButton from "@/components/Buttons/MinusButton/MinusButton";
import PlusButton from "@/components/Buttons/PlusButton/PlusButton";
import { useState } from "react";
import FormFieldset from "../../Containers/FormFieldset/FormFieldset";
import InputGroup from "../../Containers/InputGroup/InputGroup";
import InputRow from "../../Containers/InputRow/InputRow";
import NumberInput from "../../Inputs/NumberInput/NumberInput";
import TextInput from "../../Inputs/TextInput/TextInput";

export default function ExtraMaterialsInfo() {
  const [infoCount, setInfoCount] = useState(1);
  const handleOnPlus = () => {
    setInfoCount(infoCount + 1);
  };
  const handleOnMinus = () => {
    setInfoCount(infoCount - 1);
  };
  return (
    <FormFieldset title="Użyte materiały">
      {Array.from({ length: infoCount }, (_, index) => (
        <InputGroup key={index}>
          {index !== 0 && (
            <MinusButton
              className="absolute right-4 top-4 size-7"
              onClick={handleOnMinus}
            />
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
      <PlusButton className="self-center" onClick={handleOnPlus} />
    </FormFieldset>
  );
}
