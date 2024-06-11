import SearchContainer from "@/components/Containers/SearchContainer/SearchContainer";
import SearchContextProvider from "@/components/Providers/SearchContext";
import { userHeaders } from "@/data/tableHeaders";
import getAllUsers from "@/utils/actions/getAllUsers";
import { TableNames } from "@/utils/types/tableNames";

export default async function Users() {
  const users = await getAllUsers();
  return (
    <SearchContextProvider>
      <SearchContainer
        tableName={TableNames.USERS}
        headers={userHeaders}
        data={users}
      />
    </SearchContextProvider>
  );
}
