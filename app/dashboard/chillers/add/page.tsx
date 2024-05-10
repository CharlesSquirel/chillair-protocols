"use client";

import ChillerForm from "@/components/ChillerForm/ChillerForm";
import { FormType } from "@/utils/types/form";

export default function ChillerAdd() {
  return <ChillerForm formType={FormType.CHILLER_ADD} />;
}
