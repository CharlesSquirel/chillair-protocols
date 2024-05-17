import FirmaEdit from "@/components/Forms/FirmaForm/FirmaEdit";
import { metaTitle } from "@/data/metaTitles";
import { FormEditPropsAsParams } from "@/utils/types/common";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: metaTitle.FIRMA_EDIT,
};

export default function FirmaEdition({
  params: { id },
}: FormEditPropsAsParams) {
  return <FirmaEdit id={id} />;
}
