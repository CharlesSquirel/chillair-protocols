import ActionTableButtons from "@/components/ActionTableButtons/ActionTableButtons";
import TableContainer from "@/components/TableContainer/TableContainer";
import { userHeaders } from "@/data/tableHeaders";
import getAllUsers from "@/utils/actions/getAllUsers";
import { TableNames } from "@/utils/types/tableNames";

export default async function Users() {
  const users = await getAllUsers();
  return (
    <TableContainer
      tableName={TableNames.USERS}
      headers={userHeaders}
      renderRows={() => (
        <>
          {users?.map((user, index) => (
            <tr
              key={index}
              className="relative hover:cursor-pointer hover:text-primary"
            >
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.userSignature}</td>
              <ActionTableButtons id={user.id} tableName={TableNames.USERS} />
            </tr>
          ))}
        </>
      )}
    />
  );
}
