import ChillerForm from "@/components/Forms/ChillerForm/ChillerForm";
import { metaTitle } from "@/data/metaTitles";
import { FormType } from "@/utils/types/form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: metaTitle.PROTOCOL_ADD,
};

export default function ChillerAdd() {
  return <ChillerForm formType={FormType.CHILLER_ADD} />;
}
