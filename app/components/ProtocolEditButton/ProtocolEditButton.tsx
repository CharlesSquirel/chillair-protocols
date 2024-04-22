"use client";

import EditIcon from "@/assets/icons/EditIcon";
import { useGetEditLink } from "@/utils/hooks/useGetEditLink";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ProtocolEditButtonProps {
  id: string;
}

export default function ProtocolEditButton({ id }: ProtocolEditButtonProps) {
  const pathname = usePathname();
  const path = useGetEditLink();
  return (
    <Link href={path + id}>
      <EditIcon />
    </Link>
  );
}
