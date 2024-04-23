import Filter from "@/assets/icons/FilterIcon";
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
    <main className="relative mt-5 flex flex-col gap-3 overflow-x-auto overflow-y-auto px-8 pb-8 lg:pl-[250px] lg:pr-14">
      <div
        className={`sticky right-0 top-0 flex items-center gap-3 ${tableName !== "all" ? "justify-between" : "justify-end"}`}
      >
        {tableName !== "all" && <AddButton tableName={tableName} />}
        <Searchbar />
      </div>
      <table className="table relative rounded-md bg-white text-secondary shadow-lg">
        <thead className='after:content-"" sticky top-0 z-20 bg-white text-lg font-medium after:absolute after:bottom-0 after:left-0 after:block after:h-[1px] after:w-full after:bg-secondary'>
          <tr className="h-[65px] bg-white">
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
            <th className="absolute right-3 top-3 z-10 flex cursor-pointer gap-3 p-0 text-secondary min-[1390px]:right-8">
              {tableName !== "all" && (
                <Link
                  href={`/dashboard/${tableName}/add`}
                  className="btn hidden h-[40px] min-h-0 w-[40px] rounded-md bg-primary text-2xl text-white hover:border hover:border-primary hover:bg-white hover:text-primary min-[2000px]:inline-flex"
                >
                  +
                </Link>
              )}
              <button className="min-h-[40px] border-none bg-transparent hover:opacity-70">
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
