"use client";

import FirmaForm from "@/components/Forms/FirmaForm/FirmaForm";
import { useGetFirma } from "@/utils/hooks/useGetFirma";
import { FormEditProps } from "@/utils/types/common";
import { FormType } from "@/utils/types/form";

const FirmaEdit: React.FC<FormEditProps> = ({ id }) => {
  const firmaData = useGetFirma(id);

  if (!firmaData) {
    throw Error("Nie znaleziono użytkownika o podanym id!");
  }
  const editValues = {
    fullName: firmaData.fullName,
    shortName: firmaData.shortName,
    street: firmaData.street,
    houseNumber: firmaData.houseNumber,
    localNumber: firmaData.localNumber,
    postCode: firmaData.postCode,
    city: firmaData.city,
    tel: firmaData.tel,
    contactEmail: firmaData.contactEmail,
  };

  return (
    <FirmaForm
      defaultValues={editValues}
      formType={FormType.FIRMA_EDIT}
      id={id}
    />
  );
};

export default FirmaEdit;
