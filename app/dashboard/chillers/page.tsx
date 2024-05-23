import TableContainer from "@/components/Containers/TableContainer/TableContainer";
import { chillerHeaders } from "@/data/tableHeaders";
import RenderChillerRows from "@/utils/renderTableRows/RenderChillerRows";
import { getAllChillers } from "@/utils/services/chiller.services";
import { TableNames } from "@/utils/types/tableNames";

export default async function Chillers() {
  const chillers = await getAllChillers();

  return (
    <TableContainer
      tableName={TableNames.CHILLERS}
      headers={chillerHeaders}
      renderRows={() => (
        <RenderChillerRows
          chillers={chillers}
          tableName={TableNames.CHILLERS}
        />
      )}
    />
  );
}
