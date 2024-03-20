import { dummyData } from "./content/dummyData";
import Download from "./icons/Download";
import Edit from "./icons/Edit";
import Filter from "./icons/Filter";

export default function ProtocolsList() {
  return (
    <main className='overflow-x-auto pl-[300px] pr-14 mt-5 overflow-y-auto relative'>
      <table className='table bg-white shadow-lg rounded-md text-secondary relative'>
        <thead className='font-medium text-lg sticky top-0 bg-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-secondary after:block after:content-""'>
          <th>Sygnatura</th>
          <th>Data</th>
          <th>Rodzaj</th>
          <th>Autor</th>
          <th>Inne</th>
          <th className='absolute right-2 top-0 z-10 text-secondary cursor-pointer'>
            <button className='border-none bg-transparent hover:opacity-70'>
              <Filter />
            </button>
          </th>
        </thead>
        <tbody className='text-lg'>
          {dummyData.map((data, index) => (
            <tr key={index} className='hover:text-primary hover:cursor-pointer'>
              <td>{data.signature}</td>
              <td>{data.date}</td>
              <td>{data.genre}</td>
              <td>{data.author}</td>
              <td>{data.another}</td>
              <td className='flex gap-2'>
                <Download />
                <Edit />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
