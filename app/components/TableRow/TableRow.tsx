"use client";

import { findActionUrl } from "@/utils/switch/findActionUrl";
import { TableNames } from "@/utils/types/tableNames";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface TableRowProps {
  children: ReactNode;
  tableName: TableNames;
  id: string;
}

export default function TableRow({ children, id, tableName }: TableRowProps) {
  const router = useRouter();
  const actionUrl = findActionUrl(tableName, id);
  const handleOnClick = () => {
    router.push(actionUrl);
  };
  return (
    <tr
      className="relative hover:cursor-pointer hover:bg-gray"
      onClick={handleOnClick}
    >
      {children}
    </tr>
  );
}
