import { ValvesInfoBlock } from "@prisma/client";
import React from "react";

interface ProtocolTableProps {
  headers: string[];
  renderRows: () => React.ReactNode;
  title: string;
  small?: boolean;
}

export default function ProtocolTable({
  headers,
  renderRows,
  title,
  small,
}: ProtocolTableProps) {
  return (
    <div className="flex min-h-[300px] w-full flex-col gap-3 overflow-scroll min-[1125px]:overflow-hidden print:overflow-hidden">
      <h3 className="text-[20px] font-semibold">{title}</h3>
      <table
        className={`table ${small && "table-sm"} rounded-md border border-grayStroke bg-grayTable p-[13px] text-[16px] text-grayPrint`}
      >
        <thead className={`text-[16px] ${small && "text-[13px]"}`}>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
}
