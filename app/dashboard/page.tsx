import SearchContainer from "@/components/Containers/SearchContainer/SearchContainer";
import SearchContextProvider from "@/components/Providers/SearchContext";
import { headersAll } from "@/data/tableHeaders";
import getAllProtocols from "@/utils/actions/getAllProtocols";
import { TableNames } from "@/utils/types/tableNames";

export default async function Dashboard() {
  const protocols = await getAllProtocols();
  return (
    <SearchContextProvider>
      <SearchContainer
        tableName={TableNames.ALL}
        headers={headersAll}
        data={protocols}
      />
    </SearchContextProvider>
  );
}
