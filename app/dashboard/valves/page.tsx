import ActionTableButtons from "@/components/Buttons/ActionTableButtons/ActionTableButtons";
import TableContainer from "@/components/Containers/TableContainer/TableContainer";
import { valvesHeaders } from "@/data/tableHeaders";
import { formatDateToString } from "@/utils/helpers/formatDateToString";
import { getAllValves } from "@/utils/services/valve.services";
import { TableNames } from "@/utils/types/tableNames";

export default async function Valves() {
  const valves = await getAllValves();

  return (
    <TableContainer
      tableName={TableNames.VALVES}
      headers={valvesHeaders}
      renderRows={() => (
        <>
          {valves?.map((data, index) => (
            <tr
              key={index}
              className="relative hover:cursor-pointer hover:text-primary"
            >
              <td>{formatDateToString(data.createdAt)}</td>
              <td>{data.firma}</td>
              <td>
                {data.firstName} {data.lastName}
              </td>
              <td>{data.userSignature}</td>
              <td>{data.description}</td>
              <ActionTableButtons id={data.id} tableName={TableNames.VALVES} />
            </tr>
          ))}
        </>
      )}
    />
  );
}
