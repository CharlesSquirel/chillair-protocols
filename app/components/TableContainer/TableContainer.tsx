import Filter from "../../assets/icons/Filter";

interface TableContainerProps {
  renderRows: () => React.ReactNode;
  headers: string[];
}

export default function TableContainer({ renderRows, headers }: TableContainerProps) {
  return (
    <main className='overflow-x-auto pl-[300px] pr-14 mt-5 overflow-y-auto relative'>
      <table className='table bg-white shadow-lg rounded-md text-secondary relative'>
        <thead className='font-medium text-lg sticky top-0 bg-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-secondary after:block after:content-""'>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
            <th className='absolute right-2 top-0 z-10 text-secondary cursor-pointer'>
              <button className='border-none bg-transparent hover:opacity-70'>
                <Filter />
              </button>
            </th>
          </tr>
        </thead>
        <tbody className='text-lg'>{renderRows()}</tbody>
      </table>
    </main>
  );
}
