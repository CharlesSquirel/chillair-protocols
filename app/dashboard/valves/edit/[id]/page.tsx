import ValveEdit from "@/components/Forms/ValveForm/ValveEdit";
import { metaTitle } from "@/data/metaTitles";
import { getFirmaShortName } from "@/utils/actions/getFirmaShortName";
import { FormEditPropsAsParams } from "@/utils/types/common";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: metaTitle.PROTOCOL_EDIT,
};

export default async function ValveEdition({
  params: { id },
}: FormEditPropsAsParams) {
  const firma = await getFirmaShortName();
  return <ValveEdit id={id} firma={firma ? firma : []} />;
}
