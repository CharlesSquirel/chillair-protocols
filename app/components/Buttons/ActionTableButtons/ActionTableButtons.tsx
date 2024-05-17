import ArrowRightIcon from "@/assets/icons/ArrowRightIcon";
import { TableNames } from "@/utils/types/tableNames";
import DeleteFirmaButton from "../DeleteFirmaButton/DeleteFirmaButton";

interface ActionButtonProps {
  id: string;
  tableName: TableNames;
}

export default function ActionTableButtons({
  id,
  tableName,
}: ActionButtonProps) {
  return (
    <td className="z-10 gap-2 bg-transparent p-0 min-[915px]:absolute min-[915px]:right-3 min-[915px]:top-3 min-[1390px]:right-8 flex">
      {tableName === TableNames.FIRMA && <DeleteFirmaButton id={id} />}
      <ArrowRightIcon className="size-7 hover:text-primary" />
    </td>
  );
}
