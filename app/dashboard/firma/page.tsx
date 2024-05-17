import TableContainer from "@/components/Containers/TableContainer/TableContainer";
import { firmaHeaders } from "@/data/tableHeaders";
import RenderFirmaRows from "@/utils/renderTableRows/RenderFirmaRows";
import { getAllFirma } from "@/utils/services/firma.services";
import { TableNames } from "@/utils/types/tableNames";

export default async function Firmas() {
  const firma = await getAllFirma();

  return (
    <TableContainer
      tableName={TableNames.FIRMA}
      headers={firmaHeaders}
      renderRows={() => (
        <RenderFirmaRows firma={firma} tableName={TableNames.FIRMA} />
      )}
    />
  );
}
