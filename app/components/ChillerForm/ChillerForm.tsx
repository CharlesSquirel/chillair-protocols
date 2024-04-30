import { FormType } from "@/utils/types/form";
import FormContainer from "../FormContainer/FormContainer";

interface ChillerFormProps {
  formType: FormType;
}

export default function ChillerForm({ formType }: ChillerFormProps) {
  return (
    <FormContainer
      formType={formType}
      title="Protokół przegląd agregatu chłodniczego z kontrolą szczelności"
      closeUrl="/dashboard/chillers"
    ></FormContainer>
  );
}
