import TableContainer from "@/components/Containers/TableContainer/TableContainer";
import { valvesHeaders } from "@/data/tableHeaders";
import RenderValveRows from "@/utils/renderTableRows/RenderValveRows";
import { getAllValves } from "@/utils/services/valve.services";
import { TableNames } from "@/utils/types/tableNames";

export default async function Valves() {
  const valves = await getAllValves();

  return (
    <TableContainer
      tableName={TableNames.VALVES}
      headers={valvesHeaders}
      renderRows={() => (
        <RenderValveRows valves={valves} tableName={TableNames.VALVES} />
      )}
    />
  );
}
