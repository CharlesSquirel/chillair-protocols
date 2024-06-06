import ActionTableButtons from "@/components/Buttons/ActionTableButtons/ActionTableButtons";
import TableRow from "@/components/TableRow/TableRow";
import { TableNames } from "@/utils/types/tableNames";
import React from "react";

interface RenderChillerRowsProps {
  chillers: any;
  tableName: TableNames;
}

const RenderChillerRows: React.FC<RenderChillerRowsProps> = ({
  chillers,
  tableName,
}) => {
  return (
    <>
      {chillers?.map((data: any, index: number) => (
        <TableRow tableName={tableName} key={index} id={data.id}>
          <td>{data.createdAt}</td>
          <td>{data.firma}</td>
          <td>
            {data.firstName} {data.lastName}
          </td>
          <td>{data.userSignature}</td>
          <td>{data.description}</td>
          <ActionTableButtons id={data.id} tableName={TableNames.CHILLERS} />
        </TableRow>
      ))}
    </>
  );
};

export default RenderChillerRows;
