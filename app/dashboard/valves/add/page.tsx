"use client";

import { createValve } from "@/utils/actions/createValve";
import ValveForm from "@/components/ValveForm/ValveForm";
import { FormType } from "@/utils/types/form";

export default function ValvesAdd() {
  return <ValveForm formType={FormType.VALVE_ADD} />;
}
