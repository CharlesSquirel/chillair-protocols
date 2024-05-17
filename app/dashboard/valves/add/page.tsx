import ValveForm from "@/components/Forms/ValveForm/ValveForm";
import { metaTitle } from "@/data/metaTitles";
import { FormType } from "@/utils/types/form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: metaTitle.PROTOCOL_ADD,
};

export default function ValveAdd() {
  return <ValveForm formType={FormType.VALVE_ADD} />;
}
