import { TableNames } from "@/utils/types/tableNames";
import Link from "next/link";

interface AddButtonProps {
  tableName: TableNames;
}

export default function AddButton({ tableName }: AddButtonProps) {
  return (
    <Link
      href={`/dashboard/${tableName}/add`}
      className="btn btn-wide rounded-md bg-primary text-lg font-semibold text-white hover:border hover:border-primary hover:bg-white hover:text-primary"
    >
      DODAJ +
    </Link>
  );
}
