import ActionTableButtons from "@/components/Buttons/ActionTableButtons/ActionTableButtons";
import TableRow from "@/components/TableRow/TableRow";
import { TableNames } from "@/utils/types/tableNames";
import { Firma } from "@prisma/client";
import React from "react";

interface RenderFirmaRowsProps {
  firma: Firma[] | undefined;
  tableName: TableNames;
}

const RenderFirmaRows: React.FC<RenderFirmaRowsProps> = ({
  firma,
  tableName,
}) => {
  return (
    <>
      {firma?.map((firma, index) => (
        <TableRow key={index} tableName={tableName} id={firma.id}>
          <td>{firma.fullName}</td>
          <td>
            {firma.street}, {firma.houseNumber}
            {firma.localNumber ? `/${firma.localNumber}` : null}
          </td>
          <td>
            {firma.postCode} {firma.city}
          </td>
          <td>{firma.tel}</td>
          <td>{firma.contactEmail}</td>
          <ActionTableButtons id={firma.id} tableName={TableNames.FIRMA} />
        </TableRow>
      ))}
    </>
  );
};

export default RenderFirmaRows;
