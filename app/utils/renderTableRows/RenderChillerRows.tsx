import ActionTableButtons from "@/components/Buttons/ActionTableButtons/ActionTableButtons";
import TableRow from "@/components/TableRow/TableRow";
import { formatDateToString } from "@/utils/helpers/formatDateToString";
import { TableNames } from "@/utils/types/tableNames";
import { Chiller } from "@prisma/client";
import React from "react";

interface RenderChillerRowsProps {
  chillers: Chiller[] | undefined;
  tableName: TableNames;
}

const RenderChillerRows: React.FC<RenderChillerRowsProps> = ({
  chillers,
  tableName,
}) => {
  return (
    <>
      {chillers?.map((data, index) => (
        <TableRow tableName={tableName} key={index} id={data.id}>
          <td>{formatDateToString(data.createdAt)}</td>
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
