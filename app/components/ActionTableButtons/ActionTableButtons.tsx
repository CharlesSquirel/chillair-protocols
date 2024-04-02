import Download from "@/icons/Download";
import Edit from "@/icons/Edit";

export default function ActionTableButtons() {
  return (
    <td className="-z-10 flex gap-2 bg-white">
      <Download />
      <Edit />
    </td>
  );
}
