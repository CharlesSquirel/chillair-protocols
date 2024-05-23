import ValveForm from "@/components/Forms/ValveForm/ValveForm";
import { metaTitle } from "@/data/metaTitles";
import { getFirmaShortName } from "@/utils/actions/getFirmaShortName";
import { FormType } from "@/utils/types/form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: metaTitle.PROTOCOL_ADD,
};

export default async function ValveAdd() {
  const firma = await getFirmaShortName();
  return <ValveForm formType={FormType.VALVE_ADD} firma={firma ? firma : []} />;
}
