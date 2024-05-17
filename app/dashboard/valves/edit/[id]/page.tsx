import ValveEdit from "@/components/Forms/ValveForm/ValveEdit";
import { metaTitle } from "@/data/metaTitles";
import { FormEditPropsAsParams } from "@/utils/types/common";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: metaTitle.PROTOCOL_EDIT,
};

export default function ValveEdition({
  params: { id },
}: FormEditPropsAsParams) {
  return <ValveEdit id={id} />;
}
