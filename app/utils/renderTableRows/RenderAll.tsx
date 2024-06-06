import ActionTableButtons from "@/components/Buttons/ActionTableButtons/ActionTableButtons";
import TableRow from "@/components/TableRow/TableRow";
import { TableNames } from "@/utils/types/tableNames";
import React from "react";

interface RenderAllProps {
  all: any;
  tableName: TableNames;
}

const RenderAllRows: React.FC<RenderAllProps> = ({ all, tableName }) => {
  return (
    <>
      {all?.map((data: any, index: number) => (
        <TableRow tableName={tableName} key={index} id={data.id}>
          <td>{data.createdAt}</td>
          <td>{data.firma}</td>
          <td>{data.genre}</td>
          <td>
            {data.firstName} {data.lastName}
          </td>
          <td>{data.userSignature}</td>

          <ActionTableButtons id={data.id} tableName={TableNames.CHILLERS} />
        </TableRow>
      ))}
    </>
  );
};

export default RenderAllRows;
