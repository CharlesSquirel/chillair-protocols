"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";
import InputRow from "../../Containers/InputRow/InputRow";
import CheckboxInput from "../CheckboxInput/CheckboxInput";
import TextInput from "../TextInput/TextInput";

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
