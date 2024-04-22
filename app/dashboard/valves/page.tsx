import ActionTableButtons from "@/components/ActionTableButtons/ActionTableButtons";
import TableContainer from "@/components/TableContainer/TableContainer";
import { formatDateToString } from "@/utils/helpers/formatDateToString";
import { prisma } from "lib/db";

const valvesHeaders: string[] = [
  "Data",
  "Obiekt",
  "Autor",
  "Sygnatura",
  "Uwagi",
];

export default async function Valves() {
  const valves = await prisma.valve.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <TableContainer
      tableName="valves"
      headers={valvesHeaders}
      renderRows={() => (
        <>
          {valves.map((data, index) => (
            <tr key={index} className="hover:cursor-pointer hover:text-primary">
              <td>{formatDateToString(data.createdAt)}</td>
              <td>{data.firma}</td>
              <td>
                {data.firstName} {data.lastName}
              </td>
              <td>{data.userSignature}</td>
              <td>{data.description}</td>
              <ActionTableButtons id={data.id} />
            </tr>
          ))}
        </>
      )}
    />
  );
}
