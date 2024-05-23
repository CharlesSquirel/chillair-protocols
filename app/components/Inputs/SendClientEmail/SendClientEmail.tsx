"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";
import InputRow from "../../Containers/InputRow/InputRow";
import CheckboxInput from "../CheckboxInput/CheckboxInput";
import TextInput from "../TextInput/TextInput";

interface SendClientEmailProps {
  defaultValues?: any;
}

export default function SendClientEmail({
  defaultValues,
}: SendClientEmailProps) {
  const { reset } = useFormContext();
  const [isActive, setIsActive] = useState(false);
  const handleOnCheck = () => {
    setIsActive(!isActive);
    if (isActive) {
      reset({ clientEmail: "" });
    }
  };
  return (
    <InputRow>
      <CheckboxInput
        label="Wyślij do klienta"
        name="clientEmailPerm"
        onCheck={handleOnCheck}
        defaultValues={defaultValues}
      />
      <TextInput
        placeholder="Email"
        name="clientEmail"
        disabled={!isActive}
        defaultValues={defaultValues}
      />
    </InputRow>
  );
}
