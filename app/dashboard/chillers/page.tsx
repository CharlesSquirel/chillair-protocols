import SearchContainer from "@/components/Containers/SearchContainer/SearchContainer";
import SearchContextProvider from "@/components/Providers/SearchContext";
import { chillerHeaders } from "@/data/tableHeaders";
import { getAllChillers } from "@/utils/services/chiller.services";
import { TableNames } from "@/utils/types/tableNames";

export default async function Chillers() {
  const chillers = await getAllChillers();

  return (
    <SearchContextProvider>
      <SearchContainer
        tableName={TableNames.CHILLERS}
        headers={chillerHeaders}
        data={chillers}
      />
    </SearchContextProvider>
  );
}
