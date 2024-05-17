import FirmaForm from "@/components/Forms/FirmaForm/FirmaForm";
import { metaTitle } from "@/data/metaTitles";
import { FormType } from "@/utils/types/form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: metaTitle.FIRMA_ADD,
};

export default function FirmaAdd() {
  return <FirmaForm formType={FormType.FIRMA_ADD} />;
}
