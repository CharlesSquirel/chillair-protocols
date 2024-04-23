"use client";

import DeleteIcon from "@/assets/icons/DeleteIcon";
import { useGetDeleteHandler } from "@/utils/hooks/useGetDeleteHandler";
import { useRouter } from "next/navigation";

interface ProtocolDeleteButtonProps {
  id: string;
}

export default function ProtocolDeleteButton({
  id,
}: ProtocolDeleteButtonProps) {
  const router = useRouter();
  const onDelete = useGetDeleteHandler();

  const handleOnDelete = () => {
    onDelete(id);
    router.back();
  };
  return (
    <button onClick={handleOnDelete}>
      <DeleteIcon className="h-8 w-8 cursor-pointer hover:stroke-primary" />
    </button>
  );
}
