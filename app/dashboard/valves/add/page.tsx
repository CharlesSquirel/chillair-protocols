"use client";

import { createValve } from "@/utils/actions/createValve";
import ValveForm from "@/components/ValveForm/ValveForm";

export default function ValvesAdd() {
  return <ValveForm onSubmitForm={createValve} />;
}
