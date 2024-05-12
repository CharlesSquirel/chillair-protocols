import Filter from "@/assets/icons/FilterIcon";
import AddButton from "@/components/AddButton/AddButton";
import Searchbar from "@/components/Searchbar/Searchbar";
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
    <main className="relative mt-2 flex flex-col gap-3 overflow-x-auto overflow-y-auto px-2 pb-8 md:mt-5 md:px-8 lg:pl-[225px] lg:pr-[25px]">
      <div
        className={`sticky right-0 top-0 flex items-start gap-2 md:flex-row md:items-center md:gap-3 ${tableName !== TableNames.ALL && tableName !== TableNames.USERS ? "justify-between" : "justify-end"} flex-col`}
      >
        {tableName !== TableNames.ALL && tableName !== TableNames.USERS && (
          <AddButton tableName={tableName} />
        )}
        <Searchbar />
      </div>
      <table className="table relative w-full rounded-md bg-white text-secondary shadow-lg">
        <thead className='after:content-"" sticky top-0 z-20 bg-white text-xl font-medium after:absolute after:bottom-0 after:left-0 after:block after:h-[1px] after:w-full after:bg-secondary'>
          <tr className="h-[65px] bg-white">
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
            <th className="flex h-[65px] cursor-pointer gap-3 p-0 py-[12px] pr-2 text-secondary md:h-auto md:pr-0 min-[915px]:absolute min-[915px]:right-3 min-[915px]:top-3 min-[915px]:z-10 min-[915px]:py-0 min-[1390px]:right-8">
              {tableName !== "all" && (
                <Link
                  href={`/dashboard/${tableName}/add`}
                  className="btn hidden h-[40px] min-h-0 w-[40px] rounded-md bg-primary text-2xl text-white hover:border hover:border-primary hover:bg-white hover:text-primary min-[2000px]:inline-flex"
                >
                  +
                </Link>
              )}
              <button className="min-h-[40px] border-none bg-transparent hover:opacity-70 ">
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
