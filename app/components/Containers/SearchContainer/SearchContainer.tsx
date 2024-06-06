"use client";
import { useSearchContext } from "@/components/Providers/SearchContext";
import { filterData } from "@/utils/helpers/filterData";
import RenderAllRows from "@/utils/renderTableRows/RenderAll";
import RenderChillerRows from "@/utils/renderTableRows/RenderChillerRows";
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

  console.log(data);

  const dataToRender = searchPhrase ? filterData(data, searchPhrase) : data;

  const findRenderRows = () => {
    switch (tableName) {
      case TableNames.VALVES:
        return <RenderValveRows valves={dataToRender} tableName={tableName} />;
      case TableNames.CHILLERS:
        return (
          <RenderChillerRows chillers={dataToRender} tableName={tableName} />
        );
      case TableNames.ALL:
        return <RenderAllRows all={dataToRender} tableName={tableName} />;
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
