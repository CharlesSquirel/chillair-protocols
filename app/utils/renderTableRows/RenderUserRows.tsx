import ActionTableButtons from "@/components/Buttons/ActionTableButtons/ActionTableButtons";
import TableRow from "@/components/TableRow/TableRow";
import { TableNames } from "@/utils/types/tableNames";
import { User } from "@prisma/client";
import React from "react";

interface RenderUserRowsProps {
  users: User[] | undefined;
  tableName: TableNames;
}

const RenderUserRows: React.FC<RenderUserRowsProps> = ({
  users,
  tableName,
}) => {
  return (
    <>
      {users?.map((user, index) => (
        <TableRow key={index} tableName={tableName} id={user.id}>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.email}</td>
          <td>{user.userSignature}</td>
          <ActionTableButtons id={user.id} tableName={TableNames.USERS} />
        </TableRow>
      ))}
    </>
  );
};

export default RenderUserRows;
