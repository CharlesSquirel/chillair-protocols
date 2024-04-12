"use client";

import { useState } from "react";
import CheckboxInput from "../CheckboxInput/CheckboxInput";
import InputRow from "../InputRow/InputRow";
import TextInput from "../TextInput/TextInput";

export default function SendClientEmail() {
  const [isActive, setIsActive] = useState(false);
  const handleOnCheck = () => {
    setIsActive(!isActive);
  };
  return (
    <InputRow>
      <CheckboxInput
        label="Wyślij do klienta"
        name="checkClientEmail"
        onCheck={handleOnCheck}
      />
      <TextInput placeholder="Email" name="clientEmail" disabled={!isActive} />
    </InputRow>
  );
}
