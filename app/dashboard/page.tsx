import { dummyData } from "@/data/dummyDatas";
import TableContainer from "@/components/TableContainer/TableContainer";
import ActionTableButtons from "@/components/ActionTableButtons/ActionTableButtons";

const headersAll = ["Data", "Rodzaj", "Autor", "Uwagi"];

export default function Dashboard() {
  return (
    <TableContainer
      headers={headersAll}
      renderRows={() => (
        <>
          {dummyData.map((data, index) => (
            <tr key={index} className="hover:cursor-pointer hover:text-primary">
              <td>{data.date}</td>
              <td>{data.genre}</td>
              <td>{data.author}</td>
              <td>{data.another}</td>
              <ActionTableButtons />
            </tr>
          ))}
        </>
      )}
    />
  );
}
