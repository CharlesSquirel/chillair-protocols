"use client";

import ValveForm from "@/components/ValveForm/ValveForm";
import { useGetValve } from "@/utils/hooks/useGetValve";
import { FormType } from "@/utils/types/form";

import { useEffect, useState } from "react";

interface ValveEditProps {
  params: {
    id: string;
  };
}

const ValveEdit: React.FC<ValveEditProps> = ({ params: { id } }) => {
  const { valve, valveBlocks } = useGetValve(id);
  const [editValues, setEditValues] = useState<any>(null);

  useEffect(() => {
    if (valve && valveBlocks) {
      const initialValues = {
        firma: valve.firma ?? undefined,
        type: valve.type ?? undefined,
        serialNumber: valve.serialNumber ?? undefined,
        description: valve.description ?? undefined,
        infoBlocks: valveBlocks.map((block) => ({
          valveLocation: block.valveLocation ?? undefined,
          valveType: block.valveType ?? undefined,
          valveSerialNumber: block.valveSerialNumber ?? undefined,
          pressureOpen: block.pressureOpen ?? undefined,
          pressureClose: block.pressureClose ?? undefined,
          pressureSetting: block.pressureSetting ?? undefined,
          description: block.description ?? undefined,
        })),
      };
      setEditValues(initialValues);
    }
  }, [valve, valveBlocks]);

  if (!editValues) {
    return <p>Loading...</p>;
  }

  return (
    <ValveForm
      defaultValues={editValues}
      formType={FormType.VALVE_EDIT}
      //   onSubmitForm={createValve}
    />
  );
};

export default ValveEdit;
