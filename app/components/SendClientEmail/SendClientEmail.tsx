"use client";

import { useState } from "react";
import CheckboxInput from "../CheckboxInput/CheckboxInput";
import InputRow from "../InputRow/InputRow";
import TextInput from "../TextInput/TextInput";
import { useFormContext } from "react-hook-form";

export default function SendClientEmail() {
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
      />
      <TextInput placeholder="Email" name="clientEmail" disabled={!isActive} />
    </InputRow>
  );
}
