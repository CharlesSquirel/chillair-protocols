import ChillerForm from "@/components/Forms/ChillerForm/ChillerForm";
import { metaTitle } from "@/data/metaTitles";
import { getFirmaShortName } from "@/utils/actions/getFirmaShortName";
import { FormType } from "@/utils/types/form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: metaTitle.PROTOCOL_ADD,
};

export default async function ChillerAdd() {
  const firma = await getFirmaShortName();
  return (
    <ChillerForm formType={FormType.CHILLER_ADD} firma={firma ? firma : []} />
  );
}
