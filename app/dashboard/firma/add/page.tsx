import FirmaForm from "@/components/Forms/FirmaForm/FirmaForm";
import { FormType } from "@/utils/types/form";

export default function FirmaAdd() {
  return <FirmaForm formType={FormType.FIRMA_ADD} />;
}
