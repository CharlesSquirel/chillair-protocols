import Filter from '@/icons/Filter';
import AddButton from '../AddButton/AddButton';

interface TableContainerProps {
  renderRows: () => React.ReactNode;
  headers: string[];
}

export default function TableContainer({ renderRows, headers }: TableContainerProps) {
  return (
    <main className="overflow-x-auto pl-[300px] pr-14 mt-5 overflow-y-auto relative flex flex-col gap-5 pb-8">
      <AddButton />
      <table className="table bg-white shadow-lg rounded-md text-secondary relative">
        <thead className='font-medium text-lg sticky top-0 bg-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-secondary after:block after:content-"" '>
          <tr className="bg-white ">
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
            <th className="absolute right-6 top-2 z-10 text-secondary cursor-pointer flex p-0">
              <button className="border-none bg-transparent hover:opacity-70 ">
                <Filter />
              </button>
            </th>
          </tr>
        </thead>
        <tbody className="text-lg">{renderRows()}</tbody>
      </table>
    </main>
  );
}
