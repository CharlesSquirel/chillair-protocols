import ValveForm from "@/components/ValveForm/ValveForm";
import { createValve } from "@/utils/actions/createValve";
import { getValve } from "@/utils/prisma/getValve";

interface ValveEditProps {
  params: {
    id: string;
  };
}

export default async function ValveEdit({ params: { id } }: ValveEditProps) {
  const { valve, valveBlocks } = await getValve(id);
  if (!valve || !valveBlocks) {
    throw new Error("Nie znaleziono danych");
  }
  const editValues = {
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
  console.log(editValues);
  return <ValveForm defaultValues={editValues} onSubmitForm={createValve} />;
}
