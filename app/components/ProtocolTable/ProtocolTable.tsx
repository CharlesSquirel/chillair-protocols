import { ValvesInfoBlock } from "@prisma/client";
import React from "react";

interface ProtocolTableProps {
  headers: string[];
  infoBlock: ValvesInfoBlock[];
  title: string;
}

export default function ProtocolTable({
  headers,
  infoBlock,
  title,
}: ProtocolTableProps) {
  return (
    <div className="flex w-full flex-col gap-3">
      <h3 className="text-[20px] font-semibold">{title}</h3>
      <table className="table w-full rounded-md border border-grayStroke bg-grayTable p-[13px] text-[16px] text-grayPrint">
        <thead className="text-[16px]">
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {infoBlock.map((block, index) => (
            <React.Fragment key={index}>
              <tr>
                <td className="font-medium">{index + 1 + "."}</td>
                <td>{block.valveLocation}</td>
                <td>{block.valveType}</td>
                <td>{block.valveSerialNumber}</td>
                <td>{block.pressureSetting}</td>
                <td>{block.pressureOpen}</td>
                <td>{block.pressureClose}</td>
              </tr>
              <tr
                className={
                  index < infoBlock.length - 1
                    ? `border-b-[1px] border-b-black`
                    : ""
                }
              >
                <td>{`Uwagi: ${block.description} `}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
