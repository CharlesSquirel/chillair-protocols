import Filter from "@/icons/Filter";
import Searchbar from "@/components/Searchbar/Searchbar";
import AddButton from "@/components/AddButton/AddButton";
import { TableNames } from "@/utils/types/tableNames";
import Link from "next/link";

interface TableContainerProps {
  headers: string[];
  renderRows: () => React.ReactNode;
  tableName: TableNames;
}

export default function TableContainer({
  headers,
  renderRows,
  tableName,
}: TableContainerProps) {
  return (
    <main className="relative mt-5 flex flex-col gap-3 overflow-x-auto overflow-y-auto pb-8 pl-[300px] pr-14">
      <div
        className={`sticky right-0 top-0 flex items-center gap-3 ${tableName !== "all" ? "justify-between" : "justify-end"}`}
      >
        {tableName !== "all" && <AddButton tableName={tableName} />}
        <Searchbar />
      </div>
      <table className="table relative rounded-md bg-white text-secondary shadow-lg">
        <thead className='after:content-"" sticky top-0 bg-white text-lg font-medium after:absolute after:bottom-0 after:left-0 after:block after:h-[1px] after:w-full after:bg-secondary '>
          <tr className="h-[65px] bg-white">
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
            <th className="absolute right-8 top-3 z-10 flex cursor-pointer gap-3 p-0 text-secondary">
              <Link
                href={`/dashboard/${tableName}/add`}
                className="btn h-[40px] min-h-0 w-[40px] rounded-md bg-primary text-2xl text-white hover:border hover:border-primary hover:bg-white hover:text-primary"
              >
                +
              </Link>
              <button className="border-none bg-transparent hover:opacity-70">
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
