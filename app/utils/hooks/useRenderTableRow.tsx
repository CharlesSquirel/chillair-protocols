import ActionTableButtons from "@/components/ActionTableButtons/ActionTableButtons";
import { dummyData, dummyValves } from "@/data/dummyDatas";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AllProtocolsRecords } from "../types/payloads";
import { ValvesRecords } from "../types/valves";

type TableType = "" | "valves" | "/";

export const renderValvesRows = (value: ValvesRecords) => {
  return (
    <>
      {value.map((data, index) => (
        <tr key={index} className="hover:cursor-pointer hover:text-primary">
          <td>{data.createdAt}</td>
          <td>{data.firma}</td>
          <td>
            {data.firstName} {data.lastName}
          </td>
          <td>{data.userSignature}</td>
          <td>{data.description}</td>
          <ActionTableButtons />
        </tr>
      ))}
    </>
  );
};

export const renderAllRows = (values: AllProtocolsRecords) => {
  return (
    <>
      {values.map((data, index) => (
        <tr key={index} className="hover:cursor-pointer hover:text-primary">
          <td>{data.date}</td>
          <td>{data.genre}</td>
          <td>{data.author}</td>
          <td>{data.another}</td>
          <ActionTableButtons />
        </tr>
      ))}
    </>
  );
};

export default function useRenderTableRows() {
  const [tableType, setTableType] = useState<TableType>("");
  const pathname = usePathname();

  useEffect(() => {
    switch (pathname) {
      case "/dashboard":
        setTableType("/");
        break;
      case "/dashboard/valves":
        setTableType("valves");
        break;
    }
  }, [pathname]);

  const renderRows = () => {
    switch (tableType) {
      case "valves":
        return renderValvesRows(dummyValves);
        break;
      case "/":
        return renderAllRows(dummyData);
      default:
        return null;
    }
  };
  return renderRows;
}
