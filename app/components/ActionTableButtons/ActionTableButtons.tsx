import Download from '@/icons/Download';
import Edit from '@/icons/Edit';

export default function ActionTableButtons() {
  return (
    <td className="flex gap-2 bg-white -z-10">
      <Download />
      <Edit />
    </td>
  );
}
