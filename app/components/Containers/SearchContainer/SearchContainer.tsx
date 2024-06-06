"use client";
import { useSearchContext } from "@/components/Providers/SearchContext";
import { filterData } from "@/utils/helpers/filterData";
import RenderValveRows from "@/utils/renderTableRows/RenderValveRows";
import { TableNames } from "@/utils/types/tableNames";
import TableContainer from "../TableContainer/TableContainer";

interface SearchContainerProps {
  data: any;
  tableName: TableNames;
  headers: string[];
}

export default function SearchContainer({
  data,
  tableName,
  headers,
}: SearchContainerProps) {
  const { searchPhrase } = useSearchContext();

  const dataToRender = searchPhrase ? filterData(data, searchPhrase) : data;

  const findRenderRows = () => {
    switch (tableName) {
      case TableNames.VALVES:
        return <RenderValveRows valves={dataToRender} tableName={tableName} />;
      default:
        throw Error("Nie obsłużyłeś mordo findRenderRows w SearchContainer");
    }
  };
  return (
    <TableContainer
      tableName={tableName}
      headers={headers}
      renderRows={() => findRenderRows()}
    />
  );
}
