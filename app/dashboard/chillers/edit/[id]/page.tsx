import ChillerEdit from "@/components/Forms/ChillerForm/ChillerEdit";
import { metaTitle } from "@/data/metaTitles";
import { FormEditPropsAsParams } from "@/utils/types/common";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: metaTitle.PROTOCOL_EDIT,
};

export default function ChillerEdition({
  params: { id },
}: FormEditPropsAsParams) {
  return <ChillerEdit id={id} />;
}
