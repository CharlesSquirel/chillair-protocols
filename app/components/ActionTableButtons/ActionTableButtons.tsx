"use client";

import ArrowRightIcon from "@/assets/icons/ArrowRightIcon";
import DeleteIcon from "@/assets/icons/DeleteIcon";
import DownloadIcon from "@/assets/icons/DownloadIcon";
import EditIcon from "@/assets/icons/EditIcon";
import { deleteValve } from "@/utils/actions/deleteValve";
import Link from "next/link";

interface ActionButtonProps {
  id: string;
}

export default function ActionTableButtons({ id }: ActionButtonProps) {
  return (
    <td className="-z-10 flex gap-2 bg-white">
      <DownloadIcon />
      <EditIcon />
      <button onClick={() => deleteValve(id)}>
        <DeleteIcon />
      </button>
      <Link href={`/dashboard/valves/${id}`}>
        <ArrowRightIcon />
      </Link>
    </td>
  );
}
