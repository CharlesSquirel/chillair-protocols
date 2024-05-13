import ActionTableButtons from "@/components/Buttons/ActionTableButtons/ActionTableButtons";
import TableContainer from "@/components/Containers/TableContainer/TableContainer";
import { chillerHeaders } from "@/data/tableHeaders";
import { formatDateToString } from "@/utils/helpers/formatDateToString";
import { getAllChillers } from "@/utils/services/chiller.services";
import { TableNames } from "@/utils/types/tableNames";

export default async function Chillers() {
  const chillers = await getAllChillers();

  return (
    <TableContainer
      tableName={TableNames.CHILLERS}
      headers={chillerHeaders}
      renderRows={() => (
        <>
          {chillers?.map((data, index) => (
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
              <ActionTableButtons
                id={data.id}
                tableName={TableNames.CHILLERS}
              />
            </tr>
          ))}
        </>
      )}
    />
  );
}
