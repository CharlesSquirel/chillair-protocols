"use client";

import ValveForm from "@/components/Forms/ValveForm/ValveForm";
import { useGetValve } from "@/utils/hooks/useGetValve";
import { FormType } from "@/utils/types/form";
import { ValveDTO } from "@/utils/types/valves";

interface ValveEditProps {
  params: {
    id: string;
  };
}

const ValveEdit: React.FC<ValveEditProps> = ({ params: { id } }) => {
  const { valve, valveBlocks } = useGetValve(id);

  const editValues: ValveDTO = {
    firma: valve.firma,
    type: valve.type,
    serialNumber: valve.serialNumber,
    description: valve.description,
    clientEmailPerm: valve.clientEmailPerm,
    infoBlocks: valveBlocks.map((block: any) => ({
      valveLocation: block.valveLocation,
      valveType: block.valveType,
      valveSerialNumber: block.valveSerialNumber,
      pressureOpen: block.pressureOpen,
      pressureClose: block.pressureClose,
      pressureSetting: block.pressureSetting,
      description: block.description,
    })),
  };

  return (
    <ValveForm
      defaultValues={editValues}
      formType={FormType.VALVE_EDIT}
      id={id}
    />
  );
};

export default ValveEdit;
