import Filter from "@/icons/Filter";
import Searchbar from "@/components/Searchbar/Searchbar";
import AddButton from "@/components/AddButton/AddButton";

interface TableContainerProps {
  headers: string[];
  renderRows: () => React.ReactNode;
}

export default function TableContainer({ headers, renderRows }: TableContainerProps) {
  return (
    <main className='overflow-x-auto pl-[300px] pr-14 mt-5 overflow-y-auto relative flex flex-col pb-8 gap-3'>
      <div className='flex justify-between items-center gap-3 sticky top-0 right-0'>
        <AddButton />
        <Searchbar />
      </div>
      <table className='table bg-white shadow-lg rounded-md text-secondary relative'>
        <thead className='font-medium text-lg sticky top-0 bg-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-secondary after:block after:content-"" '>
          <tr className='bg-white h-[65px]'>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
            <th className='absolute right-8 top-3 z-10 text-secondary cursor-pointer flex p-0 gap-3'>
              <button className='btn bg-primary text-white hover:bg-white hover:text-primary hover:border hover:border-primary text-2xl rounded-md h-[40px] min-h-0 w-[40px]'>
                +
              </button>
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
