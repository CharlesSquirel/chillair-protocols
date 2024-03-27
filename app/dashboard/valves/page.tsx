import ActionTableButtons from '@/components/ActionTableButtons/ActionTableButtons';
import TableContainer from '@/components/TableContainer/TableContainer';
import { dummyValves } from '@/data/dummyValves';

const valvesHeaders: string[] = ['Data', 'Obiekt', 'Autor', 'Numer seryjny', 'Uwagi'];

export default function Valves() {
  return (
    <TableContainer
      headers={valvesHeaders}
      renderRows={() =>
        dummyValves.map((data, index) => (
          <tr key={index} className="hover:text-primary hover:cursor-pointer">
            <td>{data.date}</td>
            <td>{data.firma}</td>
            <td>{data.author}</td>
            <td>{data.serialNumber}</td>
            <td>{data.another}</td>
            <ActionTableButtons />
          </tr>
        ))
      }
    />
  );
}
