import SearchContainer from "@/components/Containers/SearchContainer/SearchContainer";
import SearchContextProvider from "@/components/Providers/SearchContext";
import { valvesHeaders } from "@/data/tableHeaders";
import { getAllValves } from "@/utils/services/valve.services";
import { TableNames } from "@/utils/types/tableNames";

export default async function Valves() {
  const valves = await getAllValves();

  return (
    <SearchContextProvider>
      <SearchContainer
        tableName={TableNames.VALVES}
        headers={valvesHeaders}
        data={valves}
      />
    </SearchContextProvider>
  );
}
