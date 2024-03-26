import { dummyData } from "@/data/dummyData";
import TableContainer from "@/components/TableContainer/TableContainer";
import ActionTableButtons from "@/components/ActionTableButtons/ActionTableButtons";

const headersAll = ["Data", "Rodzaj", "Autor", "Uwagi"];

export default function Dashboard() {
  return (
    <TableContainer
      headers={headersAll}
      renderRows={() =>
        dummyData.map((data, index) => (
          <tr key={index} className='hover:text-primary hover:cursor-pointer'>
            <td>{data.signature}</td>
            <td>{data.date}</td>
            <td>{data.genre}</td>
            <td>{data.author}</td>
            <td>{data.another}</td>
            <ActionTableButtons />
          </tr>
        ))
      }
    />
  );
}
