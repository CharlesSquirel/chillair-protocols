"use client";

import EditIcon from "@/assets/icons/EditIcon";
import { useGetEditLink } from "@/utils/hooks/useGetEditLink";
import Link from "next/link";

interface ProtocolEditButtonProps {
  id: string;
  isInProtocol?: boolean;
}

export default function ProtocolEditButton({
  id,
  isInProtocol = false,
}: ProtocolEditButtonProps) {
  const path = useGetEditLink();
  return (
    <Link
      href={path + id}
      className={`${isInProtocol ? "flex items-center gap-2 uppercase hover:text-primary" : ""}`}
    >
      <EditIcon className="h-8 w-8 cursor-pointer hover:stroke-primary" />
      {isInProtocol && "Edytuj"}
    </Link>
  );
}
