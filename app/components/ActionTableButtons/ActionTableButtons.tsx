"use client";

import DeleteIcon from "@/assets/icons/DeleteIcon";
import DownloadIcon from "@/assets/icons/DownloadIcon";
import EditIcon from "@/assets/icons/EditIcon";
import { deleteValve } from "@/utils/actions/deleteValve";

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
    </td>
  );
}
