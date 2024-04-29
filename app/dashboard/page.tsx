import TableContainer from "@/components/TableContainer/TableContainer";
import ActionTableButtons from "@/components/ActionTableButtons/ActionTableButtons";
import getAllProtocols from "@/utils/actions/getAllProtocols";
import { TableNames } from "@/utils/types/tableNames";

const headersAll = ["Data", "Firma", "Rodzaj", "Autor", "Nr uprawnień"];

export default async function Dashboard() {
  const protocols = await getAllProtocols();
  return (
    <TableContainer
      tableName={TableNames.ALL}
      headers={headersAll}
      renderRows={() => (
        <>
          {protocols.map((data, index) => (
            <tr
              key={index}
              className="relative hover:cursor-pointer hover:text-primary"
            >
              <td>{data.createdAt}</td>
              <td>{data.firma}</td>
              <td>{data.genre}</td>
              <td>
                {data.firstName} {data.lastName}
              </td>
              <td>{data.userSignature}</td>
              <ActionTableButtons id={data.id} tableName={TableNames.ALL} />
            </tr>
          ))}
        </>
      )}
    />
  );
}
