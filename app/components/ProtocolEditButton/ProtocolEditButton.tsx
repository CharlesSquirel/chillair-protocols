"use client";

import EditIcon from "@/assets/icons/EditIcon";
import { useGetEditLink } from "@/utils/hooks/useGetEditLink";
import Link from "next/link";

interface ProtocolEditButtonProps {
  id: string;
}

export default function ProtocolEditButton({ id }: ProtocolEditButtonProps) {
  const path = useGetEditLink();
  return (
    <Link href={path + id}>
      <EditIcon className="h-8 w-8 cursor-pointer hover:stroke-primary" />
    </Link>
  );
}
