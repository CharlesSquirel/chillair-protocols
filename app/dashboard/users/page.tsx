import TableContainer from "@/components/Containers/TableContainer/TableContainer";
import { userHeaders } from "@/data/tableHeaders";
import getAllUsers from "@/utils/actions/getAllUsers";
import RenderUserRows from "@/utils/renderTableRows/RenderUserRows";
import { TableNames } from "@/utils/types/tableNames";

export default async function Users() {
  const users = await getAllUsers();
  return (
    <TableContainer
      tableName={TableNames.USERS}
      headers={userHeaders}
      renderRows={() => (
        <RenderUserRows users={users} tableName={TableNames.USERS} />
      )}
    />
  );
}
