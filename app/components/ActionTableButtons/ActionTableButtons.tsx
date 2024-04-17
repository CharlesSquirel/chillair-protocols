import DeleteIcon from "@/assets/icons/DeleteIcon";
import DownloadIcon from "@/assets/icons/DownloadIcon";
import EditIcon from "@/assets/icons/EditIcon";

export default function ActionTableButtons() {
  return (
    <td className="-z-10 flex gap-2 bg-white">
      <DownloadIcon />
      <EditIcon />
      <DeleteIcon />
    </td>
  );
}
