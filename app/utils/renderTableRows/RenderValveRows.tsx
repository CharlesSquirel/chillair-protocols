import ActionTableButtons from "@/components/Buttons/ActionTableButtons/ActionTableButtons";
import TableRow from "@/components/TableRow/TableRow";
import { TableNames } from "@/utils/types/tableNames";
import React from "react";

interface RenderValveRowsProps {
  valves: any;
  tableName: TableNames;
}

const RenderValveRows: React.FC<RenderValveRowsProps> = ({
  valves,
  tableName,
}) => {
  return (
    <>
      {valves?.map((data: any, index: number) => (
        <TableRow key={index} tableName={tableName} id={data.id}>
          <td>{data.createdAt}</td>
          <td>{data.firma}</td>
          <td>
            {data.firstName} {data.lastName}
          </td>
          <td>{data.userSignature}</td>
          <td>{data.description}</td>
          <ActionTableButtons id={data.id} tableName={TableNames.VALVES} />
        </TableRow>
      ))}
    </>
  );
};

export default RenderValveRows;
